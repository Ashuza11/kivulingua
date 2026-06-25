"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen, Heart, Zap, Users, Globe, Clock, Shield } from "lucide-react";

const sectionIcons = [
    BookOpen,
    Heart,
    Zap,
    Users,
    Globe,
    Clock,
    Shield,
    Globe
];

const sectionLinks = [
    "/research",
    "/research",
    "/research",
    "/team",
    "/languages",
    "/roadmap",
    "/community",
    "/research"
];

const sectionColors = [
    "#3B7D91",
    "#D4A574",
    "#5A9FB0",
    "#3B7D91",
    "#D4A574",
    "#5A9FB0",
    "#3B7D91",
    "#D4A574"
];

export default function Overview() {
    const locale = useLocale();
    const t = useTranslations("Overview");

    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#F8F5F0]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-16 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        {t("badge")}
                    </p>
                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        {t("title")}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {t.raw("sections").map((section: any, index: number) => {
                        const Icon = sectionIcons[index];
                        return (
                            <Link
                                key={section.title}
                                href={`/${locale}${sectionLinks[index]}`}
                                className="group rounded-xl border border-black/5 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${0.05 + index * 0.06}s` }}
                            >
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 transition-colors group-hover:text-white"
                                    style={{
                                        backgroundColor: `${sectionColors[index]}15`,
                                        color: sectionColors[index]
                                    }}
                                >
                                    <Icon size={24} />
                                </div>

                                <h3 className="font-bold text-black mb-2 group-hover:text-[#3B7D91] transition">
                                    {section.title}
                                </h3>

                                <p className="text-sm text-black/70 leading-5 mb-4">
                                    {section.description}
                                </p>

                                <div className="flex items-center text-sm font-semibold text-[#3B7D91] opacity-0 group-hover:opacity-100 transition">
                                    {t("learnMore")} <ArrowRight size={16} className="ml-2" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#3B7D91]/10 to-[#D4A574]/10 border border-black/5 p-8 md:p-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h3 className="text-2xl font-bold mb-3">{t("cta.title")}</h3>
                    <p className="text-black/70 mb-6 max-w-2xl mx-auto">
                        {t("cta.description")}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href={`/${locale}/community`}
                            className="px-6 py-3 bg-[#3B7D91] text-white rounded-full font-semibold hover:bg-[#2D6478] transition"
                        >
                            {t("cta.joinButton")}
                        </Link>
                        <a
                            href="mailto:ashuzamh@gmail.com"
                            className="px-6 py-3 border-2 border-[#3B7D91] text-[#3B7D91] rounded-full font-semibold hover:bg-[#3B7D91] hover:text-white transition"
                        >
                            {t("cta.contactButton")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
