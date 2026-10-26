import React from 'react';
import { Phone, MessageCircle, MapPin, Sprout, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-white relative border-t border-forest-light/40 overflow-hidden">
      {/* Subtle organic background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo in dedicated white container for maximum clarity & preserving original proportions */}
            <div className="inline-block bg-white rounded-2xl p-2 shadow-md">
              <img
                src="/logo.png"
                alt="வையகம் Farms Logo"
                className="h-14 sm:h-16 w-auto object-contain"
                width="627"
                height="431"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="tamil-text text-xl font-bold text-white">வையகம்</span>
                <span className="font-heading text-xl font-bold text-leaf-light">Farms</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-sage-light/70 font-semibold">
                Farm-Direct Agricultural Produce • Tamil Nadu
              </p>
            </div>

            <p className="text-sage-light/80 text-sm leading-relaxed max-w-sm">
              Bringing you fresh, quality agricultural products sourced directly from farmers, with care, trust, and a commitment to natural goodness.
            </p>

            <div className="flex items-center gap-2 text-xs text-sage-light/70 pt-2">
              <MapPin className="w-4 h-4 text-leaf-light flex-shrink-0" />
              <span>Sourced &amp; Coordinated in Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-white tracking-wide uppercase text-xs text-leaf-light">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-sage-light/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-leaf-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-leaf-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-leaf-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Our Products</span>
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-leaf-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Quality Commitment</span>
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-leaf-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>How We Work</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-leaf-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Direct Contact (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-base font-bold text-white tracking-wide uppercase text-xs text-leaf-light">
              Our Products &amp; Enquiries
            </h4>

            <ul className="space-y-2 text-sm text-sage-light/80">
              <li>
                <a
                  href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20Fresh%20Vegetables."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Fresh Vegetables (புதிய காய்கறிகள்)</span>
                  <ArrowUpRight className="w-3 h-3 text-leaf-light" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20Fresh%20Coconuts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Fresh Coconuts (தேங்காய்)</span>
                  <ArrowUpRight className="w-3 h-3 text-leaf-light" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20Coconut%20Oil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Quality Coconut Oil (தேங்காய் எண்ணெய்)</span>
                  <ArrowUpRight className="w-3 h-3 text-leaf-light" />
                </a>
              </li>
            </ul>

            <div className="pt-3 space-y-2">
              <a
                href="tel:+917904637078"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white border border-white/15 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-leaf-light" />
                <span>Call: +91 79046 37078</span>
              </a>

              <div>
                <a
                  href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-leaf hover:bg-leaf-hover text-xs text-white font-semibold transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91 79046 37078</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Regional Heritage Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-light/60">
          <p>
            &copy; {currentYear} <strong className="text-white font-medium">வையகம் Farms (Vaiyagam Farms)</strong>. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sage-light/60">
            <span>Rooted with care in Tamil Nadu, India</span>
            <Sprout className="w-3.5 h-3.5 text-leaf-light" />
          </p>
        </div>
      </div>
    </footer>
  );
}
