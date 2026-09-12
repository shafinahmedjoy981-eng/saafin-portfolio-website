import { ArrowUpRight, Mail, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { SHAFIN_PROFILE_IMAGE_URL, SHAFIN_PROFILE_FALLBACK } from '../data/portfolioData';

export function About() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with static layered/offset frame & floating stat badges */}
          <div className="lg:col-span-5 order-1 flex flex-col items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto isolate">
              {/* Soft violet ambient glow behind the offset frame */}
              <div
                aria-hidden="true"
                className="absolute -top-3.5 -left-3.5 w-full h-full bg-[#7B5CFA]/15 rounded-3xl blur-md z-0 pointer-events-none"
              />

              {/* Permanent static layered/offset outlined border box slightly offset behind photo */}
              <div
                aria-hidden="true"
                className="absolute -top-3.5 -left-3.5 w-full h-full rounded-3xl border-2 border-[#7B5CFA] z-0 pointer-events-none"
              />

              {/* Primary photo container */}
              <div className="relative z-10 rounded-3xl overflow-hidden bg-[#EFEDF6] border-2 border-white shadow-[0_20px_45px_rgba(123,92,250,0.12)] aspect-[4/5] w-full">
                <img
                  src="/about-profile.png"
                  alt="Shafin Ahmed"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/shafin_profile.jpg';
                  }}
                />

                {/* Static accent bar along the bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-2.5 bg-[#7B5CFA] z-10 pointer-events-none" />
              </div>

              {/* Permanent static accent pill shape along the bottom edge */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-2 rounded-full bg-[#7B5CFA] shadow-[0_3px_10px_rgba(123,92,250,0.55)] z-20 pointer-events-none"
              />

              {/* Floating Badge 1: "5+ Years Experience" - near top edge, overlapping photo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
                className="absolute -top-4 left-1 sm:-left-4 z-30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E3E0EE] shadow-[0_10px_28px_rgba(21,19,28,0.12)] flex items-center gap-2.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#7B5CFA]" />
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-extrabold text-[#15131C] leading-none">5+</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#6B6976] mt-0.5 leading-tight">Years Experience</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: "100% Code Quality" - near right edge, overlapping photo */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.0, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-5 z-30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E3E0EE] shadow-[0_10px_28px_rgba(21,19,28,0.12)] flex items-center gap-2.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-extrabold text-[#7B5CFA] leading-none">100%</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#6B6976] mt-0.5 leading-tight">Code Quality</span>
                </div>
              </motion.div>
            </div>

            {/* Name and title text below the photo frame */}
            <div className="mt-5 text-center">
              <p className="text-base sm:text-lg font-extrabold text-[#15131C]">Shafin Ahmed</p>
              <p className="text-xs sm:text-sm font-semibold text-[#7B5CFA] mt-0.5">Full-Stack & Intelligent Systems</p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-2 flex flex-col items-start"
          >
            {/* Small eyebrow label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
              <span>ABOUT ME</span>
            </div>

            {/* Headline (large, bold) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C] leading-[1.15] mb-4">
              I Build Full-Stack Products &{' '}
              <span className="text-[#7B5CFA]">AI-Powered Systems</span>
            </h2>

            {/* Sub-headline/title line */}
            <h3 className="text-base sm:text-lg font-bold text-[#15131C]/80 mb-6 pb-2 border-b border-[#E3E0EE] w-full">
              Full-Stack Software Developer · AI Solutions Architect · SaaS Application Developer
            </h3>

            {/* Body paragraph */}
            <p className="text-base sm:text-lg text-[#6B6976] leading-relaxed mb-8">
              I design and build scalable web applications and SaaS platforms using Python, Django, DRF, PostgreSQL and React. Alongside development, I work as an{' '}
              <span className="text-[#7B5CFA] font-bold">AI Solutions Architect</span>, creating intelligent automation systems and CRM workflows that streamline real business operations — from lead management to content publishing. My focus is simple: ship reliable software that actually moves the needle.
            </p>

            {/* Two buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                id="about-view-work-btn"
                onClick={() => handleScrollTo('#projects')}
                className="px-7 py-3 rounded-full text-sm sm:text-base font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] shadow-[0_4px_16px_rgba(123,92,250,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="about-talk-btn"
                onClick={() => handleScrollTo('#contact')}
                className="px-7 py-3 rounded-full text-sm sm:text-base font-bold text-[#15131C] bg-white border border-[#E3E0EE] hover:border-[#7B5CFA] hover:bg-[#EFEDF6] shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Row of social/contact icons */}
            <div className="pt-4 border-t border-[#E3E0EE] w-full flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B6976]">
                Connect Directly:
              </span>
              
              <a
                href="https://www.linkedin.com/in/shafin-ahmed-joy"
                target="_blank"
                rel="noopener noreferrer"
                id="about-social-linkedin"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-semibold text-[#15131C] hover:bg-[#7B5CFA] hover:text-white hover:border-[#7B5CFA] transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:shafinahmedjoy981@gmail.com"
                id="about-social-email"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-semibold text-[#15131C] hover:bg-[#7B5CFA] hover:text-white hover:border-[#7B5CFA] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
