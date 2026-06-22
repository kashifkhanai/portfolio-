import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import ClosingCallToAction from '../components/ClosingCallToAction';

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
      <div className="max-w-7xl mx-auto px-[clamp(0.5rem,3vw,2rem)] pb-[clamp(1rem,min(4vw,4vh),4rem)] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-[calc(100vh-5rem)] flex flex-col justify-center"
        >
          <h1 className="font-sans text-[clamp(1.5rem,min(5vw,8vh),5rem)] font-bold tracking-tight text-zinc-100 mb-[clamp(0.5rem,min(2vw,2vh),2rem)]">
            About <span className="text-orange-500">Me</span>
          </h1>
          
          <div className="prose prose-invert max-w-none font-sans text-[clamp(0.55rem,1.5vw,1.125rem)] text-zinc-400 leading-snug md:leading-relaxed">
            <p className="mb-[clamp(0.5rem,2vh,1.5rem)] text-[clamp(0.65rem,2vw,1.5rem)] text-zinc-200 font-medium leading-tight md:leading-snug">
              Based in Lahore, Pakistan. I architect strict high-concurrency enterprise backends and interface low-latency Generative AI pipelines.
            </p>
            <p className="mb-[clamp(0.25rem,2vh,1.5rem)]">
              I am a Full-Stack Systems Engineer with an opinionated approach to web architecture. I specialize in the AdonisJS ecosystem, writing strictly type-safe TypeScript, and designing relational MySQL databases that maintain absolute data integrity under load. My frontend philosophy centers on predictable state topologies via Redux Toolkit atomic slices rather than chaotic prop-drilling.
            </p>
            <p className="mb-[clamp(0.25rem,2vh,1.5rem)]">
              Currently completing my BS in Artificial Intelligence, I treat AI as a core systems component rather than a generic third-party wrapper. By embedding custom Computer Vision (YOLOv8) models and streaming Large Language Models directly into backend event loops, I bridge the gap between heavy data science and lightweight human interfaces.
            </p>
            <p className="border-l-2 border-orange-500 pl-[clamp(0.5rem,2vw,1.5rem)] my-[clamp(0.5rem,2vh,2rem)] text-zinc-300 italic text-[clamp(0.5rem,1.5vw,1.125rem)]">
              <strong>The Consolidation Advantage:</strong> I am a one-person full-stack team operating as an end-to-end solo delivery unit. You do not need to coordinate a separate database architect, an AdonisJS backend dev, a React state engineer, a WordPress specialist, a DevOps person, and a Python AI researcher to ship a feature. I own the relational schema, the API ingress, the client DOM diffing, and the inference stream. I have done that consolidation on 30+ client projects, and the fewer hand-offs, the faster (and cheaper) the project ships.
            </p>
          </div>
        </motion.div>

        <section className="mb-[clamp(2rem,min(6vw,8vh),6rem)]">
          <h2 className="font-sans text-[clamp(1.5rem,min(3vw,4vh),2.25rem)] text-zinc-100 mb-[clamp(1rem,min(3vw,4vh),2rem)] font-bold">Experience</h2>
          <div className="flex flex-col gap-[clamp(1.5rem,min(3vw,4vh),2rem)]">
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

        <section className="mb-[clamp(2rem,min(6vw,8vh),6rem)]">
          <h2 className="font-sans text-[clamp(1.5rem,min(3vw,4vh),2.25rem)] text-zinc-100 mb-[clamp(1rem,min(3vw,4vh),2rem)] font-bold">Education</h2>
          <div className="flex flex-col gap-[clamp(1.5rem,min(3vw,4vh),2rem)]">
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
          <h2 className="font-sans text-[clamp(1.5rem,min(3vw,4vh),2.25rem)] text-zinc-100 mb-[clamp(1rem,min(3vw,4vh),2rem)] font-bold">Skills & Technologies</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(0.5rem,min(2vw,3vh),2rem)]">
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
        <ClosingCallToAction />

      </div>
    </PageTransition>
  );
}
