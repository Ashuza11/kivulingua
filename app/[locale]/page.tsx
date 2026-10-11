import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Hero from "@/sections/hero";
import Overview from "@/sections/overview";
import Research from "@/sections/research";
import Projects from "@/sections/projects";
import Affiliations from "@/sections/affiliations";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Overview />

      <Research />

      <Projects />

      <Affiliations />

      <Footer />
    </main>
  );
}
