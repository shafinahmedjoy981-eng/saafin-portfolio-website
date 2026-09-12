import { Mail, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full relative overflow-hidden select-none">
      {/* Wavy / curved top shape (hill silhouette) transitioning from page background into solid violet */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,42 C240,78 520,8 800,40 C1080,72 1280,12 1440,30 L1440,84 L0,84 Z"
            fill="url(#footer-top-wave-fill)"
          />
          <path
            d="M0,42 C240,78 520,8 800,40 C1080,72 1280,12 1440,30"
            stroke="#987FFC"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          <defs>
            <linearGradient id="footer-top-wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6C4DF0" />
              <stop offset="100%" stopColor="#6446E0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Solid deeper violet / violet gradient body */}
      <div className="w-full bg-gradient-to-b from-[#6446E0] via-[#5B3CD4] to-[#4B2EB8] pt-8 sm:pt-10 pb-8 text-white relative">
        {/* Ambient subtle light wash across upper portion */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[160px] bg-white/[0.07] blur-[80px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/15">
            
            {/* Column 1: Brand */}
            <div className="lg:col-span-4 space-y-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="group inline-flex items-center gap-1.5 text-2xl font-black tracking-tight text-white"
              >
                <span>SHAFIN</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B8A4FF] shadow-[0_0_12px_rgba(184,164,255,0.9)] group-hover:scale-125 transition-transform" />
              </a>
              <p className="text-sm text-[#E2DCFB] leading-relaxed max-w-sm">
                Full-Stack Software Developer & AI Solutions Architect crafting scalable products and intelligent automation systems.
              </p>
            </div>

            {/* Column 2: Terms & Conditions (plain text items) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4FF]" />
                <span>Terms & Conditions</span>
              </h4>
              <ul className="space-y-2.5 text-sm text-[#E2DCFB]">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B8A4FF]/70" />
                  <span>Terms of Service</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B8A4FF]/70" />
                  <span>Privacy Policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B8A4FF]/70" />
                  <span>Project Agreement Terms</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Information (clickable items that scroll to section) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4FF]" />
                <span>Information</span>
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="#faq"
                    id="footer-link-faqs"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#faq');
                    }}
                    className="group inline-flex items-center gap-1.5 text-[#E2DCFB] hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B8A4FF]/60 group-hover:bg-white group-hover:w-2 transition-all" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    id="footer-link-about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#about');
                    }}
                    className="group inline-flex items-center gap-1.5 text-[#E2DCFB] hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B8A4FF]/60 group-hover:bg-white group-hover:w-2 transition-all" />
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    id="footer-link-services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="group inline-flex items-center gap-1.5 text-[#E2DCFB] hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B8A4FF]/60 group-hover:bg-white group-hover:w-2 transition-all" />
                    <span>Services</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact (two clickable rows: email & LinkedIn) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4FF]" />
                <span>Contact</span>
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <a
                    href="mailto:shafinahmedjoy981@gmail.com"
                    id="footer-link-email"
                    className="group inline-flex items-center gap-2.5 text-[#E2DCFB] hover:text-white transition-colors break-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-[#D8CEFD] border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#6446E0] group-hover:border-white transition-all shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform">shafinahmedjoy981@gmail.com</span>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/shafin-ahmed-joy"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="footer-link-linkedin"
                    className="group inline-flex items-center gap-2.5 text-[#E2DCFB] hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-[#D8CEFD] border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#6446E0] group-hover:border-white transition-all shadow-xs">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright line with light-accented back-to-top button */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E2DCFB]/80 gap-4">
            <p>© 2026 Ahmed Saafin. All rights reserved.</p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              id="footer-back-to-top"
              className="w-8 h-8 rounded-full bg-white/10 text-[#E2DCFB] hover:bg-white hover:text-[#6446E0] border border-white/20 hover:border-white flex items-center justify-center transition-all cursor-pointer shadow-xs hover:shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
