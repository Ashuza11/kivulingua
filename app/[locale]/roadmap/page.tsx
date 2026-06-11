import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Roadmap from "@/sections/roadmap";

export default function RoadmapPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Roadmap />
      </div>
      <Footer />
    </main>
  );
}
