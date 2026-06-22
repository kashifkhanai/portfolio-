import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import CommandPalette from './components/CommandPalette';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 font-sans relative flex flex-col justify-between overflow-x-hidden grid-dots z-0">
      
      {/* Dark Theme Subtle Orbs (Optional, keeping it clean for now) */}

      <Navigation />
      <CommandPalette />

      <main className="flex-grow w-full flex flex-col justify-start relative pt-20 pb-8 z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="max-w-6xl w-full mx-auto px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.75rem,2vw,1rem)] border-t border-white/5 flex flex-col items-center justify-center text-[clamp(0.55rem,1.2vw,0.75rem)] text-zinc-500 font-sans gap-[clamp(0.5rem,1.5vw,1rem)] relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-[clamp(0.375rem,1.5vw,0.75rem)] text-zinc-500 text-center">
          <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'mkashifkhanai@gmail.com'}`} className="hover:text-orange-500 transition-colors">mkashifkhanai@gmail.com</a>
          <span className="text-zinc-700 select-none hidden sm:inline">|</span>
          <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+923055641502'}`} className="hover:text-orange-500 transition-colors">+92 305 5641502</a>
          <span className="text-zinc-700 select-none hidden sm:inline">|</span>
          <span>© 2026 Muhammad Kashif</span>
        </div>
      </footer>

      {/* Floating Search AI Button */}
      <button
        onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
        className="fixed bottom-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] z-50 flex items-center gap-[clamp(0.25rem,1vw,0.5rem)] px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-[clamp(0.6rem,1.2vw,0.875rem)] font-mono text-zinc-400 shadow-lg hover:bg-zinc-800 transition-colors group"
      >
        <span className="group-hover:text-zinc-100 transition-colors">Search AI</span>
        <kbd className="font-sans px-[clamp(0.25rem,0.8vw,0.5rem)] py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[clamp(0.5rem,1vw,0.75rem)] group-hover:bg-zinc-700 transition-colors text-zinc-400">⌘K</kbd>
      </button>
    </div>
  );
}