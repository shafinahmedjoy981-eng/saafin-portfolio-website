import React from 'react';
import { ArrowDownRight, Sparkles, Download, Bot, Play, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Typewriter } from './Typewriter';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const expertiseItems = [
    { num: '01', title: 'AI Agent Orchestration', desc: 'Custom LangChain & Gemini Function Calling' },
    { num: '02', title: 'n8n & Workflow Pipelines', desc: 'Zero-touch enterprise process automation' },
    { num: '03', title: 'CRM & Lead Generation', desc: 'Instant qualification & automated routing' },
    { num: '04', title: 'Creative AI Media Engine', desc: 'High-res image & video generation systems' },
    { num: '05', title: 'Creative AI Website Development', desc: 'High-performance UI/UX & landing pages' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C7FF00]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Main Heading & CTAs (Span 5 on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
            {/* Eyebrow Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#B5B5B5] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C7FF00] animate-ping" />
              <span>Available for High-Impact Projects</span>
            </div>

            {/* Massive H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] font-display mb-6 tracking-tight">
              <span className="text-[#C7FF00]">AI Agent</span> Developer & Automation Architect.
            </h1>

            {/* Animated Typewriter Title */}
            <div className="w-full max-w-xl mb-8 min-h-[64px] sm:min-h-[76px] lg:min-h-[96px] flex items-center justify-start">
              <Typewriter />
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-black bg-[#C7FF00] rounded-full hover:bg-[#D7FF2F] hover:shadow-[0_0_35px_rgba(199,255,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-display"
              >
                <span>Explore Work</span>
                <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>

              <button
                onClick={onOpenDemo}
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-white/5 border border-white/15 rounded-full hover:bg-white/10 hover:border-[#C7FF00]/50 transition-all duration-200 font-display"
              >
                <Play className="w-4 h-4 text-[#C7FF00] fill-[#C7FF00]" />
                <span>Test Live Agents</span>
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">150+</p>
                <p className="text-xs text-[#808080] uppercase tracking-wider mt-1">Workflows</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#C7FF00] font-display">99.4%</p>
                <p className="text-xs text-[#808080] uppercase tracking-wider mt-1">Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-display">&lt; 12s</p>
                <p className="text-xs text-[#808080] uppercase tracking-wider mt-1">Lead SLA</p>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Interactive Visual Avatar Frame & Glowing Rings (Span 4 on Desktop) */}
          <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 my-4 lg:my-0 -translate-y-3 lg:-translate-y-8">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Deep Soft Radial Ambient Neon Glow */}
              <div 
                className="absolute -inset-16 sm:-inset-24 rounded-full pointer-events-none opacity-25 sm:opacity-35 blur-[80px] sm:blur-[110px] animate-glow-breathe"
                style={{
                  background: 'radial-gradient(circle, rgba(199, 240, 0, 0.32) 0%, rgba(199, 240, 0, 0.12) 45%, rgba(199, 240, 0, 0.03) 70%, transparent 85%)'
                }}
              />

              {/* Rotating Neon Light Beam Reflection */}
              <div className="absolute -inset-10 sm:-inset-14 rounded-full pointer-events-none overflow-hidden animate-glow-rotate">
                <div 
                  className="w-full h-full rounded-full opacity-50 sm:opacity-70 blur-[40px] sm:blur-[50px]"
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(199, 240, 0, 0.45) 0deg, transparent 80deg, rgba(199, 240, 0, 0.18) 180deg, transparent 260deg, rgba(199, 240, 0, 0.45) 360deg)'
                  }}
                />
              </div>

              {/* Outer Concentric Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-[#C7FF00]/30 animate-ring-pulse" />
              <div className="absolute -inset-4 rounded-full border border-white/10 scale-105 animate-ring-pulse-delayed" />
              <div className="absolute -inset-8 rounded-full border border-[#C7FF00]/15 scale-110 animate-ring-pulse" />

              {/* Central Frame Wrapper */}
              <div className="relative w-full h-full rounded-full p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden group">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} — AI Agent Developer`}
                  className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glass Badge #1 (Top Left) */}
              <div className="absolute top-4 -left-2 sm:-left-6 bg-black/80 backdrop-blur-xl border border-white/15 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#C7FF00]/20 text-[#C7FF00]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-display">AI Agent Core</p>
                  <p className="text-[10px] text-[#808080]">Autonomous Operations</p>
                </div>
              </div>

              {/* Floating Glass Badge #2 (Bottom Right) */}
              <div className="absolute bottom-6 -right-2 sm:-right-6 bg-black/80 backdrop-blur-xl border border-white/15 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7FF00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C7FF00]"></span>
                </span>
                <div>
                  <p className="text-xs font-bold text-white font-display">n8n Enterprise</p>
                  <p className="text-[10px] text-[#C7FF00] font-mono">Zero-Touch Pipelines</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Numbered Expertise List & Portfolio Spec Download (Span 3 on Desktop) */}
          <div className="lg:col-span-3 flex flex-col justify-between order-3 h-full">
            <div className="bg-[#141414] border border-white/10 rounded-[28px] p-6 lg:p-7 shadow-xl">
              <h3 className="text-xs uppercase tracking-widest text-[#808080] font-mono mb-6">
                Core Specialization
              </h3>

              <div className="divide-y divide-white/10">
                {expertiseItems.map((item) => (
                  <div key={item.num} className="py-4 first:pt-0 last:pb-0 group">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono text-[#C7FF00] font-bold mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#C7FF00] transition-colors font-display">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#808080] mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Spec / Resume Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-white/20 hover:border-[#C7FF00] text-xs font-semibold text-white hover:text-[#C7FF00] hover:bg-[#C7FF00]/5 transition-all duration-200 font-display"
                >
                  <Download className="w-4 h-4 text-[#C7FF00]" />
                  <span>Download Architecture Spec</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
