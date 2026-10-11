"use client";

import { useLocale } from "next-intl";
import { ArrowUpRight, Map, Radio } from "lucide-react";

const projects = [
  {
    title: "SautiForge",
    label: "Speech data infrastructure",
    description: {
      en: "An ongoing research project building an offline-first platform for collecting, transcribing, annotating, and managing consented speech datasets. Its first pilot supports the development of Mashi ASR and TTS data and models, presented at the Deep Learning Indaba 2026 poster session.",
      fr: "Un projet de recherche en cours qui construit une plateforme hors ligne pour collecter, transcrire, annoter et gérer des données vocales consenties. Son premier pilote soutient le développement de données et modèles ASR et TTS en mashi, présenté à la session poster de Deep Learning Indaba 2026.",
    },
    primaryHref: "https://github.com/Ashuza11/SautiForge",
    primaryLabel: "GitHub",
    icon: Radio,
  },
  {
    title: "CongoLangAtlas",
    label: "Language evidence atlas",
    description: {
      en: "An interactive, evidence-backed atlas connecting language identities, geography, linguistic resources, and NLP metadata across the Democratic Republic of the Congo.",
      fr: "Un atlas interactif fondé sur des preuves qui relie les identités linguistiques, la géographie, les ressources linguistiques et les métadonnées NLP en République démocratique du Congo.",
    },
    primaryHref: "https://clatlas.kivulinguaai.org/",
    primaryLabel: "Open atlas",
    secondaryHref: "https://github.com/Ashuza11/CongoLangAtlas",
    icon: Map,
  },
];

export default function Projects() {
  const locale = useLocale() === "fr" ? "fr" : "en";

  return (
    <section id="projects" className="bg-[#102F38] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A574]">
              {locale === "fr" ? "Projets du laboratoire" : "Lab projects"}
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
              {locale === "fr" ? "La recherche mise en pratique" : "Research made practical"}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/65">
            {locale === "fr"
              ? "Nos projets transforment les méthodes de recherche en outils publics pour les communautés, les chercheurs et les créateurs de technologies."
              : "Our projects turn research methods into public tools for communities, researchers, and technology builders."}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A574]/15 text-[#D4A574]">
                  <Icon size={25} />
                </div>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A574]">{project.label}</p>
                <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>
                <p className="mt-5 leading-7 text-white/70">{project.description[locale]}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={project.primaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#102F38] transition hover:bg-[#D4A574]">
                    {project.primaryLabel} <ArrowUpRight size={16} />
                  </a>
                  {project.secondaryHref && (
                    <a href={project.secondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/50">
                      GitHub <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
