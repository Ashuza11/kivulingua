"use client";

import { useTranslations } from "next-intl";
import { BookOpen, Heart } from "lucide-react";

export default function UseCases() {
    const t = useTranslations("UseCases");

    return (
        <section id="use-cases" className="py-28 bg-gradient-to-b from-white to-[#F8F5F0]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl mb-16 animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                        Impact & Applications
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70">
                        {t("description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm hover:shadow-xl transition duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3B7D91]/10 text-[#3B7D91] mb-6">
                            <BookOpen size={32} />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            Literacy Education (TaRL)
                        </h3>

                        <p className="text-black/70 leading-7 mb-4">
                            Teaching at the Right Level approach implemented in mother-tongue Mashi. Children in rural Bushi schools learn to read in their native language with AI-powered audio content through the Ntina platform (African STEM Resources Hub).
                        </p>

                        <div className="bg-[#3B7D91]/5 rounded-xl p-4 border border-[#3B7D91]/10">
                            <p className="text-sm font-semibold text-[#3B7D91] mb-2">Expected Impact</p>
                            <ul className="space-y-1 text-sm text-black/70">
                                <li>• 500+ students across 5 schools</li>
                                <li>• Mother-tongue literacy foundation</li>
                                <li>• Measurable learning gains with TaRL methodology</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm hover:shadow-xl transition duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A574]/10 text-[#D4A574] mb-6">
                            <Heart size={32} />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            Community Health Communication
                        </h3>

                        <p className="text-black/70 leading-7 mb-4">
                            Community health workers use voice-based mobile app to deliver prevention messages in Mashi (vaccination, maternal health, nutrition) and record patient data offline in rural Eastern DRC. Every interaction generates contextualized linguistic data automatically.
                        </p>

                        <div className="bg-[#D4A574]/5 rounded-xl p-4 border border-[#D4A574]/10">
                            <p className="text-sm font-semibold text-[#D4A574] mb-2">Expected Impact</p>
                            <ul className="space-y-1 text-sm text-black/70">
                                <li>• 30+ health workers equipped</li>
                                <li>• 1,500+ households reached indirectly</li>
                                <li>• Sustainable data generation beyond project funding</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#3B7D91]/10 to-[#D4A574]/10 border border-black/5 p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-xl font-bold mb-4">Strategic Innovation: Continuous Datafication</h3>
                    <p className="text-black/70 leading-7">
                        Unlike episodic data campaigns, KivuLingua AI builds <span className="font-semibold">infrastructure before annotation</span>. We deploy mobile apps that transform daily workflows (teaching, health service delivery) into continuous streams of contextualized linguistic data. This 'datafication' approach, grounded in the framework of Fendji (2026), ensures data generation is sustainable, meaningful, and embedded in community needs, not artificially extracted.
                    </p>
                </div>
            </div>
        </section>
    );
}
