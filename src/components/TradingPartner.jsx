import React from 'react';
import { Handshake, Network, ShieldCheck, Building2 } from 'lucide-react';

export default function TradingPartner() {
  return (
    <section className="py-16 lg:py-20 bg-cream/80 border-t border-b border-sage/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle, tasteful partnership card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-sage/80 shadow-soft">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left: Heading and Text */}
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/40 border border-sage/70 text-forest text-xs font-semibold uppercase tracking-wider mb-3">
                <Handshake className="w-3.5 h-3.5 text-leaf" />
                <span>Collaborative Network</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest mb-3">
                Our Trusted Trading Partner
              </h2>

              <p className="text-forest/80 text-sm sm:text-base leading-relaxed">
                We work alongside trusted business partners to strengthen our agricultural sourcing and trading network.
              </p>
            </div>

            {/* Right: Tasteful, Understated SKY Traders Display */}
            <div className="flex-shrink-0">
              <div className="px-8 py-5 rounded-2xl bg-cream border border-sage flex flex-col items-center justify-center text-center shadow-xs min-w-[220px]">
                <div className="w-10 h-10 rounded-full bg-sage/50 flex items-center justify-center text-forest mb-2">
                  <Building2 className="w-5 h-5 text-forest" />
                </div>
                <span className="text-xs uppercase font-medium tracking-widest text-forest/60">
                  Trading Partner
                </span>
                <span className="font-heading text-xl font-bold text-forest mt-0.5 tracking-tight">
                  SKY Traders
                </span>
                <span className="text-[11px] text-leaf font-medium mt-1">
                  Sourcing &amp; Trading Collaboration
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
