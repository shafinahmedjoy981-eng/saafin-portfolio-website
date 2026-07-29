import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/portfolioData';
import { Service } from '../types';
import { ArrowRight, Bot, Workflow, Target, CheckCircle2, X, Layout, Video, Palette } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#C7FF00]" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-[#C7FF00]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#C7FF00]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#C7FF00]" />;
      case 'Video':
        return <Video className="w-6 h-6 text-[#C7FF00]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#C7FF00]" />;
      default:
        return <Bot className="w-6 h-6 text-[#C7FF00]" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#141414] border-t border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF00] block mb-3">
              Specialized Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Core <span className="text-[#C7FF00]">AI & Automation</span> Services.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B5B5B5] max-w-md">
            Production-grade autonomous agent systems and zero-touch n8n workflow pipelines engineered for high-growth enterprises.
          </p>
        </div>

        {/* 3 Major Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              tabIndex={0}
              className="card-interactive bg-[#181818] border border-white/10 rounded-[30px] overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Card Image Thumbnail Header */}
              <div className="relative h-56 overflow-hidden bg-black/40">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-75 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/40 to-black/30 opacity-90" />
                
                {/* Number Badge Top Left */}
                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-[#C7FF00] font-bold">
                  {service.number}
                </div>

                {/* Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 p-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                  {getIcon(service.icon)}
                </div>

                {/* Centered Overlay Title over Image */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10 pointer-events-none">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#C7FF00] transition-colors font-display drop-shadow-xl px-2 leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-white/5 text-[#B5B5B5] border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#B5B5B5] leading-relaxed line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C7FF00] font-display transition-colors">
                    Learn More & Features
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#C7FF00] text-white group-hover:text-black flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="bg-[#181818] border border-white/15 rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C7FF00] font-bold px-3 py-1 bg-[#C7FF00]/10 rounded-full border border-[#C7FF00]/20">
                Service {selectedService.number}
              </span>
              <span className="text-xs font-mono text-[#808080] uppercase">Architecture Spec</span>
            </div>

            <h3 className="text-3xl font-bold text-white font-display mb-4">
              {selectedService.title}
            </h3>

            <p className="text-base text-[#B5B5B5] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 mb-8">
              <h4 className="text-xs font-mono uppercase text-[#808080] tracking-wider mb-4">
                Key System Capabilities & Deliverables
              </h4>
              <ul className="space-y-3">
                {selectedService.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#C7FF00] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForContact(title);
                }}
                className="flex-1 py-4 text-center font-bold text-black bg-[#C7FF00] rounded-full hover:bg-[#D7FF2F] font-display transition-all"
              >
                Request Proposal for {selectedService.title}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="py-4 px-6 text-center font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 font-display transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
