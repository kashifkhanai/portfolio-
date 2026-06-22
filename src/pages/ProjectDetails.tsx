import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import ClosingCallToAction from '../components/ClosingCallToAction';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // 404 State
  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-[clamp(1rem,3vw,2rem)]">
          <h1 className="text-[clamp(2.5rem,min(6vw,8vh),4rem)] font-extrabold text-white tracking-tight mb-[clamp(0.5rem,2vh,1rem)]">Monograph Not Found <span className="text-[#FF5722]">.</span></h1>
          <p className="text-zinc-400 mb-[clamp(1.5rem,4vh,3rem)] font-mono text-[clamp(0.75rem,min(1.5vw,2vh),1rem)]">The requested architecture case study could not be resolved.</p>
          <Link to="/portfolio" className="text-[#FF5722] hover:text-white transition-colors font-mono uppercase tracking-widest text-[clamp(0.6rem,min(1.2vw,2vh),0.875rem)] border border-[#FF5722]/30 px-[clamp(1rem,3vw,2rem)] py-[clamp(0.75rem,2vh,1.25rem)] rounded-full hover:bg-[#FF5722]/10">
            ← Return to Showcase
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Fallback properties if they don't exist in data yet
  const client = (project as any).client || "Confidential Domain";
  const location = (project as any).location || "Remote / Cloud Native";
  const duration = (project as any).duration || "Continuous Deployment";
  const role = (project as any).role || "Systems Architect";
  const techCloud = (project as any).techCloud || project.techRibbon.split('•').map((t: string) => t.trim());

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-[clamp(0.5rem,3vw,2rem)] pb-0 w-full font-sans">
        
        {/* 1. THE BREADCRUMB & METADATA INGRESS */}
        <div className="mb-[clamp(1.5rem,4vh,3rem)]">
          <Link to="/portfolio" className="inline-block mb-[clamp(1rem,3vh,2rem)] text-zinc-500 hover:text-[#FF5722] transition-colors font-mono text-[clamp(0.55rem,1.5vw,0.875rem)] tracking-wide">
            ← Back to Portfolio
          </Link>
          
          
          <h1 className="text-[clamp(1.5rem,min(4vw,5vh),3rem)] font-extrabold text-white tracking-tight leading-tight mt-[clamp(0.25rem,1vh,0.75rem)] mb-[clamp(1.5rem,4vh,3rem)] max-w-4xl">
            {project.title}
          </h1>

          {/* The 4-Pill Institutional Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(0.75rem,1.5vw,1.5rem)] mb-[clamp(2rem,5vh,4rem)]">
            <div className="flex flex-col justify-center border-l-2 border-[#FF5722]/30 pl-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.25rem,0.5vh,0.5rem)] hover:border-[#FF5722] transition-colors group">
              <span className="text-[clamp(0.5rem,1vw,0.65rem)] font-mono text-zinc-500 tracking-widest uppercase mb-[clamp(0.25rem,1vh,0.5rem)] group-hover:text-zinc-400 transition-colors">Client</span>
              <span className="text-[clamp(0.75rem,1.2vw,1rem)] font-semibold text-zinc-100">{client}</span>
            </div>
            <div className="flex flex-col justify-center border-l-2 border-[#FF5722]/30 pl-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.25rem,0.5vh,0.5rem)] hover:border-[#FF5722] transition-colors group">
              <span className="text-[clamp(0.5rem,1vw,0.65rem)] font-mono text-zinc-500 tracking-widest uppercase mb-[clamp(0.25rem,1vh,0.5rem)] group-hover:text-zinc-400 transition-colors">Location</span>
              <span className="text-[clamp(0.75rem,1.2vw,1rem)] font-semibold text-zinc-100">{location}</span>
            </div>
            <div className="flex flex-col justify-center border-l-2 border-[#FF5722]/30 pl-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.25rem,0.5vh,0.5rem)] hover:border-[#FF5722] transition-colors group">
              <span className="text-[clamp(0.5rem,1vw,0.65rem)] font-mono text-zinc-500 tracking-widest uppercase mb-[clamp(0.25rem,1vh,0.5rem)] group-hover:text-zinc-400 transition-colors">Timeline</span>
              <span className="text-[clamp(0.75rem,1.2vw,1rem)] font-semibold text-zinc-100">{duration}</span>
            </div>
            <div className="flex flex-col justify-center border-l-2 border-[#FF5722]/30 pl-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.25rem,0.5vh,0.5rem)] hover:border-[#FF5722] transition-colors group">
              <span className="text-[clamp(0.5rem,1vw,0.65rem)] font-mono text-zinc-500 tracking-widest uppercase mb-[clamp(0.25rem,1vh,0.5rem)] group-hover:text-zinc-400 transition-colors">Role</span>
              <span className="text-[clamp(0.75rem,1.2vw,1rem)] font-semibold text-zinc-100">{role}</span>
            </div>
          </div>
        </div>

        {/* 2. THE 16:9 HERO MOCKUP VIEWPORT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full h-[clamp(15rem,min(40vw,50vh),30rem)] bg-[#0F131E] border border-white/10 rounded-[clamp(1rem,min(3vw,4vh),2rem)] overflow-hidden mb-[clamp(2rem,6vh,4rem)] relative shadow-2xl group flex items-center justify-center"
        >
          <img 
            src={`/projects/${project.slug}-hero.png`} 
            alt={`${project.title} Interface Mockup`}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if(parent) {
                const text = document.createElement('span');
                text.className = 'font-mono text-zinc-500 tracking-widest uppercase text-[clamp(0.5rem,1.5vw,0.875rem)]';
                text.innerText = '[ SECURE VIEWPORT COMPILING ]';
                parent.appendChild(text);
              }
            }}
          />
        </motion.div>

        {/* 3. THE 70/30 ASYMMETRICAL BODY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,min(4vw,5vh),3rem)] mb-[clamp(3rem,8vh,5rem)]">
          
          {/* LEFT COLUMN (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <section className="mb-[clamp(2rem,min(4vw,5vh),3rem)]">
              <h2 className="text-[clamp(1.25rem,min(3vw,4vh),2rem)] font-bold mb-[clamp(0.75rem,2vh,1.5rem)] text-white">Overview</h2>
              <p className="text-[clamp(0.75rem,min(1.5vw,2vh),1.125rem)] text-zinc-300 font-sans leading-relaxed whitespace-pre-wrap">
                {(project as any).overview || project.businessPitch}
              </p>
            </section>

            <section>
              <h3 className="text-[clamp(1.1rem,min(2.5vw,3.5vh),1.75rem)] font-bold text-white mt-[clamp(2rem,5vh,3rem)] mb-[clamp(1rem,3vh,2rem)] tracking-tight">Key Engineering Artifacts</h3>
              <ul className="grid grid-cols-1 gap-[clamp(0.5rem,1.5vh,1rem)]">
                {((project as any).keyFeatures || project.deliverables || []).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-[clamp(0.5rem,1.5vw,1rem)] text-zinc-300 text-[clamp(0.65rem,min(1.5vw,2vh),1.05rem)] leading-tight font-sans ">
                    <span className="text-[#FF5722] shrink-0 mt-[clamp(0.1rem,0.5vh,0.2rem)]">▹</span> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* RIGHT COLUMN (lg:col-span-4) - Sticky */}
          <div className="lg:col-span-4">
            <div className="sticky top-[clamp(4rem,10vh,6rem)] flex flex-col gap-[clamp(1rem,3vh,2rem)]">
              
              {/* Box 1: Technologies Used */}
              <div className="bg-[#0A0D14] border border-white/5 p-[clamp(1rem,3vw,1.5rem)] rounded-[clamp(1rem,3vw,1.5rem)]">
                <h4 className="text-[clamp(0.5rem,1vw,0.65rem)] font-mono text-zinc-500 tracking-widest uppercase mb-[clamp(0.75rem,2vh,1rem)]">Core Technologies</h4>
                <div className="flex flex-wrap gap-[clamp(0.25rem,1vw,0.5rem)]">
                  {techCloud.map((tech: string, idx: number) => (
                    <span key={idx} className="px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.25rem,1vh,0.5rem)] border border-white/10 bg-white/[0.02] rounded-full text-[clamp(0.5rem,min(1vw,1.5vh),0.75rem)] font-medium text-zinc-300 hover:border-[#FF5722]/50 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 2: The Conversion Gate */}
              <div className="bg-[#0F131E] border border-[#FF5722]/30 p-[clamp(1rem,3vw,1.5rem)] rounded-[clamp(1rem,3vw,1.5rem)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[clamp(4rem,10vw,8rem)] h-[clamp(4rem,10vw,8rem)] bg-[#FF5722]/10 blur-3xl rounded-full -mr-[clamp(2rem,5vw,4rem)] -mt-[clamp(2rem,5vw,4rem)] transition-transform group-hover:scale-150 duration-700"></div>
                <h4 className="text-[clamp(1rem,min(2vw,3vh),1.25rem)] font-bold text-white mb-[clamp(0.5rem,1.5vh,1rem)] tracking-tight relative z-10">Require Similar Architecture?</h4>
                <p className="text-[clamp(0.6rem,min(1.2vw,2vh),0.875rem)] text-zinc-400 leading-relaxed mb-[clamp(1rem,3vh,1.5rem)] relative z-10">
                  Let's inspect the raw data models, DTO ingress flows, or WebSocket state layers for your platform.
                </p>
                <a 
                  href="https://wa.me/923055641502" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-[clamp(0.75rem,2vh,1rem)] rounded-[clamp(0.5rem,2vw,1rem)] bg-[#FF5722] hover:bg-[#e0481b] text-white font-bold text-[clamp(0.6rem,min(1.2vw,2vh),0.875rem)] transition-all flex items-center justify-center gap-[clamp(0.25rem,1vw,0.5rem)] shadow-[0_0_20px_rgba(255,87,34,0.3)] relative z-10"
                >
                  <svg className="w-[clamp(0.875rem,2vw,1.25rem)] h-[clamp(0.875rem,2vw,1.25rem)] shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  Let's Talk Systems
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 4. THE GRAND FINALE FOOTER */}
        <ClosingCallToAction />

      </div>
    </PageTransition>
  );
}