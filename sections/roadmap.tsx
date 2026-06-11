"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, Circle, Zap } from "lucide-react";

export default function Roadmap() {
    const t = useTranslations("Roadmap");

    const phases = [
        {
            quarter: "Q2 2024",
            status: "Completed",
            isCompleted: true,
            milestones: [
                "Mashi language dataset foundation established",
                "Community validation framework launched",
                "Initial ASR model training",
            ],
        },
        {
            quarter: "Q3 2024",
            status: "In Progress",
            isCompleted: false,
            milestones: [
                "Dataset expansion to 500+ hours of audio",
                "TTS model development for Mashi",
                "Regional community workshops",
            ],
        },
        {
            quarter: "Q4 2024",
            status: "Planned",
            isCompleted: false,
            milestones: [
                "Expand to 3 additional Bantu languages",
                "Open-source toolkit release",
                "First public benchmark results",
            ],
        },
        {
            quarter: "Q1 2025",
            status: "Planned",
            isCompleted: false,
            milestones: [
                "Scale to 8 languages across Eastern Congo",
                "Partnership announcements with institutions",
                "Educational resource development",
            ],
        },
    ];

    return (
        <section id="roadmap" className="py-28 bg-gradient-to-b from-white to-[#F8F5F0]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91] animate-fade-in-down">
                        Project Timeline
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {t("description")}
                    </p>
                </div>

                <div className="mt-16 space-y-8">
                    {phases.map((phase, index) => {
                        const StatusIcon = phase.isCompleted ? CheckCircle2 : Circle;
                        return (
                            <div
                                key={phase.quarter}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                            >
                                <div className="rounded-2xl border border-black/5 bg-white p-6 hover:shadow-lg transition duration-300">
                                    <div className="flex items-start gap-4">
                                        <StatusIcon
                                            size={24}
                                            className={
                                                phase.isCompleted
                                                    ? "text-green-600 mt-1"
                                                    : "text-[#3B7D91] mt-1"
                                            }
                                        />

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-2xl font-bold">
                                                    {phase.quarter}
                                                </h3>

                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                        phase.status === "Completed"
                                                            ? "bg-green-100 text-green-700"
                                                            : phase.status === "In Progress"
                                                                ? "bg-blue-100 text-blue-700 flex items-center gap-2"
                                                                : "bg-[#F8F5F0] text-black/70"
                                                    }`}
                                                >
                                                    {phase.status === "In Progress" && (
                                                        <Zap size={12} className="animate-pulse" />
                                                    )}
                                                    {phase.status}
                                                </span>
                                            </div>

                                            <ul className="mt-4 space-y-2">
                                                {phase.milestones.map((milestone) => (
                                                    <li
                                                        key={milestone}
                                                        className="flex items-start gap-3 text-black/70"
                                                    >
                                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#3B7D91]" />
                                                        {milestone}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
