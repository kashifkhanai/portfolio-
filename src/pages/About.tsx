import PageTransition from '../components/PageTransition';

export default function About() {
  const experiences = [
    {
      role: "Associate Full-Stack Developer",
      company: "Experts Cloud",
      period: "Aug 2025 - Present",
      desc: "Architecting enterprise-grade applications with a primary focus on AdonisJS and TypeScript for robust backend performance. Managing complex state and interactive UI using React.js and Redux Toolkit while ensuring full type-safety. Optimizing MySQL databases and streamlining development within WSL (Ubuntu) using GitHub Copilot."
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Experts Cloud",
      period: "Feb 2025 - July 2025",
      desc: "Contributed to full-cycle web development using the MERN stack, assisting in the migration of legacy codebases to TypeScript for enhanced maintainability. Developed responsive components using Tailwind CSS and implemented secure JWT-based authentication flows."
    },
    {
      role: "Python & AI Intern",
      company: "Enigmatix",
      period: "Sep 2024 - Jan 2025",
      desc: "Engineered AI automation scripts and integrated Google Gemini API for real-time text processing. Performed deep data analytics and visualization using Pandas, Seaborn, and Matplotlib to derive actionable business insights."
    }
  ];

  const education = [
    {
      degree: "BS Artificial Intelligence",
      institution: "The Islamia University of Bahawalpur",
      period: "2022 - 2026",
      desc: "CGPA: 3.38. Relevant Courses: Machine Learning, Deep Learning, NLP, Computer Vision, Programming for AI (Python), ANN."
    }
  ];

  const skills = [
    {
      category: "Full-Stack Development",
      items: "React.js, AdonisJS, Redux / Redux Toolkit, JavaScript (ES6+), Node.js, Express, Tailwind CSS, RESTful APIs, TypeScript, WebSockets."
    },
    {
      category: "AI Engineering",
      items: "Python, Generative AI, LLMs, Prompt Engineering, FastAPI, Pandas, Seaborn, Matplotlib, Data Analytics, Data Visualization."
    },
    {
      category: "Databases & DevOps",
      items: "MySQL, MongoDB, WSL (Ubuntu), GitHub Copilot, Docker, Nginx, AWS (Basic Deployment), Git & GitHub, SSH."
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
        <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-12">
          About <span className="text-orange-500">Me</span>
        </h1>
        
        <div className="prose prose-invert max-w-none font-sans text-lg text-zinc-400 leading-relaxed mb-24">
          <p className="mb-6 text-xl text-zinc-200 font-medium">
            Accomplished Full-Stack Developer with a strong foundation in building scalable web architectures using AdonisJS, TypeScript, and React.
          </p>
          <p>
            Currently transitioning into AI Engineering, leveraging expert-level Python and Generative AI knowledge to develop intelligent, data-driven systems. Focused on bridging complex software engineering with emerging AI technologies to build the next generation of intelligent web applications.
          </p>
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
                  <p className="text-zinc-500 leading-relaxed">{exp.desc}</p>
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
                  <p className="text-zinc-500 text-sm leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-sans text-3xl text-zinc-100 mb-8 font-bold">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/5 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/10 transition-shadow">
                <h3 className="text-lg text-orange-500 font-bold mb-3">{skill.category}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
