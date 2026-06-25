import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import Hero from "@/sections/hero";
import Overview from "@/sections/overview";
import Partners from "@/sections/partners";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Overview />

      <Partners />

      <Footer />
    </main>
  );
}