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
    icon: <Database className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <Cpu className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <MonitorPlay className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <Server className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <Code2 className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <CloudCog className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <Shield className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <Lock className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
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
    icon: <Terminal className="w-[clamp(1rem,3vw,2.5rem)] h-[clamp(1rem,3vw,2.5rem)] text-orange-500 mb-[clamp(0.25rem,3vw,1.5rem)]" />
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-[clamp(0.25rem,2vw,1.5rem)] pt-[clamp(2rem,6vw,4rem)] pb-[clamp(4rem,10vw,8rem)] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-[clamp(2rem,6vw,5rem)]"
        >
          <h1 className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-zinc-100 mb-[clamp(1rem,3vw,2rem)]">
            Services <span className="text-[#FF5722]">.</span>
          </h1>
          <p className="text-zinc-400 font-sans text-[clamp(0.875rem,2vw,1.25rem)] leading-relaxed">
            End-to-end engineering solutions. I architect robust AdonisJS backends, design lightweight React interfaces, and embed live Generative AI pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-[clamp(0.25rem,1.5vw,1rem)]">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-[clamp(0.4rem,2vw,1.5rem)] border border-white/5 bg-[#1A1A1A] rounded-[clamp(0.5rem,3vw,1.5rem)] shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col"
            >
              <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-sans text-[clamp(0.6rem,2.5vw,1.75rem)] font-bold text-zinc-100 mb-[clamp(0.25rem,2vw,1rem)] group-hover:text-orange-500 transition-colors leading-tight">{service.title}</h3>
              
              <div className="flex-grow flex flex-col gap-[clamp(0.25rem,1.5vw,0.75rem)]">
                <p className="text-zinc-400 font-sans leading-relaxed text-[clamp(0.45rem,1.5vw,1.125rem)]">
                  <strong className="text-zinc-200">Business:</strong> {service.businessPitch}
                </p>
                <p className="text-zinc-500 font-sans leading-relaxed text-[clamp(0.4rem,1.2vw,0.875rem)]">
                  <strong className="text-zinc-300">Technical:</strong> {service.technicalPitch}
                </p>
                <div className="pt-[clamp(0.1rem,1vw,0.5rem)]">
                  <strong className="text-zinc-300 block mb-[clamp(0.1rem,1vw,0.5rem)] text-[clamp(0.45rem,1.2vw,0.875rem)]">Deliverables:</strong>
                  <ul className="flex flex-col gap-[clamp(0.1rem,0.5vw,0.4rem)]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-zinc-500 flex items-start gap-[clamp(0.15rem,1vw,0.5rem)] text-[clamp(0.4rem,1.2vw,0.875rem)] leading-tight">
                        <span className="w-[clamp(0.15rem,0.5vw,0.375rem)] h-[clamp(0.15rem,0.5vw,0.375rem)] rounded-full bg-orange-500/50 mt-[clamp(0.15rem,0.5vw,0.375rem)] shrink-0"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <span className="bg-white/[0.03] border border-white/10 px-[clamp(0.25rem,1vw,0.75rem)] py-[clamp(0.05rem,0.5vw,0.25rem)] rounded-full text-[clamp(0.35rem,1vw,0.7rem)] font-mono text-zinc-400 tracking-wider inline-block mt-[clamp(0.5rem,3vw,1.5rem)] group-hover:border-orange-500/30 transition-colors">
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
