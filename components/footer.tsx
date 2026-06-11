import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-black/5 bg-white py-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-4">

                    <Image
                        src="/logowhite.png"
                        alt="KivuLingua Logo"
                        width={70}
                        height={70}
                    />

                    <div>
                        <h3 className="text-xl font-bold text-[#3B7D91]">
                            KivuLingua
                        </h3>

                        <p className="mt-1 max-w-md text-sm leading-6 text-black/60">
                            Building open speech AI and linguistic datasets for underrepresented
                            Bantu languages across Eastern Congo.
                        </p>
                    </div>
                </div>

                <div className="text-sm text-black/50">
                    © 2026 KivuLingua — Community-led African Language AI
                </div>
            </div>
        </footer>
    );
}