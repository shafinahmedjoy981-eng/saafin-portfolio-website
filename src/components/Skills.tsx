import React, { useEffect, useState, useRef } from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { Cpu, Workflow, Terminal, Code2, Database, Sparkles, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#C7FF00]" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#C7FF00]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#C7FF00]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#C7FF00]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#C7FF00]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#C7FF00]" />;
      default: return <Cpu className="w-5 h-5 text-[#C7FF00]" />;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 lg:py-36 bg-[#141414] border-t border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF00] block mb-3">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-4">
            Mastery & <span className="text-[#C7FF00]">Engineering Matrix</span>.
          </h2>
          <p className="text-base text-[#B5B5B5]">
            Deep domain expertise across autonomous AI orchestration, workflow engine design, and custom API architecture.
          </p>
        </div>

        {/* 6 Glass Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_LIST.map((skill) => (
            <div
              key={skill.id}
              tabIndex={0}
              className="card-interactive bg-[#181818]/80 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
                      {getIcon(skill.iconName)}
                    </div>
                    <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 text-[#B5B5B5]">
                      {skill.category}
                    </span>
                  </div>

                  {/* Percentage Display */}
                  <span className="text-3xl font-extrabold text-[#C7FF00] font-display">
                    {skill.percentage}%
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-[#B5B5B5] leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-black/80 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#C7FF00]/80 to-[#C7FF00] rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                  }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
