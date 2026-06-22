import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact Me', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-[clamp(1rem,3vw,1.5rem)] h-[clamp(3.5rem,5vw,5rem)] flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center w-auto md:w-1/4 hover:opacity-80 transition-opacity z-50">
            <img src="/logo_mk.png" alt="MK Logo" className="h-[clamp(1.5rem,3vw,2.5rem)] w-auto object-contain mix-blend-lighten" />
          </Link>
          
          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-[clamp(1rem,2vw,2.5rem)] flex-grow">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[clamp(0.75rem,1.5vw,0.875rem)] font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-[clamp(0.5rem,1.5vw,1rem)] w-auto md:w-1/4 z-50">
            {/* Hire Me Button (Visible on ALL screens now, but smaller on mobile) */}
            <Link
              to="/contact"
              className="flex items-center justify-center px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(0.375rem,1vw,0.625rem)] rounded bg-orange-500 text-white text-[clamp(0.6rem,1.2vw,0.875rem)] font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20 whitespace-nowrap"
            >
              Hire Me
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex items-center justify-center p-[clamp(0.25rem,1vw,0.5rem)] text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-[clamp(1.25rem,4vw,1.5rem)] h-[clamp(1.25rem,4vw,1.5rem)]" /> : <Menu className="w-[clamp(1.25rem,4vw,1.5rem)] h-[clamp(1.25rem,4vw,1.5rem)]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#111111]/95 backdrop-blur-3xl pt-24 px-6 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-[clamp(1rem,4vw,1.5rem)] items-center pt-[clamp(2rem,6vw,4rem)]">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[clamp(1.25rem,4vw,2rem)] font-bold tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
