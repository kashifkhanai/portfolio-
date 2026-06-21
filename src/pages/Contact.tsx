import PageTransition from '../components/PageTransition';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 w-full min-h-[75vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          
          <div>
            <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-4">
              Let's <span className="text-orange-500">Talk</span>
            </h1>
            <p className="text-zinc-400 font-sans text-lg leading-relaxed mb-8 max-w-md">
              Available for strategic opportunities as a Full-Stack Developer & AI Engineer. Whether you have a complex enterprise project or want to integrate cutting-edge AI, let's connect and build something exceptional.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-[#1A1A1A] shadow-lg group-hover:border-orange-500/50 transition-all">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-bold mb-1">Email</div>
                  <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'mkashifkhanai@gmail.com'}`} className="text-lg text-zinc-100 font-medium hover:text-orange-500 transition-colors">
                    {import.meta.env.VITE_CONTACT_EMAIL || 'mkashifkhanai@gmail.com'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-[#1A1A1A] shadow-lg group-hover:border-orange-500/50 transition-all">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-bold mb-1">Phone</div>
                  <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+923055641502'}`} className="text-lg text-zinc-100 font-medium hover:text-orange-500 transition-colors">
                    {import.meta.env.VITE_CONTACT_PHONE || '+92 305 5641502'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-[#1A1A1A] shadow-lg group-hover:border-orange-500/50 transition-all">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-base text-zinc-500 font-bold mb-1">Location</div>
                  <div className="text-lg text-zinc-100 font-medium">Lahore, Pakistan</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a href={import.meta.env.VITE_GITHUB_URL || '#'} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-white/5 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href={import.meta.env.VITE_LINKEDIN_URL || '#'} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-white/5 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 border border-white/5 bg-[#1A1A1A] shadow-2xl rounded-3xl relative overflow-hidden">
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 relative z-10">
                <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 border border-orange-500/20">
                  <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl text-zinc-100 font-sans font-bold">Message Sent</h3>
                <p className="text-zinc-400">Thank you for reaching out. I'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors mt-6 border-b border-orange-500 pb-1">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-bold text-zinc-400">Name</label>
                    <input required type="text" id="name" className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm placeholder:text-zinc-600 text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-bold text-zinc-400">Email</label>
                    <input required type="email" id="email" className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm placeholder:text-zinc-600 text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-bold text-zinc-400">Subject</label>
                  <input required type="text" id="subject" className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm placeholder:text-zinc-600 text-sm" placeholder="How can I help?" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-bold text-zinc-400">Message</label>
                  <textarea required id="message" rows={4} className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm resize-none placeholder:text-zinc-600 text-sm" placeholder="Your message here..."></textarea>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full bg-orange-500 text-white font-bold tracking-wide hover:bg-orange-600 transition-all py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
