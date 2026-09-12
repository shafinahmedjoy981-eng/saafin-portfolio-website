import { type MouseEvent } from 'react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = (e: MouseEvent) => {
    // Generates a well-formatted professional plain-text/printable CV summary as a downloadable file
    e.preventDefault();
    const cvContent = `AHMED SAAFIN (SHAFIN)
Full-Stack Software Developer & AI Solutions Architect
Email: shafinahmedjoy981@gmail.com
LinkedIn: https://www.linkedin.com/in/shafin-ahmed-joy
Location: Dhaka, Bangladesh / Remote Global

------------------------------------------------------------
SUMMARY
Full-Stack Developer & AI Solutions Architect with 5+ years of experience
crafting scalable web applications, SaaS platforms, and intelligent automation systems.
Specialized in Python, Django, Django REST Framework, PostgreSQL, React, and n8n.

CORE PROFICIENCIES
• AI & Automation: n8n, AI Agents, RAG Pipelines, OpenAI API, Vector Databases
• Backend: Python, Django, DRF, Node.js, Express, PostgreSQL, REST APIs
• Frontend: React, TypeScript, Tailwind CSS, Framer Motion, Responsive UI
• Business Systems: HubSpot CRM Management, Real-time Booking, Vector File Processing

KEY PROJECTS
1. DocuMorph: All-in-one PDF & image vector SaaS platform
2. Lumina Dental Studio: Multi-specialty clinic booking and doctor management platform
3. AI Marketing Automation (n8n): End-to-end multi-platform content generation pipeline
4. NexaBot: Enterprise RAG-powered customer intelligence assistant

------------------------------------------------------------
Available for freelance contracts, full-stack builds, and enterprise automation.`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shafin_Ahmed_Saafin_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100vh-5rem)] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-between bg-[#0C0A14]"
    >
      {/* Full-bleed background image covering the entire Hero section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-bg.png"
          alt="Shafin Ahmed"
          className="w-full h-full object-cover object-[75%_center] sm:object-[70%_center] lg:object-[68%_center]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/hero_bg.png';
          }}
        />
      </div>

      {/* Soft dark gradient overlay on the left side, fading to transparent toward the right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0C0A14]/95 via-[#0C0A14]/85 via-35% sm:via-[#0C0A14]/75 sm:via-45% lg:via-[#0C0A14]/60 lg:via-55% to-transparent pointer-events-none" />
      {/* Soft vertical gradient on mobile to ensure top and bottom readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0C0A14]/80 via-transparent to-[#0C0A14]/60 lg:hidden pointer-events-none" />
      {/* Subtle bottom fade to blend smoothly into the light page background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-0 bg-gradient-to-t from-[#F7F6FB] via-[#F7F6FB]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content - Fully visible immediately */}
          <div className="lg:col-span-7 flex flex-col items-start opacity-100">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white mb-6 shadow-sm">
              <span>HELLO, I'M SHAFIN</span>
            </div>

            {/* Large Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 drop-shadow-sm">
              I Design and Build Software That Makes Business{' '}
              <span className="text-[#A28EFF]">
                Run Smarter.
              </span>
            </h1>

            {/* Short one-line description */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mb-8 font-normal">
              I'm a full-stack developer & AI solutions architect crafting scalable products and intelligent automation systems.
            </p>

            {/* Buttons: Primary Pill & Secondary Outline CV Button */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                id="hero-view-work-btn"
                onClick={() => handleScrollTo('#projects')}
                className="px-7 py-3.5 rounded-full text-base font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] shadow-[0_4px_24px_rgba(123,92,250,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>

              <button
                type="button"
                id="hero-download-cv-btn"
                onClick={handleDownloadCV}
                className="px-7 py-3.5 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#A28EFF]" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating Glass Card placed over the background photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end pb-4 lg:pb-8 min-h-[160px] lg:min-h-[300px] opacity-100">
            {/* Floating frosted-glass card */}
            <div className="w-full max-w-sm sm:max-w-md p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-[24px] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#15131C] uppercase">
                  AVAILABLE FOR FREELANCE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52505C] font-medium leading-snug mb-2">
                Let's work together on your next project.
              </p>
              <button
                type="button"
                id="hero-floating-card-touch-btn"
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7B5CFA] hover:text-[#6446E0] transition-colors cursor-pointer group"
              >
                <span>Get In Touch</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Small "SCROLL DOWN" label with subtle animated arrow, bottom-left */}
        <div className="mt-12 lg:mt-6 pt-6 flex items-center gap-3 opacity-100">
          <button
            type="button"
            onClick={() => handleScrollTo('#about')}
            className="group flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#A28EFF] transition-colors cursor-pointer"
          >
            <span>SCROLL DOWN</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-colors"
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#A28EFF]" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}

