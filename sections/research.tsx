"use client";

import { useLocale } from "next-intl";
import { ArrowUpRight, BookOpen, Database, FlaskConical } from "lucide-react";

const researchProjects = [
  {
    title: "AI in the Democratic Republic of the Congo",
    description: {
      en: "A living, evidence-based map of datasets, models, people, institutions, infrastructure, policy, and applied AI across the DRC.",
      fr: "Une cartographie vivante et fondée sur des preuves des données, modèles, personnes, institutions, infrastructures, politiques et usages de l'IA en RDC.",
    },
    href: "https://github.com/Ashuza11/Ai-in-drCongo",
    status: "Active research",
    icon: BookOpen,
  },
  {
    title: "CongoLangBench",
    description: {
      en: "A reproducible benchmark for evaluating language models across Congolese languages using documented bilingual text and strict provenance rules.",
      fr: "Un benchmark reproductible pour évaluer les modèles de langue sur les langues congolaises avec des textes bilingues documentés et une provenance rigoureuse.",
    },
    href: "https://github.com/Ashuza11/CongoLangBench",
    status: "Active development",
    icon: Database,
  },
  {
    title: "Mashi TTS Bootstrap",
    description: {
      en: "The first Mashi speech dataset and an experiment in fine-tuning Coqui XTTS v2 for an extremely low-resource Bantu language.",
      fr: "Le premier jeu de données vocales en mashi et une expérimentation d'adaptation de Coqui XTTS v2 pour une langue bantoue très peu dotée.",
    },
    href: "https://github.com/Ashuza11/mashi-tts-bootstrap",
    status: "Research prototype",
    icon: FlaskConical,
  },
];

export default function Research() {
  const locale = useLocale() === "fr" ? "fr" : "en";

  return (
    <section id="research" className="bg-gradient-to-b from-[#F8F5F0] to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
            {locale === "fr" ? "Recherche ouverte" : "Open research"}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "fr" ? "Questions, données et évaluations" : "Questions, data, and evaluation"}
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/65">
            {locale === "fr"
              ? "Nous étudions l'écosystème de l'IA en RDC et développons des ressources reproductibles pour mesurer les progrès des technologies linguistiques congolaises."
              : "We study the AI ecosystem in the DRC and build reproducible resources for measuring progress in Congolese language technology."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {researchProjects.map((project) => {
            const Icon = project.icon;
            return (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-80 flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B7D91]/10 text-[#3B7D91]">
                    <Icon size={23} />
                  </div>
                  <span className="rounded-full bg-[#D4A574]/15 px-3 py-1 text-xs font-semibold text-[#8B623C]">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-black/65">
                  {project.description[locale]}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3B7D91]">
                  {locale === "fr" ? "Voir la recherche" : "View research"}
                  <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
