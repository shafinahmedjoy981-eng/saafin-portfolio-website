import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS_DATA } from '../data/portfolioData';

export function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
            <span>HOW I WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
            Six-Step Engineering Process
          </h2>
        </div>

        {/* 3 columns x 2 rows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS_DATA.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 35px -10px rgba(123, 92, 250, 0.22)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="p-8 rounded-3xl bg-[#EFEDF6] border border-[#E3E0EE] flex flex-col justify-between transition-all duration-300 ease-out hover:bg-[#7B5CFA] hover:border-[#7B5CFA] cursor-pointer group"
            >
              <div>
                {/* Number indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-white border border-[#E3E0EE] shadow-xs flex items-center justify-center text-lg font-black text-[#7B5CFA] group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6976]/70 group-hover:text-white/80 transition-colors">
                    Phase {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#15131C] group-hover:text-white transition-colors mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#6B6976] group-hover:text-white/90 leading-relaxed transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Bottom flow badge */}
              <div className="pt-6 mt-6 border-t border-[#E3E0EE] group-hover:border-white/20 flex items-center justify-between text-xs font-bold text-[#6B6976] group-hover:text-white/80 transition-colors">
                <span>Stage Milestone</span>
                <ArrowRight className="w-4 h-4 text-[#7B5CFA] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
