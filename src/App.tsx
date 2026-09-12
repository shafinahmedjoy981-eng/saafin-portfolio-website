import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CtaBanner } from './components/CtaBanner';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6FB] text-[#15131C] selection:bg-[#7B5CFA]/20 selection:text-[#7B5CFA]">
      {/* 1. Header / Navigation */}
      <Header />

      {/* Main Single-Page Content in Exact Order */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 4.1 Hero Section */}
        <Hero />

        {/* 4.2 About Section */}
        <About />

        {/* 4.3 Selected Projects Section */}
        <Projects />

        {/* 4.4 Statement / CTA Banner Section */}
        <CtaBanner />

        {/* 4.5 Services Section */}
        <Services />

        {/* 4.6 Technical Proficiency Section */}
        <Skills />

        {/* 4.7 Process Section */}
        <Process />

        {/* 4.8 Pricing Section */}
        <Pricing />

        {/* 4.9 FAQ Section */}
        <Faq />

        {/* 4.10 Testimonials Section */}
        <Testimonials />

        {/* 4.11 Contact Section */}
        <Contact />
      </main>

      {/* 4.11 Footer */}
      <Footer />
    </div>
  );
}
