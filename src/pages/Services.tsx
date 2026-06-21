import PageTransition from '../components/PageTransition';
import { MonitorPlay, Server, Database, Code2, Cpu, CloudCog } from 'lucide-react';

const services = [
  {
    title: "Full-Stack Development",
    desc: "Architecting enterprise-grade applications with a primary focus on AdonisJS, TypeScript, and React.js. Building type-safe, high-performance scalable systems.",
    icon: <MonitorPlay className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "AI Engineering",
    desc: "Developing intelligent, data-driven systems by leveraging Python, Generative AI, and LLMs. Integrating Google Gemini API for real-time text processing.",
    icon: <Code2 className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Data Analytics & Visualization",
    desc: "Performing deep data analytics using Pandas, Seaborn, and Matplotlib to derive actionable business insights from complex datasets.",
    icon: <Server className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Database Optimization",
    desc: "Structuring and optimizing complex data flows with MySQL and MongoDB, ensuring data integrity and high-concurrency handling.",
    icon: <Database className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Real-Time Systems",
    desc: "Engineering high-performance backends and real-time user interfaces using WebSockets, FastAPI, and Redux Toolkit for minimal latency.",
    icon: <Cpu className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Modern DevOps",
    desc: "Streamlining development and deployment processes utilizing WSL (Ubuntu), Docker, GitHub Copilot, and Nginx for secure, efficient delivery.",
    icon: <CloudCog className="w-8 h-8 text-orange-500 mb-6" />
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        <div className="max-w-3xl mb-20">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-8">
            Expertise <span className="text-orange-500">.</span>
          </h1>
          <p className="text-zinc-400 font-sans text-xl leading-relaxed">
            I offer a sophisticated range of technical services, focusing on robust full-stack architecture and next-generation AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-8 md:p-10 border border-white/5 bg-[#1A1A1A] rounded-3xl shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
              <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-sans text-2xl font-bold text-zinc-100 mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-zinc-400 font-sans leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
