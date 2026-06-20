"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const locale = useLocale();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: `/${locale}/languages`, label: t("languages") },
        { href: `/${locale}/research`, label: t("research") },
        { href: `/${locale}/team`, label: "Team" },
        { href: `/${locale}/community`, label: t("community") },
        { href: `/${locale}/roadmap`, label: t("roadmap") },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#F8F5F0]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <Link href={`/${locale}`} className="flex items-center gap-3">
                    <Image
                        src="/logowhite.png"
                        alt="KivuLingua Logo"
                        width={42}
                        height={42}
                        className="object-contain"
                    />

                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-[#3B7D91]">
                            KivuLingua AI
                        </h1>

                        <p className="text-xs text-black/50">
                            AI in our languages
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-[#3B7D91]"
                        >
                            {link.label}
                        </Link>
                    ))}
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 rounded-lg hover:bg-[#3B7D91]/10 text-sm font-medium transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
