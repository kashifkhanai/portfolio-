import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="max-w-7xl w-full mx-auto px-6 pt-16 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-8">
            Portfolio <span className="text-orange-500">.</span>
          </h1>
          <p className="text-zinc-400 font-sans text-xl leading-relaxed">
            A selection of my recent work, focusing on full-stack architecture, real-time data handling, and intelligent AI integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={i === 0 ? "col-span-1 md:col-span-2" : "col-span-1"}
            >
              <Link 
                to={`/portfolio/${project.slug}`}
                className={`flex w-full h-full bg-[#0F131E] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#FF5722] transition-all duration-300 ${i === 0 ? "flex-col lg:flex-row" : "flex-col"}`}
              >
                <div className={i === 0 
                  ? "w-full lg:w-1/2 aspect-video bg-zinc-900/40 relative overflow-hidden flex items-center justify-center border-b border-white/5 lg:border-b-0 lg:border-r" 
                  : "aspect-video bg-zinc-900/40 relative overflow-hidden border-b border-white/5"}>
                  <img 
                    src={`/projects/${project.slug}.png`} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none'; 
                      e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-zinc-800', 'to-zinc-950'); 
                    }} 
                  />
                  <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-widest z-10">
                    {project.scopePill}
                  </span>
                </div>

                <div className={i === 0 ? "w-full lg:w-1/2 p-6 md:p-8 flex flex-col flex-grow" : "p-6 md:p-8 flex flex-col flex-grow w-full"}>
                  <span className="text-sm font-mono font-bold text-[#FF5722] tracking-widest uppercase mb-2">{project.techRibbon}</span>
                  <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight group-hover:text-[#FF5722] transition-colors">{project.title}</h3>
                  <p className="text-base text-zinc-300 font-sans leading-relaxed mb-4">{project.businessPitch}</p>

                  <ul className="space-y-2 mb-2 border-l-2 border-[#FF5722]/30 pl-3">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm font-mono text-zinc-300 flex items-center gap-2">
                        <span className="text-[#FF5722]">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
