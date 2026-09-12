import { Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_DATA } from '../data/portfolioData';

export function Pricing() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ascending classes for desktop: Free (lowest), Basic (mid), Enterprise (high), Pro (tallest with highlight)
  const getCardAscensionClasses = (id: string) => {
    switch (id) {
      case 'free':
        return 'lg:mt-8 lg:min-h-[500px] border-[#E3E0EE] bg-white/60';
      case 'basic':
        return 'lg:mt-4 lg:min-h-[530px] border-[#E3E0EE] bg-white/70';
      case 'pro':
        return 'lg:-mt-2 lg:min-h-[570px] border-[#7B5CFA] bg-white/95 shadow-[0_20px_50px_rgba(123,92,250,0.18)] ring-2 ring-[#7B5CFA]/40';
      case 'enterprise':
        return 'lg:mt-2 lg:min-h-[545px] border-[#E3E0EE] bg-white/75';
      default:
        return 'border-[#E3E0EE] bg-white/70';
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
            <span>PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
            Simple, Transparent Plans
          </h2>
        </div>

        {/* 4 Cards Side-by-Side: Sized ascending left to right with Pro as tallest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-end">
          {PRICING_DATA.map((plan, idx) => {
            const isPro = plan.isPopular;
            const ascensionStyle = getCardAscensionClasses(plan.id);

            // Staggered floating configurations so each card floats independently and out of sync
            const floatConfigs: Record<string, { duration: number; delay: number; distance: number }> = {
              free: { duration: 4.6, delay: 0, distance: -6 },
              basic: { duration: 5.2, delay: 0.9, distance: -7 },
              pro: { duration: 4.2, delay: 0.3, distance: -8 },
              enterprise: { duration: 4.8, delay: 1.4, distance: -6 },
            };

            const float = floatConfigs[plan.id] || { duration: 4.5, delay: idx * 0.4, distance: -6 };

            return (
              <motion.div
                key={plan.id}
                animate={{
                  y: [0, float.distance, 0],
                }}
                transition={{
                  duration: float.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: float.delay,
                }}
                className="w-full"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 40px -10px rgba(123, 92, 250, 0.25)',
                    transition: { duration: 0.25, ease: 'easeOut' },
                  }}
                  className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between backdrop-blur-[20px] transition-all duration-300 ease-out hover:bg-[#7B5CFA] hover:border-[#7B5CFA] cursor-pointer ${ascensionStyle}`}
                  style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Most Popular Badge on Pro Card */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7B5CFA] text-white group-hover:bg-white group-hover:text-[#7B5CFA] text-[11px] font-extrabold uppercase tracking-widest shadow-md transition-colors">
                      Most Popular
                    </div>
                  )}

                  <div>
                    {/* Tier Title & Tagline */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#15131C] group-hover:text-white transition-colors">{plan.name}</h3>
                      <p className="text-xs text-[#6B6976] group-hover:text-white/85 mt-1 line-clamp-2 transition-colors">{plan.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 my-6 pb-6 border-b border-[#E3E0EE] group-hover:border-white/20 transition-colors">
                      <span className="text-4xl font-black text-[#15131C] group-hover:text-white tracking-tight transition-colors">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs font-semibold text-[#6B6976] group-hover:text-white/80 transition-colors">
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Feature Checklist */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#15131C] group-hover:text-white transition-colors">
                          <span className={`mt-0.5 rounded-full p-0.5 flex-none transition-colors ${isPro ? 'bg-[#7B5CFA] text-white group-hover:bg-white/25 group-hover:text-white' : 'bg-[#EFEDF6] text-[#7B5CFA] group-hover:bg-white/25 group-hover:text-white'}`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    id={`pricing-plan-${plan.id}-btn`}
                    onClick={handleScrollToContact}
                    className={`w-full py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPro
                        ? 'bg-[#7B5CFA] text-white hover:bg-[#6446E0] group-hover:bg-white group-hover:text-[#7B5CFA] shadow-[0_4px_16px_rgba(123,92,250,0.35)]'
                        : 'bg-[#EFEDF6] text-[#15131C] hover:bg-[#7B5CFA] hover:text-white group-hover:bg-white group-hover:text-[#7B5CFA] border border-[#E3E0EE]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
