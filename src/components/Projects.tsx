import { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Layers, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCategory, Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

const CATEGORIES: ProjectCategory[] = ['All', 'Web App', 'Custom SaaS', 'Creative Website'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Keyboard accessibility and body scroll-lock for modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeModalProject]);

  const handleCardClick = (project: Project) => {
    if (project.isClickable && project.detail) {
      setActiveModalProject(project);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
            <span>MY WORK</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
            Selected Projects
          </h2>
        </div>

        {/* Filter Bar: Left-aligned pill tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                id={`project-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#7B5CFA] text-white shadow-[0_4px_14px_rgba(123,92,250,0.35)]'
                    : 'bg-[#EFEDF6] text-[#6B6976] hover:text-[#15131C] hover:bg-[#E3E0EE]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 3 columns x 2 rows (stacks to 1 column on mobile) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isClickable = Boolean(project.isClickable && project.detail);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 35px -10px rgba(123, 92, 250, 0.22)',
                    transition: { duration: 0.25, ease: 'easeOut' },
                  }}
                  id={`project-card-${project.id}`}
                  onClick={() => handleCardClick(project)}
                  role={isClickable ? 'button' : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleCardClick(project);
                    }
                  }}
                  className={`group relative rounded-3xl bg-[#EFEDF6] border border-[#E3E0EE] overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:bg-[#7B5CFA] hover:border-[#7B5CFA] ${
                    isClickable ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  {/* Cover Image: Real screenshot for clickable cards, placeholder mockup for concept cards */}
                  {isClickable && project.detail?.imageSrc ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E3E0EE] border-b border-[#E3E0EE]">
                      <img
                        src={project.detail.imageSrc}
                        alt={project.detail.imageAlt || project.imageAlt || project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle gradient overlay to provide depth and contrast for badges */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

                      {/* Category badge overlay */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] font-bold text-[#7B5CFA] uppercase tracking-wider bg-white/95 backdrop-blur-xs border border-white/80 shadow-xs px-2 py-0.5 rounded-md">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover arrow badge */}
                      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 text-[#15131C] shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#7B5CFA] group-hover:text-white transition-all transform group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#E3E0EE] via-[#EFEDF6] to-[#E8E5F7] p-6 flex items-center justify-center border-b border-[#E3E0EE]">
                      {/* Subtle vector grid */}
                      <div className="absolute inset-0 bg-[radial-gradient(#7B5CFA_1px,transparent_1px)] [background-size:14px_14px] opacity-15" />

                      {/* Project thumbnail placeholder UI representation */}
                      <div className="relative z-10 w-full h-full rounded-xl bg-white/80 backdrop-blur-xs border border-white shadow-xs p-4 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E3E0EE]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E3E0EE]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E3E0EE]" />
                          </div>
                          <span className="text-[10px] font-bold text-[#7B5CFA] uppercase tracking-wider bg-[#7B5CFA]/10 px-2 py-0.5 rounded-md">
                            {project.category}
                          </span>
                        </div>

                        <div className="my-auto flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-xl bg-[#7B5CFA]/10 text-[#7B5CFA] flex items-center justify-center mb-2">
                            <Layers className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold text-[#15131C]">{project.cardTitle || project.title}</span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-[#6B6976]">
                          <span>Live Architecture</span>
                          <span className="font-semibold text-[#7B5CFA]">Featured</span>
                        </div>
                      </div>

                      {/* Hover arrow badge */}
                      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 text-[#15131C] shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#7B5CFA] group-hover:text-white transition-all transform group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      {/* Category Tag & Title */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#7B5CFA] group-hover:text-white/90 transition-colors">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#15131C] group-hover:text-white transition-colors mb-2.5 flex items-center justify-between">
                        <span>{project.cardTitle || project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 text-[#15131C] group-hover:text-white transition-all" />
                      </h3>

                      <p className="text-sm text-[#6B6976] group-hover:text-white/90 leading-relaxed line-clamp-3 mb-6 transition-colors">
                        {project.cardDescription || project.description}
                      </p>
                    </div>

                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E3E0EE] group-hover:border-white/20 transition-colors">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/80 text-[#6B6976] border border-[#E3E0EE] group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal / Lightbox rendered via Portal directly to body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeModalProject && activeModalProject.detail && (
            <div
              id="project-detail-modal-root"
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#15131C]/65 backdrop-blur-sm -z-10"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full max-w-3xl max-h-[90vh] my-auto overflow-y-auto rounded-3xl bg-white border border-[#E3E0EE] shadow-[0_24px_60px_rgba(21,19,28,0.25)] p-6 sm:p-8 cursor-default"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EFEDF6] border border-[#E3E0EE] flex items-center justify-center text-[#7B5CFA] shrink-0">
                      <Layers className="w-6 h-6 text-[#7B5CFA]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B5CFA] bg-[#7B5CFA]/10 px-2.5 py-0.5 rounded-full">
                          {activeModalProject.category}
                        </span>
                        <span className="text-[11px] font-semibold text-[#6B6976]">Case Study</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#15131C] mt-1">
                        {activeModalProject.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 rounded-full text-[#6B6976] hover:text-[#15131C] hover:bg-[#EFEDF6] transition-colors cursor-pointer border border-transparent hover:border-[#E3E0EE]"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Browser-style preview frame */}
                {activeModalProject.detail.imageSrc && (
                  <div className="rounded-2xl border border-[#E3E0EE] bg-[#EFEDF6] overflow-hidden shadow-xs mb-6">
                    {/* Browser top window bar */}
                    <div className="px-4 py-2.5 bg-[#EFEDF6] border-b border-[#E3E0EE] flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FD5D57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FEB82B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                      </div>

                      <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-md bg-white/90 border border-[#E3E0EE] text-[11px] text-[#6B6976] font-mono truncate text-center select-all">
                        {activeModalProject.detail.browserUrl || 'https://shafin.dev/preview'}
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-semibold text-[#7B5CFA]">
                        <span className="hidden sm:inline">Live Canvas</span>
                      </div>
                    </div>

                    {/* Screenshot display */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#15131C]/5 overflow-hidden">
                      <img
                        src={activeModalProject.detail.imageSrc}
                        alt={activeModalProject.detail.imageAlt || activeModalProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#15131C] mb-2">
                    Architecture & Implementation
                  </h4>
                  <p className="text-sm sm:text-base text-[#6B6976] leading-relaxed">
                    {activeModalProject.detail.fullDescription}
                  </p>
                </div>

                {/* Primary Live Link Button (if provided, omitted for n8n as requested) */}
                {activeModalProject.detail.liveLinkUrl && (
                  <div className="mb-6">
                    <a
                      href={activeModalProject.detail.liveLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#7B5CFA]/10 hover:bg-[#7B5CFA] text-[#7B5CFA] hover:text-white border border-[#7B5CFA]/20 hover:border-[#7B5CFA] font-bold text-xs sm:text-sm transition-all duration-200 shadow-xs group"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                      <span className="break-all text-left">
                        {activeModalProject.detail.liveLinkText || activeModalProject.detail.liveLinkUrl}
                      </span>
                    </a>
                  </div>
                )}

                {/* Sub-section (e.g. DocuMorph Chrome Extension) */}
                {activeModalProject.detail.subSection && (
                  <div className="pt-6 pb-2 border-t border-[#E3E0EE]/70 mb-6">
                    {/* Browser-style preview frame matching main image */}
                    <div className="rounded-2xl border border-[#E3E0EE] bg-[#EFEDF6] overflow-hidden shadow-xs mb-5">
                      {/* Browser top window bar */}
                      <div className="px-4 py-2.5 bg-[#EFEDF6] border-b border-[#E3E0EE] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FD5D57]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FEB82B]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                        </div>

                        <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-md bg-white/90 border border-[#E3E0EE] text-[11px] text-[#6B6976] font-mono truncate text-center select-all">
                          {activeModalProject.detail.subSection.browserUrl || 'chromewebstore.google.com/detail/documorph'}
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#7B5CFA]">
                          <span className="hidden sm:inline">Chrome Extension</span>
                        </div>
                      </div>

                      {/* Screenshot display */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#15131C]/5 overflow-hidden">
                        <img
                          src={activeModalProject.detail.subSection.imageSrc}
                          alt={activeModalProject.detail.subSection.imageAlt || activeModalProject.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Intro line */}
                    {activeModalProject.detail.subSection.introTitle && (
                      <p className="text-sm sm:text-base font-semibold text-[#15131C] mb-2 leading-snug">
                        {activeModalProject.detail.subSection.introTitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#6B6976] leading-relaxed mb-4">
                      {activeModalProject.detail.subSection.description}
                    </p>

                    {/* Live Link Button */}
                    {activeModalProject.detail.subSection.linkUrl && (
                      <div>
                        <a
                          href={activeModalProject.detail.subSection.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#7B5CFA]/10 hover:bg-[#7B5CFA] text-[#7B5CFA] hover:text-white border border-[#7B5CFA]/20 hover:border-[#7B5CFA] font-bold text-xs sm:text-sm transition-all duration-200 shadow-xs group"
                        >
                          <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                          <span className="break-all text-left">
                            {activeModalProject.detail.subSection.linkText || activeModalProject.detail.subSection.linkUrl}
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Extra plain text links (for PureNest Cleaning / Creative Website) */}
                {activeModalProject.detail.extraLinks && activeModalProject.detail.extraLinks.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#EFEDF6]/70 border border-[#E3E0EE] mb-6">
                    <p className="text-xs sm:text-sm font-bold text-[#15131C] mb-3">
                      {activeModalProject.detail.extraLinksTitle || 'Want to explore more creative work like this? Check out a few more:'}
                    </p>
                    <ul className="space-y-2">
                      {activeModalProject.detail.extraLinks.map((link) => (
                        <li key={link.url}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7B5CFA] hover:text-[#5835E5] hover:underline break-all"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                            <span>{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Polished closing line (for PureNest Cleaning) */}
                {activeModalProject.detail.closingText && (
                  <p className="text-xs sm:text-sm text-[#6B6976] italic border-l-2 border-[#7B5CFA] pl-3 py-1 mb-6 bg-[#EFEDF6]/40 rounded-r-lg">
                    {activeModalProject.detail.closingText}
                  </p>
                )}

                {/* Tags */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6976] block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EFEDF6] text-[#15131C] border border-[#E3E0EE]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-6 border-t border-[#E3E0EE] flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalProject(null);
                      const el = document.querySelector('#contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] shadow-md transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Inquire About {activeModalProject.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 rounded-full text-sm font-bold text-[#6B6976] hover:text-[#15131C] hover:bg-[#EFEDF6] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
