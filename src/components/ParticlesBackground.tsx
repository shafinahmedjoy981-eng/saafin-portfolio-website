import React from 'react';

export const ParticlesBackground: React.FC = () => {
  // Generate a fixed set of background particles
  const particles = [
    { top: '15%', left: '10%', size: '4px', delay: '0s', duration: '12s' },
    { top: '25%', left: '85%', size: '6px', delay: '2s', duration: '14s' },
    { top: '45%', left: '20%', size: '3px', delay: '4s', duration: '10s' },
    { top: '65%', left: '75%', size: '5px', delay: '1s', duration: '16s' },
    { top: '80%', left: '15%', size: '4px', delay: '3s', duration: '11s' },
    { top: '90%', left: '90%', size: '3px', delay: '5s', duration: '13s' },
    { top: '35%', left: '50%', size: '5px', delay: '2.5s', duration: '15s' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="animate-float absolute rounded-full bg-[#C7FF00]/40 blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};
