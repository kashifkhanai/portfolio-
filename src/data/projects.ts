export const projects = [
  {
    title: "PIMS: Enterprise Hospital Management System",
    slug: "pims-hospital-management",
    client: "Experts Cloud Pvt Ltd",
    location: "Lahore, Pakistan",
    duration: "Nov 2025 — Jun 2026",
    role: "Full-Stack Lead Architect",
    techRibbon: "AdonisJS v6 • React.js • MySQL",
    
    // THE 2-SPEED OVERVIEW: Paragraph 1 for HR/Business, Paragraph 2 for CTO.
    overview: "PIMS is an enterprise-grade hospital platform designed to manage the daily chaos of a busy medical facility. From the second a patient is admitted, to doctor scheduling, billing, and pharmacy dispatch, this system handles it all seamlessly. I took full end-to-end ownership of this product—building both the user-friendly screens that hospital staff interact with daily, and the powerful hidden engine that keeps sensitive patient data secure, organized, and instantly accessible.\n\nUnder the hood, I architected a highly decoupled system to ensure zero downtime. The backend is powered by AdonisJS v6 and a strictly normalized MySQL database, engineered to process hundreds of concurrent medical records without transaction deadlocks. On the client side, I deployed React 19 managed by Redux Toolkit state slices. This ensures that complex, multi-step workflows—like admitting a patient while simultaneously verifying pharmacy stock—feel instantaneous, strictly typed, and completely crash-proof.",
    
    keyFeatures: [
      "End-to-End Patient Lifecycle (From Admissions to Final Discharge)",
      "Automated Pharmacy Tracker with FIFO (First-In-First-Out) stock depletion",
      "Strict Role-Based Access (RBAC) separating Doctors, Nurses, and Admins",
      "Predictable and lightning-fast User Interface powered by Redux Toolkit",
      "Highly secure, compile-time validated API endpoints (TypeScript DTOs)",
      "Optimized MySQL Database designed to prevent multi-user data locks"
    ],
    techCloud: [
      "React 19", "Redux Toolkit", "AdonisJS v6", "TypeScript", "MySQL", "Lucid ORM", "REST APIs", "JWT Auth", "Tailwind CSS"
    ],
    ctaLabel: "Inspect Product Case Study"
  },
  {
    title: "PIMS: Medical Supply & Inventory Core",
    slug: "pims-inventory-supply-chain",
    techRibbon: "AdonisJS v6 • Double-Entry SQL • Cron Ingress",
    businessPitch: "An automated pharmacy and medical supply tracker that prevents hospitals from running out of life-saving drugs while strictly catching expired stock before it hits patients.",
    deliverables: [
      "Double-Entry Batch Stock Ledgers",
      "Automated FIFO Stock Depletion",
      "High-Concurrency Transaction Locks"
    ],
    ctaLabel: "Inspect Inventory Specs"
  },
  {
    title: "Job Tracker: Role-Based Job Portal API",
    slug: "job-tracker-api",
    techRibbon: "FastAPI • MongoDB (Motor) • PyJWT",
    businessPitch: "A highly secure, async backend system enabling distinct user roles (Seekers, Employers, Admins) to manage and filter job postings with strict JWT authentication.",
    deliverables: [
      "OAuth2 + JWT Authorization",
      "Async MongoDB Integrations",
      "Pydantic Validation Schemas"
    ],
    ctaLabel: "Inspect Backend Architecture"
  },

  {
    title: "Flux Trade Engine: Live Order Book",
    slug: "flux-trade-engine",
    techRibbon: "React 19 • WebSockets • Binance API",
    businessPitch: "A lightning-fast cryptocurrency trading dashboard rendering live, unmanipulated global market prices to your screen in less than a second.",
    deliverables: [
      "Live Binance WebSocket Wire",
      "Sub-Millisecond DOM Diffing",
      "Centralized Order-Book Slices"
    ],
    ctaLabel: "Inspect Streaming Architecture"
  },
  {
    title: "Gemini AI ChatBot: Real-Time WebSockets",
    slug: "gemini-ai-chatbot",
    techRibbon: "FastAPI • WebSockets • Google GenAI",
    businessPitch: "A real-time, low-latency AI chatbot that streams intelligent responses directly to a modern UI using WebSockets and the Gemini 2.0 Flash Lite model.",
    deliverables: [
      "Real-Time WebSocket Streaming",
      "Gemini 2.0 Flash Integration",
      "Markdown Syntax Rendering"
    ],
    ctaLabel: "Inspect AI Architecture"
  },

  {
    title: "Smart City Spatial Anomaly AI",
    slug: "smart-city-spatial-ai",
    techRibbon: "Python • YOLOv8 (ONNX) • PostGIS DB",
    businessPitch: "Smart spatial software that uses video feeds to automatically detect physical road hazards in real-time, pinning their exact GPS coordinates onto city maps.",
    deliverables: [
      "Custom YOLOv8 ONNX Ingestion",
      "PostGIS Geospatial Mapping",
      "Automated High-Confidence Dispatch"
    ],
    ctaLabel: "Inspect Applied AI Specs"
  },
  {
    title: "Autonomous ETL Data Harvester",
    slug: "autonomous-etl-scraper",
    techRibbon: "Playwright • AdonisJS v6 • BSON DW",
    businessPitch: "Resilient software bots that legally extract daily pricing data from dozens of global food delivery platforms and organize it into clean BI ledgers.",
    deliverables: [
      "Self-Healing Playwright Scraper Bots",
      "Multi-Platform DOM Sanitization",
      "Normalized BSON DW Schemas"
    ],
    ctaLabel: "Inspect Data Pipeline Specs"
  },

  {
    title: "YouTube Downloader: Media Engine",
    slug: "youtube-video-downloader",
    techRibbon: "Flask • yt-dlp • Server-Sent Events",
    businessPitch: "A professional, browser-based media pipeline featuring real-time progress tracking, pause/resume controls, and persistent bulk task management for large playlists.",
    deliverables: [
      "Real-Time SSE Progress Streams",
      "yt-dlp Multi-Threading Core",
      "Persistent JSON Task Stores"
    ],
    ctaLabel: "Inspect Downloader Architecture"
  },
  {
    title: "AI Lead Scorer: Priority Inbox Engine",
    slug: "ai-lead-scorer",
    techRibbon: "React 19 • Redux Toolkit • Tailwind CSS",
    businessPitch: "An enterprise-grade frontend application that empowers sales teams to ingest raw CSV data and automatically prioritize leads using custom Ideal Customer Profiles and AI scoring.",
    deliverables: [
      "Redux Toolkit State Topologies",
      "Client-Side CSV Parsing",
      "Dynamic Client-Side Filtering"
    ],
    ctaLabel: "Inspect Frontend Architecture"
  },

  {
    title: "PrimeVest: Luxury Real Estate Portal",
    slug: "primevest-luxury-portal",
    techRibbon: "React 19 • Tailwind CSS • TypeScript",
    businessPitch: "A buttery-smooth, premium property presentation platform designed to feel like an expensive digital magazine for luxury real estate buyers.",
    deliverables: [
      "Swiss-Editorial Minimalist UI",
      "Sub-100ms Core Web Vitals",
      "Frictionless Spatial Walkthroughs"
    ],
    ctaLabel: "Inspect UI/UX Topologies"
  },
  {
    title: "Developer Portfolio: Institutional Grade UI",
    slug: "developer-portfolio",
    techRibbon: "React 19 • Tailwind CSS • Framer Motion",
    businessPitch: "A highly optimized, fully responsive developer portfolio engineered with a 'slim and smart' design philosophy, prioritizing high-fidelity aesthetics, fluid animations, and progressive disclosure.",
    deliverables: [
      "Fluid Viewport Scaling (vh/vw)",
      "Framer Motion View Transitions",
      "Zero-Clutter Component Architecture"
    ],
    ctaLabel: "Inspect Portfolio Source"
  }
];