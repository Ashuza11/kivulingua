"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import Affiliations from "@/sections/affiliations";

const team = [
  {
    name: "Muhigiri Ashuza Albin",
    role: "Founder and AI Researcher",
    focus: "Speech AI, language datasets, research strategy, and open infrastructure",
    image: "/Team/ashuza.jpeg",
    links: [
      { label: "GitHub", href: "https://github.com/Ashuza11" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/m-ashuza/" },
    ],
  },
  {
    name: "Ciruza Alain",
    role: "AI Architect",
    focus: "Deep learning, NLP, machine learning systems, and technical infrastructure",
    image: "/Team/ciruza.jfif",
    links: [
      { label: "GitHub", href: "https://github.com/Cirhuzalain" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mcalino/" },
    ],
  },
  {
    name: "Marius Nshombo",
    role: "Mashi Language and Validation Lead",
    focus: "Mashi lexicon, language documentation, cultural knowledge, and community validation",
    image: "/Team/Marius.png",
    links: [
      { label: "Muruhula", href: "https://muruhula.com/" },
      { label: "TikTok", href: "https://www.tiktok.com/@marius_nshombo" },
    ],
  },
];

export default function Team() {
  const isFrench = useLocale() === "fr";

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
                {isFrench ? "Le laboratoire" : "The lab"}
              </p>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                {isFrench ? "Les personnes derrière le travail" : "The people behind the work"}
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              {isFrench
                ? "Une petite équipe de recherche qui travaille avec des communautés linguistiques, des chercheurs et des bâtisseurs de technologies en RDC et au-delà."
                : "A small research team working with language communities, researchers, and technology builders in the DRC and beyond."}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-[#3B7D91]/10">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-7">
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-[#3B7D91]">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-black/60">{member.focus}</p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {member.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#3B7D91] hover:text-[#2D6478]">
                        {link.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Affiliations />
    </>
  );
}
