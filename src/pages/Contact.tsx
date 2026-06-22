import PageTransition from '../components/PageTransition';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

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
      <div className="max-w-7xl mx-auto px-[clamp(0.5rem,3vw,2rem)] w-full min-h-[75vh] flex flex-col justify-center">
        <div className="flex flex-row items-start md:items-center justify-between w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[40%] md:w-[45%] flex flex-col items-start z-10 pr-[clamp(0.25rem,2vw,1rem)]"
          >
            <h1 className="font-sans text-[clamp(1.5rem,4vw,4.5rem)] font-bold tracking-tight text-zinc-100 mb-[clamp(0.25rem,1.2vw,1rem)]">
              Let's <span className="text-orange-500">Talk</span>
            </h1>
            <p className="text-zinc-400 font-sans text-[clamp(0.55rem,1.2vw,1.125rem)] leading-relaxed mb-[clamp(0.75rem,2.5vw,1.75rem)] max-w-md">
              Available for strategic opportunities as a Full-Stack Developer & AI Engineer. Whether you have a complex enterprise project or want to integrate cutting-edge AI, let's connect and build something exceptional.
            </p>

            <div className="flex flex-col gap-[clamp(0.5rem,2vw,1.5rem)] w-full">
              <div className="flex items-center gap-[clamp(0.3rem,1vw,1.25rem)] group cursor-pointer w-full">
                <div className="w-[clamp(1.2rem,3vw,3.5rem)] h-[clamp(1.2rem,3vw,3.5rem)] shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-[#1A1A1A] shadow-lg group-hover:border-orange-500/50 group-hover:bg-orange-500/10 group-hover:-translate-y-1 transition-all duration-300">
                  <Mail className="w-[clamp(0.6rem,1.5vw,1.5rem)] h-[clamp(0.6rem,1.5vw,1.5rem)] text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="text-[clamp(0.4rem,0.8vw,0.875rem)] text-zinc-500 font-bold mb-[clamp(0.1rem,0.4vw,0.25rem)] group-hover:text-orange-500 transition-colors duration-300">Email</div>
                  <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'mkashifkhanai@gmail.com'}`} className="text-[clamp(0.45rem,1.2vw,1.125rem)] text-zinc-100 font-medium transition-colors block break-all">
                    {import.meta.env.VITE_CONTACT_EMAIL || 'mkashifkhanai@gmail.com'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-[clamp(0.3rem,1vw,1.25rem)] group cursor-pointer w-full">
                <div className="w-[clamp(1.2rem,3vw,3.5rem)] h-[clamp(1.2rem,3vw,3.5rem)] shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-[#1A1A1A] shadow-lg group-hover:border-orange-500/50 group-hover:bg-orange-500/10 group-hover:-translate-y-1 transition-all duration-300">
                  <Phone className="w-[clamp(0.6rem,1.5vw,1.5rem)] h-[clamp(0.6rem,1.5vw,1.5rem)] text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="text-[clamp(0.4rem,0.8vw,0.875rem)] text-zinc-500 font-bold mb-[clamp(0.1rem,0.4vw,0.25rem)] group-hover:text-orange-500 transition-colors duration-300">Phone</div>
                  <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+923055641502'}`} className="text-[clamp(0.45rem,1.2vw,1.125rem)] text-zinc-100 font-medium transition-colors block break-all">
                    {import.meta.env.VITE_CONTACT_PHONE || '+92 305 5641502'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-[clamp(0.3rem,1vw,1.25rem)] group cursor-pointer w-full">
                <div className="w-[clamp(1.2rem,3vw,3.5rem)] h-[clamp(1.2rem,3vw,3.5rem)] shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-[#1A1A1A] shadow-lg group-hover:border-orange-500/50 group-hover:bg-orange-500/10 group-hover:-translate-y-1 transition-all duration-300">
                  <MapPin className="w-[clamp(0.6rem,1.5vw,1.5rem)] h-[clamp(0.6rem,1.5vw,1.5rem)] text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="text-[clamp(0.4rem,0.8vw,0.875rem)] text-zinc-500 font-bold mb-[clamp(0.1rem,0.4vw,0.25rem)] group-hover:text-orange-500 transition-colors duration-300">Location</div>
                  <div className="text-[clamp(0.45rem,1.2vw,1.125rem)] text-zinc-100 font-medium block break-all">Lahore, Pakistan</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-[clamp(0.5rem,1.5vw,1rem)] pt-[clamp(0.5rem,1.5vw,1rem)] border-t border-white/5 w-full">
                <a href={import.meta.env.VITE_GITHUB_URL || '#'} target="_blank" rel="noreferrer" className="w-[clamp(1.2rem,3vw,3rem)] h-[clamp(1.2rem,3vw,3rem)] rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 hover:-translate-y-1 transition-all duration-300">
                  <Github className="w-[clamp(0.6rem,1.5vw,1.25rem)] h-[clamp(0.6rem,1.5vw,1.25rem)]" />
                </a>
                <a href={import.meta.env.VITE_LINKEDIN_URL || '#'} target="_blank" rel="noreferrer" className="w-[clamp(1.2rem,3vw,3rem)] h-[clamp(1.2rem,3vw,3rem)] rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 hover:-translate-y-1 transition-all duration-300">
                  <Linkedin className="w-[clamp(0.6rem,1.5vw,1.25rem)] h-[clamp(0.6rem,1.5vw,1.25rem)]" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[60%] md:w-[55%] p-[clamp(0.75rem,2vw,2rem)] border border-white/5 bg-[#1A1A1A] shadow-2xl rounded-[clamp(0.75rem,2vw,1.5rem)] relative overflow-hidden flex flex-col justify-center z-10 ml-[clamp(0.25rem,2vw,1rem)]"
          >
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-[clamp(0.5rem,1.5vw,1.25rem)] py-[clamp(1rem,4vw,3rem)] relative z-10">
                <div className="w-[clamp(2.5rem,5vw,4.5rem)] h-[clamp(2.5rem,5vw,4.5rem)] rounded-full bg-orange-500/10 flex items-center justify-center mb-[clamp(0.25rem,1.5vw,1rem)] border border-orange-500/20">
                  <svg className="w-[clamp(1rem,2vw,2rem)] h-[clamp(1rem,2vw,2rem)] text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[clamp(1rem,3vw,1.75rem)] text-zinc-100 font-sans font-bold">Message Sent</h3>
                <p className="text-zinc-400 text-[clamp(0.6rem,1.5vw,1rem)]">Thank you for reaching out. I'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-[clamp(0.6rem,1.2vw,0.875rem)] font-bold text-orange-500 hover:text-orange-400 transition-colors mt-[clamp(0.5rem,2vw,1.5rem)] border-b border-orange-500 pb-1">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[clamp(0.5rem,1.5vw,1.25rem)] relative z-10">
                <div className="flex flex-col xl:flex-row gap-[clamp(0.5rem,1.5vw,1.25rem)] w-full">
                  <div className="flex flex-col gap-[clamp(0.1rem,0.8vw,0.375rem)] w-full xl:w-1/2">
                    <label htmlFor="name" className="text-[clamp(0.5rem,1vw,0.875rem)] font-bold text-zinc-400">Name</label>
                    <input required type="text" id="name" className="w-full bg-[#111111] border border-white/10 rounded-[clamp(0.375rem,1.2vw,0.75rem)] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.375rem,1vw,0.875rem)] text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm placeholder:text-zinc-600 text-[clamp(0.5rem,1vw,0.875rem)]" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-[clamp(0.1rem,0.8vw,0.375rem)] w-full xl:w-1/2">
                    <label htmlFor="email" className="text-[clamp(0.5rem,1vw,0.875rem)] font-bold text-zinc-400">Email</label>
                    <input required type="email" id="email" className="w-full bg-[#111111] border border-white/10 rounded-[clamp(0.375rem,1.2vw,0.75rem)] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.375rem,1vw,0.875rem)] text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm placeholder:text-zinc-600 text-[clamp(0.5rem,1vw,0.875rem)]" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-[clamp(0.1rem,0.8vw,0.375rem)]">
                  <label htmlFor="subject" className="text-[clamp(0.5rem,1vw,0.875rem)] font-bold text-zinc-400">Subject</label>
                  <input required type="text" id="subject" className="w-full bg-[#111111] border border-white/10 rounded-[clamp(0.375rem,1.2vw,0.75rem)] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.375rem,1vw,0.875rem)] text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm placeholder:text-zinc-600 text-[clamp(0.5rem,1vw,0.875rem)]" placeholder="How can I help?" />
                </div>

                <div className="flex flex-col gap-[clamp(0.1rem,0.8vw,0.375rem)]">
                  <label htmlFor="message" className="text-[clamp(0.5rem,1vw,0.875rem)] font-bold text-zinc-400">Message</label>
                  <textarea required id="message" rows={4} className="w-full bg-[#111111] border border-white/10 rounded-[clamp(0.375rem,1.2vw,0.75rem)] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.375rem,1vw,0.875rem)] text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm resize-none placeholder:text-zinc-600 text-[clamp(0.5rem,1vw,0.875rem)]" placeholder="Your message here..."></textarea>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full bg-orange-500 text-white font-bold tracking-wide hover:bg-orange-600 transition-all py-[clamp(0.5rem,1.2vw,1rem)] mt-[clamp(0.25rem,0.8vw,0.75rem)] rounded-[clamp(0.375rem,1.2vw,0.75rem)] flex items-center justify-center gap-[clamp(0.25rem,0.8vw,0.5rem)] disabled:opacity-70 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 text-[clamp(0.6rem,1.2vw,1rem)]">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight className="w-[clamp(0.75rem,1.2vw,1.25rem)] h-[clamp(0.75rem,1.2vw,1.25rem)]" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
