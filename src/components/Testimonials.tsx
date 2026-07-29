import React, { useState } from 'react';
import { TESTIMONIALS_LIST, PERSONAL_INFO } from '../data/portfolioData';
import { Star, Quote, ChevronLeft, ChevronRight, Award, ShieldCheck, Zap } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const currentTesti = TESTIMONIALS_LIST[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length);
  };

  return (
    <section className="py-24 lg:py-36 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Client Quote Card (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-white/10 rounded-[32px] p-8 sm:p-12 relative shadow-2xl">
              
              <Quote className="w-12 h-12 text-[#C7FF00]/30 mb-6" />

              {/* Impact Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7FF00]/10 border border-[#C7FF00]/30 text-xs font-mono font-bold text-[#C7FF00] mb-6">
                <Zap className="w-3.5 h-3.5" />
                <span>{currentTesti.impactTag}</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTesti.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C7FF00] text-[#C7FF00]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-2xl text-white font-display font-medium leading-relaxed mb-8">
                "{currentTesti.quote}"
              </blockquote>

              {/* Author Info & Navigation Controls */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={currentTesti.avatarUrl}
                    alt={currentTesti.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#C7FF00]"
                  />
                  <div>
                    <p className="text-base font-bold text-white font-display">
                      {currentTesti.author}
                    </p>
                    <p className="text-xs text-[#808080]">
                      {currentTesti.role} at <span className="text-[#B5B5B5] font-semibold">{currentTesti.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Stat Cards (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Google Rating Stat Card */}
            <div className="bg-[#141414] border border-white/10 rounded-[28px] p-8 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C7FF00] text-[#C7FF00]" />
                  ))}
                  <span className="text-xs font-mono font-bold text-[#C7FF00] ml-2">5.0 / 5.0</span>
                </div>
                <h4 className="text-2xl font-bold text-white font-display">
                  Client Rating
                </h4>
                <p className="text-xs text-[#808080] mt-1">Verified Client Reviews & System Audits</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#C7FF00]/10 text-[#C7FF00] border border-[#C7FF00]/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
            </div>

            {/* Satisfaction Stat Card */}
            <div className="bg-[#141414] border border-white/10 rounded-[28px] p-8 flex items-center justify-between">
              <div>
                <p className="text-4xl sm:text-5xl font-extrabold text-[#C7FF00] font-display">
                  {PERSONAL_INFO.stats.clientSatisfaction}
                </p>
                <h4 className="text-lg font-bold text-white font-display mt-2">
                  Client Satisfaction
                </h4>
                <p className="text-xs text-[#808080] mt-1">Zero-downtime SLA Guarantee</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 text-white border border-white/10">
                <Award className="w-8 h-8" />
              </div>
            </div>

            {/* Workflows Deployed Card */}
            <div className="bg-[#141414] border border-white/10 rounded-[28px] p-8 flex items-center justify-between">
              <div>
                <p className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                  {PERSONAL_INFO.stats.workflowsDeployed}
                </p>
                <h4 className="text-lg font-bold text-[#B5B5B5] font-display mt-2">
                  Automated Workflows
                </h4>
                <p className="text-xs text-[#808080] mt-1">Live in Enterprise Production</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 text-white border border-white/10">
                <Zap className="w-8 h-8 text-[#C7FF00]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
