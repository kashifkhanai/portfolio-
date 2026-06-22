import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';

export default function About() {
  const experiences = [
    {
      role: "Associate Full-Stack Developer",
      company: "Experts Cloud",
      period: "Aug 2025 - Present",
      desc: "Architecting enterprise backends using AdonisJS v6 and strict TypeScript. Managing complex React.js and centralized Redux Toolkit state topologies inside a native WSL2 Ubuntu environment.",
      impact: "⚡ Impact: Formulated a zero-prop-drilling state architecture and optimized high-frequency relational database queries."
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Experts Cloud",
      period: "Feb 2025 - July 2025",
      desc: "Spearheaded the systematic migration of legacy MERN codebases to strict TypeScript. Implemented modular Tailwind CSS design systems and hardened JWT authentication flows.",
      impact: "⚡ Impact: Eliminated 80% of runtime client type errors across three production client portals."
    },
    {
      role: "Python & AI Intern",
      company: "Enigmatix",
      period: "Sep 2024 - Jan 2025",
      desc: "Engineered automated text-parsing and cognitive automation pipelines utilizing the Google Gemini API. Executed deep data modeling and visual analytics via Pandas and Seaborn.",
      impact: "⚡ Impact: Delivered sub-second AI inference wrappers mapped directly to structured BSON database schemas."
    }
  ];

  const education = [
    {
      degree: "BS Artificial Intelligence",
      institution: "The Islamia University of Bahawalpur",
      period: "2022 - 2026",
      desc: "CGPA: 3.38",
      coursework: "Core Rigor: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision.",
      capstone: "Senior Capstone: Engineered an AI-Integrated Smart City Issue Detection platform utilizing custom-trained YOLOv8 models paired with PostGIS geospatial databases."
    }
  ];

  const skills = [
    {
      category: "Frontend Topology",
      items: ["React 19", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Vite", "ES6+"]
    },
    {
      category: "Backend & API Ingress",
      items: ["AdonisJS v6", "Lucid ORM", "Node.js", "Express.js", "REST APIs", "WebSockets"]
    },
    {
      category: "Applied AI & Vision",
      items: ["Python", "Google Gemini API", "YOLOv8 (ONNX)", "FastAPI", "Prompt Engineering", "Pandas"]
    },
    {
      category: "Databases & Data Modeling",
      items: ["Relational MySQL", "PostGIS Spatial", "MongoDB DW", "Strict BSON", "SQL Joins"]
    },
    {
      category: "DevOps & System Tooling",
      items: ["Native Ubuntu WSL2", "Docker Containers", "Nginx Server", "Git / SSH Protocol", "GitHub Copilot", "Postman"]
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-[clamp(0.25rem,2vw,2rem)] pt-[clamp(0.5rem,6vw,4rem)] pb-[clamp(1rem,10vw,8rem)] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-[clamp(40vh,70vh,85vh)] flex flex-col justify-center pb-[clamp(0.5rem,4vw,3rem)] pt-[clamp(1rem,4vw,2rem)]"
        >
          <h1 className="font-sans text-[clamp(1.5rem,6vw,5rem)] font-bold tracking-tight text-zinc-100 mb-[clamp(0.5rem,4vw,3rem)]">
            About <span className="text-orange-500">Me</span>
          </h1>
          
          <div className="prose prose-invert max-w-none font-sans text-[clamp(0.55rem,2vw,1.125rem)] text-zinc-400 leading-relaxed">
            <p className="mb-[clamp(0.5rem,3vw,1.5rem)] text-[clamp(0.65rem,2.5vw,1.5rem)] text-zinc-200 font-medium leading-snug">
              Based in Lahore, Pakistan. I architect strict high-concurrency enterprise backends and interface low-latency Generative AI pipelines.
            </p>
            <p className="mb-[clamp(0.5rem,3vw,1.5rem)]">
              I am a Full-Stack Systems Engineer with an opinionated approach to web architecture. I specialize in the AdonisJS ecosystem, writing strictly type-safe TypeScript, and designing relational MySQL databases that maintain absolute data integrity under load. My frontend philosophy centers on predictable state topologies via Redux Toolkit atomic slices rather than chaotic prop-drilling.
            </p>
            <p className="mb-[clamp(0.5rem,3vw,1.5rem)]">
              Currently completing my BS in Artificial Intelligence, I treat AI as a core systems component rather than a generic third-party wrapper. By embedding custom Computer Vision (YOLOv8) models and streaming Large Language Models directly into backend event loops, I bridge the gap between heavy data science and lightweight human interfaces.
            </p>
            <p className="border-l-2 border-orange-500 pl-[clamp(0.5rem,3vw,1.5rem)] my-[clamp(0.75rem,4vw,2rem)] text-zinc-300 italic text-[clamp(0.5rem,2vw,1.125rem)]">
              <strong>The Consolidation Advantage:</strong> I am a one-person full-stack team operating as an end-to-end solo delivery unit. You do not need to coordinate a separate database architect, an AdonisJS backend dev, a React state engineer, a WordPress specialist, a DevOps person, and a Python AI researcher to ship a feature. I own the relational schema, the API ingress, the client DOM diffing, and the inference stream. I have done that consolidation on 30+ client projects, and the fewer hand-offs, the faster (and cheaper) the project ships.
            </p>
          </div>
        </motion.div>

        <section className="mb-[clamp(3rem,8vw,6rem)]">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] text-zinc-100 mb-[clamp(1.5rem,4vw,2rem)] font-bold">Experience</h2>
          <div className="flex flex-col gap-[clamp(1.5rem,4vw,2rem)]">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-row items-baseline gap-[clamp(0.5rem,3vw,2rem)] border-t border-white/10 pt-[clamp(1.5rem,4vw,2rem)]"
              >
                <div className="w-[clamp(4rem,20vw,12rem)] text-orange-500 font-mono text-[clamp(0.5rem,1.5vw,0.875rem)] shrink-0">{exp.period}</div>
                <div>
                  <h3 className="text-[clamp(0.875rem,2vw,1.5rem)] text-zinc-100 font-bold mb-[clamp(0.1rem,0.5vw,0.25rem)] leading-tight">{exp.role}</h3>
                  <div className="text-zinc-400 font-medium text-[clamp(0.6rem,1.5vw,1rem)] mb-[clamp(0.5rem,2vw,1rem)]">{exp.company}</div>
                  <p className="text-zinc-500 leading-relaxed text-[clamp(0.55rem,1.5vw,1rem)] mb-[clamp(0.5rem,1.5vw,0.75rem)]">{exp.desc}</p>
                  <p className="text-zinc-300 font-medium text-[clamp(0.5rem,1.2vw,0.875rem)] leading-relaxed">{exp.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-[clamp(3rem,8vw,6rem)]">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] text-zinc-100 mb-[clamp(1.5rem,4vw,2rem)] font-bold">Education</h2>
          <div className="flex flex-col gap-[clamp(1.5rem,4vw,2rem)]">
            {education.map((edu, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-row items-baseline gap-[clamp(0.5rem,3vw,2rem)] border-t border-white/10 pt-[clamp(1.5rem,4vw,2rem)]"
              >
                <div className="w-[clamp(4rem,20vw,12rem)] text-orange-500 font-mono text-[clamp(0.5rem,1.5vw,0.875rem)] shrink-0">{edu.period}</div>
                <div>
                  <h3 className="text-[clamp(0.875rem,2vw,1.5rem)] text-zinc-100 font-bold mb-[clamp(0.1rem,0.5vw,0.25rem)] leading-tight">{edu.degree}</h3>
                  <div className="text-zinc-400 font-medium text-[clamp(0.6rem,1.5vw,1rem)] mb-[clamp(0.5rem,1.5vw,0.75rem)]">{edu.institution}</div>
                  <p className="text-zinc-500 leading-relaxed text-[clamp(0.55rem,1.5vw,1rem)] mb-[clamp(0.5rem,1.5vw,0.75rem)]">{edu.desc}</p>
                  <p className="text-zinc-400 leading-relaxed text-[clamp(0.55rem,1.5vw,1rem)] mb-[clamp(0.25rem,1vw,0.5rem)]">{edu.coursework}</p>
                  <p className="text-zinc-400 leading-relaxed text-[clamp(0.55rem,1.5vw,1rem)]">{edu.capstone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] text-zinc-100 mb-[clamp(1.5rem,4vw,2rem)] font-bold">Skills & Technologies</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(0.5rem,3vw,2rem)]">
            {skills.map((skill, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1A1A1A] border border-white/5 p-[clamp(0.5rem,2vw,1.5rem)] rounded-[clamp(0.5rem,3vw,1.5rem)] shadow-lg hover:shadow-orange-500/10 transition-shadow"
              >
                <h3 className="text-[clamp(0.75rem,2vw,1.125rem)] text-orange-500 font-bold mb-[clamp(0.5rem,2vw,1rem)] leading-tight">{skill.category}</h3>
                <div className="flex flex-wrap gap-[clamp(0.1rem,1vw,0.5rem)]">
                  {skill.items.map((item, j) => (
                    <span key={j} className="px-[clamp(0.25rem,1vw,0.75rem)] py-[clamp(0.1rem,0.5vw,0.375rem)] bg-white/5 border border-white/10 rounded-full text-[clamp(0.4rem,1.2vw,0.75rem)] font-medium text-zinc-300 hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CLOSING CALL-TO-ACTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl w-full mx-auto pt-[clamp(4rem,10vw,7rem)] pb-[clamp(3rem,8vw,5rem)] px-[clamp(1rem,4vw,1.5rem)] text-center flex flex-col items-center relative"
        >
          <div className="bg-white/[0.03] border border-white/10 px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1vw,0.375rem)] rounded-full text-[clamp(0.5rem,1.5vw,0.75rem)] text-zinc-400 font-mono tracking-widest uppercase mb-[clamp(1rem,3vw,1.5rem)] flex items-center gap-[clamp(0.25rem,1vw,0.5rem)]">
            <span className="w-[clamp(0.375rem,1vw,0.5rem)] h-[clamp(0.375rem,1vw,0.5rem)] rounded-full bg-[#00E599] animate-pulse"></span> AVAILABLE FOR DEPLOYMENT
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-white tracking-tight leading-tight mb-[clamp(1rem,3vw,1.5rem)]">
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

      </div>
    </PageTransition>
  );
}
