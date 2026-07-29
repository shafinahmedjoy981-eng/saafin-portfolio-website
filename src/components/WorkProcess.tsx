import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle2, Sparkles, Zap } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 lg:py-36 bg-[#0B0B0B] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF00] block mb-3">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Six-Step <span className="text-[#C7FF00]">Engineering Process</span>.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B5B5B5] max-w-md">
            From initial operational audit to live multi-agent deployment, every step is structured for zero downtime and max predictability.
          </p>
        </div>

        {/* 6 Process Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => {
            const isFeatured = step.isFeatured;
            return (
              <div
                key={step.number}
                tabIndex={0}
                className={`relative rounded-[30px] p-8 flex flex-col justify-between cursor-pointer ${
                  isFeatured
                    ? 'card-interactive-featured bg-[#181818] border-2 border-[#C7FF00] shadow-[0_0_40px_rgba(199,255,0,0.25)] scale-[1.03] lg:-translate-y-2'
                    : 'card-interactive bg-[#141414] border border-white/10'
                }`}
              >
                {/* Featured Badge for Step 03 */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 bg-[#C7FF00] text-black font-extrabold text-[10px] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    <span>Core Engineering Phase</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-4xl font-extrabold font-display ${isFeatured ? 'text-[#C7FF00]' : 'text-white/30'}`}>
                      {step.number}
                    </span>
                    <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-white/5 text-[#B5B5B5]">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#B5B5B5] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] font-mono uppercase text-[#808080] mb-3">Key Deliverables</p>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#B5B5B5]">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isFeatured ? 'text-[#C7FF00]' : 'text-[#808080]'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
