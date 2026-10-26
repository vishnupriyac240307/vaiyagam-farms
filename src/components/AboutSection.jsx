import React from 'react';
import { Sprout, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

export default function AboutSection() {
  const highlights = [
    {
      title: "Direct Farmer Sourcing",
      desc: "We work directly with agricultural growers across Tamil Nadu, eliminating unnecessary middlemen and bringing harvest-fresh produce straight to you.",
    },
    {
      title: "Quality-Focused Selection",
      desc: "Every batch of vegetables and coconuts is hand-inspected for freshness, texture, and natural wholesome value before reaching your hands.",
    },
    {
      title: "Freshness and Care",
      desc: "From farm handling to order coordination, we treat every agricultural harvest with the respect natural nourishment deserves.",
    },
    {
      title: "Reliable Customer Service",
      desc: "Personalized communication, responsive WhatsApp support, and genuine attention to your specific household and bulk requirements.",
    },
    {
      title: "Strengthening Farm Connections",
      desc: "Fostering meaningful, sustainable relationships between local farmers and conscious consumers who value authentic produce.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Subtle organic background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-leaf/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/50 border border-sage text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Sprout className="w-3.5 h-3.5 text-leaf" />
            <span>Our Foundation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest max-w-2xl leading-tight">
            Rooted in Nature. <br />
            <span className="text-leaf">Connected to Farmers.</span>
          </h2>
          <div className="w-16 h-1 bg-leaf rounded-full mt-4" />
        </div>

        {/* Split Layout: Content & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Brand Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-forest/85 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-forest text-lg sm:text-xl leading-snug">
                At <strong className="text-forest font-semibold">வையகம் Farms (Vaiyagam Farms)</strong>, our purpose is simple yet vital: bridging the gap between hardworking farmers and households seeking dependable, natural agricultural produce.
              </p>
              
              <p>
                Based in Tamil Nadu, we partner directly with local farmers who cultivate the land with dedication. By sourcing directly from these agricultural roots, we ensure that fresh vegetables, coconuts, and pure coconut oil reach our customers with their natural flavor, nutrients, and honest farm-fresh goodness intact.
              </p>

              <p className="text-sm sm:text-base text-forest/75 italic border-l-2 border-leaf pl-4 py-1">
                “We believe in clean sourcing, genuine trust, and delivering agricultural products that nourish families while respecting the agricultural hands that grew them.”
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl bg-white/80 border border-sage/70 shadow-soft hover:shadow-card hover:border-leaf/40 transition-all duration-300 ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-sage/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-leaf">
                      <CheckCircle2 className="w-4 h-4 text-leaf" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">{item.title}</h4>
                      <p className="text-xs text-forest/75 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Connect Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest hover:bg-forest-light text-white text-sm font-semibold shadow-sm transition-all duration-200"
              >
                <span>Discover Our Harvest</span>
                <span className="text-xs">→</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold text-forest/80 px-4 py-2 rounded-full bg-sage/30 border border-sage/50">
                <MapPin className="w-3.5 h-3.5 text-leaf" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Photographic Collage with Farmer Field Work */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Farm Photography */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white image-zoom-container bg-forest/5">
                <img
                  src={getAssetUrl('images/about-farm.jpg')}
                  alt="Farmers working together cultivating crops in Tamil Nadu fields"
                  className="w-full h-[430px] sm:h-[500px] object-cover image-zoom-target"
                  loading="lazy"
                />
                
                {/* Top gradient scrim ensuring text is 100% visible and sharp */}
                <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/85 via-forest-dark/15 to-transparent pointer-events-none" />
                
                {/* Photo Caption Overlay placed at TOP so it never collides with bottom badge */}
                <div className="absolute top-5 left-5 right-5 text-white z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-dark/80 backdrop-blur-md border border-white/20 text-xs font-medium text-sage-light mb-2 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-earth-amber" />
                    <span>Farm-Direct Cultivation • Tamil Nadu</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-white drop-shadow-md">
                    Direct From Rural Tamil Nadu
                  </h4>
                  <p className="text-xs text-sage-light/95 drop-shadow mt-0.5 max-w-xs">
                    Cultivated by local farmers, respecting natural cycles and bringing honest produce to your home.
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Secondary Badge (cleanly placed at bottom with zero text behind it) */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-hover border border-sage/80 max-w-[270px] animate-leaf-2 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sage/50 flex items-center justify-center flex-shrink-0 text-leaf">
                    <HeartHandshake className="w-6 h-6 text-leaf" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-leaf block">
                      Direct Relationship
                    </span>
                    <span className="text-sm font-semibold text-forest block leading-tight">
                      Supporting Local Farmers &amp; Honest Families
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative leaf accent badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white/95 border border-leaf/30 flex items-center justify-center text-leaf shadow-md z-20">
                <Sprout className="w-6 h-6" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
