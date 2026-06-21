import { jsPDF } from "jspdf";
export function downloadKashifCV() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // Color Definitions (Professional dark-grey and black accents)
  const cPrimary = [15, 23, 42]; // Slate-900: RGB equivalent
  const cSecondary = [71, 85, 105]; // Slate-600
  const cAccent = [16, 185, 129]; // Emerald-500
  const cDark = [0, 0, 0];
  doc.setFont("helvetica", "normal");

  // Helper limits
  const marginX = 15;
  const pageWidth = 210;
  const maxW = pageWidth - marginX * 2; // 180mm printable width
  let y = 14;

  // Header - Title
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(cPrimary[0], cPrimary[1], cPrimary[2]);
  doc.text("Muhammad Kashif", pageWidth / 2, y, {
    align: "center"
  });
  y += 5.5;

  // Header - SubTitle
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
  doc.text("Full-Stack Developer | Aspiring AI Engineer", pageWidth / 2, y, {
    align: "center"
  });
  y += 5;

  // Contact Info Line
  doc.setFontSize(9);
  doc.setTextColor(cPrimary[0], cPrimary[1], cPrimary[2]);
  const contactText = "+923055641502  |  mkashifkhanai@gmail.com  |  linkedin.com/in/kashifkhanai  |  Lahore, Pakistan";
  doc.text(contactText, pageWidth / 2, y, {
    align: "center"
  });
  y += 6;

  // Horizontal divider function
  function sectionHeader(title) {
    y += 1.5;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cPrimary[0], cPrimary[1], cPrimary[2]);
    doc.text(title, marginX, y);
    y += 1.5;
    doc.setDrawColor(cPrimary[0], cPrimary[1], cPrimary[2]);
    doc.setLineWidth(0.4);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 4.5;
  }

  // SUMMARY
  sectionHeader("SUMMARY");
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
  const summaryText = "Accomplished Full-Stack Developer with a strong foundation in building scalable web architectures using AdonisJS, TypeScript, and React. Currently transitioning into AI Engineering, leveraging expert-level Python and Generative AI knowledge to develop intelligent, data-driven systems. Focused on bridging complex software engineering with emerging AI technologies.";
  const summaryLines = doc.splitTextToSize(summaryText, maxW);
  doc.text(summaryLines, marginX, y);
  y += summaryLines.length * 4.2 + 2;

  // EXPERIENCE
  sectionHeader("EXPERIENCE");

  // Experience 1
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(cDark[0], cDark[1], cDark[2]);
  doc.text("Experts Cloud | Associate Full-Stack Developer", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text("Aug 2025 - Present", pageWidth - marginX, y, {
    align: "right"
  });
  y += 4;
  doc.setFontSize(9);
  doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
  const exp1_bullets = ["Architecting enterprise-grade applications with a primary focus on AdonisJS and TypeScript for robust backend performance.", "Managing complex state and interactive UI using React.js and Redux Toolkit while ensuring full type-safety.", "Optimizing MySQL databases and streamlining development within WSL (Ubuntu) using GitHub Copilot."];
  exp1_bullets.forEach(bullet => {
    const lines = doc.splitTextToSize("• " + bullet, maxW - 4);
    doc.text(lines, marginX + 2, y);
    y += lines.length * 4.2;
  });
  y += 1.5;

  // Experience 2
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(cDark[0], cDark[1], cDark[2]);
  doc.text("Experts Cloud | Full-Stack Developer Intern", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text("Feb 2025 - July 2025", pageWidth - marginX, y, {
    align: "right"
  });
  y += 4;
  doc.setFontSize(9);
  doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
  const exp2_bullets = ["Contributed to full-cycle web development using the MERN stack, assisting in the migration of legacy codebases to TypeScript for enhanced maintainability.", "Developed responsive components using Tailwind CSS and implemented secure JWT-based authentication flows."];
  exp2_bullets.forEach(bullet => {
    const lines = doc.splitTextToSize("• " + bullet, maxW - 4);
    doc.text(lines, marginX + 2, y);
    y += lines.length * 4.2;
  });
  y += 1.5;

  // Experience 3
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(cDark[0], cDark[1], cDark[2]);
  doc.text("Enigmatix | Python & AI Intern", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text("Sep 2024 - Jan 2025", pageWidth - marginX, y, {
    align: "right"
  });
  y += 4;
  doc.setFontSize(9);
  doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
  const exp3_bullets = ["Engineered AI automation scripts and integrated Google Gemini API for real-time text processing.", "Performed deep data analytics and visualization using Pandas, Seaborn, and Matplotlib to derive actionable business insights."];
  exp3_bullets.forEach(bullet => {
    const lines = doc.splitTextToSize("• " + bullet, maxW - 4);
    doc.text(lines, marginX + 2, y);
    y += lines.length * 4.2;
  });
  y += 2;

  // SKILLS
  sectionHeader("SKILLS");
  doc.setFontSize(9);
  const skillsList = [{
    label: "Full-Stack Development: ",
    val: "React.js, AdonisJS, Redux / Redux Toolkit, JavaScript (ES6+), Node.js, Express, Tailwind CSS, RESTful APIs, TypeScript, WebSockets."
  }, {
    label: "AI Engineering: ",
    val: "Python, Generative AI, LLMs, Prompt Engineering, FastAPI, Pandas, Seaborn, Matplotlib, Data Analytics, Data Visualization."
  }, {
    label: "Databases: ",
    val: "MySQL, MongoDB."
  }, {
    label: "Tools & DevOps: ",
    val: "WSL (Ubuntu), GitHub Copilot, Docker, Nginx, AWS (Basic Deployment), Git & GitHub, SSH."
  }];
  skillsList.forEach(sk => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text("• " + sk.label, marginX, y);
    const offset = doc.getTextWidth("• " + sk.label) + 1;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
    const lines = doc.splitTextToSize(sk.val, maxW - offset);
    doc.text(lines, marginX + offset, y);
    y += Math.max(lines.length * 4.2, 4.5);
  });
  y += 2;

  // PROJECTS
  sectionHeader("PROJECTS");
  const projList = [{
    title: "Hospital Management System (PIMS)",
    desc: "Developed a comprehensive healthcare platform to streamline hospital operations and patient data management. Engineered a robust backend using AdonisJS and TypeScript for structured data handling, while building a dynamic, real-time user interface with React.js and Redux Toolkit. Focused on data integrity, high-concurrency handling, and secure medical record accessibility."
  }, {
    title: "Share Vault & AI Chatbot Assistant",
    desc: "Built a secure file-sharing API featuring link expiry and JWT-based authentication using FastAPI and MongoDB. Developed a high-performance AI chatbot backend with WebSockets and Google Gemini API to generate low-latency, streaming responses for live interactions."
  }, {
    title: "Flux Trade Engine (Live Crypto Dashboard)",
    desc: "Developed a real-time cryptocurrency trading dashboard utilizing the Binance WebSocket API. Engineered a high-performance React-based interface to track live market data streams with minimal latency."
  }, {
    title: "Smart City Issue Detection & Reporting",
    desc: "Designed an AI-integrated GIS platform for urban issue tracking. Implemented real-time tracking features to improve civic response times and integrated the YOLOv8 Computer Vision model for automated issue categorization, enhancing scalability for smart city initiatives."
  }];
  projList.forEach(pj => {
    // Check if we need to start a new page to avoid awkward cutoffs
    if (y > 270) {
      doc.addPage();
      y = 15;
    }
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.text(pj.title, marginX, y);
    y += 4;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
    const lines = doc.splitTextToSize(pj.desc, maxW);
    doc.text(lines, marginX, y);
    y += lines.length * 4 + 2;
  });
  y += 2;

  // EDUCATION
  if (y > 260) {
    doc.addPage();
    y = 15;
  }
  sectionHeader("EDUCATION");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(cDark[0], cDark[1], cDark[2]);
  doc.text("BS Artificial Intelligence | The Islamia University of Bahawalpur", marginX, y);
  doc.setFont("helvetica", "normal");
  doc.text("2022 - 2026", pageWidth - marginX, y, {
    align: "right"
  });
  y += 4.5;
  doc.setFontSize(9);
  doc.setTextColor(cSecondary[0], cSecondary[1], cSecondary[2]);
  doc.text("• CGPA: 3.38", marginX + 2, y);
  y += 4.2;
  doc.text("• Relevant Courses: Machine Learning, Deep Learning, NLP, Computer Vision, Programming for Ai (Python), ANN", marginX + 2, y);

  // Trigger browser download
  doc.save("Muhammad_Kashif_CV.pdf");
}