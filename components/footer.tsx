"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { useLocale } from "next-intl";

export default function Footer() {
    const locale = useLocale();
    const whatsappNumber = "+250782672288";
    const whatsappMessage = "Hello KivuLingua AI Team!";
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <footer className="relative bg-white pt-16 pb-16">
            {/* Thin Bouncing Border Separator */}
            <style>{`
                @keyframes gentleBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-2px); }
                }
                .footer-border {
                    animation: gentleBounce 2s ease-in-out infinite;
                }
            `}</style>

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B7D91]/30 via-[#D4A574]/60 to-[#3B7D91]/30 footer-border" />

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Logo Only */}
                    <div className="md:col-span-2">
                        <Link href={`/${locale}`} className="inline-block mb-6">
                            <Image
                                src="/kivuliguaAI_logo.svg"
                                alt="KivuLingua Logo"
                                width={70}
                                height={70}
                                className="object-contain hover:scale-110 transition duration-300"
                            />
                        </Link>

                        <p className="text-sm leading-6 text-black/60">
                            Building open speech AI and linguistic datasets for underrepresented Bantu languages across Eastern Congo through community collaboration and scientific excellence.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="font-bold text-black mb-4">Contact</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:ashuzamh@gmail.com"
                                className="flex items-center gap-2 text-sm text-black/70 hover:text-[#3B7D91] transition"
                            >
                                <Mail size={16} />
                                ashuzamh@gmail.com
                            </a>

                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-black/70" />
                                <span className="text-sm text-black/70">+250 782 672 288</span>
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.912 1.243l-.234.14-.242-. .096-1.505.335-2.87 1.247-3.897 2.57-1.027 1.323-1.627 3.073-1.627 4.906 0 1.141.287 2.25.826 3.214l.188.361-.362 1.312 1.362-.354.363.176c.959.469 1.997.74 3.048.74 2.368 0 4.599-.92 6.271-2.593 1.672-1.671 2.592-3.903 2.592-6.271 0-1.68-.43-3.255-1.25-4.633-. 1.25-1.25 1.25-1.25-1.25" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Website & Social Media */}
                    <div>
                        <h4 className="font-bold text-black mb-4">Follow Us</h4>
                        <div className="space-y-4">
                            <a
                                href="https://kivulinguaai.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-black/70 hover:text-[#3B7D91] transition"
                            >
                                <Globe size={16} />
                                Visit Website
                            </a>

                            <div className="space-y-2 pt-2">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-black/70 hover:text-[#3B7D91] transition"
                                >
                                    → GitHub
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-black/70 hover:text-[#3B7D91] transition"
                                >
                                    → LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-black/70 hover:text-[#3B7D91] transition"
                                >
                                    → Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partners - Same Size Logos */}
                <div className="mt-12 pt-8">
                    <h4 className="font-bold text-black mb-8">Project Partners</h4>
                    <div className="flex flex-wrap gap-12 items-center justify-start">
                        <Image
                            src="/Patners/stem-rh-logo.png"
                            alt="African STEM Resources Hub"
                            width={160}
                            height={80}
                            className="object-contain h-12 w-auto"
                        />
                        <Image
                            src="/Patners/kwetubest-blue 1.png"
                            alt="Kwetu Best Technologies"
                            width={160}
                            height={80}
                            className="object-contain h-12 w-auto"
                        />
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 text-center text-sm text-black/50">
                    © 2026 KivuLingua AI. Preserving African Languages Through Open Science
                </div>
            </div>
        </footer>
    );
}
