import React from 'react';
import { Bot, Workflow, Cpu, Zap, Target, Video, Image, Code2, Sparkles, Terminal } from 'lucide-react';

export const ServicesMarquee: React.FC = () => {
  const marqueeItems = [
    { label: 'AI Agent Development', icon: Bot },
    { label: 'AI Workflow Automation', icon: Workflow },
    { label: 'Business Automation', icon: Cpu },
    { label: 'CRM Automation', icon: Zap },
    { label: 'Lead Generation', icon: Target },
    { label: 'AI Video Creation', icon: Video },
    { label: 'AI Image Generation', icon: Image },
    { label: 'n8n Automation', icon: Code2 },
    { label: 'API Integration', icon: Sparkles },
    { label: 'Prompt Engineering', icon: Terminal },
  ];

  // Duplicate list to achieve smooth infinite CSS scroll
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="py-8 bg-[#141414] border-y border-white/10 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-black/50 border border-white/10 hover:border-[#C7FF00]/60 hover:bg-[#C7FF00]/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default shrink-0 group"
            >
              <Icon className="w-4 h-4 text-[#C7FF00] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white font-display tracking-wide">
                {item.label}
              </span>
              <span className="text-[#808080] text-xs font-mono ml-2">•</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
