"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const locale = useLocale();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: `/${locale}/languages`, label: t("languages") },
        { href: `/${locale}/research`, label: t("research") },
        { href: `/${locale}/team`, label: "Team" },
        { href: `/${locale}/community`, label: t("community") },
        { href: `/${locale}/roadmap`, label: t("roadmap") },
    ];

    const isActive = (href: string) => {
        const cleanPathname = pathname.replace(`/${locale}`, "");
        const cleanHref = href.replace(`/${locale}`, "");
        return cleanPathname === cleanHref || cleanPathname.startsWith(cleanHref + "/");
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#F8F5F0]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <Link href={`/${locale}`} className="flex items-center gap-2">
                    <Image
                        src="/kivulinguaAI_logo.svg"
                        alt="KivuLingua Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative transition ${active ? "text-[#3B7D91]" : "text-black/70 hover:text-[#3B7D91]"}`}
                            >
                                {link.label}
                                {active && (
                                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B7D91] to-[#D4A574] rounded-full animate-pulse-subtle"></div>
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={24} className="text-black/70" />
                        ) : (
                            <Menu size={24} className="text-black/70" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-black/5 bg-white md:hidden animate-fade-in-down">
                    <div className="mx-auto max-w-7xl px-6 py-4 space-y-3">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${active ? "bg-[#3B7D91]/20 text-[#3B7D91]" : "hover:bg-[#3B7D91]/10"}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
