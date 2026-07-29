import React from 'react';
import { PRICING_PLANS } from '../data/portfolioData';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planTitle: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 lg:py-36 bg-[#141414] border-t border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF00] block mb-3">
            Investment & Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-4">
            Transparent <span className="text-[#C7FF00]">System Pricing</span>.
          </h2>
          <p className="text-base text-[#B5B5B5]">
            Predictable flat-fee engagement packages for automation workflows and custom AI agent infrastructure.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                tabIndex={0}
                className={`relative rounded-[32px] p-8 sm:p-10 flex flex-col justify-between cursor-pointer ${
                  isPopular
                    ? 'card-interactive-featured bg-[#181818] border-2 border-[#C7FF00] shadow-[0_10px_50px_rgba(199,255,0,0.22)] scale-[1.03] z-10'
                    : 'card-interactive bg-[#0B0B0B] border border-white/10'
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C7FF00] text-black font-extrabold text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Build</span>
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white font-display mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-[#808080] font-mono mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-[#808080] uppercase">
                      / {plan.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#B5B5B5] leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-10">
                    <p className="text-xs font-mono uppercase text-[#808080] tracking-wider mb-2">What's Included</p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#C7FF00] mt-0.5 shrink-0" />
                        <span className="text-sm text-white font-medium leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.title)}
                  className={`w-full py-4 rounded-full font-bold font-display flex items-center justify-center gap-2 transition-all duration-200 ${
                    isPopular
                      ? 'bg-[#C7FF00] text-black hover:bg-[#D7FF2F] hover:shadow-[0_0_25px_rgba(199,255,0,0.4)] hover:scale-[1.02]'
                      : 'bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-[#C7FF00]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
