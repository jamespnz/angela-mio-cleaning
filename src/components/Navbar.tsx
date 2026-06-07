import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = ['Home', 'Services', 'About', 'Contact'];

  const handleNav = (page: string) => {
    onNavigate(page.toLowerCase());
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-gray-900 leading-tight">Angela Mio</span>
              <span className="block text-xs text-sky-600 leading-tight tracking-wide uppercase font-medium">Kitchen Cleaning</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link.toLowerCase())}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === link.toLowerCase()
                    ? 'text-sky-600'
                    : 'text-gray-600 hover:text-sky-600'
                }`}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-200"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-sky-600 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link.toLowerCase())}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === link.toLowerCase()
                  ? 'bg-sky-50 text-sky-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="block w-full text-center bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors mt-2"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
