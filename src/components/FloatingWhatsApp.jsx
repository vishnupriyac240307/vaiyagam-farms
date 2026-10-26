import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    'https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20your%20products.%20Please%20share%20the%20details.';

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Badge (Dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 text-forest text-xs font-semibold shadow-card border border-sage animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Chat with <strong className="text-leaf">வையகம் Farms</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-forest/40 hover:text-forest transition-colors p-0.5"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 sm:p-4.5 rounded-full bg-[#25D366] text-white shadow-hover hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat directly on WhatsApp with வையகம் Farms"
      >
        {/* Radar Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform group-hover:rotate-6" />

        {/* Small Notification Indicator */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-[#25D366]" />
      </a>
    </div>
  );
}
