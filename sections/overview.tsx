"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, Database, FlaskConical, Map, Radio } from "lucide-react";

const areas = [
  {
    title: { en: "Language AI", fr: "IA linguistique" },
    description: { en: "Speech recognition, speech synthesis, and responsible data pipelines for underrepresented languages.", fr: "Reconnaissance vocale, synthèse de la parole et pipelines de données responsables pour les langues peu dotées." },
    href: "/projects",
    icon: Radio,
  },
  {
    title: { en: "Benchmarks", fr: "Benchmarks" },
    description: { en: "Reproducible evaluation that makes model quality and language coverage measurable.", fr: "Une évaluation reproductible qui rend mesurables la qualité des modèles et la couverture linguistique." },
    href: "/research",
    icon: FlaskConical,
  },
  {
    title: { en: "Knowledge infrastructure", fr: "Infrastructure de connaissances" },
    description: { en: "Evidence maps and catalogues connecting languages, places, datasets, models, and research.", fr: "Des cartes et catalogues reliant langues, lieux, jeux de données, modèles et recherche." },
    href: "/projects",
    icon: Map,
  },
  {
    title: { en: "Open resources", fr: "Ressources ouvertes" },
    description: { en: "Documented tools and research artifacts designed for reuse, verification, and community review.", fr: "Des outils et résultats documentés, conçus pour la réutilisation, la vérification et l'examen communautaire." },
    href: "/research",
    icon: Database,
  },
];

export default function Overview() {
  const locale = useLocale() === "fr" ? "fr" : "en";

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
            {locale === "fr" ? "Axes du laboratoire" : "Lab focus"}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "fr" ? "De la recherche aux infrastructures publiques" : "From research to public infrastructure"}
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/65">
            {locale === "fr"
              ? "KivuLingua AI est un laboratoire de recherche appliquée qui construit des ressources, des outils et des preuves pour l'avenir numérique des langues congolaises."
              : "KivuLingua AI is an applied research lab building resources, tools, and evidence for the digital future of Congolese languages."}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <Link key={area.title.en} href={`/${locale}${area.href}`} className="group rounded-2xl border border-black/5 bg-[#F8F5F0] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B7D91]/10 text-[#3B7D91]">
                  <Icon size={23} />
                </div>
                <h3 className="mt-6 text-lg font-bold">{area.title[locale]}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{area.description[locale]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3B7D91]">
                  {locale === "fr" ? "Explorer" : "Explore"} <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
