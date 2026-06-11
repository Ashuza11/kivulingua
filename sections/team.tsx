"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Globe } from "lucide-react";

export default function Team() {
    const t = useTranslations("Team");

    const teamMembers = [
        {
            name: "Muhigiri Ashuza",
            role: "Technical Lead & AI Specialist",
            bio: "Software engineer and AI engineer specialized in voice technologies (Audio AI), generative models, and end-to-end AI systems. Currently AI consultant at AIAM (AI & African Music) project with The MIND Institute. Founder of African STEM Resources Hub developing virtual labs and offline educational solutions. Expertise covers TTS, low-resource language NLP, LLMs, educational AI systems, and AI infrastructure for African contexts.",
            image: "/team/ashuza.jpg",
            email: "ashuzamh@gmail.com",
            linkedin: "https://linkedin.com",
        },
        {
            name: "CIRUZA Alain",
            role: "AI Architect & ML Infrastructure",
            bio: "Master's in Machine Intelligence from AIMS/AMMI with 5+ years designing, developing and deploying large-scale AI systems in agriculture, finance, and HR. Deep learning and NLP expertise with production frameworks: PyTorch, JAX, FastAPI, Django, LangChain, React. Cloud infrastructure experience with AWS and GCP. Specializes in multilingual NLP platforms, low-latency systems, and large-scale data pipelines.",
            image: "/team/ciruza.jpg",
            email: "ciruza@kivulinguaai.org",
            linkedin: "https://linkedin.com",
        },
        {
            name: "Marius Nshombo",
            role: "Mashi Language Custodian",
            bio: "Curator of Muruhula.com, a comprehensive digital Mashi-French linguistic library. 8+ years dedicated to Mashi language documentation, preservation and digital accessibility. Deep expertise in Mashi grammar, vocabulary, cultural context and linguistic practice. Drives community validation, orthographic standards and ensures authenticity in language resource development.",
            image: "/team/marius.jpg",
            email: "marius@muruhula.com",
            website: "https://muruhula.com",
        },
    ];

    return (
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl animate-fade-in-up mb-16">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91] animate-fade-in-down">
                        {t("badge")}
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {t("description")}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className="rounded-2xl border border-black/5 bg-white overflow-hidden animate-fade-in-up hover:shadow-lg transition-shadow"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="relative h-64 w-full bg-gradient-to-b from-[#3B7D91]/20 to-[#D4A574]/20 flex items-center justify-center">
                                <div className="text-6xl font-bold text-[#3B7D91]/30">
                                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm font-semibold text-[#3B7D91]">
                                    {member.role}
                                </p>

                                <p className="mt-4 text-sm leading-6 text-black/70">
                                    {member.bio}
                                </p>

                                <div className="mt-6 flex gap-3">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#3B7D91]/10 text-[#3B7D91] hover:bg-[#3B7D91] hover:text-white transition"
                                            aria-label="Email"
                                        >
                                            <Mail size={18} />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition font-bold"
                                            aria-label="LinkedIn"
                                            title="LinkedIn"
                                        >
                                            in
                                        </a>
                                    )}
                                    {member.website && (
                                        <a
                                            href={member.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#D4A574]/10 text-[#D4A574] hover:bg-[#D4A574] hover:text-white transition"
                                            aria-label="Website"
                                        >
                                            <Globe size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
