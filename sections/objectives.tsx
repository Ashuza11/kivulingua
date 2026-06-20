"use client";

import { useTranslations } from "next-intl";
import { Target, Zap, Users, Database, Mic, BookOpen, Lock, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    Target: <Target size={24} />,
    Zap: <Zap size={24} />,
    Users: <Users size={24} />,
    Database: <Database size={24} />,
    Mic: <Mic size={24} />,
    BookOpen: <BookOpen size={24} />,
    Lock: <Lock size={24} />,
    Globe: <Globe size={24} />,
};

const icons = ["Target", "Mic", "Zap", "Users", "BookOpen", "Database", "Lock", "Globe"];

export default function Objectives() {
    const t = useTranslations("Objectives");

    const goals = t.raw("goals") as Array<{ title: string; description: string }>;

    return (
        <section id="objectives" className="py-28 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-16 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Our Goals
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {goals.map((goal, index) => (
                        <div
                            key={goal.title}
                            className="rounded-2xl border border-black/5 bg-gradient-to-br from-white to-[#F8F5F0] p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3B7D91]/10 text-[#3B7D91] flex-shrink-0">
                                    {iconMap[icons[index % icons.length]]}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-black">
                                        {goal.title}
                                    </h3>
                                    <p className="mt-2 text-black/70 leading-6">
                                        {goal.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
