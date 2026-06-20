"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, BookOpen, Heart, Zap, Users, Globe, Clock, Shield } from "lucide-react";

const sections = [
    {
        icon: BookOpen,
        title: "Education Impact",
        description: "Teaching at the Right Level (TaRL) literacy programs in mother-tongue Mashi for 500+ students across rural Bushi schools.",
        link: "/research",
        color: "#3B7D91"
    },
    {
        icon: Heart,
        title: "Community Health",
        description: "Voice-based mobile app for 30+ health workers delivering prevention messages and recording patient data offline in Mashi.",
        link: "/research",
        color: "#D4A574"
    },
    {
        icon: Zap,
        title: "AI Models",
        description: "Edge-optimized ASR and TTS models for Mashi (CPU-only, offline deployment on Android and low-cost devices).",
        link: "/research",
        color: "#5A9FB0"
    },
    {
        icon: Users,
        title: "Community Team",
        description: "Interdisciplinary team of AI engineers, linguists, and community leaders. Consortium with African STEM Resources Hub & Kwetu Best.",
        link: "/team",
        color: "#3B7D91"
    },
    {
        icon: Globe,
        title: "8 Bantu Languages",
        description: "Scalable approach: Pilot with Mashi, document kinande/kihunde/kifuliru in Phase 1, expand to 8 languages in Phase 2.",
        link: "/languages",
        color: "#D4A574"
    },
    {
        icon: Clock,
        title: "12-Month Timeline",
        description: "Structured implementation from July 2026 to June 2027: Foundation → Collection → Processing → Deployment & Publication.",
        link: "/roadmap",
        color: "#5A9FB0"
    },
    {
        icon: Shield,
        title: "Ethics First",
        description: "Community sovereignty before openness. Informed consent, gender balance, conflict-sensitive protocols, data governance.",
        link: "/community",
        color: "#3B7D91"
    },
    {
        icon: Globe,
        title: "Open Science",
        description: "All resources (corpus, models, tools) published under Apache 2.0 on Hugging Face, GitHub, and Zenodo as African digital public goods.",
        link: "/research",
        color: "#D4A574"
    },
];

export default function Overview() {
    const locale = useLocale();

    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#F8F5F0]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-16 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Project Overview
                    </p>
                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        Explore Our Work
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-black/70">
                        KivuLingua AI is building open infrastructure for Eastern Congo's Bantu languages. Click below to learn more about each area.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <Link
                                key={section.title}
                                href={`/${locale}${section.link}`}
                                className="group rounded-xl border border-black/5 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${0.05 + index * 0.06}s` }}
                            >
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 transition-colors group-hover:text-white"
                                    style={{
                                        backgroundColor: `${section.color}15`,
                                        color: section.color
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
                                    Learn more <ArrowRight size={16} className="ml-2" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#3B7D91]/10 to-[#D4A574]/10 border border-black/5 p-8 md:p-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h3 className="text-2xl font-bold mb-3">Ready to Get Involved?</h3>
                    <p className="text-black/70 mb-6 max-w-2xl mx-auto">
                        We welcome linguists, ML engineers, educators, health workers, and community advocates. Whether you want to contribute data, collaborate on research, or support our mission—join us.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href={`/${locale}/community`}
                            className="px-6 py-3 bg-[#3B7D91] text-white rounded-full font-semibold hover:bg-[#2D6478] transition"
                        >
                            Join Our Community
                        </Link>
                        <a
                            href="mailto:contact@stemrh.org"
                            className="px-6 py-3 border-2 border-[#3B7D91] text-[#3B7D91] rounded-full font-semibold hover:bg-[#3B7D91] hover:text-white transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
