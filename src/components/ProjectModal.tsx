import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, ArrowUpRight, Cpu, Workflow, ExternalLink, Play } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRunDemo: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRunDemo }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto animate-fadeIn">
      <div className="bg-[#181818] border border-white/15 rounded-[32px] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-64 sm:h-80 rounded-[24px] overflow-hidden mb-8 border border-white/10">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase px-3 py-1 bg-[#C7FF00] text-black font-bold rounded-full">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-2">
                {project.title}
              </h2>
            </div>
            <p className="text-xs text-[#B5B5B5] font-mono">Client: {project.client}</p>
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-3 gap-4 mb-8 bg-[#141414] p-5 rounded-2xl border border-white/10">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-[#C7FF00] font-display">{m.value}</p>
              <p className="text-[11px] text-[#808080] uppercase tracking-wider mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase text-[#808080] tracking-wider mb-2">Project Architecture & Overview</h3>
          <p className="text-base text-[#B5B5B5] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Results & Key Outcomes */}
        <div className="mb-8 bg-[#141414] p-6 rounded-2xl border border-white/10">
          <h3 className="text-xs font-mono uppercase text-[#C7FF00] tracking-wider mb-4">Quantifiable Impact & Results</h3>
          <ul className="space-y-3">
            {project.results.map((res, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-[#C7FF00] mt-0.5 shrink-0" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase text-[#808080] tracking-wider mb-3">Tech Stack & APIs</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => {
              onClose();
              onRunDemo(project.id);
            }}
            className="w-full sm:flex-1 py-4 px-6 text-center font-bold text-black bg-[#C7FF00] rounded-full hover:bg-[#D7FF2F] font-display flex items-center justify-center gap-2 transition-all"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>Simulate Agent Pipeline</span>
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto py-4 px-8 text-center font-semibold text-white bg-white/5 border border-white/15 rounded-full hover:bg-white/10 font-display transition-all"
          >
            Build Similar Engine
          </a>
        </div>

      </div>
    </div>
  );
};
