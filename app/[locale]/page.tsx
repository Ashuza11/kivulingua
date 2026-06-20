import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Hero from "@/sections/hero";
import Objectives from "@/sections/objectives";
import UseCases from "@/sections/use-cases";
import Technology from "@/sections/technology";
import Ethics from "@/sections/ethics";
import Team from "@/sections/team";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Objectives />

      <UseCases />

      <Technology />

      <Ethics />

      <Team />

      <Footer />
    </main>
  );
}