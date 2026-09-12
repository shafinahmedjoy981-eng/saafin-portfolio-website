import type { ComponentType } from 'react';
import { 
  Bot, 
  Workflow, 
  CalendarCheck2, 
  LayoutTemplate, 
  Layers, 
  Code2 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import type { Service } from '../types';

const ICON_COMPONENTS: Record<string, ComponentType<{ className?: string }>> = {
  Bot,
  Workflow,
  CalendarCheck2,
  LayoutTemplate,
  Layers,
  Code2,
};

interface ServiceCardProps {
  key?: string;
  service: Service;
  index: number;
  setIndex: number;
}

function ServiceCard({ service, index, setIndex }: ServiceCardProps) {
  const IconComponent = ICON_COMPONENTS[service.iconName] || Layers;

  return (
    <div
      id={`service-card-${service.id}-s${setIndex}-${index}`}
      className="w-[320px] sm:w-[350px] lg:w-[370px] shrink-0 min-h-[260px] p-8 rounded-3xl bg-[#EFEDF6] border border-[#E3E0EE] flex flex-col justify-between group transition-all duration-300 ease-out hover:-translate-y-2.5 hover:bg-[#7B5CFA] hover:border-[#7B5CFA] hover:shadow-[0_20px_40px_-10px_rgba(123,92,250,0.3)] cursor-default select-none"
    >
      <div>
        <div className="w-14 h-14 rounded-2xl bg-white border border-[#E3E0EE] shadow-xs flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-white/20 group-hover:border-white/30 transition-all">
          <IconComponent className="w-6 h-6 text-[#7B5CFA] group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-[#15131C] mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-[#6B6976] group-hover:text-white/90 leading-relaxed transition-colors">
          {service.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#E3E0EE] group-hover:border-white/20 flex items-center justify-between text-xs font-semibold text-[#6B6976] group-hover:text-white/80 transition-colors">
        <span>Tailored Solution</span>
        <span className="text-[#7B5CFA] group-hover:text-white font-bold transition-colors">Architecture</span>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
            <span>SERVICES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
            Solutions I Design & Build
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Strip (Continuous automatic drift from left to right) */}
      <div className="relative w-full overflow-hidden pt-4 pb-8 marquee-container">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-[#F7F6FB] via-[#F7F6FB]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-[#F7F6FB] via-[#F7F6FB]/80 to-transparent z-10" />

        {/* Marquee Track with 2 identical sets for seamless continuous looping */}
        <div className="marquee-track-right">
          {/* First Set */}
          <div className="flex gap-6 pr-6 shrink-0">
            {SERVICES_DATA.map((service, idx) => (
              <ServiceCard
                key={`set1-${service.id}-${idx}`}
                service={service}
                index={idx}
                setIndex={1}
              />
            ))}
          </div>

          {/* Second Set (identical for seamless infinite loop) */}
          <div className="flex gap-6 pr-6 shrink-0">
            {SERVICES_DATA.map((service, idx) => (
              <ServiceCard
                key={`set2-${service.id}-${idx}`}
                service={service}
                index={idx}
                setIndex={2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
