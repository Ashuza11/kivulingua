import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Languages from "@/sections/languages";

export default function LanguagesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Languages />
      </div>
      <Footer />
    </main>
  );
}
