"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Globe, Building2 } from "lucide-react";
import { useState } from "react";

const teamMembers = [
    {
        name: "Muhigiri Ashuza Albin",
        role: "Technical Lead & AI Specialist",
        organization: "African STEM Resources Hub",
        bio: "Software engineer and AI specialist in Audio AI, TTS, and NLP for low-resource languages. Consultant on AIAM (AI & African Music). Founder of African STEM Resources Hub developing BongoLab (offline STEM labs) and Ntina (multilingual STEM knowledge base).",
        expertise: ["Audio AI", "TTS", "NLP", "Educational AI", "Edge Computing"],
        email: "ashuzamh@gmail.com",
        image: "/Team/ashuza.jpeg",
    },
    {
        name: "David Krame",
        role: "Co-Founder, Research & Model Optimization",
        organization: "African STEM Resources Hub",
        bio: "Co-founder of African STEM Resources Hub. Specializes in research strategy and optimization of language models. Leads comparative ASR architecture evaluation and publication coordination.",
        expertise: ["Research", "Model Optimization", "ASR", "Strategy"],
    },
    {
        name: "Victoria Chasi",
        role: "Data Governance & Policy Advisor",
        organization: "ARCHV",
        bio: "BSocSci (International Law), LLB, MPA (Cornell). Former UN strategist (UNDP, IFRC, IDB). Founder of ARCHV - linguistic infrastructure for low-resource African languages. Expert in data governance and community sovereignty.",
        expertise: ["Data Governance", "Policy", "Community Sovereignty", "International Law"],
    },
    {
        name: "Ciruza Alain",
        role: "AI Architect & ML Infrastructure",
        organization: "KivuLingua AI",
        bio: "Master's in Machine Intelligence (AIMS/AMMI). 5+ years designing large-scale AI systems in agriculture, finance, and HR. Production expertise: PyTorch, JAX, FastAPI, AWS, GCP. Specializes in multilingual NLP and low-latency pipelines.",
        expertise: ["PyTorch", "JAX", "FastAPI", "AWS/GCP", "Multilingual NLP"],
        image: "/Team/ciruza.jfif",
    },
    {
        name: "Marius Nshombo",
        role: "Mashi Language Custodian & Validation Lead",
        organization: "Muruhula.com",
        bio: "Curator of Muruhula.com (comprehensive digital Mashi-French library). 8+ years documenting, preserving and providing digital access to Mashi. Deep expertise in grammar, vocabulary, cultural context, and linguistic practice.",
        expertise: ["Mashi Language", "Linguistics", "Documentation", "Community Validation"],
        website: "https://muruhula.com",
        image: "/Team/Marius.png",
    },
    {
        name: "Prof. Gervais Chirhalwirwha Nkunzimwami",
        role: "Linguistic Advisor & Community Leader",
        organization: "Mashi Community",
        bio: "Respected community figure and linguistic advisor. Ensures linguistic and cultural appropriateness of all project protocols and content. Bridge between academic work and authentic community practice.",
        expertise: ["Mashi Culture", "Linguistics", "Community Leadership"],
    },
    {
        name: "Aristide Chiza",
        role: "Project Director & Operations Lead",
        organization: "Kwetu Best Technologies SARL",
        bio: "CEO of Kwetu Best Technologies (Goma). 6+ years software development in DRC. 5 products in production, 50+ clients across Eastern Congo. Expert in deploying solutions in resource-constrained settings.",
        expertise: ["Project Management", "RDC Operations", "Software Development", "Field Deployment"],
    },
    {
        name: "Dr. Abednego Wamuhindo Kambale",
        role: "Edge AI & Model Optimization Specialist",
        organization: "Kwetu Best / Politecnico di Milano",
        bio: "PhD in Computer Science (Politecnico di Milano). Expert in edge computing, AI offloading, and reinforcement learning. Optimizes models for Android/Raspberry Pi deployment in offline environments.",
        expertise: ["Edge Computing", "Model Quantization", "Android Deployment", "Distributed Systems"],
    },
    {
        name: "Dr. Joaquim Mbasa",
        role: "Distributed Systems & Data Architecture",
        organization: "ISTI-CNR, Pisa",
        bio: "Researcher at HPC Lab, ISTI-CNR (Pisa). Expert in distributed learning, IoT, and intelligent systems. Validates data pipelines and decentralized architectures for offline voice collection.",
        expertise: ["Distributed Systems", "IoT", "Data Architecture", "Decentralized Learning"],
    },
];

const consortiumOrgs = [
    {
        name: "African STEM Resources Hub",
        country: "Rwanda",
        role: "Lead Organization",
        description: "Develops offline STEM solutions and educational AI platforms. Lead entity for contractual management and coordination.",
        focus: "Educational AI, STEM Infrastructure",
    },
    {
        name: "Kwetu Best Technologies SARL",
        country: "Democratic Republic of Congo (Goma)",
        role: "Co-Technical Partner",
        description: "Co-developer of mobile app, local technical infrastructure, field deployment, and financial management in DRC.",
        focus: "Mobile App, Field Operations, RDC Implementation",
    },
];

export default function TeamPage() {
    const t = useTranslations("Team");
    const [expandedMember, setExpandedMember] = useState<string | null>(null);

    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="max-w-3xl mb-20 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        {t("badge")}
                    </p>
                    <h1 className="font-heading text-5xl font-bold tracking-tight mb-6">
                        {t("title")}
                    </h1>
                    <p className="text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                {/* Consortium */}
                <div className="mb-20 animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-8">Project Consortium</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {consortiumOrgs.map((org, index) => (
                            <div
                                key={org.name}
                                className="rounded-2xl border-2 border-[#3B7D91]/20 bg-gradient-to-br from-[#3B7D91]/5 to-[#D4A574]/5 p-8 hover:shadow-lg transition duration-300"
                                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white border-2 border-[#3B7D91]/20">
                                        <Building2 size={32} className="text-[#3B7D91]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{org.name}</h3>
                                        <p className="text-sm text-[#3B7D91] font-semibold">{org.country}</p>
                                    </div>
                                </div>
                                <p className="inline-block mb-3 px-3 py-1 bg-[#3B7D91]/10 text-[#3B7D91] text-xs font-semibold rounded-full">
                                    {org.role}
                                </p>
                                <p className="text-black/70 leading-6 mb-3">{org.description}</p>
                                <p className="text-sm"><span className="font-semibold">Focus:</span> {org.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Members */}
                <div className="animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-8">Core Team</h2>
                    <div className="grid gap-4">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.name}
                                className="rounded-xl border border-black/5 bg-white hover:shadow-md transition-all cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                                onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                                                {member.image && (
                                                    <div className="flex-shrink-0">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            width={40}
                                                            height={40}
                                                            className="h-10 w-10 rounded-full object-cover border border-[#3B7D91]/20"
                                                        />
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                                    <span className="text-xs font-semibold px-3 py-1 bg-[#3B7D91]/10 text-[#3B7D91] rounded-full inline-block mt-1 sm:mt-0 sm:ml-2">
                                                        {member.organization}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-[#3B7D91] font-semibold text-sm mb-2 ml-0 sm:ml-12">{member.role}</p>

                                            {expandedMember === member.name && (
                                                <div className="mt-4 pt-4 border-t border-black/5">
                                                    <p className="text-black/70 leading-6 mb-4">{member.bio}</p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {member.expertise.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className="text-xs px-2 py-1 bg-[#D4A574]/10 text-[#D4A574] rounded"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    {(member.email || member.website) && (
                                                        <div className="flex gap-2">
                                                            {member.email && (
                                                                <a
                                                                    href={`mailto:${member.email}`}
                                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#3B7D91]/10 text-[#3B7D91] hover:bg-[#3B7D91] hover:text-white transition text-sm font-semibold"
                                                                >
                                                                    <Mail size={16} /> Email
                                                                </a>
                                                            )}
                                                            {member.website && (
                                                                <a
                                                                    href={member.website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#D4A574]/10 text-[#D4A574] hover:bg-[#D4A574] hover:text-white transition text-sm font-semibold"
                                                                >
                                                                    <Globe size={16} /> Website
                                                                </a>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-[#3B7D91] flex-shrink-0 mt-1">
                                            {expandedMember === member.name ? "−" : "+"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-20 rounded-2xl bg-gradient-to-r from-[#3B7D91]/10 to-[#D4A574]/10 border border-black/5 p-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <h3 className="text-2xl font-bold mb-3">Join Our Team</h3>
                    <p className="text-black/70 mb-6 max-w-2xl mx-auto">
                        We're always looking for passionate contributors—linguists, ML engineers, community mobilizers, and advocates. If you're interested in building AI infrastructure for African languages, get in touch.
                    </p>
                    <a
                        href="mailto:contact@stemrh.org"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B7D91] text-white rounded-full font-semibold hover:bg-[#2D6478] transition"
                    >
                        <Mail size={18} /> Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
