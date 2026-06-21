import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <PageTransition>
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative pt-12 pb-4">

        {/* Left Column (Content) */}
        <div className="w-full md:w-1/2 flex flex-col items-start z-10 pt-4 md:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-400 font-sans text-base mb-1">Hi I am</p>
            <h1 className="font-sans font-bold text-4xl md:text-5xl text-zinc-100 mb-1">
              Muhammad Kashif
            </h1>
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-orange-500 tracking-tight leading-tight mb-3">
              Full-Stack Developer <br className="hidden md:block" /> <span className="text-zinc-500 font-serif italic">&amp;</span> AI Engineer
            </h2>
            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed font-medium max-w-lg mb-6">
              Accomplished Full-Stack Developer with a strong foundation in building scalable web architectures, bridging complex software engineering with emerging AI technologies.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
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
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 hover:bg-orange-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300"
              >
                <social.Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link 
              to="/contact" 
              className="px-6 py-2.5 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20 text-base"
            >
              Hire Me
            </Link>
            <a 
              href="/Muhammad_Kashif_CV.pdf" 
              target="_blank"
              className="px-6 py-2.5 rounded border border-zinc-600 text-zinc-300 font-semibold hover:text-white hover:border-zinc-400 transition-colors text-base"
            >
              Download CV
            </a>
          </motion.div>

          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1A1A1A] rounded-xl p-5 md:p-6 flex items-center gap-6 md:gap-10 border border-white/5 shadow-2xl"
          >
            <div className="flex flex-col">
              <span className="text-orange-500 font-bold text-xl mb-0.5">{new Date().getFullYear() - 2023}+</span>
              <span className="text-zinc-400 text-sm">Experiences</span>
            </div>
            <div className="w-px h-10 bg-zinc-800"></div>
            <div className="flex flex-col">
              <span className="text-orange-500 font-bold text-xl mb-0.5">{projects.length}+</span>
              <span className="text-zinc-400 text-sm">Project done</span>
            </div>
            <div className="w-px h-10 bg-zinc-800"></div>
            <div className="flex flex-col">
              <span className="text-orange-500 font-bold text-xl mb-0.5">15+</span>
              <span className="text-zinc-400 text-sm">Happy Clients</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column (Image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 z-10 relative">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The Dark Circular Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[#1A1A1A] -z-10"></div>
            
            {/* The Image Layer */}
            {/* Applying a soft mask or circular crop to blend the image seamlessly */}
            <div className="w-[300px] h-[350px] md:w-[400px] md:h-[500px] relative overflow-hidden rounded-b-full">
              {/* Optional: Add a subtle gradient fade at the bottom of the image so it blends into the dark background */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none"></div>
              
              <img 
                src={import.meta.env.VITE_IMAGE_HERO || '/Kashif_image.jpeg'} 
                alt="Muhammad Kashif" 
                className="w-full h-full object-cover object-[center_15%] brightness-90 contrast-125 grayscale-[20%]"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </PageTransition>
  );
}
