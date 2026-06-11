import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Hero from "@/sections/hero";
import Languages from "@/sections/languages";
import Research from "@/sections/research";
import Community from "@/sections/community";
import Roadmap from "@/sections/roadmap";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Languages />

      <Research />

      <Community />

      <Roadmap />

      <Footer />
    </main>
  );
}