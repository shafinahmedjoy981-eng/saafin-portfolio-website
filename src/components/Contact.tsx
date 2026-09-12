import { useState, type FormEvent } from 'react';
import { 
  MapPin, 
  Globe2, 
  Clock, 
  CheckCircle, 
  Mail, 
  Linkedin, 
  ArrowUpRight, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const PROJECT_TYPES = [
  'AI Agent Development',
  'Web App Development',
  'Custom SaaS',
  'CRM & Automation',
  'Other',
];

const BUDGET_RANGES = [
  '< $1k (Quick sprint / consultation)',
  '$1k - $3k (Standard MVP)',
  '$3k - $10k (Full System / Custom SaaS)',
  '$10k+ (Enterprise Architecture)',
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    budgetRange: BUDGET_RANGES[1],
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate swift submission handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative scroll-mt-24 border-t border-[#E3E0EE]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EFEDF6] border border-[#E3E0EE] text-xs font-bold uppercase tracking-widest text-[#6B6976] mb-4">
            <span>Direct Intake & Scheduling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#15131C]">
            Let's Build Your <span className="text-[#7B5CFA]">System</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-[20px] border border-[#E3E0EE] shadow-[0_10px_30px_rgba(21,19,28,0.04)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center flex-1 my-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-[#7B5CFA]/10 text-[#7B5CFA] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#15131C] mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-base text-[#6B6976] max-w-md mx-auto mb-8">
                    Thank you, <span className="font-bold text-[#15131C]">{formData.name}</span>. I will review your project requirements and respond to <span className="font-bold text-[#15131C]">{formData.email}</span> within 24 hours.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: PROJECT_TYPES[0],
                          budgetRange: BUDGET_RANGES[1],
                          details: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-full text-sm font-bold text-[#15131C] bg-[#EFEDF6] hover:bg-[#E3E0EE] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                    
                    <a
                      href={`mailto:shafinahmedjoy981@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}: ${encodeURIComponent(formData.projectType)}&body=${encodeURIComponent(formData.details)}`}
                      className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail Client</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#15131C] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-2xl bg-[#EFEDF6]/60 border border-[#E3E0EE] text-sm text-[#15131C] placeholder-[#6B6976]/60 focus:outline-none focus:border-[#7B5CFA] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#15131C] mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#EFEDF6]/60 border border-[#E3E0EE] text-sm text-[#15131C] placeholder-[#6B6976]/60 focus:outline-none focus:border-[#7B5CFA] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-bold uppercase tracking-wider text-[#15131C] mb-2">
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#EFEDF6]/60 border border-[#E3E0EE] text-sm text-[#15131C] focus:outline-none focus:border-[#7B5CFA] focus:bg-white transition-colors cursor-pointer"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget-range" className="block text-xs font-bold uppercase tracking-wider text-[#15131C] mb-2">
                        Budget Range
                      </label>
                      <select
                        id="contact-budget-range"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#EFEDF6]/60 border border-[#E3E0EE] text-sm text-[#15131C] focus:outline-none focus:border-[#7B5CFA] focus:bg-white transition-colors cursor-pointer"
                      >
                        {BUDGET_RANGES.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-bold uppercase tracking-wider text-[#15131C] mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="contact-details"
                      required
                      rows={5}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell me about your goals, current bottlenecks, desired timeline, or systems you want to automate..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#EFEDF6]/60 border border-[#E3E0EE] text-sm text-[#15131C] placeholder-[#6B6976]/60 focus:outline-none focus:border-[#7B5CFA] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-inquiry-btn"
                    disabled={loading}
                    className="w-full py-4 rounded-full text-base font-bold text-white bg-[#7B5CFA] hover:bg-[#6446E0] shadow-[0_4px_20px_rgba(123,92,250,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 1. Location Card */}
            <div className="p-7 rounded-3xl bg-[#EFEDF6] border border-[#E3E0EE] flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white text-[#7B5CFA] flex items-center justify-center shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6976]">
                  Location & Availability
                </span>
                <h4 className="text-lg font-bold text-[#15131C] mt-0.5">
                  Based in Dhaka, Bangladesh
                </h4>
                <p className="text-sm font-semibold text-[#7B5CFA] flex items-center gap-1.5 mt-0.5">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>Remote / Global Collaboration</span>
                </p>
              </div>
            </div>

            {/* 2. Two Small Stat Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Current Status Card */}
              <div className="p-6 rounded-3xl bg-[#EFEDF6] border border-[#E3E0EE]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6B6976]">
                    Current Status
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#15131C]">
                  Open for Freelance Work
                </h4>
                <p className="text-xs text-[#6B6976] mt-1">Accepting Q2/Q3 Projects</p>
              </div>

              {/* Response Time Card */}
              <div className="p-6 rounded-3xl bg-[#EFEDF6] border border-[#E3E0EE]">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-3.5 h-3.5 text-[#7B5CFA]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6B6976]">
                    Response Time
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#15131C]">
                  Within 24 Hours
                </h4>
                <p className="text-xs text-[#6B6976] mt-1">Direct from Shafin</p>
              </div>
            </div>

            {/* 3. Direct Connect Card */}
            <div className="p-7 rounded-3xl bg-white/80 backdrop-blur-[20px] border border-[#E3E0EE] shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6976] mb-5">
                Direct Connect
              </h4>

              <div className="space-y-4">
                {/* Email Row */}
                <a
                  href="mailto:shafinahmedjoy981@gmail.com"
                  id="direct-connect-email"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#EFEDF6] hover:bg-[#7B5CFA] hover:text-white transition-all border border-[#E3E0EE]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#7B5CFA] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-[#6B6976] group-hover:text-white/80 block">
                        Email Inquiry
                      </span>
                      <span className="text-sm font-bold text-[#15131C] group-hover:text-white">
                        shafinahmedjoy981@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B6976] group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn Row */}
                <a
                  href="https://www.linkedin.com/in/shafin-ahmed-joy"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="direct-connect-linkedin"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#EFEDF6] hover:bg-[#7B5CFA] hover:text-white transition-all border border-[#E3E0EE]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#7B5CFA] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-[#6B6976] group-hover:text-white/80 block">
                        Professional Network
                      </span>
                      <span className="text-sm font-bold text-[#15131C] group-hover:text-white">
                        LinkedIn Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B6976] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
