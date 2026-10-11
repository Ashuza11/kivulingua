"use client";

import { useLocale } from "next-intl";
import { Building2, HeartHandshake, Sparkles, Users } from "lucide-react";

const affiliations = [
  { name: "African STEM Resources Hub", note: "Research and learning infrastructure", icon: Building2 },
  { name: "Ndaro Culture", note: "Culture and community knowledge", icon: Sparkles },
  { name: "IndabaX DRC", note: "Machine learning community", icon: Users },
  { name: "MASHI RHWAGANIRA Community", note: "Mashi language and community validation", icon: HeartHandshake },
];

export default function Affiliations() {
  const isFrench = useLocale() === "fr";

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91]">
              {isFrench ? "Réseau" : "Network"}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              {isFrench ? "Affiliations et communautés" : "Affiliations and communities"}
            </h2>
          </div>
          <p className="max-w-xl text-black/60">
            {isFrench
              ? "Des relations qui relient la recherche, la culture, l'apprentissage et la validation communautaire."
              : "Relationships connecting research, culture, learning, and community validation."}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {affiliations.map((affiliation) => {
            const Icon = affiliation.icon;
            return (
              <div key={affiliation.name} className="rounded-2xl border border-black/5 bg-[#F8F5F0] p-6">
                <Icon size={22} className="text-[#3B7D91]" />
                <h3 className="mt-5 font-bold">{affiliation.name}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{affiliation.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
