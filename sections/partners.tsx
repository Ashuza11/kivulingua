"use client";

import Image from "next/image";
import { useState } from "react";

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners = [
    {
      name: "African STEM Resources Hub",
      image: "/Partners/stem-rh-logo.png",
    },
    {
      name: "Kwetu Best Technologies",
      image: "/Partners/kwetubest.png",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl animate-fade-in-up mb-16">
          <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Project Partners
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/70">
            Working together to build sustainable infrastructure for African language technologies
          </p>
        </div>

        <div className="flex gap-12 items-center justify-start flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-32 w-48 rounded-lg border border-black/10 bg-gray-50 overflow-hidden transition-all duration-300 cursor-pointer ${hoveredIndex === index ? 'border-[#3B7D91]/30' : ''
                }`}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className={`object-contain p-4 transition-all duration-300 ${hoveredIndex === index ? 'grayscale-0' : 'grayscale'
                    }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
