"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Roadmap() {
    const t = useTranslations("Roadmap");
    const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

    const phases = [
        {
            phase: "Phase 1",
            title: "Governance Setup",
            color: "#3B7D91",
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
            color: "#D4A574",
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
            color: "#5A9FB0",
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
            color: "#3B7D91",
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

    return (
        <section id="roadmap" className="py-28 bg-gradient-to-b from-white to-[#F8F5F0]">
            <style>{`
                @keyframes serpent {
                    0% { d: path('M 0 50 Q 25 30 50 50 T 100 50'); }
                    25% { d: path('M 0 50 Q 25 50 50 30 T 100 50'); }
                    50% { d: path('M 0 50 Q 25 70 50 50 T 100 50'); }
                    75% { d: path('M 0 50 Q 25 50 50 70 T 100 50'); }
                    100% { d: path('M 0 50 Q 25 30 50 50 T 100 50'); }
                }
                .roadmap-serpent {
                    animation: serpent 4s ease-in-out infinite;
                }
            `}</style>

            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-20 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Project Journey
                    </p>
                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        Our Implementation Path
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                {/* Serpentine Roadmap */}
                <div className="relative py-32">
                    {/* SVG Serpentine Line */}
                    <svg
                        className="absolute left-0 right-0 top-0 h-full w-full"
                        style={{ pointerEvents: "none" }}
                        preserveAspectRatio="none"
                    >
                        <polyline
                            points="0,50 25,30 50,50 75,70 100,50"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            style={{
                                strokeDasharray: "1000",
                                strokeDashoffset: "0",
                                animation: "draw 3s ease-in-out infinite",
                            }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B7D91" />
                                <stop offset="50%" stopColor="#D4A574" />
                                <stop offset="100%" stopColor="#5A9FB0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Phase Checkpoints */}
                    <div className="relative z-20 flex justify-between items-stretch px-4">
                        {phases.map((phase, index) => (
                            <div key={phase.phase} className="flex-1 relative">
                                {/* Checkpoint Circle */}
                                <div className="flex justify-center">
                                    <button
                                        onClick={() =>
                                            setExpandedPhase(
                                                expandedPhase === index ? null : index
                                            )
                                        }
                                        className="group relative focus:outline-none cursor-pointer"
                                    >
                                        {/* Outer Pulse Ring */}
                                        <div
                                            className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300"
                                            style={{ backgroundColor: phase.color }}
                                        />

                                        {/* Main Checkpoint */}
                                        <div
                                            className="w-16 h-16 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative"
                                            style={{ backgroundColor: phase.color, zIndex: 30 }}
                                        >
                                            {phase.icon}
                                        </div>

                                        {/* Phase Label */}
                                        <p className="mt-3 text-xs font-bold uppercase tracking-wider text-black/60">
                                            {phase.phase}
                                        </p>
                                        <p
                                            className="text-sm font-bold mt-1"
                                            style={{ color: phase.color }}
                                        >
                                            {phase.title}
                                        </p>
                                    </button>
                                </div>

                                {/* Expandable Details Panel */}
                                {expandedPhase === index && (
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-80 rounded-2xl border-2 p-6 shadow-2xl animate-fade-in-up relative z-50 ${
                                            phase.position === "top" ? "-top-96" : "top-32"
                                        }`}
                                        style={{
                                            borderColor: phase.color,
                                            backgroundColor: `${phase.color}08`,
                                        }}
                                    >
                                        {/* Arrow pointing to checkpoint */}
                                        <div
                                            className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 ${
                                                phase.position === "top" ? "-bottom-3 rotate-45" : "-top-3 -rotate-45"
                                            }`}
                                            style={{
                                                borderTop: `2px solid ${phase.color}`,
                                                borderLeft: `2px solid ${phase.color}`,
                                            }}
                                        />

                                        <h3 className="font-bold text-black mb-4">
                                            {phase.title}
                                        </h3>

                                        <ul className="space-y-2">
                                            {phase.milestones.map((milestone, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2 text-sm text-black/70"
                                                >
                                                    <span
                                                        className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0"
                                                        style={{ backgroundColor: phase.color }}
                                                    />
                                                    {milestone}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <style>{`
                        @keyframes draw {
                            to {
                                stroke-dashoffset: -1000;
                            }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
}
