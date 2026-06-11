import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Research from "@/sections/research";

export default function ResearchPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Research />
      </div>
      <Footer />
    </main>
  );
}
