import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const navBg = isHome && !isScrolled ? 'bg-white/90 dark:bg-slate-900/90 py-4' : 'bg-white dark:bg-slate-900 shadow-md py-4';
  const linkColor = isHome && !isScrolled ? 'text-brand-blue dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green' : 'text-brand-blue dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green';
  const menuIconColor = isHome && !isScrolled ? 'text-brand-blue dark:text-white' : 'text-brand-blue dark:text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={theme === 'dark' ? "https://i.imgur.com/xrmdocL.png" : "https://i.imgur.com/FRGNYXB.png"}
                alt="Scaleup Foundation" 
                className="h-20 w-auto"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? 'text-brand-green' : linkColor
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors ${linkColor} hover:bg-slate-100 dark:hover:bg-slate-800`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/donate"
              className="bg-brand-green hover:bg-[#6bc239] text-brand-blue px-6 py-2.5 rounded-full font-semibold transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors ${menuIconColor}`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${menuIconColor}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-xl absolute top-full left-0 right-0 border-t border-slate-100 dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 ${
                  location.pathname === link.href ? 'text-brand-green' : 'text-brand-blue dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Link
                to="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-brand-green hover:bg-[#6bc239] text-brand-blue px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
