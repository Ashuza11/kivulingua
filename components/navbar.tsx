"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const locale = useLocale();

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#F8F5F0]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <a
                    href={`/${locale}`}
                    className="flex items-center gap-3"
                >
                    <Image
                        src="/logo.svg"
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
                </a>

                <div className="hidden items-center gap-8 text-sm font-medium md:flex">

                    <a
                        href="#languages"
                        className="transition hover:text-[#3B7D91]"
                    >
                        {t("languages")}
                    </a>

                    <a
                        href="#research"
                        className="transition hover:text-[#3B7D91]"
                    >
                        {t("research")}
                    </a>

                    <a
                        href="#community"
                        className="transition hover:text-[#3B7D91]"
                    >
                        {t("community")}
                    </a>

                    <a
                        href="#roadmap"
                        className="transition hover:text-[#3B7D91]"
                    >
                        {t("roadmap")}
                    </a>
                </div>
                <LanguageSwitcher />
            </div>
        </nav>
    );
}