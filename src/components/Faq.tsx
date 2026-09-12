import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/portfolioData';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion / Expandable List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                id={`faq-item-${index + 1}`}
                className={`rounded-2xl sm:rounded-3xl border backdrop-blur-[20px] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#7B5CFA]/50 shadow-[0_10px_30px_-10px_rgba(123,92,250,0.12)]'
                    : 'bg-white/80 border-[#E3E0EE] hover:border-[#7B5CFA]/40 hover:bg-white'
                }`}
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left cursor-pointer group gap-4"
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-[#7B5CFA]' : 'text-[#15131C] group-hover:text-[#7B5CFA]'
                    }`}
                  >
                    {item.question}
                  </span>

                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#7B5CFA] text-white border-[#7B5CFA] rotate-180 shadow-xs'
                        : 'bg-[#EFEDF6] text-[#15131C] border-[#E3E0EE] group-hover:border-[#7B5CFA]/40 group-hover:text-[#7B5CFA]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-[#E3E0EE]/50 text-sm sm:text-base text-[#6B6976] leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
