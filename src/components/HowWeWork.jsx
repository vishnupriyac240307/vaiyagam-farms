import React from 'react';
import { Sprout, CheckCircle2, HeartHandshake, ArrowRight, MessageCircle } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Source Directly',
      tamilSubtitle: 'நேரடி விவசாயத் தொடர்பு',
      desc: 'We connect directly with local farmers across Tamil Nadu, fostering trusting relationships and sourcing freshly harvested agricultural products.',
      icon: Sprout,
    },
    {
      number: '02',
      title: 'Select with Care',
      tamilSubtitle: 'தரமான தேர்வு',
      desc: 'Each batch of vegetables, coconuts, and coconut oil is evaluated with a strict focus on product quality, natural condition, and wholesome freshness.',
      icon: CheckCircle2,
    },
    {
      number: '03',
      title: 'Deliver with Trust',
      tamilSubtitle: 'நம்பகமான சேவை',
      desc: 'We assist customers in enquiring and arranging their requirements smoothly via WhatsApp, ensuring prompt support and transparent communication.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/50 border border-sage text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-leaf" />
            <span>Simple &amp; Transparent</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            How We Work
          </h2>

          <p className="mt-4 text-forest/75 text-base sm:text-lg leading-relaxed">
            A thoughtful three-step journey bringing farm-direct products straight into your everyday living.
          </p>

          <div className="w-16 h-1 bg-leaf rounded-full mt-4" />
        </div>

        {/* 3-Step Horizontal Process on Desktop / Vertical on Mobile */}
        <div className="relative">
          
          {/* Subtle connecting line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-sage via-leaf/40 to-sage -translate-y-8 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative bg-cream/60 rounded-3xl p-8 border border-sage/70 shadow-soft hover:shadow-card hover:border-leaf/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading text-3xl font-bold text-sage-dark group-hover:text-leaf transition-colors">
                        {step.number}
                      </span>
                      
                      <div className="w-14 h-14 rounded-2xl bg-white border border-sage/80 shadow-xs flex items-center justify-center text-forest group-hover:bg-leaf group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Step Title & Details */}
                    <div className="mb-3">
                      <span className="tamil-text text-xs text-leaf font-semibold block mb-1">
                        {step.tamilSubtitle}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-forest">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-forest/75 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-4 border-t border-sage/40 flex items-center justify-between text-xs text-forest/60">
                    <span>Phase {step.number}</span>
                    <span className="text-leaf font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout action to start enquiry */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20know%20more%20about%20your%20produce%20and%20how%20to%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-forest hover:bg-forest-light text-white text-sm font-semibold shadow-sm transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-sage-light" />
            <span>Start an Enquiry Today</span>
          </a>
        </div>

      </div>
    </section>
  );
}
