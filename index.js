import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <div className="p-8 grid md:grid-cols-2 gap-6">
        <ProjectCard title="Cool Project" description="This is a fun project I made." />
        <ProjectCard title="Another One" description="This does something awesome." />
      </div>
    </div>
  );
}
