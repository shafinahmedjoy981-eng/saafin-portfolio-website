import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-[#E3E0EE]/70 bg-white/70 backdrop-blur-[20px] shadow-[0_4px_24px_rgba(21,19,28,0.03)]"
      style={{
        backgroundColor: 'rgba(247, 246, 251, 0.72)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo / Wordmark */}
        <a
          href="#"
          id="logo-brand-link"
          className="group flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight text-[#0E0D12] hover:opacity-90 transition-opacity"
        >
          <span>SHAFIN</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#7B5CFA] group-hover:scale-125 transition-transform" />
        </a>

        {/* Center: Desktop Nav links (solid black text #0E0D12) */}
        <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.href;
            return (
              <div key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-sm font-bold tracking-tight text-[#0E0D12] rounded-full transition-colors relative hover:text-[#7B5CFA] ${
                    isActive ? 'text-[#7B5CFA]' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#7B5CFA] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
                {idx < NAV_ITEMS.length - 1 && (
                  <span className="text-[#0E0D12]/30 text-xs select-none">·</span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Solid Violet Pill Button "Let's Talk" */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            id="nav-cta-talk-btn"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] shadow-[0_4px_16px_rgba(123,92,250,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl text-[#0E0D12] hover:bg-[#EFEDF6] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="sm:hidden border-t border-[#E3E0EE]/80 px-6 py-6 space-y-4"
            style={{
              backgroundColor: 'rgba(247, 246, 251, 0.95)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-3 py-2 text-base font-bold text-[#0E0D12] hover:text-[#7B5CFA] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[#E3E0EE]">
              <a
                href="#contact"
                id="mobile-nav-cta-talk-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] shadow-md transition-all"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
