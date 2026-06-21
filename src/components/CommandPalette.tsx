import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, X, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        setResponse('Error: VITE_GEMINI_API_KEY is missing in .env');
        setLoading(false);
        return;
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const systemPrompt = `You are the AI Assistant for Muhammad Kashif's portfolio.
      Kashif is a Full-Stack Developer & Aspiring AI Engineer.
      Experience: Experts Cloud (Associate Full-Stack Developer, Intern), Enigmatix (Python & AI Intern).
      Skills: React, AdonisJS, TypeScript, Python, Generative AI.
      Answer queries concisely and professionally as an assistant built into his site.`;
      
      const res = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `${systemPrompt}\n\nUser Question: ${query}`
      });

      setResponse(res.text || 'No response generated.');
    } catch (error: any) {
      setResponse(`Error processing query: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C0E14]/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl bg-[#11141D] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <form onSubmit={handleSearch} className="flex items-center px-4 py-4 border-b border-white/5">
              <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask the AI brain or type a command..."
                className="flex-grow bg-transparent text-white placeholder-zinc-500 focus:outline-none text-lg font-sans"
              />
              <div className="flex items-center gap-2">
                {loading && <Loader2 className="w-5 h-5 text-zinc-400 animate-spin" />}
                <kbd className="hidden sm:flex items-center gap-1 font-sans px-2 py-1 rounded bg-white/5 text-xs text-zinc-400 border border-white/10">
                  <Command className="w-3 h-3" /> K
                </kbd>
                <button type="button" onClick={() => setOpen(false)} className="sm:hidden text-zinc-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="min-h-[100px] max-h-[400px] overflow-y-auto p-6 font-sans">
              {!response && !loading && (
                <div className="text-center text-zinc-500 py-8">
                  <p>Type your query and press Enter to search the AI Knowledge Base.</p>
                  <div className="flex gap-2 justify-center mt-4">
                    {["Who is Kashif?", "Show tech stack", "Recent experience"].map((q) => (
                      <button 
                        key={q} 
                        onClick={() => { setQuery(q); setTimeout(() => handleSearch(new Event('submit') as any), 50); }}
                        className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {response && (
                <div className="prose prose-invert max-w-none text-sm leading-relaxed text-zinc-300">
                  {response}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
