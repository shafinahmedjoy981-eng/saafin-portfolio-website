import React from 'react';
import { User, Phone, Mail, Linkedin, MapPin, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-36 relative overflow-hidden bg-[#0B0B0B]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Portrait in Rounded Frame with Overlapping Glass Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#141414] group shadow-2xl">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={`${PERSONAL_INFO.name} AI Developer`}
                className="w-full h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Overlapping Glass Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-xl border border-white/15 p-6 rounded-[24px] shadow-2xl flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-[#C7FF00] font-display">5+</span>
                    <span className="text-sm font-semibold text-white uppercase tracking-wider">Years Exp</span>
                  </div>
                  <p className="text-xs text-[#B5B5B5] mt-1">Autonomous AI & Enterprise Workflows</p>
                </div>
                <div className="p-3 bg-[#C7FF00]/10 rounded-2xl border border-[#C7FF00]/30 text-[#C7FF00]">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Accent Subtle Glow */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#C7FF00]/10 rounded-full blur-[100px] pointer-events-none" />
          </div>

          {/* RIGHT: Heading, Bio Narrative & 2-Col Contact Card */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#C7FF00] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About SHAFIN</span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-display mb-6">
              Engineering <span className="text-[#C7FF00]">Autonomous AI Systems</span> That Run 24/7.
            </h2>

            {/* Paragraph Narrative */}
            <p className="text-base sm:text-lg text-[#B5B5B5] leading-relaxed mb-4">
              {PERSONAL_INFO.bioLong}
            </p>
            <p className="text-base text-[#808080] leading-relaxed mb-8">
              Whether architecting a multi-agent patient scheduling system or building self-healing lead generation scrapers, my focus remains constant: maximum reliability, clean error management, and measurable business growth.
            </p>

            {/* Bordered Contact Info Card (2-Col Grid) */}
            <div className="w-full bg-[#141414] border border-white/10 rounded-[24px] p-6 sm:p-8 mb-8 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#808080] mb-6">
                Direct Contact & Credentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#C7FF00]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#808080] uppercase">Full Name</p>
                    <p className="text-sm font-bold text-white font-display">{PERSONAL_INFO.fullName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#C7FF00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#808080] uppercase">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-white hover:text-[#C7FF00] font-display transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#C7FF00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#808080] uppercase">Phone Number</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-white hover:text-[#C7FF00] font-display transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#C7FF00]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#808080] uppercase">LinkedIn</p>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-[#C7FF00] font-display flex items-center gap-1 transition-colors">
                      <span>shafin-ahmed-joy</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-black bg-[#C7FF00] rounded-full hover:bg-[#D7FF2F] hover:shadow-[0_0_30px_rgba(199,255,0,0.35)] hover:scale-[1.02] transition-all duration-200 font-display"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
