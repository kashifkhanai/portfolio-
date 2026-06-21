import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import { MonitorPlay, Server, Database, Code2, Cpu, CloudCog, Shield, Lock, Terminal } from 'lucide-react';

const services = [
  {
    title: "Enterprise Backend Systems",
    businessPitch: "Building fast, secure servers that don’t slow down or crash, even when thousands of users hit your website at the exact same second.",
    technicalPitch: "AdonisJS v6 & TypeScript server architectures backed by normalized MySQL databases, engineered for pure ACID compliance and zero deadlocks.",
    deliverables: [
      "Strict Relational MySQL Schemas",
      "Compile-Time Type-Safe APIs",
      "Secure Role-Based Access (RBAC)"
    ],
    archetype: "[ DOMAIN: RELATIONAL CORE ]",
    icon: <Database className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Live & Real-Time Systems",
    businessPitch: "Making web pages update instantly without hitting 'refresh'. Perfect for live stock tickers, chat systems, and instant notifications.",
    technicalPitch: "Bypassing standard REST delays via WebSockets and asynchronous Python FastAPI loops to push high-frequency market payloads to the UI instantly.",
    deliverables: [
      "Live WebSocket Ingress Gateways",
      "Asynchronous FastAPI Dispatch",
      "Instantaneous DOM Syncing"
    ],
    archetype: "[ THROUGHPUT: SUB-MILLISECOND ]",
    icon: <Cpu className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "High-Performance Web UI",
    businessPitch: "Crafting super smooth, premium websites that feel like fast desktop apps—zero glitching, zero screen lag, and beautiful to navigate.",
    technicalPitch: "Writing clean React 19 driven by Redux Toolkit atomic slices and custom hooks, completely wiping out chaotic prop-drilling and DOM re-renders.",
    deliverables: [
      "Decoupled Redux Toolkit Slices",
      "Atomic Thunks & Custom Hooks",
      "Zero-Prop-Drilling UI Trees"
    ],
    archetype: "[ TOPOLOGY: ATOMIC SLICES ]",
    icon: <MonitorPlay className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Automated Web Scraping",
    businessPitch: "Legally extracting massive amounts of data from complex websites and organizing it into neat, clean spreadsheets for your business.",
    technicalPitch: "Architecting automated Playwright scrapers that bypass modern bot-mitigation, parse messy hierarchical DOMs, and export normalized DW schemas.",
    deliverables: [
      "Playwright Automated Harvesting",
      "Multi-Platform DOM Cleansing",
      "Normalized BI Schemas"
    ],
    archetype: "[ INGESTION: AUTONOMOUS ETL ]",
    icon: <Server className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Smart AI Integration",
    businessPitch: "Connecting real AI to your actual business data, turning generic chatbots into smart assistants that actually know your company's rules.",
    technicalPitch: "Wiring low-latency Google Gemini LLM token streams directly into secure backend controllers coupled with structured BSON document retrieval.",
    deliverables: [
      "Low-Latency Token Streaming",
      "Link-Expiring Auth Wrappers",
      "Structured BSON Vector Retrieval"
    ],
    archetype: "[ COGNITION: STREAMING RAG ]",
    icon: <Code2 className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Computer Vision & Maps",
    businessPitch: "Teaching cameras to recognize physical objects in the real world and automatically pin their exact location onto live satellite maps.",
    technicalPitch: "Hardening custom YOLOv8 ONNX-runtime vision models paired with PostGIS geospatial databases for urban anomaly tracking and automated dispatch.",
    deliverables: [
      "Custom YOLOv8 Object Detection",
      "PostGIS Geospatial Mapping",
      "Automated High-Confidence Alerts"
    ],
    archetype: "[ INFERENCE: EDGE & CLOUD ]",
    icon: <CloudCog className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Codebase Rescue & Cleanup",
    businessPitch: "Taking old, slow, or messy code written by previous developers and fixing it permanently without taking your website offline.",
    technicalPitch: "Systematically auditing legacy JavaScript monolithic codebases and refactoring them into 100% strict TypeScript architectures, killing runtime errors.",
    deliverables: [
      "Systematic JS to TS Audits",
      "Compile-Time Boundary Hardening",
      "Complete Wiping of Runtime Errors"
    ],
    archetype: "[ REFACTORING: STRICT TS ]",
    icon: <Shield className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "API Security & Protection",
    businessPitch: "Locking your digital doors. Protecting sensitive user data and making sure hackers can't overload or break your public website links.",
    technicalPitch: "Hardening public gateways via cryptographic link-expiring URLs, strict CORS policies, custom JWT validation, and automated rate-limiting.",
    deliverables: [
      "Cryptographic Link-Expiring URLs",
      "Hardened JWT Role Verification",
      "Strict Payload Sanitization"
    ],
    archetype: "[ SECURITY: ZERO-TRUST ]",
    icon: <Lock className="w-8 h-8 text-orange-500 mb-6" />
  },
  {
    title: "Cloud Deployment & Tooling",
    businessPitch: "Setting up the background plumbing so that when a developer writes new code, it goes live to your users smoothly and safely.",
    technicalPitch: "Driving development inside a native WSL2 Linux ecosystem. I construct modular Docker compose stacks, reverse-proxy Nginx servers, and CI/CD pipelines.",
    deliverables: [
      "Linux-Native WSL2 Ecosystem",
      "Multi-Stage Docker Topologies",
      "Nginx High-Throughput Proxies"
    ],
    archetype: "[ DEVOPS: CONTAINERIZED ]",
    icon: <Terminal className="w-8 h-8 text-orange-500 mb-6" />
  }
];

export default function Services() {
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
            Services <span className="text-[#FF5722]">.</span>
          </h1>
          <p className="text-zinc-400 font-sans text-xl leading-relaxed">
            End-to-end engineering solutions. I architect robust AdonisJS backends, design lightweight React interfaces, and embed live Generative AI pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 border border-white/5 bg-[#1A1A1A] rounded-3xl shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col"
            >
              <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-sans text-2xl font-bold text-zinc-100 mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              
              <div className="flex-grow space-y-4">
                <p className="text-zinc-400 font-sans leading-relaxed">
                  <strong className="text-zinc-200">Business Pitch:</strong> {service.businessPitch}
                </p>
                <p className="text-zinc-500 font-sans leading-relaxed text-sm">
                  <strong className="text-zinc-300">Technical Pitch:</strong> {service.technicalPitch}
                </p>
                <div className="pt-2">
                  <strong className="text-zinc-300 text-sm block mb-2">Deliverables:</strong>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-zinc-500 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mt-1.5 shrink-0"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <span className="bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full text-[11px] font-mono text-zinc-400 tracking-wider inline-block mt-6 group-hover:border-orange-500/30 transition-colors">
                  {service.archetype}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
