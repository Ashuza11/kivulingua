"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Roadmap() {
    const t = useTranslations("Roadmap");
    const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

    const phases = [
        {
            phase: "Phase 1",
            title: "Governance Setup",
            color: "#3B7D91",
            milestones: [
                "Community council constituted with linguistic guardians",
                "Ethical protocols and consent frameworks approved",
                "Mobile app specifications finalized",
                "Field collection teams trained (20+ collectors)",
            ],
        },
        {
            phase: "Phase 2",
            title: "Data Collection",
            color: "#D4A574",
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
            milestones: [
                "250 hours of corpus fully transcribed, validated and documented",
                "Comparative ASR training: Whisper vs wav2vec 2.0 vs MMS",
                "Edge optimization via quantization for Android deployment",
                "Initial TTS model development with community MOS evaluation",
            ],
        },
        {
            phase: "Phase 4",
            title: "Impact & Scale",
            color: "#3B7D91",
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
                <div className="max-w-3xl mb-20 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Project Timeline
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        12-Month Implementation Journey
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                {/* Horizontal Timeline */}
                <div className="overflow-x-auto pb-8">
                    <div className="min-w-max flex gap-6 md:gap-8 px-2">
                        {/* Timeline Line */}
                        <div className="absolute h-1 bg-gradient-to-r from-[#3B7D91] via-[#D4A574] to-[#5A9FB0] top-1/3 left-0 right-0 -z-10 opacity-30" />

                        {phases.map((phase, index) => (
                            <div
                                key={phase.phase}
                                className="flex-shrink-0 animate-fade-in-up"
                                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            >
                                {/* Timeline Point Container */}
                                <div className="relative">
                                    {/* Vertical connector line */}
                                    <div
                                        className="absolute left-1/2 -translate-x-1/2 w-1 h-8 -top-8 bg-gradient-to-b opacity-30"
                                        style={{
                                            backgroundImage: `linear-gradient(to bottom, ${phase.color}, transparent)`,
                                        }}
                                    />

                                    {/* Timeline Point - Clickable */}
                                    <button
                                        onClick={() =>
                                            setExpandedPhase(
                                                expandedPhase === index ? null : index
                                            )
                                        }
                                        className="group relative flex flex-col items-center cursor-pointer focus:outline-none"
                                    >
                                        {/* Outer Circle (Animated on hover) */}
                                        <div
                                            className="absolute w-16 h-16 rounded-full transition-all duration-300 -z-10"
                                            style={{
                                                backgroundColor: phase.color,
                                                opacity:
                                                    expandedPhase === index
                                                        ? 0.2
                                                        : 0,
                                            }}
                                        />

                                        {/* Main Point Circle */}
                                        <div
                                            className="w-12 h-12 rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-125 flex items-center justify-center"
                                            style={{ backgroundColor: phase.color }}
                                        >
                                            <div className="w-4 h-4 rounded-full bg-white" />
                                        </div>

                                        {/* Phase Label */}
                                        <div className="mt-4 text-center">
                                            <p className="text-xs font-bold text-black/60 uppercase tracking-wider">
                                                {phase.phase}
                                            </p>
                                            <p
                                                className="text-sm font-bold mt-1 transition-colors duration-300"
                                                style={{
                                                    color: phase.color,
                                                }}
                                            >
                                                {phase.title}
                                            </p>
                                        </div>
                                    </button>

                                    {/* Expandable Details Card */}
                                    {expandedPhase === index && (
                                        <div className="absolute top-40 -left-32 w-64 animate-fade-in-up z-20">
                                            <div
                                                className="rounded-xl border-2 p-6 shadow-xl backdrop-blur-sm"
                                                style={{
                                                    borderColor: phase.color,
                                                    backgroundColor: `${phase.color}08`,
                                                }}
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <h4
                                                        className="font-bold text-lg"
                                                        style={{ color: phase.color }}
                                                    >
                                                        {phase.title}
                                                    </h4>
                                                    <ChevronDown
                                                        size={16}
                                                        className="opacity-50"
                                                    />
                                                </div>

                                                <ul className="space-y-2">
                                                    {phase.milestones.map(
                                                        (milestone, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="text-sm text-black/70 flex gap-2 animate-fade-in-up"
                                                                style={{
                                                                    animationDelay: `${idx * 50}ms`,
                                                                }}
                                                            >
                                                                <span
                                                                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                                                                    style={{
                                                                        backgroundColor:
                                                                            phase.color,
                                                                    }}
                                                                />
                                                                {milestone}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                {/* Pointer Arrow */}
                                                <div
                                                    className="absolute -bottom-2 left-12 w-4 h-4 rotate-45"
                                                    style={{
                                                        backgroundColor: `${phase.color}08`,
                                                        borderRight: `2px solid ${phase.color}`,
                                                        borderBottom: `2px solid ${phase.color}`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-12 text-center text-sm text-black/60 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <p>✨ Click on any phase point to see detailed milestones</p>
                </div>
            </div>
        </section>
    );
}
