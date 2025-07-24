import ContactFormSection from "@/components/ContactFormSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/AboutSection";
import Button from "@/components/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import Tecnologias from "@/components/Tecnologias";
import QueHacemosSection from "@/components/QueHacemosSection";
import ProyClientes from "@/components/ProyectoClientes";
import IconosTecnologias from "@/components/IconosTecnologias";
import ContactCard from "@/components/ContactDatos";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-start">
      {/* Hero Section */}
      <HeroSection />
      
      <div className="container mx-auto px-6 py-24">
        {/* Sección de Proyectos y Clientes */}
        <ProyClientes />
        
        {/* Secciones principales */}
        <AboutSection />
        <QueHacemosSection />
        
        {/* Componentes de equipo y contacto */}
        <TeamMemberCard />
        <ContactCard />
        <ContactFormSection />
        
        {/* Sección de tecnologías */}
        <Tecnologias />
        <IconosTecnologias />
        
        {/* Pruebas de UI - Sección organizada */}
        <section className="mt-16 p-8 bg-gray-50 dark:bg-slate-800 rounded-lg transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Componentes de UI
          </h2>
          
          {/* Input y Textarea */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Input y Textarea
            </h3>
            <div className="space-y-4">
              <label className="block">
                <span className="sr-only">Campo de texto</span>
                <Input 
                  placeholder="Escribe algo aquí..." 
                  className="w-full"
                />
              </label>
              <label className="block">
                <span className="sr-only">Área de texto</span>
                <Textarea 
                  placeholder="Tu mensaje aquí..." 
                  className="w-full min-h-[100px]"
                />
              </label>
            </div>
          </div>
          
          {/* Botones - Versión mejorada */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Botones
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Button 
                variant="primary" 
                size="xs" 
                className="transition-all hover:scale-105"
              >
                XS
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                className="transition-all hover:scale-105"
              >
                SM
              </Button>
              <Button 
                variant="primary" 
                size="md" 
                className="transition-all hover:scale-105"
              >
                MD
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                className="transition-all hover:scale-105"
              >
                LG
              </Button>
              <Button 
                variant="secondary" 
                size="xl" 
                className="transition-all hover:scale-105"
              >
                XL
              </Button>
              <Button 
                variant="secondary" 
                size="2xl" 
                className="transition-all hover:scale-105"
              >
                2XL
              </Button>
              <Button 
                variant="accent" 
                size="3xl" 
                className="transition-all hover:scale-105"
              >
                3XL
              </Button>
              <Button 
                variant="accent" 
                size="4xl" 
                className="transition-all hover:scale-105"
              >
                4XL
              </Button>
              <Button 
                variant="accent" 
                size="5xl" 
                className="transition-all hover:scale-105"
              >
                5XL
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}