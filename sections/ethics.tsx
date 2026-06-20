"use client";

import { useTranslations } from "next-intl";
import { Shield, Users2, Lock, Heart, Globe2, AlertCircle } from "lucide-react";

const principles = [
    {
        icon: Shield,
        title: "Sovereignty Before Openness",
        description: "Mashi community council (Matabaro, Nshombo, Prof. Nkunzimwami) validates all data access terms before publication. Communities retain control.",
        color: "#3B7D91"
    },
    {
        icon: Users2,
        title: "Infrastructure Before Annotation",
        description: "Build sustainable systems where data generation is continuous and community-centered, not episodic campaigns extracting data from participants.",
        color: "#D4A574"
    },
    {
        icon: Lock,
        title: "Informed Consent",
        description: "Bilingual consent forms (Mashi/French), explicit right of withdrawal, anonymization of personal data. Every participant owns their contribution.",
        color: "#5A9FB0"
    },
    {
        icon: Heart,
        title: "Gender & Diversity Balance",
        description: "Minimum 50% women contributors across collection, spanning ages 15-65 and 4+ geographic zones. Amplifying marginalized voices.",
        color: "#3B7D91"
    },
    {
        icon: Globe2,
        title: "Continuity Before Exhaustivity",
        description: "Prioritize robust ongoing data flow over attempting complete linguistic coverage in isolation. Sustainability over perfection.",
        color: "#D4A574"
    },
    {
        icon: AlertCircle,
        title: "Conflict-Sensitive Approach",
        description: "Security of participants prioritized. Data never used for surveillance or identification. No collection in active conflict zones.",
        color: "#5A9FB0"
    }
];

export default function Ethics() {
    const t = useTranslations("Ethics");

    return (
        <section id="ethics" className="py-28 bg-gradient-to-b from-white to-[#F8F5F0]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-16 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Governance & Values
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon;
                        return (
                            <div
                                key={principle.title}
                                className="rounded-2xl border border-black/5 bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                            >
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                                    style={{ backgroundColor: `${principle.color}15`, color: principle.color }}
                                >
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-lg font-bold mb-3">
                                    {principle.title}
                                </h3>

                                <p className="text-black/70 leading-6 text-sm">
                                    {principle.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 rounded-2xl border-2 border-[#3B7D91]/20 bg-[#3B7D91]/5 p-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B7D91] text-white flex-shrink-0">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Masakhane Values & Ubuntu Philosophy</h3>
                            <p className="text-black/70 leading-7">
                                KivuLingua AI is aligned with Masakhane's principles of Ubuntu, Equity, Transparency, and Community Innovation. All outputs (corpus, models, tools) are published under open licenses (Apache 2.0, CC-BY 4.0) and contributed to the African AI ecosystem as digital public goods. Language is a shared heritage—we build infrastructure to serve the entire community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
