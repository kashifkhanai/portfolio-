import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="max-w-7xl w-full mx-auto px-[clamp(0.5rem,3vw,2rem)] pb-[clamp(1rem,min(4vw,4vh),4rem)]">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center mb-[clamp(2rem,min(5vw,5vh),5rem)]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-sans text-[clamp(1.5rem,min(5vw,8vh),5rem)] font-bold tracking-tight text-zinc-100 mb-[clamp(0.5rem,min(2vw,2vh),2rem)]">
              Portfolio <span className="text-orange-500">.</span>
            </h1>
            <p className="text-zinc-400 font-sans text-[clamp(0.65rem,1.5vw,1.125rem)] leading-snug md:leading-relaxed max-w-3xl mb-[clamp(1rem,2vh,2rem)]">
              Explore a curated collection of my work. I build end-to-end software solutions—from complex Hospital Management Systems and real-time Crypto Dashboards, to smart AI integrations like Computer Vision and Chatbots. My focus is on writing reliable code that solves real problems and delivers a seamless experience for every user.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              to={`/portfolio/${projects[0].slug}`}
              className="flex w-full min-h-[clamp(15rem,min(45vw,45vh),35rem)] bg-[#0F131E] border border-white/10 rounded-[clamp(1rem,3vw,1.5rem)] overflow-hidden group hover:border-[#FF5722] transition-all duration-300 flex-row"
            >
              <div className="w-[40%] md:w-1/2 bg-zinc-900/40 relative overflow-hidden flex items-center justify-center border-r border-white/5">
                <img 
                  src={`/projects/${projects[0].slug}.png`} 
                  alt={projects[0].title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-zinc-800', 'to-zinc-950'); 
                  }} 
                />
              </div>

              <div className="w-[60%] md:w-1/2 p-[clamp(0.5rem,2vw,2rem)] flex flex-col justify-center">
                <span className="text-[clamp(0.5rem,1.5vw,0.875rem)] font-mono font-bold text-[#FF5722] tracking-widest uppercase mb-[clamp(0.25rem,1vw,0.5rem)]">{projects[0].techRibbon}</span>
                <h3 className="text-[clamp(0.875rem,2vw,1.5rem)] font-extrabold text-white mb-[clamp(0.25rem,1vw,0.75rem)] tracking-tight group-hover:text-[#FF5722] transition-colors leading-tight">{projects[0].title}</h3>
                <p className="text-[clamp(0.55rem,1.5vw,1rem)] text-zinc-300 font-sans leading-snug md:leading-relaxed mb-[clamp(0.5rem,2vw,1rem)] line-clamp-3">{(projects[0] as any).overview || projects[0].businessPitch}</p>

                <ul className="space-y-[clamp(0.1rem,0.5vw,0.5rem)] border-l-2 border-[#FF5722]/30 pl-[clamp(0.25rem,1vw,0.75rem)]">
                  {((projects[0] as any).keyFeatures || projects[0].deliverables || []).slice(0, 3).map((item: string, idx: number) => (
                    <li key={idx} className="text-[clamp(0.45rem,1.2vw,0.875rem)] font-mono text-zinc-300 flex items-center gap-[clamp(0.25rem,1vw,0.5rem)]">
                      <span className="text-[#FF5722] shrink-0">▹</span> <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(0.5rem,min(2vw,3vh),2rem)]">
          {projects.slice(1).map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="col-span-1"
            >
              <Link 
                to={`/portfolio/${project.slug}`}
                className="flex w-full h-full bg-[#0F131E] border border-white/10 rounded-[clamp(1rem,3vw,1.5rem)] overflow-hidden group hover:border-[#FF5722] transition-all duration-300 flex-col"
              >
                <div className="aspect-[2.5/1] bg-zinc-900/40 relative overflow-hidden border-b border-white/5">
                  <img 
                    src={`/projects/${project.slug}.png`} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none'; 
                      e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-zinc-800', 'to-zinc-950'); 
                    }} 
                  />
                </div>

                <div className="p-[clamp(0.5rem,min(1.5vw,2vh),1.25rem)] flex flex-col flex-grow w-full">
                  <span className="text-[clamp(0.5rem,min(1.5vw,1.8vh),0.85rem)] font-mono font-bold text-[#FF5722] tracking-widest uppercase mb-[clamp(0.25rem,1vw,0.5rem)]">{project.techRibbon}</span>
                  <h3 className="text-[clamp(0.9rem,min(1.8vw,2.5vh),1.375rem)] font-extrabold text-white mb-[clamp(0.2rem,min(1vw,1.5vh),0.5rem)] tracking-tight group-hover:text-[#FF5722] transition-colors leading-tight">{project.title}</h3>
                  <p className="text-[clamp(0.7rem,min(1.5vw,2vh),1.1rem)] text-zinc-400 font-sans leading-snug mb-[clamp(0.5rem,1.5vw,1rem)] line-clamp-2">{(project as any).overview || project.businessPitch}</p>

                  <ul className="space-y-[clamp(0.1rem,0.5vw,0.25rem)] border-l-2 border-[#FF5722]/30 pl-[clamp(0.25rem,1vw,0.5rem)] mt-auto">
                    {((project as any).keyFeatures || project.deliverables || []).slice(0, 3).map((item: string, idx: number) => (
                      <li key={idx} className="text-[clamp(0.6rem,min(1.2vw,1.8vh),1rem)] font-mono text-zinc-400 flex items-center gap-[clamp(0.25rem,1vw,0.5rem)]">
                        <span className="text-[#FF5722] shrink-0">▹</span> <span className="truncate">{item}</span>
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
