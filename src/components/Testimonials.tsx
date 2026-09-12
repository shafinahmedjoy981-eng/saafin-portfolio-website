import { useState, useRef, useEffect, useCallback, type MouseEvent } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [updateScrollButtons]);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
    updateScrollButtons();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    updateScrollButtons();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      updateScrollButtons();
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollStep = 408; // ~384px card width + 24px gap
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
    setTimeout(updateScrollButtons, 350);
  };

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative border-t border-[#E3E0EE]/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
              <span>TESTIMONIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
              What Clients Say
            </h2>
          </div>

          {/* Prev / Next Carousel Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#6B6976] hidden md:inline-block mr-1">
              Drag or use arrows
            </span>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous testimonials"
              id="testimonials-prev-btn"
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all cursor-pointer shadow-xs ${
                canScrollLeft
                  ? 'bg-white border-[#E3E0EE] text-[#15131C] hover:bg-[#7B5CFA] hover:text-white hover:border-[#7B5CFA] hover:shadow-[0_4px_14px_rgba(123,92,250,0.25)]'
                  : 'bg-white/50 border-[#E3E0EE]/60 text-[#6B6976]/40 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next testimonials"
              id="testimonials-next-btn"
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all cursor-pointer shadow-xs ${
                canScrollRight
                  ? 'bg-white border-[#E3E0EE] text-[#15131C] hover:bg-[#7B5CFA] hover:text-white hover:border-[#7B5CFA] hover:shadow-[0_4px_14px_rgba(123,92,250,0.25)]'
                  : 'bg-white/50 border-[#E3E0EE]/60 text-[#6B6976]/40 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Drag/Swipe Carousel Container */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onScroll={updateScrollButtons}
            className={`flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pt-3 pb-8 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {TESTIMONIALS_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px -10px rgba(123, 92, 250, 0.25)',
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="group w-[300px] sm:w-[350px] lg:w-[384px] shrink-0 min-h-[310px] p-8 rounded-3xl bg-white/80 backdrop-blur-[20px] border border-[#E3E0EE] flex flex-col justify-between transition-all duration-300 ease-out hover:bg-[#7B5CFA] hover:border-[#7B5CFA]"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <div>
                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#EFEDF6] text-[#7B5CFA] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-6 transition-all">
                    <Quote className="w-5 h-5" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-base text-[#15131C] group-hover:text-white leading-relaxed italic mb-8 transition-colors">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-[#E3E0EE] group-hover:border-white/20 flex items-center gap-4 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#7B5CFA] to-[#9F85FF] group-hover:from-white group-hover:to-white text-white group-hover:text-[#7B5CFA] font-black text-sm flex items-center justify-center shadow-xs transition-all">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#15131C] group-hover:text-white transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#6B6976] group-hover:text-white/85 transition-colors">
                      {item.role},{' '}
                      <span className="text-[#7B5CFA] group-hover:text-white font-medium transition-colors">
                        {item.company}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
