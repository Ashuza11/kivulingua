"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, Database, FlaskConical, Map, Mic2 } from "lucide-react";

const stats = [
  { value: "3", label: { en: "open research streams", fr: "axes de recherche ouverts" }, icon: FlaskConical },
  { value: "2", label: { en: "active lab projects", fr: "projets actifs du laboratoire" }, icon: Database },
  { value: "47", label: { en: "language tracks benchmarked", fr: "langues suivies dans le benchmark" }, icon: Mic2 },
  { value: "236", label: { en: "language profiles mapped", fr: "profils linguistiques cartographiés" }, icon: Map },
];

export default function Hero() {
  const locale = useLocale() === "fr" ? "fr" : "en";

  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(59,125,145,0.16),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(212,165,116,0.18),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-[#3B7D91]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[#3B7D91] shadow-sm backdrop-blur">
              {locale === "fr" ? "Laboratoire africain de recherche en IA" : "African AI research lab"}
            </div>
            <h1 className="mt-7 max-w-4xl font-heading text-5xl font-bold leading-[1.04] tracking-tight text-[#111] md:text-7xl">
              {locale === "fr" ? "Construire l'IA avec les langues et les communautés du Congo" : "Building AI with Congo's languages and communities"}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              {locale === "fr"
                ? "KivuLingua AI mène des recherches et construit des jeux de données, benchmarks, atlas et technologies vocales pour que les communautés congolaises puissent créer et gouverner leur avenir numérique."
                : "KivuLingua AI researches and builds datasets, benchmarks, atlases, and speech technologies so Congolese communities can shape and govern their digital future."}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`/${locale}/projects`} className="inline-flex items-center gap-2 rounded-full bg-[#3B7D91] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2D6478]">
                {locale === "fr" ? "Voir les projets" : "Explore projects"} <ArrowRight size={16} />
              </Link>
              <Link href={`/${locale}/research`} className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-[#3B7D91] hover:text-[#3B7D91]">
                {locale === "fr" ? "Lire la recherche" : "View research"}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.value + stat.label.en} className={`rounded-3xl border border-black/5 p-6 shadow-sm ${index === 0 || index === 3 ? "bg-[#102F38] text-white" : "bg-white"}`}>
                  <Icon size={23} className={index === 0 || index === 3 ? "text-[#D4A574]" : "text-[#3B7D91]"} />
                  <p className="mt-8 text-4xl font-bold">{stat.value}</p>
                  <p className={`mt-2 text-sm leading-6 ${index === 0 || index === 3 ? "text-white/65" : "text-black/55"}`}>{stat.label[locale]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
