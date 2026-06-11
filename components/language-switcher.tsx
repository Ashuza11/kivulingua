"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { locales, localeNames } from "@/i18n";

const languages = locales.map((code) => ({
    code,
    label: localeNames[code as keyof typeof localeNames],
}));

export default function LanguageSwitcher() {
    const pathname = usePathname();

    const localePattern = locales.join("|");
    const pathnameWithoutLocale = pathname.replace(
        new RegExp(`^/(${localePattern})`),
        ""
    );

    const currentLocale =
        pathname.split("/")[1] || "en";

    return (
        <>
            {/* Desktop */}
            <div className="hidden items-center rounded-full border border-black/10 bg-white p-1 shadow-sm md:flex">
                {languages.map((lang) => {
                    const isActive =
                        currentLocale === lang.code;

                    return (
                        <Link
                            key={lang.code}
                            href={`/${lang.code}${pathnameWithoutLocale}`}
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${isActive
                                ? "bg-[#3B7D91] text-white"
                                : "text-black/60 hover:text-[#3B7D91]"
                                }`}
                        >
                            {lang.code.toUpperCase()}
                        </Link>
                    );
                })}
            </div>

            {/* Mobile Dropdown */}
            <div className="relative md:hidden">
                <select
                    value={currentLocale}
                    onChange={(e) => {
                        window.location.href = `/${e.target.value}${pathnameWithoutLocale}`;
                    }}
                    className="appearance-none rounded-full border border-black/10 bg-white px-4 py-2 pr-10 text-sm font-medium shadow-sm outline-none"
                >
                    {languages.map((lang) => (
                        <option
                            key={lang.code}
                            value={lang.code}
                        >
                            {lang.label}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black/50"
                />
            </div>
        </>
    );
}