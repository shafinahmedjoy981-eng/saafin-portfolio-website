import { ArrowUpRight, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export function CtaBanner() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta-banner"
      className="relative w-full py-24 lg:py-32 overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #15121F 0%, #1F1930 100%)',
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7B5CFA]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#7B5CFA_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-[#E3E0EE] mb-8"
        >
          <Cpu className="w-3.5 h-3.5 text-[#7B5CFA]" />
          <span>FROM MANUAL WORK TO AUTOMATED SYSTEMS</span>
        </motion.div>

        {/* Large bold headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] max-w-4xl mb-6"
        >
          Your Business Runs on Repetitive Tasks. Let's Turn Them Into an{' '}
          <span className="text-[#7B5CFA]">Autonomous System</span>.
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-[#E3E0EE]/80 leading-relaxed max-w-2xl mb-10"
        >
          From CRM workflows to AI agents built on n8n, I design automation that saves hours every week — so you can focus on what actually grows the business.
        </motion.p>

        {/* Two buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            id="cta-start-project-btn"
            onClick={() => handleScrollTo('#contact')}
            className="px-8 py-3.5 rounded-full text-base font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] shadow-[0_8px_24px_rgba(123,92,250,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            id="cta-see-work-btn"
            onClick={() => handleScrollTo('#projects')}
            className="px-8 py-3.5 rounded-full text-base font-bold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <span>See My Work</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
