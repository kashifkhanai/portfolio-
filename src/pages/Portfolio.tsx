import PageTransition from '../components/PageTransition';
import { ExternalLink, Github } from 'lucide-react';

import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        <div className="max-w-3xl mb-20">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-8">
            Portfolio <span className="text-orange-500">.</span>
          </h1>
          <p className="text-zinc-400 font-sans text-xl leading-relaxed">
            A selection of my recent work, focusing on full-stack architecture, real-time data handling, and intelligent AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col h-full p-8 md:p-10 border border-white/5 bg-[#1A1A1A] rounded-3xl shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
              <div className="flex-grow">
                <h3 className="font-sans text-2xl font-bold text-zinc-100 mb-4 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 font-sans leading-relaxed mb-8">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold text-orange-500 bg-orange-500/10 rounded-full border border-orange-500/20">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-orange-500 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-white transition-colors">
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
