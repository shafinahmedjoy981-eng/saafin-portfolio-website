import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#141414]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex md:grid md:grid-cols-3 items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center justify-start">
          <a
            href="#"
            className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white font-display"
          >
            <span className="text-white group-hover:text-[#C7FF00] transition-colors duration-200">
              SHAFIN
            </span>
            <span className="text-[#C7FF00] font-mono text-3xl leading-none">.</span>
          </a>
        </div>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <nav className="flex items-center gap-3 lg:gap-7 bg-black/40 backdrop-blur-xl border border-white/5 px-5 lg:px-8 py-2.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs lg:text-sm font-medium text-[#B5B5B5] hover:text-white transition-colors duration-200 py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C7FF00] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center justify-end gap-2.5 lg:gap-3">
          <button
            onClick={onOpenDemo}
            className="flex items-center gap-1.5 px-3.5 lg:px-4 py-2 text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-[#C7FF00] bg-[#C7FF00]/10 border border-[#C7FF00]/30 rounded-full hover:bg-[#C7FF00]/20 hover:border-[#C7FF00]/60 transition-all duration-200 whitespace-nowrap"
          >
            <Bot className="w-3.5 h-3.5 animate-pulse" />
            <span>Try AI Agent Console</span>
          </button>

          <a
            href="#contact"
            className="group flex items-center gap-2 px-5 lg:px-6 py-2.5 text-xs lg:text-sm font-bold text-black bg-[#C7FF00] rounded-full hover:bg-[#D7FF2F] hover:shadow-[0_0_25px_rgba(199,255,0,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 font-display whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#C7FF00] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#0B0B0B]/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 md:hidden animate-fadeIn">
          <div className="flex flex-col gap-6 mt-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold font-display text-white hover:text-[#C7FF00] transition-colors py-1 flex items-center justify-between border-b border-white/5"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#808080]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#C7FF00] bg-[#C7FF00]/10 border border-[#C7FF00]/30 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch AI Agent Console</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 text-base font-bold text-black bg-[#C7FF00] rounded-full font-display"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
