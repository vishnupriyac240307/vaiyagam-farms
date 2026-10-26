import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Our Products', href: '#products', id: 'products' },
    { name: 'Quality', href: '#quality', id: 'quality' },
    { name: 'How We Work', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled styling trigger
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy: Determine which section is currently active
      const scrollPosition = window.scrollY + 160;
      const sectionIds = ['hero', 'about', 'products', 'quality', 'how-it-works', 'contact'];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-scrolled py-2.5 shadow-sm'
          : 'glass-nav py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-leaf/50 rounded-xl"
            aria-label="வையகம் Farms Home"
          >
            <div className="bg-white/95 border border-sage/60 rounded-xl p-1 shadow-sm transition-transform duration-300 group-hover:scale-102 flex items-center justify-center">
              <img
                src={getAssetUrl('logo.png')}
                alt="வையகம் Farms Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                width="627"
                height="431"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-forest flex items-center gap-1.5">
                <span className="tamil-text font-bold text-forest">வையகம்</span>
                <span className="text-leaf font-serif font-semibold">Farms</span>
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-forest/70">
                Farm-Direct Goodness
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Underline Bar */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative flex flex-col items-center ${
                    isActive
                      ? 'text-leaf font-semibold'
                      : 'text-forest/80 hover:text-leaf'
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Active Indicator Underline matching requested visual */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2.5px] bg-leaf rounded-full transition-all duration-200 ${
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-75'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917904637078"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-forest hover:text-leaf bg-white/70 hover:bg-white border border-sage/70 rounded-full transition-all duration-200 shadow-sm"
              title="Call வையகம் Farms"
            >
              <Phone className="w-3.5 h-3.5 text-leaf" />
              <span>+91 79046 37078</span>
            </a>

            <a
              href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-leaf hover:bg-leaf-hover rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-leaf rounded-full shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-forest hover:text-leaf hover:bg-sage/40 transition-colors focus:outline-none focus:ring-2 focus:ring-leaf/50"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-sage/60 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-sage/50 text-leaf font-bold border-l-4 border-leaf'
                        : 'text-forest hover:text-leaf hover:bg-white/80'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-leaf text-xs">→</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-sage/50 flex flex-col gap-2.5">
              <a
                href="tel:+917904637078"
                className="flex items-center justify-center gap-2.5 py-2.5 px-4 text-sm font-medium text-forest bg-white border border-sage/80 rounded-xl"
              >
                <Phone className="w-4 h-4 text-leaf" />
                <span>Call: +91 79046 37078</span>
              </a>

              <a
                href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-leaf hover:bg-leaf-hover rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
