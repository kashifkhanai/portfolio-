import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <PageTransition>
      <div className="w-full max-w-7xl mx-auto px-[clamp(1rem,3vw,1.5rem)] relative pt-[clamp(1.5rem,4vw,3rem)] pb-[clamp(1rem,2vw,1rem)] flex flex-col">

        <div className="flex flex-row items-start md:items-center justify-between w-full">
          {/* Left Column (Content) */}
          <div className="w-[55%] md:w-[50%] flex flex-col items-start z-10 pr-[clamp(0.5rem,2vw,0rem)]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-400 font-sans text-[clamp(0.6rem,1.2vw,1rem)] mb-[clamp(0.1rem,0.5vw,0.25rem)]">Hi I am</p>
            <h1 className="font-sans font-bold text-[clamp(1.25rem,4vw,3.5rem)] text-zinc-100 mb-[clamp(0.1rem,0.5vw,0.25rem)]">
              Muhammad Kashif
            </h1>
            <h2 className="font-sans font-bold text-[clamp(0.85rem,3vw,3rem)] text-orange-500 tracking-tight leading-tight mb-[clamp(0.5rem,1.5vw,1rem)]">
              Full-Stack Developer <br className="hidden md:block" /> <span className="text-zinc-500 font-serif italic">&amp;</span> AI Engineer
            </h2>
            <p className="font-sans text-[clamp(0.55rem,1.2vw,1rem)] text-zinc-400 leading-relaxed font-medium max-w-lg mb-[clamp(1rem,3vw,1.5rem)]">
              Accomplished Full-Stack Developer with a strong foundation in building scalable web architectures, bridging complex software engineering with emerging AI technologies.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-[clamp(0.5rem,1.5vw,1rem)] mb-[clamp(1rem,2vw,1.5rem)]"
          >
            {[
              { Icon: Github, href: import.meta.env.VITE_GITHUB_URL || '#' },
              { Icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL || '#' },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank"
                rel="noreferrer"
                className="w-[clamp(1.5rem,4vw,2.5rem)] h-[clamp(1.5rem,4vw,2.5rem)] rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300"
              >
                <social.Icon className="w-[clamp(0.75rem,2vw,1.2rem)] h-[clamp(0.75rem,2vw,1.2rem)]" />
              </a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-[clamp(0.5rem,1.5vw,1rem)] mb-[clamp(1.5rem,3vw,2rem)]"
          >
            <Link 
              to="/contact" 
              className="px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(0.375rem,1vw,0.625rem)] rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20 text-[clamp(0.6rem,1.2vw,1rem)] whitespace-nowrap"
            >
              Hire Me
            </Link>
            <a 
              href="/Muhammad_Kashif_CV.pdf" 
              target="_blank"
              className="px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(0.375rem,1vw,0.625rem)] rounded border border-zinc-600 text-zinc-300 font-semibold hover:text-white hover:border-zinc-400 transition-colors text-[clamp(0.6rem,1.2vw,1rem)] whitespace-nowrap"
            >
              Download CV
            </a>
          </motion.div>

          {/* Stats Box (Responsive - sits under buttons) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1A1A1A] rounded-[clamp(0.375rem,1vw,0.75rem)] p-[clamp(0.5rem,2vw,1.5rem)] flex items-center gap-[clamp(0.375rem,2vw,2.5rem)] border border-white/5 shadow-xl md:shadow-2xl w-fit"
          >
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-orange-500 font-bold text-[clamp(0.6rem,1.5vw,1.25rem)] mb-[clamp(0px,0.2vw,0.125rem)] leading-none">{new Date().getFullYear() - 2023}+</span>
              <span className="text-zinc-400 text-[clamp(0.375rem,0.8vw,0.875rem)] leading-tight">Experiences</span>
            </div>
            <div className="w-px h-[clamp(1.25rem,3vw,2.5rem)] bg-zinc-800"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-orange-500 font-bold text-[clamp(0.6rem,1.5vw,1.25rem)] mb-[clamp(0px,0.2vw,0.125rem)] leading-none">{projects.length}+</span>
              <span className="text-zinc-400 text-[clamp(0.375rem,0.8vw,0.875rem)] leading-tight whitespace-nowrap">Project done</span>
            </div>
            <div className="w-px h-[clamp(1.25rem,3vw,2.5rem)] bg-zinc-800"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-orange-500 font-bold text-[clamp(0.6rem,1.5vw,1.25rem)] mb-[clamp(0px,0.2vw,0.125rem)] leading-none">15+</span>
              <span className="text-zinc-400 text-[clamp(0.375rem,0.8vw,0.875rem)] leading-tight whitespace-nowrap">Happy Clients</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column (Image) */}
        <div className="w-[45%] md:w-[50%] flex justify-end md:justify-center items-start md:items-center mt-[clamp(0.5rem,1vw,0rem)] z-10 relative">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The Dark Circular Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(140px,38vw,500px)] h-[clamp(140px,38vw,500px)] rounded-full bg-[#1A1A1A] -z-10"></div>
            
            {/* The Image Layer */}
            <div className="w-[clamp(120px,33vw,400px)] h-[clamp(150px,41vw,500px)] relative overflow-hidden rounded-b-full">
              {/* Optional: Add a subtle gradient fade at the bottom of the image so it blends into the dark background */}
              <div className="absolute inset-x-0 bottom-0 h-[clamp(3rem,8vw,8rem)] bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none"></div>
              
              <img 
                src={import.meta.env.VITE_IMAGE_HERO || '/Kashif_image.jpeg'} 
                alt="Muhammad Kashif" 
                className="w-full h-full object-cover object-[center_15%] brightness-90 contrast-125 grayscale-[20%]"
              />
            </div>

          </motion.div>

        </div>
        </div>

      </div>
    </PageTransition>
  );
}
