"use client";

import Image from "next/image";
import { Mail, ExternalLink, ChevronDown, Building2 } from "lucide-react";
import { useState } from "react";

export default function Team() {
  const [expandedMember, setExpandedMember] = useState<number | null>(0);
  const organizations = [
    {
      name: "African STEM Resources Hub",
      location: "Kigali, Rwanda",
      description: "Research-led AI EdTech startup developing an evolving ecosystem of offline-first virtual laboratories, mother-tongue knowledge bases, and immersive AI tools that eliminate infrastructure and linguistic barriers, empowering every learner to master and discover science in their own context.",
      focus: ["Educational AI", "STEM Infrastructure", "BongoLab", "Ntina"],
      website: "https://stemrh.org/",
      color: "#3B7D91",
    },
    {
      name: "Kwetu Best Technologies SARL",
      location: "Goma, Democratic Republic of Congo",
      description: "Digital solutions & transformation specialist supporting businesses & communities through innovative services. 6+ years driving sustainable impact across Africa.",
      focus: ["Sofia", "CulturaZik AI", "Manufact", "MaShop"],
      website: "https://kwetubest.com/",
      color: "#D4A574",
    },
  ];

  const coreTeam = [
    {
      name: "Muhigiri Ashuza Albin",
      org: "African STEM Resources Hub",
      role: "AI Engineer, Partnerships and Grants, Project Management",
      specialization: "Audio AI, Generative Models, Educational AI Systems, Microsoft Learn Ambassador",
      image: "/Team/ashuza.jpeg",
      links: [
        { label: "GitHub", url: "https://github.com/Ashuza11" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/m-ashuza/" },
        { label: "Bina.ai", url: "https://bina.ai/" },
        { label: "African STEM", url: "https://stemrh.org/" },
      ],
    },
    {
      name: "David Krame",
      org: "African STEM Resources Hub",
      role: "Research & Model Optimization",
      specialization: "ML Research, Model Optimization, PhD Candidate (VU Amsterdam), Stochastic Optimization",
      links: [
        { label: "Website", url: "https://davidkrame.github.io/" },
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=davidkrame" },
        { label: "GitHub", url: "https://github.com/DavidKrame" },
        { label: "VU Amsterdam", url: "https://vu.nl/en/" },
      ],
    },
    {
      name: "Victoria Chasi",
      org: "ARCHV",
      role: "Data Governance & Policy Advisor",
      specialization: "Data Ethics, Policy, Languages, AR/XR for Language Learning",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/victoriachasi/" },
        { label: "ARCHV", url: "#" },
      ],
    },
    {
      name: "Ciruza Alain",
      org: "KivuLingua AI",
      role: "AI Architect & ML Infrastructure",
      specialization: "Deep Learning, NLP, Cloud Infrastructure, PyTorch, JAX, AMMI Student",
      image: "/Team/ciruza.jfif",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/mcalino/" },
        { label: "GitHub", url: "https://github.com/Cirhuzalain" },
      ],
    },
    {
      name: "Marius Nshombo",
      org: "Muruhula.com",
      role: "Mashi Language Custodian & Validation Lead",
      specialization: "Mashi Lexicon, Language Documentation, 8+ Years Preservation, BND-French Bilingual Resource",
      image: "/Team/Marius.png",
      links: [
        { label: "Muruhula", url: "https://muruhula.com/" },
        { label: "Facebook", url: "https://www.facebook.com/nshombo/" },
        { label: "TikTok", url: "https://www.tiktok.com/@marius_nshombo" },
      ],
    },
    {
      name: "Prof. Gervais Chirhalwirwha Nkunzimwami",
      org: "Mashi Community",
      role: "Linguistic Advisor & Community Leader",
      specialization: "Bantu Linguistics, Mashi Language, Cultural Preservation, Community Engagement",
      links: [
        { label: "Podcast", url: "https://www.youtube.com/watch?v=k4OPtQwmb5w&list=PLoqQ2twxUxB5lKlNX8Nm2C__0AckCkrvn&index=10" },
        { label: "BNF", url: "https://www.bnf.fr/" },
      ],
    },
    {
      name: "Aristide Chiza",
      org: "Kwetu Best Technologies SARL",
      role: "Project Director & Operations Lead",
      specialization: "Software Engineering, Data Mining, UI/UX, Project Management",
      links: [
        { label: "LinkedIn", url: "https://cd.linkedin.com/company/kwetu-best" },
        { label: "Kwetu Best", url: "https://kwetubest.com/" },
        { label: "Sofia App", url: "https://kwetubest.com/" },
      ],
    },
    {
      name: "Dr. Abednego Wamuhindo Kambale",
      org: "Kwetu Best / Politecnico di Milano",
      role: "Edge AI & Model Optimization Specialist",
      specialization: "Edge AI, Deep Learning, Serverless Computing, Smart Eyewear Optimization, PhD (Politecnico)",
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=cS3X4mYAAAAJ" },
        { label: "ResearchGate", url: "https://www.researchgate.net/profile/Abednego-Wamuhindo-Kambale" },
        { label: "LinkedIn", url: "https://cd.linkedin.com/in/abednego-wa-muhindo-97989b120" },
        { label: "Politecnico", url: "https://www.polimi.it/" },
      ],
    },
    {
      name: "Dr. Joaquim Mbasa",
      org: "Kwetu Best / ISTI-CNR, Pisa",
      role: "Distributed Systems & Data Architecture",
      specialization: "Cloud/Edge Computing, Knowledge Distillation, Federated Learning, Computer Vision, 6+ Publications",
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=mbasa" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/joaquim-mbasa-7934611b4/" },
        { label: "ISTI-CNR", url: "https://www.isti.cnr.it/en/" },
        { label: "Kwetu Best", url: "https://kwetubest.com/" },
      ],
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Meet Our Team
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/70">
            Leadership Driving Language Preservation
          </p>

          <p className="mt-4 text-base leading-7 text-black/60">
            Our interdisciplinary team combines expertise in artificial intelligence, machine learning, and indigenous language documentation to build sustainable infrastructure for African language technologies.
          </p>
        </div>

        {/* Project Consortium */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Project Consortium</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {organizations.map((org, index) => (
              <div
                key={org.name}
                className="rounded-2xl border border-black/10 bg-white animate-fade-in-up hover:shadow-lg transition p-6 flex gap-6"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Icon Container - Left */}
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${org.color}20` }}
                  >
                    <Building2 size={28} style={{ color: org.color }} />
                  </div>
                </div>

                {/* Content - Right */}
                <div className="flex-grow space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-black">
                      {org.name}
                    </h4>
                    <p className="text-xs text-black/50 mt-0.5">
                      {org.location}
                    </p>
                  </div>

                  <p className="text-sm leading-6 text-black/70">
                    {org.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {org.focus.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-black/70 border"
                        style={{ borderColor: org.color, backgroundColor: `${org.color}10` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {org.website && (
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium hover:opacity-70 transition pt-1"
                      style={{ color: org.color }}
                    >
                      Visit <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Core Team</h3>

          <div className="space-y-3">
            {coreTeam.map((member, index) => (
              <div
                key={member.name}
                className="rounded-2xl border border-black/5 bg-white animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                {/* Collapsed Header - Always Visible */}
                <button
                  onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                  className="w-full p-6 flex items-center gap-4 hover:bg-gray-50/50 transition text-left"
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#3B7D91]/20 to-[#D4A574]/20 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-[#3B7D91]/30">
                        {member.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <h4 className="font-bold text-black text-base">
                      {member.name}
                    </h4>
                    <p className="text-xs text-black/50 mt-0.5">
                      {member.org}
                    </p>
                    <p className="text-sm font-semibold text-[#3B7D91] mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <ChevronDown
                    size={20}
                    className={`text-black/40 transition-transform ${
                      expandedMember === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Details */}
                {expandedMember === index && (
                  <div className="border-t border-black/5 px-6 py-4 bg-gradient-to-b from-white to-gray-50/50 space-y-4 animate-fade-in-up">
                    <div>
                      <h5 className="text-xs font-bold uppercase text-black/50 mb-2">
                        Specialization
                      </h5>
                      <p className="text-sm text-black/70">
                        {member.specialization}
                      </p>
                    </div>

                    {member.links.length > 0 && (
                      <div>
                        <h5 className="text-xs font-bold uppercase text-black/50 mb-2">
                          Links & Resources
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded text-xs font-medium text-white bg-[#3B7D91] hover:bg-[#2D6478] transition"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="rounded-2xl border-2 border-[#3B7D91]/20 bg-gradient-to-br from-[#3B7D91]/5 to-[#D4A574]/5 p-8 md:p-12 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-black mb-4">
            Join Our Team
          </h3>

          <p className="text-lg text-black/70 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate contributors: linguists, ML engineers, community mobilizers, and advocates. If you're interested in building AI infrastructure for African languages, get in touch.
          </p>

          <a
            href="mailto:ashuzamh@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B7D91] text-white font-medium rounded-full hover:bg-[#2D6478] transition"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
