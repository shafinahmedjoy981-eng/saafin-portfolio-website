import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
            <span>TECHNICAL PROFICIENCY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
            Mastery & Engineering Matrix
          </h2>
        </div>

        {/* 3 columns x 2 rows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((skill, idx) => (
            <motion.div
              key={skill.id}
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
                {/* Header: Skill Name & Percentage Display */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-[#15131C] group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-2xl font-black text-[#7B5CFA] group-hover:text-white tabular-nums transition-colors">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Animated Horizontal Progress Bar */}
                <div className="w-full h-3 rounded-full bg-white border border-[#E3E0EE] group-hover:bg-white/20 group-hover:border-white/30 overflow-hidden p-0.5 mb-6 transition-colors">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#7B5CFA] to-[#6446E0] group-hover:from-white group-hover:to-white/90 transition-all"
                  />
                </div>
              </div>

              {/* Verified badge */}
              <div className="pt-4 border-t border-[#E3E0EE] group-hover:border-white/20 flex items-center justify-between text-xs font-semibold text-[#6B6976] group-hover:text-white/80 transition-colors">
                <span className="flex items-center gap-1.5 text-[#15131C] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7B5CFA] group-hover:text-white transition-colors" />
                  <span>Production Ready</span>
                </span>
                <span className="group-hover:text-white/80 transition-colors">Level {skill.percentage >= 85 ? 'Senior' : 'Advanced'}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
