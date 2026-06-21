import PageTransition from '../components/PageTransition';

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
      <div className="max-w-7xl w-full mx-auto px-6 pt-16 pb-32">
        <div className="min-h-[85vh] flex flex-col justify-center pb-12">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-12">
            About <span className="text-orange-500">Me</span>
          </h1>
          
          <div className="prose prose-invert max-w-none font-sans text-lg text-zinc-400 leading-relaxed">
            <p className="mb-6 text-2xl text-zinc-200 font-medium leading-snug">
              Based in Lahore, Pakistan. I architect strict high-concurrency enterprise backends and interface low-latency Generative AI pipelines.
            </p>
            <p className="mb-6">
              I am a Full-Stack Systems Engineer with an opinionated approach to web architecture. I specialize in the AdonisJS ecosystem, writing strictly type-safe TypeScript, and designing relational MySQL databases that maintain absolute data integrity under load. My frontend philosophy centers on predictable state topologies via Redux Toolkit atomic slices rather than chaotic prop-drilling.
            </p>
            <p className="mb-6">
              Currently completing my BS in Artificial Intelligence, I treat AI as a core systems component rather than a generic third-party wrapper. By embedding custom Computer Vision (YOLOv8) models and streaming Large Language Models directly into backend event loops, I bridge the gap between heavy data science and lightweight human interfaces.
            </p>
            <p className="border-l-2 border-orange-500 pl-6 my-8 text-zinc-300 italic">
              <strong>The Consolidation Advantage:</strong> I am a one-person full-stack team operating as an end-to-end solo delivery unit. You do not need to coordinate a separate database architect, an AdonisJS backend dev, a React state engineer, a WordPress specialist, a DevOps person, and a Python AI researcher to ship a feature. I own the relational schema, the API ingress, the client DOM diffing, and the inference stream. I have done that consolidation on 30+ client projects, and the fewer hand-offs, the faster (and cheaper) the project ships.
            </p>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="font-sans text-3xl text-zinc-100 mb-8 font-bold">Experience</h2>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-t border-white/10 pt-8">
                <div className="w-48 text-orange-500 font-mono text-sm shrink-0">{exp.period}</div>
                <div>
                  <h3 className="text-xl text-zinc-100 font-bold mb-1">{exp.role}</h3>
                  <div className="text-zinc-400 font-medium mb-4">{exp.company}</div>
                  <p className="text-zinc-500 leading-relaxed mb-3">{exp.desc}</p>
                  <p className="text-zinc-300 font-medium text-sm">{exp.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="font-sans text-3xl text-zinc-100 mb-8 font-bold">Education</h2>
          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-t border-white/10 pt-8">
                <div className="w-48 text-orange-500 font-mono text-sm shrink-0">{edu.period}</div>
                <div>
                  <h3 className="text-xl text-zinc-100 font-bold mb-1">{edu.degree}</h3>
                  <div className="text-zinc-400 font-medium mb-2">{edu.institution}</div>
                  <p className="text-zinc-500 text-sm mb-2">{edu.desc}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-1">{edu.coursework}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{edu.capstone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-sans text-3xl text-zinc-100 mb-8 font-bold">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/5 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/10 transition-shadow">
                <h3 className="text-lg text-orange-500 font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300 hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CALL-TO-ACTION */}
        <div className="max-w-7xl w-full mx-auto pt-28 pb-20 px-6 text-center flex flex-col items-center relative">
          <div className="bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full text-xs text-zinc-400 font-mono tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span> AVAILABLE FOR DEPLOYMENT
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Let's Build Something <span className="text-[#FF5722]">Great.</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed mb-10 font-sans">
            Whether you need an opinionated AdonisJS backend, a streaming AI inference pipeline, or high-concurrency database optimization—I am ready to consolidate your engineering stack.
          </p>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <a href="https://wa.me/923055641502" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-sm transition-all shadow-[0_0_30px_rgba(37,211,102,0.2)] flex items-center gap-2.5 cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp Me
            </a>
            <a href="mailto:mkashifkhanai@gmail.com" className="px-8 py-4 rounded-2xl bg-[#12141D] hover:bg-[#1A1D2A] border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2.5 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Send Email
            </a>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
