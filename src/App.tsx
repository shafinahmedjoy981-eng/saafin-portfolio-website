import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesMarquee } from './components/ServicesMarquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { CtaBand } from './components/CtaBand';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { WorkProcess } from './components/WorkProcess';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/ParticlesBackground';
import { AiAgentSimulatorModal } from './components/AiAgentSimulatorModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoProjectId, setSelectedDemoProjectId] = useState<string | undefined>(undefined);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenDemo = (projectId?: string) => {
    setSelectedDemoProjectId(projectId);
    setIsDemoModalOpen(true);
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planTitle: string) => {
    setPrefilledService(`Pricing Package: ${planTitle}`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#0B0B0B] text-[#B5B5B5] min-h-screen selection:bg-[#C7FF00] selection:text-black font-sans">
      {/* Background Floating Subtle Ambient Particles */}
      <ParticlesBackground />

      {/* Navigation Bar */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenDemo={() => handleOpenDemo()} />
        <ServicesMarquee />
        <About />
        <Services onSelectServiceForContact={handleSelectServiceForContact} />
        <CtaBand onOpenDemo={() => handleOpenDemo()} />
        <Projects onRunDemo={(id) => handleOpenDemo(id)} />
        <Skills />
        <WorkProcess />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Testimonials />
        <Contact prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive AI Agent Simulator Modal */}
      <AiAgentSimulatorModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialProjectId={selectedDemoProjectId}
      />
    </div>
  );
}
