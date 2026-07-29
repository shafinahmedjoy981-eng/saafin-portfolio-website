import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10 pt-20 pb-12 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Wordmark & Back-to-top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <a href="#" className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight flex items-center gap-1">
              <span>SHAFIN</span>
              <span className="text-[#C7FF00]">.</span>
            </a>
            <p className="text-sm text-[#808080] mt-2 max-w-md">
              AI Agent Developer & Automation Architect. Building high-throughput autonomous business infrastructure.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] border border-white/10 hover:border-[#C7FF00] text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#C7FF00] transition-all group"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* 4 Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-white/10">
          
          {/* Col 1: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#C7FF00] tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-[#B5B5B5]">
              <li><a href="#about" className="hover:text-white transition-colors">About SHAFIN</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Core Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Builds</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Engineering Matrix</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">6-Step Methodology</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#C7FF00] tracking-widest mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-sm text-[#B5B5B5]">
              <li><a href="#services" className="hover:text-white transition-colors">AI Agent Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">n8n Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">CRM & Lead Gen Engines</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Creative AI & Video Systems</a></li>
            </ul>
          </div>

          {/* Col 3: Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#C7FF00] tracking-widest mb-4">Integrations</h4>
            <ul className="space-y-2.5 text-sm text-[#B5B5B5]">
              <li><span className="text-[#808080]">n8n & Make Pipelines</span></li>
              <li><span className="text-[#808080]">Gemini & OpenAI API</span></li>
              <li><span className="text-[#808080]">HubSpot & GoHighLevel</span></li>
              <li><span className="text-[#808080]">Twilio & Pinecone DB</span></li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#C7FF00] tracking-widest mb-4">Social & Direct</h4>
            <div className="flex gap-3 mb-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#141414] border border-white/10 hover:border-[#C7FF00] text-white hover:text-[#C7FF00] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#141414] border border-white/10 hover:border-[#C7FF00] text-white hover:text-[#C7FF00] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-[#141414] border border-white/10 hover:border-[#C7FF00] text-white hover:text-[#C7FF00] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-[#808080] font-mono">
              Inquiries: {PERSONAL_INFO.email}
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#808080]">
          <p>© {new Date().getFullYear()} SHAFIN. All rights reserved. High-End Dark Aesthetic Build.</p>
          <div className="flex items-center gap-2 text-[#C7FF00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Awwwards / Framer-Level Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
