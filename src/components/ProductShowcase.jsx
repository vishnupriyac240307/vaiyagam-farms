import React, { useState } from 'react';
import { MessageCircle, Sprout, ArrowUpRight, Check, Droplets, Sparkles, CircleDot } from 'lucide-react';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'vegetables',
      title: 'Fresh Vegetables',
      tamilTitle: 'புதிய காய்கறிகள்',
      badge: 'Farm-Fresh Harvest',
      image: '/images/vegetables.jpg',
      alt: 'Basket of fresh farm vegetables including tomatoes, carrots, greens, and beans',
      description:
        'Fresh vegetables sourced directly from farmers, selected with care to bring quality and natural goodness to your table.',
      features: [
        'Sourced directly from local farming fields',
        'Handpicked with attention to crispness and freshness',
        'Includes seasonal greens, tomatoes, carrots & beans',
        'Focus on natural farming and wholesome flavor',
      ],
      whatsappMsg:
        'Hello வையகம் Farms! I would like to enquire about Fresh Vegetables. Please share the details.',
    },
    {
      id: 'coconuts',
      title: 'Fresh Coconuts',
      tamilTitle: 'பச்சை & முற்றிய தேங்காய்',
      badge: 'Natural & Wholesome',
      image: '/images/coconuts.jpg',
      alt: 'Fresh mature coconuts, husked and whole from Tamil Nadu coconut palms',
      description:
        'Quality coconuts carefully sourced from farmers, suitable for everyday household needs and bulk requirements.',
      features: [
        'Carefully chosen from healthy coconut groves',
        'Suitable for daily culinary and household use',
        'Available for bulk institutional or event needs',
        'Rich in natural flavor, water, and fresh kernel',
      ],
      whatsappMsg:
        'Hello வையகம் Farms! I would like to enquire about Fresh Coconuts. Please share the details.',
    },
    {
      id: 'coconut-oil',
      title: 'Coconut Oil',
      tamilTitle: 'தரமான தேங்காய் எண்ணெய்',
      badge: 'Pure Everyday Essential',
      image: '/images/coconut-oil.jpg',
      alt: 'Pure virgin coconut oil in glass jar surrounded by fresh coconut pieces',
      description:
        'Quality coconut oil for customers looking for a dependable source of this versatile everyday essential.',
      features: [
        'Made from carefully selected quality copra',
        'Rich authentic coconut fragrance and purity',
        'Versatile for daily cooking and traditional personal care',
        'Dependable supply directly sourced with integrity',
      ],
      whatsappMsg:
        'Hello வையகம் Farms! I would like to enquire about Coconut Oil. Please share the details.',
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.id === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-28 bg-white relative">
      {/* Decorative background leaf accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/50 border border-sage text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Sprout className="w-3.5 h-3.5 text-leaf" />
            <span>Farm-Direct Harvest</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            Our Agricultural Products
          </h2>
          
          <p className="mt-4 text-forest/75 text-base sm:text-lg leading-relaxed">
            Carefully sourced directly from Tamil Nadu farmers to bring natural freshness, wholesome taste, and dependable quality to your home.
          </p>

          <div className="w-16 h-1 bg-leaf rounded-full mt-4" />

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-forest text-white shadow-md'
                  : 'bg-sage-light text-forest hover:bg-sage/70'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setActiveCategory('vegetables')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeCategory === 'vegetables'
                  ? 'bg-forest text-white shadow-md'
                  : 'bg-sage-light text-forest hover:bg-sage/70'
              }`}
            >
              Fresh Vegetables
            </button>
            <button
              onClick={() => setActiveCategory('coconuts')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeCategory === 'coconuts'
                  ? 'bg-forest text-white shadow-md'
                  : 'bg-sage-light text-forest hover:bg-sage/70'
              }`}
            >
              Fresh Coconuts
            </button>
            <button
              onClick={() => setActiveCategory('coconut-oil')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeCategory === 'coconut-oil'
                  ? 'bg-forest text-white shadow-md'
                  : 'bg-sage-light text-forest hover:bg-sage/70'
              }`}
            >
              Coconut Oil
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => {
            const encodedUrl = `https://wa.me/917904637078?text=${encodeURIComponent(
              product.whatsappMsg
            )}`;

            return (
              <div
                key={product.id}
                className="group bg-cream/70 rounded-3xl overflow-hidden border border-sage/80 shadow-card hover:shadow-hover hover:border-leaf/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image with Hover Zoom */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-forest/5">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />
                    
                    {/* Top gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-forest shadow-sm">
                        <CircleDot className="w-3 h-3 text-leaf" />
                        <span>{product.badge}</span>
                      </span>
                    </div>

                    {/* Tamil Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="tamil-text text-sm font-medium text-sage-light drop-shadow">
                        {product.tamilTitle}
                      </p>
                      <h3 className="font-heading text-2xl font-bold tracking-tight drop-shadow">
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <p className="text-forest/80 text-sm sm:text-base leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-2 border-t border-sage/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-leaf block mb-2">
                        Product Highlights
                      </span>
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest/85">
                          <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: WhatsApp Enquiry Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={encodedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-forest hover:bg-leaf text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-sage-light group-hover/btn:scale-110 transition-transform" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 opacity-75 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-[11px] text-center text-forest/60 mt-2.5">
                    Direct chat with our team • Quick response
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Requirements / Bulk Banner */}
        <div className="mt-16 bg-gradient-to-r from-forest to-forest-light rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-pattern-dots-dark pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-block text-xs uppercase font-bold tracking-wider text-sage-light mb-2">
                Custom &amp; Bulk Enquiries
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
                Need Specific Produce or Bulk Quantities?
              </h3>
              <p className="mt-2 text-sage-light/85 text-sm sm:text-base">
                Whether you need fresh farm vegetables for regular cooking or bulk coconuts for gatherings and commerce, message us with your requirements.
              </p>
            </div>

            <a
              href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20have%20a%20bulk/custom%20order%20enquiry.%20Please%20let%20me%20know%20how%20to%20proceed."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-forest hover:bg-sage-light font-bold text-sm shadow-md hover:shadow-lg transition-all flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-leaf" />
              <span>Message for Bulk Enquiries</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
