import React from 'react';
import { Sprout, ShieldCheck, HeartHandshake, Users, Sparkles, Leaf } from 'lucide-react';

export default function QualityCommitment() {
  const commitments = [
    {
      icon: Sprout,
      title: 'Direct Farmer Sourcing',
      desc: 'Partnering directly with local farmers across Tamil Nadu. This direct relationship ensures authentic origins, fair farmer collaboration, and fresh harvest.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality-Focused Selection',
      desc: 'Every item—from seasonal vegetables to mature coconuts—is carefully evaluated for firmness, sound condition, and natural wholesome appeal.',
    },
    {
      icon: Leaf,
      title: 'Freshness and Care',
      desc: 'We minimize shelf aging by coordinating closely with farmers so that produce retains its fresh natural aroma, taste, and vital nutrients.',
    },
    {
      icon: Users,
      title: 'Customer-Centred Service',
      desc: 'We listen to your specific needs, whether for regular family meals or bulk orders, providing personal attention through simple WhatsApp support.',
    },
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/50 border border-sage text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-leaf" />
            <span>Our Principles</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            Our Commitment to Quality
          </h2>

          <p className="mt-4 text-forest/75 text-base sm:text-lg leading-relaxed">
            Integrity, care, and natural freshness define how we choose every product for you.
          </p>

          <div className="w-16 h-1 bg-leaf rounded-full mt-4" />
        </div>

        {/* 4 Clean Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-7 sm:p-8 rounded-3xl bg-white border border-sage/70 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-leaf/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sage/40 group-hover:bg-leaf text-forest group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-sm">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110 duration-300" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-forest mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-forest/75 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sage/50 flex items-center gap-2 text-xs font-semibold text-leaf">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf" />
                  <span>Vaiyagam Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Natural Goodness Statement Box (Compliant with organic wording instructions) */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-sage-light/80 border border-sage shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-white border border-sage/80 flex items-center justify-center flex-shrink-0 text-leaf shadow-xs">
            <Sparkles className="w-6 h-6 text-leaf" />
          </div>
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-forest mb-1.5">
              Natural Goodness &amp; Wholesome Quality
            </h4>
            <p className="text-forest/80 text-sm leading-relaxed">
              Our vegetables are sourced with a focus on natural goodness and quality. We choose harvests from growers who prioritize sustainable farm practices and mindful nurturing, ensuring pure taste and wholesome value for your dining table.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
