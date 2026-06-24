"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Roadmap() {
    const t = useTranslations("Roadmap");
    const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

    const phases = [
        {
            phase: "Phase 1",
            title: "Governance Setup",
            color: "#3B7D91",
            icon: "🏗️",
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
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-20 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Project Journey
                    </p>
                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        Our 12-Month Implementation Path
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                {/* Visual Road Journey */}
                <div className="relative py-16">
                    {/* Road Background */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-b from-[#3B7D91]/5 via-[#D4A574]/10 to-[#5A9FB0]/5 rounded-3xl" />

                    {/* Start Flag */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 animate-fade-in-left">
                        <div className="text-4xl mb-2">🚩</div>
                        <p className="text-xs font-bold text-black/60">START</p>
                    </div>

                    {/* Road with Phases */}
                    <div className="ml-20 mr-20 relative">
                        {/* Road Line */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#3B7D91] via-[#D4A574] to-[#5A9FB0]" />

                        {/* Phase Points */}
                        <div className="flex justify-between items-stretch relative z-10">
                            {phases.map((phase, index) => (
                                <div
                                    key={phase.phase}
                                    className="flex flex-col items-center flex-1 animate-fade-in-up"
                                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                                >
                                    {/* Checkpoint Circle */}
                                    <button
                                        onClick={() =>
                                            setExpandedPhase(
                                                expandedPhase === index ? null : index
                                            )
                                        }
                                        className="group relative mb-8 focus:outline-none cursor-pointer"
                                    >
                                        {/* Outer Pulse Ring */}
                                        <div
                                            className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300"
                                            style={{ backgroundColor: phase.color }}
                                        />

                                        {/* Main Checkpoint */}
                                        <div
                                            className="w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 relative z-20"
                                            style={{ backgroundColor: phase.color }}
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

                                    {/* Expandable Details Panel */}
                                    {expandedPhase === index && (
                                        <div
                                            className="w-72 rounded-2xl border-2 p-6 shadow-xl animate-fade-in-up relative z-30 mt-4"
                                            style={{
                                                borderColor: phase.color,
                                                backgroundColor: `${phase.color}08`,
                                            }}
                                        >
                                            {/* Arrow pointing up */}
                                            <div
                                                className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45"
                                                style={{
                                                    borderTop: `2px solid ${phase.color}`,
                                                    borderLeft: `2px solid ${phase.color}`,
                                                    backgroundColor: `${phase.color}08`,
                                                }}
                                            />

                                            <div className="flex justify-between items-start mb-4">
                                                <h4
                                                    className="font-bold text-lg"
                                                    style={{ color: phase.color }}
                                                >
                                                    {phase.title}
                                                </h4>
                                                <button
                                                    onClick={() => setExpandedPhase(null)}
                                                    className="flex-shrink-0 p-1 rounded hover:bg-black/5 transition"
                                                >
                                                    <ChevronUp
                                                        size={16}
                                                        style={{ color: phase.color }}
                                                    />
                                                </button>
                                            </div>

                                            {/* Milestones List */}
                                            <ul className="space-y-3">
                                                {phase.milestones.map(
                                                    (milestone, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-sm text-black/70 flex gap-3 animate-fade-in-up"
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
                                                            <span>{milestone}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Finish Flag */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 animate-fade-in-right">
                        <div className="text-4xl mb-2">🏁</div>
                        <p className="text-xs font-bold text-black/60">FINISH</p>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="mt-20 grid md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {[
                        { label: "Phases", value: "4" },
                        { label: "Milestones", value: "16+" },
                        { label: "Timeline", value: "12 months" },
                        { label: "Impact", value: "Full Scale" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="text-center p-4 rounded-xl border border-black/5 bg-white"
                        >
                            <p className="text-2xl font-bold text-[#3B7D91]">
                                {stat.value}
                            </p>
                            <p className="text-sm text-black/60 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
