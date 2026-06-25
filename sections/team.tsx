"use client";

import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

export default function Team() {
  const organizations = [
    {
      name: "African STEM Resources Hub",
      location: "Kigali, Rwanda",
      role: "Lead Organization",
      description: "Develops offline EdTech solutions & educational AI platforms to democratize access to quality education. Empowers teachers and students with STEM tools.",
      focus: ["Educational AI", "STEM Infrastructure", "BongoLab", "Ntina"],
      website: "https://stemrh.org/",
      color: "#3B7D91",
    },
    {
      name: "Kwetu Best Technologies SARL",
      location: "Goma, Democratic Republic of Congo",
      role: "Co-Technical Partner",
      description: "Digital solutions & transformation specialist supporting businesses & communities through innovative services. 6+ years driving sustainable impact across Africa.",
      focus: ["Mobile App", "Field Operations", "Digital Transformation", "Software Dev", "AI", "IT Consulting"],
      website: "https://kwetubest.com/",
      color: "#D4A574",
    },
  ];

  const coreTeam = [
    {
      name: "Muhigiri Ashuza Albin",
      org: "African STEM Resources Hub",
      role: "Technical Lead & AI Specialist",
      specialization: "Audio AI, Generative Models, Educational AI Systems, Microsoft Learn Ambassador",
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
      role: "Co-Founder, Research & Model Optimization",
      specialization: "ML Research, Model Optimization, PhD Candidate (VU Amsterdam)",
      links: [
        { label: "VU Amsterdam", url: "https://vu.nl/en/" },
        { label: "STEM Hub", url: "https://stemrh.org/" },
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
      specialization: "Deep Learning, NLP, Cloud Infrastructure, PyTorch, JAX, Production ML",
      links: [],
    },
    {
      name: "Marius Nshombo",
      org: "Muruhula.com",
      role: "Mashi Language Custodian & Validation Lead",
      specialization: "Mashi Lexicon, Language Documentation, 8+ Years Preservation, BND-French Bilingual Resource",
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
      org: "ISTI-CNR, Pisa",
      role: "Distributed Systems & Data Architecture",
      specialization: "Cloud/Edge Computing, Knowledge Distillation, Federated Learning, Computer Vision, 6+ Publications",
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=mbasa" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/joaquim-mbasa-7934611b4/" },
        { label: "ISTI-CNR", url: "https://www.isti.cnr.it/en/" },
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
                className="rounded-2xl border border-black/5 bg-white p-8 animate-fade-in-up hover:shadow-lg transition"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-black">
                      {org.name}
                    </h4>
                    <p className="text-sm text-black/50 mt-1">
                      {org.location}
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: org.color }}
                  >
                    {org.role}
                  </span>
                </div>

                <p className="text-sm leading-6 text-black/70 mb-4">
                  {org.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {org.focus.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 rounded text-xs font-medium text-black/60 bg-black/5"
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
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#3B7D91] transition"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Core Team</h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreTeam.map((member, index) => (
              <div
                key={member.name}
                className="rounded-2xl border border-black/5 bg-white p-6 animate-fade-in-up hover:shadow-lg transition"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                {/* Avatar placeholder */}
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[#3B7D91]/20 to-[#D4A574]/20 flex items-center justify-center mb-4 text-3xl font-bold text-[#3B7D91]/30">
                  {member.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                </div>

                <h4 className="font-bold text-black text-sm">
                  {member.name}
                </h4>

                <p className="text-xs text-black/50 mt-1">
                  {member.org}
                </p>

                <p className="text-sm font-semibold text-[#3B7D91] mt-2">
                  {member.role}
                </p>

                <p className="text-xs text-black/60 mt-2 leading-5">
                  {member.specialization}
                </p>

                {member.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded text-xs font-medium text-white bg-[#3B7D91] hover:bg-[#2D6478] transition"
                      >
                        {link.label}
                      </a>
                    ))}
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
