import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Send, MapPin, Clock, CheckCircle2, ArrowUpRight, Sparkles, Phone, Mail, Linkedin, Github } from 'lucide-react';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: prefilledService || 'AI Agent Development',
    budget: '$3k - $5k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant AI Agent response intake
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#141414] border-t border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF00] block mb-3">
            Direct Intake & Scheduling
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-4">
            Let's Build Your <span className="text-[#C7FF00]">AI System</span>.
          </h2>
          <p className="text-base text-[#B5B5B5]">
            Fill out the architecture request form below or reach out directly. My intake agent processes submissions in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Glass Effect Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#181818]/90 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#C7FF00]/20 border border-[#C7FF00] text-[#C7FF00] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Architecture Inquiry Received!
                </h3>
                <p className="text-sm text-[#B5B5B5] max-w-md mb-8">
                  Thank you, <span className="text-[#C7FF00] font-bold">{formData.name}</span>. An automated intake confirmation has been generated, and SHAFIN will review your inquiry within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', service: 'AI Agent Development', budget: '$3k - $5k', message: '' });
                  }}
                  className="py-3 px-8 text-xs font-mono uppercase font-bold text-black bg-[#C7FF00] rounded-full hover:bg-[#D7FF2F]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#808080] mb-2">
                      Your Name <span className="text-[#C7FF00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#C7FF00] focus:ring-1 focus:ring-[#C7FF00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#808080] outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#808080] mb-2">
                      Business Email <span className="text-[#C7FF00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#C7FF00] focus:ring-1 focus:ring-[#C7FF00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#808080] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Select */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#808080] mb-2">
                      System Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#C7FF00] focus:ring-1 focus:ring-[#C7FF00] rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all"
                    >
                      <option value="AI Agent Development">AI Agent Development</option>
                      <option value="AI Workflow & n8n Automation">AI Workflow & n8n Automation</option>
                      <option value="CRM & Lead Generation Systems">CRM & Lead Generation Systems</option>
                      <option value="Creative AI & Media Engine">Creative AI & Media Engine</option>
                      <option value="Custom Enterprise Consulting">Custom Enterprise Consulting</option>
                    </select>
                  </div>

                  {/* Budget Estimate */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#808080] mb-2">
                      Target Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#C7FF00] focus:ring-1 focus:ring-[#C7FF00] rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all"
                    >
                      <option value="$2.5k - $5k">$2.5k - $5k</option>
                      <option value="$5k - $10k">$5k - $10k</option>
                      <option value="$10k+">$10k+ Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#808080] mb-2">
                    Project Scope & Objectives <span className="text-[#C7FF00]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current bottleneck, CRM stack, or desired AI agent capabilities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#C7FF00] focus:ring-1 focus:ring-[#C7FF00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#808080] outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-base font-bold text-black bg-[#C7FF00] hover:bg-[#D7FF2F] rounded-full font-display flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(199,255,0,0.4)] transition-all duration-200"
                >
                  {loading ? (
                    <span className="flex items-center gap-2 font-mono text-xs uppercase">
                      <Sparkles className="w-4 h-4 animate-spin" /> Processing Inquiry...
                    </span>
                  ) : (
                    <>
                      <span>Submit Architecture Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* RIGHT: Map Graphic Placeholder, Availability & Socials (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Embedded Stylized Map Card */}
            <div className="bg-[#181818] border border-white/10 rounded-[28px] overflow-hidden p-6 relative group">
              <div className="h-44 rounded-2xl bg-[#0B0B0B] border border-white/5 relative overflow-hidden flex items-center justify-center">
                {/* Stylized Grid Overlay representing Global Remote availability */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C7FF00_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 text-center p-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10">
                  <MapPin className="w-6 h-6 text-[#C7FF00] mx-auto mb-1 animate-bounce" />
                  <p className="text-sm font-bold text-white font-display">Global Operations Hub</p>
                  <p className="text-xs text-[#808080] font-mono">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Availability & Response Time Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181818] border border-white/10 rounded-[24px] p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C7FF00] mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7FF00] animate-ping" />
                  <span>Q3/Q4 Openings</span>
                </div>
                <h4 className="text-base font-bold text-white font-display">Current Status</h4>
                <p className="text-xs text-[#808080] mt-1">{PERSONAL_INFO.availability}</p>
              </div>

              <div className="bg-[#181818] border border-white/10 rounded-[24px] p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C7FF00] mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Response SLA</span>
                </div>
                <h4 className="text-base font-bold text-white font-display">Fast Turnaround</h4>
                <p className="text-xs text-[#808080] mt-1">{PERSONAL_INFO.responseTime}</p>
              </div>
            </div>

            {/* Direct Connect Grid */}
            <div className="bg-[#181818] border border-white/10 rounded-[28px] p-6">
              <h4 className="text-xs font-mono uppercase text-[#808080] tracking-wider mb-4">Direct Channels</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0B0B] border border-white/5 hover:border-[#C7FF00] text-sm font-medium text-white group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C7FF00]" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#808080] group-hover:text-[#C7FF00] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0B0B] border border-white/5 hover:border-[#C7FF00] text-sm font-medium text-white group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#C7FF00]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#808080] group-hover:text-[#C7FF00] transition-colors" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
