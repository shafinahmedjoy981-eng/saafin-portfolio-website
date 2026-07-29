import React from 'react';
import { ArrowUpRight, Sparkles, Bot } from 'lucide-react';

interface CtaBandProps {
  onOpenDemo: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#0B0B0B] relative overflow-hidden border-y border-white/10">
      {/* Ambient Gradient Background Glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(199,255,0,0.18),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#C7FF00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#C7FF00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        
        {/* Floating Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono uppercase tracking-widest text-[#C7FF00] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Operational Bottlenecks</span>
        </div>

        {/* Oversized Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display mb-8 max-w-4xl tracking-tight">
          Ready to Turn Manual Overhead Into an <span className="text-[#C7FF00]">Autonomous AI Engine?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#B5B5B5] max-w-2xl mb-10 leading-relaxed">
          Let's design a custom agent ecosystem or n8n pipeline tailored to your tech stack. Zero fluff, maximum ROI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-9 py-4 text-lg font-bold text-black bg-[#C7FF00] rounded-full hover:bg-[#D7FF2F] hover:shadow-[0_0_40px_rgba(199,255,0,0.5)] hover:scale-[1.03] transition-all duration-200 font-display"
          >
            <span>Book AI Architecture Call</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/15 rounded-full hover:bg-white/10 hover:border-[#C7FF00]/50 transition-all duration-200 font-display"
          >
            <Bot className="w-4 h-4 text-[#C7FF00]" />
            <span>Test Agents Live</span>
          </button>
        </div>

      </div>
    </section>
  );
};
