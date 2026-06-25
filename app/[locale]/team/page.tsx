import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Team from "@/sections/team";

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Team />
      </div>
      <Footer />
    </main>
  );
}
