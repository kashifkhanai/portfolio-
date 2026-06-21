import { NavLink, Link } from 'react-router-dom';
import { TerminalSquare, Download } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact Me', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#111111]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center w-1/4 hover:opacity-80 transition-opacity">
          <img src="/logo_mk.png" alt="MK Logo" className="h-10 w-auto object-contain mix-blend-lighten" />
        </Link>
        
        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-10 flex-grow">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-semibold tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        
        {/* Right: Hire Me Button */}
        <div className="flex items-center justify-end gap-4 w-1/4">
          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center px-8 py-2.5 rounded bg-orange-500 text-white text-base font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20"
          >
            Hire Me
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
