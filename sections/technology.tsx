"use client";

import { useTranslations } from "next-intl";
import { Cpu, Code2, Smartphone, GitBranch } from "lucide-react";

const technologies = [
    {
        icon: Cpu,
        title: "ASR Model (Speech Recognition)",
        description: "Fine-tuned Whisper, wav2vec 2.0, and MMS for Mashi. Optimized for Edge deployment: <1B parameters, CPU-only, <2x real-time on low-end Android devices.",
        metric: "Target WER < 25%",
        color: "#3B7D91"
    },
    {
        icon: Code2,
        title: "TTS Model (Speech Synthesis)",
        description: "Coqui TTS trained on Mashi corpus for text-to-speech in educational and health applications with natural, community-validated voice quality.",
        metric: "Target MOS > 3.5",
        color: "#D4A574"
    },
    {
        icon: Smartphone,
        title: "Mobile Collection App",
        description: "Co-developed with Kwetu Best Technologies. Android app for offline voice capture, transcription integration, and automatic linguistic data generation.",
        metric: "30 health workers + 5 schools",
        color: "#5A9FB0"
    },
    {
        icon: GitBranch,
        title: "Reproducible Pipeline",
        description: "Complete open-source toolkit: annotation scripts, quality assurance, evaluation benchmarks, documentation, ready for 8 additional Kivu languages.",
        metric: "Apache 2.0 License",
        color: "#D4A574"
    }
];

export default function Technology() {
    const t = useTranslations("Technology");

    return (
        <section id="technology" className="py-28 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-16 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Technical Infrastructure
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.title}
                                className="rounded-2xl border border-black/5 bg-gradient-to-br from-white to-[#F8F5F0] p-8 hover:shadow-lg transition duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl mb-6"
                                    style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
                                >
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {tech.title}
                                </h3>

                                <p className="text-black/70 leading-7 mb-4">
                                    {tech.description}
                                </p>

                                <div
                                    className="text-sm font-semibold px-3 py-2 rounded-lg inline-block"
                                    style={{ backgroundColor: `${tech.color}10`, color: tech.color }}
                                >
                                    {tech.metric}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 rounded-2xl border border-black/5 bg-gradient-to-r from-[#3B7D91]/5 to-[#D4A574]/5 p-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h3 className="text-xl font-bold mb-3">Why Edge-First Design?</h3>
                    <p className="text-black/70 leading-7">
                        Rural Eastern Congo has limited connectivity. Our models are optimized for offline deployment on low-cost Android phones and Raspberry Pi devices. No cloud dependency. No internet required. This ensures teachers and health workers can use AI tools in the field, making KivuLingua resources genuinely accessible to the communities that need them most.
                    </p>
                </div>
            </div>
        </section>
    );
}
