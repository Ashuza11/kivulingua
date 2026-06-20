"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, Circle, Zap } from "lucide-react";

export default function Roadmap() {
    const t = useTranslations("Roadmap");

    const phases = [
        {
            quarter: "Phase 1: Foundation (Jul-Aug 2026)",
            status: "Governance Setup",
            isCompleted: false,
            milestones: [
                "Community council constituted with linguistic guardians",
                "Ethical protocols and consent frameworks approved",
                "Mobile app specifications finalized",
                "Field collection teams trained (20+ collectors)",
            ],
        },
        {
            quarter: "Phase 2: Collection & App (Aug-Dec 2026)",
            status: "Data Collection",
            isCompleted: false,
            milestones: [
                "150+ hours of Mashi audio collected across regions",
                "Android mobile app beta deployed to 30 health workers",
                "Initial linguistic documentation for kinande, kihunde, kifuliru",
                "Database infrastructure established with quality controls",
            ],
        },
        {
            quarter: "Phase 3: Processing & Training (Nov 2026-Apr 2027)",
            status: "Model Development",
            isCompleted: false,
            milestones: [
                "250 hours of corpus fully transcribed, validated and documented",
                "Comparative ASR training: Whisper vs wav2vec 2.0 vs MMS",
                "Edge optimization via quantization for Android deployment",
                "Initial TTS model development with community MOS evaluation",
            ],
        },
        {
            quarter: "Phase 4: Deployment & Publication (May-Jun 2027)",
            status: "Impact & Scale",
            isCompleted: false,
            milestones: [
                "TaRL pilot active in 5 rural Bushi schools (500+ students)",
                "ASR and TTS models published on Hugging Face (Apache 2.0)",
                "Complete pipeline and documentation released on GitHub",
                "Phase 2 plan finalized for 8-language expansion",
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
