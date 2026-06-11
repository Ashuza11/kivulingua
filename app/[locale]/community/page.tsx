import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Community from "@/sections/community";

export default function CommunityPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Community />
      </div>
      <Footer />
    </main>
  );
}
