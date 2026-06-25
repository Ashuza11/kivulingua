"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Roadmap() {
    const t = useTranslations("Roadmap");
    const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

    const phases = [
        {
            phase: "Phase 1",
            title: "Governance Setup",
            color: "#2B7A8B",
            icon: "🏗️",
            position: "top" as const,
            milestones: [
                "Community council constituted with linguistic guardians",
                "Ethical protocols and consent frameworks approved",
                "Mobile app specifications finalized",
                "Field collection teams trained",
            ],
        },
        {
            phase: "Phase 2",
            title: "Data Collection",
            color: "#CD955F",
            icon: "🎤",
            position: "bottom" as const,
            milestones: [
                "150+ hours of Mashi audio collected across regions",
                "Android mobile app beta deployed to 30 health workers",
                "Initial linguistic documentation for kinande, kihunde, kifuliru",
                "Database infrastructure established with quality controls",
            ],
        },
        {
            phase: "Phase 3",
            title: "Model Development",
            color: "#2B7A8B",
            icon: "🤖",
            position: "top" as const,
            milestones: [
                "250 hours of corpus fully transcribed and validated",
                "Comparative ASR training: Whisper vs wav2vec 2.0 vs MMS",
                "Edge optimization via quantization for Android",
                "Initial TTS model development with community evaluation",
            ],
        },
        {
            phase: "Phase 4",
            title: "Impact & Scale",
            color: "#2B7A8B",
            icon: "🚀",
            position: "bottom" as const,
            milestones: [
                "TaRL pilot active in 5 rural Bushi schools (500+ students)",
                "ASR and TTS models published on Hugging Face",
                "Complete pipeline and documentation released on GitHub",
                "Phase 2 plan finalized for 8-language expansion",
            ],
        },
    ];

    const stats = [
        { metric: "4", label: "Phases" },
        { metric: "16+", label: "Milestones" },
        { metric: "12 months", label: "Timeline" },
        { metric: "Full Scale", label: "Impact" },
    ];

    return (
        <section id="roadmap" className="py-20 bg-gradient-to-b from-white to-[#F9F8F6]">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="max-w-3xl mb-16 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2B7A8B]">
                        Project Journey
                    </p>
                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        Our Implementation Path
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
                        {t("description")}
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="bg-[#F0F2F2] rounded-3xl p-12 mb-12 shadow-sm">
                    {/* Phase Indicators Row */}
                    <div className="flex justify-between items-start mb-16 relative z-10">
                        {phases.map((phase, index) => (
                            <button
                                key={phase.phase}
                                onClick={() =>
                                    setExpandedPhase(expandedPhase === index ? null : index)
                                }
                                className="group flex flex-col items-center flex-1 focus:outline-none"
                            >
                                {/* Phase Icon Circle */}
                                <div
                                    className="w-16 h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 mb-4"
                                    style={{ backgroundColor: phase.color }}
                                >
                                    {phase.icon}
                                </div>

                                {/* Phase Label */}
                                <p className="text-xs font-semibold uppercase tracking-widest text-[#4A4A4A] mb-1">
                                    {phase.phase}
                                </p>
                                <p
                                    className="text-sm font-bold text-center"
                                    style={{ color: phase.color }}
                                >
                                    {phase.title}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Timeline Progress Bar */}
                    <div className="relative h-1 bg-white rounded-full overflow-hidden mb-6">
                        <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                                width: expandedPhase !== null ? `${((expandedPhase + 1) / phases.length) * 100}%` : "0%",
                                background: `linear-gradient(90deg, #2B7A8B 0%, #CD955F 50%, #2B7A8B 100%)`,
                            }}
                        />
                    </div>

                    {/* Flags: START and FINISH */}
                    <div className="flex justify-between items-start mt-8 px-2 relative z-10">
                        {/* START Flag */}
                        <div className="flex flex-col items-center">
                            <svg
                                className="w-8 h-8 mb-2"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="2" y="8" width="18" height="14" fill="#DC2626" />
                                <line x1="20" y1="0" x2="20" y2="32" stroke="#4A4A4A" strokeWidth="2" />
                            </svg>
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A4A4A]">
                                Start
                            </p>
                        </div>

                        {/* FINISH Flag */}
                        <div className="flex flex-col items-center">
                            <svg
                                className="w-8 h-8 mb-2"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <pattern id="checker" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="2" height="2" fill="white" />
                                        <rect x="2" y="2" width="2" height="2" fill="white" />
                                        <rect x="2" y="0" width="2" height="2" fill="black" />
                                        <rect x="0" y="2" width="2" height="2" fill="black" />
                                    </pattern>
                                </defs>
                                <rect x="2" y="8" width="18" height="14" fill="url(#checker)" />
                                <line x1="20" y1="0" x2="20" y2="32" stroke="#4A4A4A" strokeWidth="2" />
                            </svg>
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A4A4A]">
                                Finish
                            </p>
                        </div>
                    </div>
                </div>

                {/* Details Card */}
                {expandedPhase !== null && (
                    <div
                        className={`mx-auto w-full max-w-2xl mb-12 animate-fade-in-up relative z-20`}
                    >
                        <div
                            className="rounded-xl border-2 p-8 bg-white shadow-sm"
                            style={{
                                borderColor: phases[expandedPhase].color,
                            }}
                        >
                            {/* Caret pointing up */}
                            <div
                                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white"
                                style={{
                                    borderTop: `2px solid ${phases[expandedPhase].color}`,
                                    borderRight: `2px solid ${phases[expandedPhase].color}`,
                                    transform: "translateX(-50%) rotate(45deg)",
                                }}
                            />

                            <div className="flex justify-between items-start mb-4">
                                <h3
                                    className="font-bold text-lg"
                                    style={{ color: phases[expandedPhase].color }}
                                >
                                    {phases[expandedPhase].title}
                                </h3>
                                <button
                                    onClick={() => setExpandedPhase(null)}
                                    className="text-2xl leading-none hover:opacity-60 transition-opacity"
                                >
                                    ×
                                </button>
                            </div>

                            <ul className="space-y-3">
                                {phases[expandedPhase].milestones.map((milestone, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-[#4A4A4A]"
                                    >
                                        <span
                                            className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: phases[expandedPhase].color }}
                                        />
                                        {milestone}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center justify-center text-center"
                        >
                            <p className="text-3xl font-bold text-[#2B7A8B] mb-2">
                                {stat.metric}
                            </p>
                            <p className="text-sm text-[#4A4A4A]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
