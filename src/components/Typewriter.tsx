import React, { useState, useEffect } from 'react';

const TITLES = [
  'AI Agent Developer',
  'AI Automation Specialist',
  'n8n Workflow Architect',
  'Custom LLM Engineer',
  'CRM Automation Expert',
  'AI Website Developer',
  'Full Stack AI Developer',
  'AI Integration Engineer',
  'Generative AI Developer',
  'AI Video Editor',
  'Prompt Engineer',
  'Senior Software Developer',
];

export const Typewriter: React.FC = () => {
  const [preferReducedMotion, setPreferReducedMotion] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing_full' | 'deleting' | 'pausing_empty'>('typing');

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPreferReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPreferReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Typewriter state machine
  useEffect(() => {
    if (preferReducedMotion) return;

    const currentTitle = TITLES[titleIndex];
    let timeoutId: NodeJS.Timeout;

    if (phase === 'typing') {
      if (displayText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, 60); // 55-70ms typing speed
      } else {
        timeoutId = setTimeout(() => {
          setPhase('pausing_full');
        }, 0);
      }
    } else if (phase === 'pausing_full') {
      timeoutId = setTimeout(() => {
        setPhase('deleting');
      }, 1800); // 1800ms pause after completing title
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        }, 35); // 35ms deleting speed
      } else {
        timeoutId = setTimeout(() => {
          setPhase('pausing_empty');
        }, 0);
      }
    } else if (phase === 'pausing_empty') {
      timeoutId = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setPhase('typing');
      }, 300); // 300ms pause before next title
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, phase, titleIndex, preferReducedMotion]);

  if (preferReducedMotion) {
    return (
      <div className="text-2xl sm:text-[30px] lg:text-[38px] font-semibold text-white font-display tracking-tight leading-[1.3] text-left">
        AI Agent Developer
      </div>
    );
  }

  return (
    <div 
      className="text-2xl sm:text-[30px] lg:text-[38px] font-semibold text-white font-display tracking-tight leading-[1.3] text-left flex items-center flex-wrap select-none"
      aria-label={`Title: ${TITLES[titleIndex]}`}
    >
      <span className="inline-flex items-center flex-wrap">
        {displayText.split('').map((char, index) => (
          <span
            key={`${titleIndex}-${index}-${char}`}
            className="inline-block animate-char-appear"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      <span
        className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#C7FF00] align-middle ml-1.5 rounded-full animate-cursor-blink shadow-[0_0_10px_#C7FF00]"
        aria-hidden="true"
      />
    </div>
  );
};
