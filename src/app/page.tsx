import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/AboutSection";
import Tecnologias from "@/components/Tecnologias";
import QueHacemosSection from "@/components/QueHacemosSection"; 
import TeamMemberCard from "@/components/TeamMemberCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-start">
      <HeroSection />
      <div className="container mx-auto px-6 py-24">
        <AboutSection />
        <QueHacemosSection />
        <TeamMemberCard />
        <Tecnologias />
      </div>
    </main>
  );
}
