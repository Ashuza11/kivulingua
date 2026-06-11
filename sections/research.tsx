"use client";

import { useTranslations } from "next-intl";
import { BookOpen, Microscope, BarChart3, GitBranch } from "lucide-react";

export default function Research() {
    const t = useTranslations("Research");

    const papers = [
        {
            title: "Language Preservation and AI: Ethical Frameworks for Bantu Language Documentation",
            authors: "KivuLingua Research Team",
            status: "Published",
            icon: BookOpen,
        },
        {
            title: "Building Low-Resource Language Datasets: Challenges and Community-Driven Solutions",
            authors: "In collaboration with linguistic communities",
            status: "In Progress",
            icon: Microscope,
        },
        {
            title: "Benchmarking ASR Performance on Underrepresented Bantu Languages",
            authors: "KivuLingua & Partner Institutions",
            status: "Planned",
            icon: BarChart3,
        },
        {
            title: "Open Source Tools for Community-Led Language Dataset Annotation",
            authors: "Technical Development Team",
            status: "Planned",
            icon: GitBranch,
        },
    ];

    return (
        <section id="research" className="py-28 bg-gradient-to-b from-[#F8F5F0] to-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91] animate-fade-in-down">
                        Research & Innovation
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {t("description")}
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    {papers.map((paper, index) => {
                        const IconComponent = paper.icon;
                        return (
                            <div
                                key={paper.title}
                                className="group rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B7D91]/10 text-[#3B7D91] group-hover:animate-float">
                                        <IconComponent size={24} />
                                    </div>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                            paper.status === "Published"
                                                ? "bg-green-100 text-green-700"
                                                : paper.status === "In Progress"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-[#F8F5F0] text-black/70"
                                        }`}
                                    >
                                        {paper.status}
                                    </span>
                                </div>

                                <h3 className="mt-4 text-xl font-bold text-black">
                                    {paper.title}
                                </h3>

                                <p className="mt-3 text-sm text-black/60">
                                    {paper.authors}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
