"use client";

import { useTranslations } from "next-intl";
import { Users, MessageSquare, Heart, Globe } from "lucide-react";

export default function Community() {
    const t = useTranslations("Community");

    const initiatives = [
        {
            title: "Community Validation",
            description: "Native speakers validate and refine language datasets ensuring linguistic accuracy and cultural appropriateness.",
            icon: Users,
            color: "text-[#3B7D91]",
            bgColor: "bg-[#3B7D91]/10",
        },
        {
            title: "Knowledge Sharing",
            description: "Regular workshops and training sessions to share linguistic preservation techniques and AI literacy.",
            icon: MessageSquare,
            color: "text-[#D4A574]",
            bgColor: "bg-[#D4A574]/10",
        },
        {
            title: "Cultural Preservation",
            description: "Documenting not just words, but the cultural context, traditions, and heritage embedded in each language.",
            icon: Heart,
            color: "text-[#5A9FB0]",
            bgColor: "bg-[#5A9FB0]/10",
        },
        {
            title: "Global Network",
            description: "Connecting language communities, researchers, and technologists across Africa and the diaspora.",
            icon: Globe,
            color: "text-[#8B6B47]",
            bgColor: "bg-[#8B6B47]/10",
        },
    ];

    return (
        <section id="community" className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91] animate-fade-in-down">
                        Community Impact
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {t("description")}
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {initiatives.map((initiative, index) => {
                        const IconComponent = initiative.icon;
                        return (
                            <div
                                key={initiative.title}
                                className="rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${initiative.bgColor} ${initiative.color} group-hover:animate-float`}>
                                    <IconComponent size={28} />
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-black">
                                    {initiative.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-black/70">
                                    {initiative.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 rounded-2xl border border-black/5 bg-gradient-to-br from-[#3B7D91]/5 to-[#D4A574]/5 p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h3 className="text-2xl font-bold">Get Involved</h3>
                    <p className="mt-4 text-lg text-black/70">
                        Whether you're a linguist, developer, community member, or language enthusiast, there are many ways to contribute to preserving and advancing African languages through AI.
                    </p>
                    <button className="mt-6 rounded-full bg-[#3B7D91] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#2D6478] hover:scale-105">
                        {t("cta")}
                    </button>
                </div>
            </div>
        </section>
    );
}
