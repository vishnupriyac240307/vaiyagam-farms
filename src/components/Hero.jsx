import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Sprout, ShieldCheck, HeartHandshake } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

export default function Hero() {
  const whatsappUrl = "https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20order%20fresh%20agricultural%20products.%20Please%20share%20the%20details.";

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-cream">
      {/* Background Hero Image with Natural Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetUrl('images/hero-farm.jpg')}
          alt="Lush green Tamil Nadu agricultural farm and coconut groves"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle"
          loading="eager"
        />
        {/* Multilayered organic gradient: maintains rich photo vibrancy while keeping text crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest/80 to-forest-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-forest-dark/30 lg:hidden" />
        <div className="absolute inset-0 bg-radial from-transparent via-forest/30 to-forest-dark/70" />
      </div>

      {/* Floating Decorative Leaf SVGs */}
      <div className="absolute top-1/4 right-[8%] z-10 hidden xl:block animate-leaf-1 pointer-events-none opacity-80">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg text-sage flex items-center gap-2.5">
          <Sprout className="w-5 h-5 text-leaf-light" />
          <span className="text-xs font-medium text-white tracking-wide">100% Farm-Direct</span>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-[16%] z-10 hidden xl:block animate-leaf-2 pointer-events-none opacity-85">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg text-sage flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-earth-amber" />
          <span className="text-xs font-medium text-white tracking-wide">Handpicked Quality</span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Tagline / Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sage-light text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-leaf-light animate-ping" />
            <span className="tamil-text font-semibold text-white">வையகம் Farms</span>
            <span className="text-white/40">•</span>
            <span>Direct Agricultural Sourcing in Tamil Nadu</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm">
            From Our Farmers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-light via-white to-leaf-light">
              to Your Home.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-sage-light/95 leading-relaxed font-normal mb-8 max-w-2xl">
            Bringing you fresh, quality agricultural products sourced directly from farmers, with care, trust, and a commitment to natural goodness.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            
            {/* Primary CTA: Explore Our Products */}
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-semibold text-forest bg-sage-light hover:bg-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 text-leaf group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA: Order on WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-leaf hover:bg-leaf-hover rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-leaf-light/30 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights Grid below CTAs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
                <Sprout className="w-5 h-5 text-leaf-light" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Direct Sourcing</h4>
                <p className="text-xs text-sage/80">From genuine farmers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-sage-light" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Fresh &amp; Wholesome</h4>
                <p className="text-xs text-sage/80">Selected with diligence</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-5 h-5 text-earth-amber" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Care &amp; Trust</h4>
                <p className="text-xs text-sage/80">Reliable local service</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Wave Divider Transition into About */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-cream pointer-events-none" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }} />
    </section>
  );
}
