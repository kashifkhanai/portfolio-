import { motion } from 'motion/react';

export default function ClosingCallToAction() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl w-full mx-auto pt-[clamp(3rem,min(8vw,10vh),7rem)] pb-[clamp(2rem,min(6vw,8vh),5rem)] px-[clamp(1rem,4vw,1.5rem)] text-center flex flex-col items-center relative"
    >
      <div className="bg-white/[0.03] border border-white/10 px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1vw,0.375rem)] rounded-full text-[clamp(0.5rem,1.5vw,0.75rem)] text-zinc-400 font-mono tracking-widest uppercase mb-[clamp(0.75rem,min(2vw,3vh),1.5rem)] flex items-center gap-[clamp(0.25rem,1vw,0.5rem)]">
        <span className="w-[clamp(0.375rem,1vw,0.5rem)] h-[clamp(0.375rem,1vw,0.5rem)] rounded-full bg-[#00E599] animate-pulse"></span> AVAILABLE FOR DEPLOYMENT
      </div>
      <h2 className="text-[clamp(2.5rem,min(6vw,8vh),4rem)] font-extrabold text-white tracking-tight leading-tight mb-[clamp(0.75rem,min(2vw,3vh),1.5rem)]">
        Let's Build Something <span className="text-[#FF5722]">Great.</span>
      </h2>
      <p className="text-zinc-400 text-[clamp(0.875rem,2vw,1.125rem)] max-w-xl mx-auto leading-relaxed mb-[clamp(1.5rem,4vw,2.5rem)] font-sans">
        Whether you need an opinionated AdonisJS backend, a streaming AI inference pipeline, or high-concurrency database optimization—I am ready to consolidate your engineering stack.
      </p>
      <div className="grid grid-cols-2 gap-[clamp(0.5rem,2vw,1rem)] w-full max-w-2xl mx-auto">
        <a href="https://wa.me/923055641502" target="_blank" rel="noopener noreferrer" className="px-[clamp(0.5rem,2vw,2rem)] py-[clamp(0.5rem,2vw,1rem)] rounded-[clamp(0.5rem,2vw,1rem)] bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-[clamp(0.5rem,1.5vw,0.875rem)] transition-all shadow-[0_0_30px_rgba(37,211,102,0.2)] flex items-center justify-center gap-[clamp(0.25rem,1vw,0.75rem)] cursor-pointer w-full text-center">
          <svg className="w-[clamp(0.875rem,2vw,1.25rem)] h-[clamp(0.875rem,2vw,1.25rem)] shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <a href="mailto:mkashifkhanai@gmail.com" className="px-[clamp(0.5rem,2vw,2rem)] py-[clamp(0.5rem,2vw,1rem)] rounded-[clamp(0.5rem,2vw,1rem)] bg-[#12141D] hover:bg-[#1A1D2A] border border-white/10 text-white font-medium text-[clamp(0.5rem,1.5vw,0.875rem)] transition-all flex items-center justify-center gap-[clamp(0.25rem,1vw,0.75rem)] cursor-pointer w-full text-center">
          <svg className="w-[clamp(0.875rem,2vw,1.25rem)] h-[clamp(0.875rem,2vw,1.25rem)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          Email
        </a>
      </div>
    </motion.div>
  );
}
