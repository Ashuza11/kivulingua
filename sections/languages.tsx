import { languages } from "@/data/languages";

export default function Languages() {
    return (
        <section
            id="languages"
            className="py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-3xl animate-fade-in-up">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3B7D91] animate-fade-in-down">
                        Language Ecosystem
                    </p>

                    <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Building datasets for underrepresented Bantu languages
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-black/70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        KivuLingua focuses on community-driven speech and language datasets
                        for indigenous languages across Eastern Congo, beginning with Mashi
                        as the flagship pilot infrastructure.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {languages.map((language, index) => (
                        <div
                            key={language.name}
                            className="group rounded-[28px] border border-black/5 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 animate-fade-in-up"
                            style={{ animationDelay: `${0.15 + index * 0.1}s` }}
                        >

                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {language.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-black/50">
                                        ISO 639-3: {language.iso}
                                    </p>
                                </div>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${language.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-[#F8F5F0] text-black/70"
                                        }`}
                                >
                                    {language.status}
                                </span>
                            </div>

                            <div className="mt-8 flex items-center gap-8">

                                <div>
                                    <p className="text-sm text-black/50">
                                        Speakers
                                    </p>

                                    <h4 className="mt-1 text-xl font-bold text-[#3B7D91]">
                                        {language.speakers}
                                    </h4>
                                </div>

                                <div>
                                    <p className="text-sm text-black/50">
                                        Region
                                    </p>

                                    <h4 className="mt-1 text-lg font-semibold">
                                        {language.region}
                                    </h4>
                                </div>
                            </div>

                            <p className="mt-8 leading-7 text-black/70">
                                {language.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}