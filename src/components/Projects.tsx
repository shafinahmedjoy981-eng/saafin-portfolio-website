import React, { useState } from 'react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles, Filter, Play } from 'lucide-react';

interface ProjectsProps {
  onRunDemo: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onRunDemo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Automation', 'AI Agents', 'Creative AI'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-36 bg-[#0B0B0B] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF00] block mb-3">
              Selected Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Featured <span className="text-[#C7FF00]">AI Systems</span> & Builds.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#141414] p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider font-display transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#C7FF00] text-black shadow-md'
                    : 'text-[#B5B5B5] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              className="card-interactive group bg-[#141414] border border-white/10 rounded-[32px] overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 overflow-hidden bg-black/40">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#C7FF00] border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Quick Demo Play Trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRunDemo(project.id);
                  }}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[#C7FF00] hover:bg-[#C7FF00] hover:text-black transition-all group/btn"
                  title="Simulate Agent Workflow"
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>

                {/* Centered Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10 pointer-events-none">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#C7FF00] transition-colors font-display drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Overlay Tags */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 z-10">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#B5B5B5] leading-relaxed line-clamp-2 mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Impact Highlight Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#808080] block">Key Impact</span>
                    <span className="text-sm font-bold text-[#C7FF00] font-display">
                      {project.results[0]}
                    </span>
                  </div>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#C7FF00] text-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRunDemo={onRunDemo}
      />
    </section>
  );
};
