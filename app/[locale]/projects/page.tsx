import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projects from "@/sections/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
