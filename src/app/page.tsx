import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/AboutSection";
import Button from "@/components/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import Tecnologias from "@/components/Tecnologias";
import QueHacemosSection from "@/components/QueHacemosSection";
import ProyClientes from "@/components/ProyectoClientes";
import IconosTecnologias from "@/components/IconosTecnologias";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-start">
      <HeroSection />
      <div className="container mx-auto px-6 py-24">
        <HeroSection />
        <ProyClientes />
        <br />
        <AboutSection />
        <QueHacemosSection />
        <Tecnologias />
        <IconosTecnologias />
      </div>
    </main>
  );
}
