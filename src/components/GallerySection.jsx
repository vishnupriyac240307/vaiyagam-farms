import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Love from Our Farm',
      tamilSubtitle: 'இயற்கையின் அன்பு',
      description: 'A little love from our land, grown with care.',
      image: getAssetUrl('images/gallery/gallery-1-sunlit-fields.jpg'),
      alt: 'Love from Our Farm - Lush green agricultural field bathed in morning sunbeams',
      span: 'md:col-span-2 lg:col-span-1',
    },
    {
      id: 2,
      title: 'Grown with Love',
      tamilSubtitle: 'உழைப்பின் பெருமை',
      description: "Every harvest carries a farmer's love and dedication.",
      image: getAssetUrl('images/gallery/gallery-2-farmers-smile.jpg'),
      alt: "Grown with Love - Smiling farmer tending fertile green fields with care",
      span: 'md:col-span-2 lg:col-span-1',
    },
    {
      id: 3,
      title: "Nature's First Light",
      tamilSubtitle: 'புதிய நாளின் நம்பிக்கை',
      description: 'Every sunrise brings new hope to our fields.',
      image: getAssetUrl('images/gallery/gallery-3-golden-dawn.png'),
      alt: "Nature's First Light - Farmer tending fields at golden sunrise",
      span: 'md:col-span-2 lg:col-span-1',
    },
    {
      id: 4,
      title: 'Freshness in Every Row',
      tamilSubtitle: 'மண்ணிலிருந்து மனதிற்கு',
      description: 'Naturally nurtured, freshly harvested, thoughtfully delivered.',
      image: getAssetUrl('images/gallery/gallery-4-vegetable-crops.jpg'),
      alt: 'Freshness in Every Row - Vegetable crops growing along nurtured farm beds',
      span: 'md:col-span-2 lg:col-span-1',
    },
    {
      id: 5,
      title: 'Rooted in Nature',
      tamilSubtitle: 'நம் மண்ணின் செழிப்பு',
      description: 'Honouring our roots, growing a greener tomorrow.',
      image: getAssetUrl('images/gallery/gallery-5-farm-horizon.jpg'),
      alt: 'Rooted in Nature - Vast green and fertile agricultural farmland horizon',
      span: 'md:col-span-2 lg:col-span-2 lg:col-start-auto',
    },
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream/70 relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/50 border border-sage text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-leaf" />
            <span>Farm Moments</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            Our Farm Gallery
          </h2>

          <p className="mt-4 text-forest/75 text-base sm:text-lg leading-relaxed">
            Real moments captured directly from our farmlands, authentic farmers, and healthy crops in Tamil Nadu.
          </p>

          <div className="w-16 h-1 bg-leaf rounded-full mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-hover border-2 border-white/80 bg-forest/5 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Subtle gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Quick View Icon on Hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-forest flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-md">
                  <Eye className="w-4 h-4 text-leaf" />
                </div>

                {/* Caption with Tamil subtitle, English title, and description */}
                <div className="absolute bottom-5 left-5 right-5 text-white transform transition-transform duration-300">
                  <span className="tamil-text text-xs text-sage-light font-medium block mb-0.5 opacity-90">
                    {item.tamilSubtitle}
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-md">
                      {item.title}
                    </h3>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      View
                    </span>
                  </div>
                  <p className="text-xs text-white/85 line-clamp-2 mt-1.5 leading-snug font-normal drop-shadow-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-forest-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 bg-black/40 max-h-[75vh]">
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].alt}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl mx-auto px-4">
              <span className="tamil-text text-sm sm:text-base text-leaf-light font-medium block">
                {galleryItems[selectedImage].tamilSubtitle}
              </span>
              <h4 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mt-0.5">
                {galleryItems[selectedImage].title}
              </h4>
              <p className="text-sm text-cream/90 mt-2 leading-relaxed">
                {galleryItems[selectedImage].description}
              </p>
              <p className="text-xs text-sage-light/60 mt-3">
                Photo {selectedImage + 1} of {galleryItems.length} • வையகம் Farms
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
