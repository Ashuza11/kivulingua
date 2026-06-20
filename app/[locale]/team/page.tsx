import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeamPage from "@/sections/team-page";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <TeamPage />
      </div>
      <Footer />
    </main>
  );
}
