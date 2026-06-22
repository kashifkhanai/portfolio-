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
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-[length:var(--space-fluid-md)] h-[clamp(4rem,5vw+2rem,5.5rem)] flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center w-auto md:w-1/4 hover:opacity-80 transition-opacity z-50">
            <img src="/logo_mk.png" alt="MK Logo" className="h-[clamp(2rem,3vw+1rem,2.5rem)] w-auto object-contain mix-blend-lighten" />
          </Link>
          
          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-[length:var(--space-fluid-lg)] flex-grow">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[length:var(--text-fluid-base)] font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-[length:var(--space-fluid-sm)] w-auto md:w-1/4 z-50">
            {/* Hire Me Button (Visible on ALL screens now, but smaller on mobile) */}
            <Link
              to="/contact"
              className="flex items-center justify-center px-[length:var(--space-fluid-md)] py-[clamp(0.4rem,1vw,0.6rem)] rounded bg-orange-500 text-white text-[length:var(--text-fluid-sm)] font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20"
            >
              Hire Me
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex items-center justify-center p-2 text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-0 z-40 bg-[#111111] pt-24 px-6 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 items-center pt-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-bold tracking-wider transition-colors duration-300 ${
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
