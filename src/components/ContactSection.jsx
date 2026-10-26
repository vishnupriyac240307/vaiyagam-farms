import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, Clock, Sparkles, CheckCheck, ArrowUpRight, Navigation } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Fresh Vegetables',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: '',
    lastGeneratedUrl: '',
  });

  const googleMapsUrl =
    'https://www.google.com/maps/place/%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D+%E0%AE%83%E0%AE%AA%E0%AE%BE%E0%AE%B0%E0%AF%8D%E0%AE%AE%E0%AF%8D(vaiyagam+farms)/@10.6342564,77.3375498,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba9c9f2862303cf:0x5268c663da4a99ee!8m2!3d10.6342564!4d77.3375498!16s%2Fg%2F11stjr91pw?entry=ttu';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus.error) {
      setFormStatus((prev) => ({ ...prev, error: '' }));
    }
  };

  // Helper to format WhatsApp message with all form fields
  const generateMessage = () => {
    const customerName = formData.name.trim() || 'Customer';
    const customerPhone = formData.phone.trim() || 'Not specified';
    const selectedProduct = formData.product;
    const customerNote = formData.message.trim() || 'Please share product availability, pricing, and ordering details.';

    return `*Hello வையகம் Farms!* 🌾\n\nI would like to make an enquiry from your website:\n• *Name:* ${customerName}\n• *Phone:* ${customerPhone}\n• *Product of Interest:* ${selectedProduct}\n• *Requirement / Message:* ${customerNote}\n\nKindly share the details. Thank you!`;
  };

  const getWhatsAppUrl = () => {
    const text = generateMessage();
    return `https://wa.me/917904637078?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFormStatus({ submitted: false, error: 'Please enter your name.', lastGeneratedUrl: '' });
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setFormStatus({ submitted: false, error: 'Please enter a valid phone number (at least 8 digits).', lastGeneratedUrl: '' });
      return;
    }

    const targetUrl = getWhatsAppUrl();

    setFormStatus({
      submitted: true,
      error: '',
      lastGeneratedUrl: targetUrl,
    });

    // Reliably open in a new tab via link click to bypass aggressive browser popup blockers
    const tempLink = document.createElement('a');
    tempLink.href = targetUrl;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/50 border border-sage text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-leaf" />
            <span>Get in Touch</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            Let’s Connect with <span className="text-leaf">வையகம் Farms</span>
          </h2>

          <p className="mt-4 text-forest/75 text-base sm:text-lg leading-relaxed">
            Looking for fresh vegetables, coconuts, or quality coconut oil? Get in touch with us for enquiries and product details.
          </p>

          <div className="w-16 h-1 bg-leaf rounded-full mt-4" />
        </div>

        {/* Contact Grid: Info Cards (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-cream/70 rounded-3xl p-7 sm:p-8 border border-sage/80 shadow-soft">
              <h3 className="font-heading text-xl font-bold text-forest mb-6">
                Direct Contact Channels
              </h3>

              <div className="space-y-5">
                {/* Business Name */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sage/70 flex items-center justify-center flex-shrink-0 text-leaf shadow-xs">
                    <Sparkles className="w-5 h-5 text-leaf" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-forest/60">Business Name</span>
                    <p className="text-base font-bold text-forest mt-0.5">
                      வையகம் Farms <span className="text-xs font-medium text-forest/70">(Vaiyagam Farms)</span>
                    </p>
                    <p className="text-xs text-forest/70">Farm-Direct Agricultural Produce</p>
                  </div>
                </div>

                {/* Phone Call */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sage/70 flex items-center justify-center flex-shrink-0 text-forest shadow-xs">
                    <Phone className="w-5 h-5 text-leaf" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-forest/60">Direct Phone</span>
                    <a
                      href="tel:+917904637078"
                      className="text-base font-bold text-forest hover:text-leaf transition-colors block mt-0.5"
                    >
                      +91 79046 37078
                    </a>
                    <span className="text-xs text-forest/70">Tap to call our representative</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sage/70 flex items-center justify-center flex-shrink-0 text-forest shadow-xs">
                    <MessageCircle className="w-5 h-5 text-leaf" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-medium text-forest/60">Official WhatsApp</span>
                    <a
                      href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20your%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-leaf hover:underline block mt-0.5"
                    >
                      +91 79046 37078
                    </a>
                    <span className="text-xs text-forest/70">Direct messaging &amp; orders</span>
                  </div>
                </div>

                {/* Region / Exact Google Map Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sage/70 flex items-center justify-center flex-shrink-0 text-forest shadow-xs">
                    <MapPin className="w-5 h-5 text-earth-amber" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase font-medium text-forest/60">Farm Location</span>
                    <p className="text-base font-bold text-forest mt-0.5">
                      வையகம் ஃபார்ம் (Vaiyagam Farms)
                    </p>
                    <p className="text-xs text-forest/70 mb-2">Tamil Nadu, India</p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf hover:underline"
                    >
                      <span>View on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Banner */}
              <div className="mt-8 pt-6 border-t border-sage/60">
                <a
                  href="https://wa.me/917904637078?text=Hello%20%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%95%E0%AE%AE%E0%AF%8D%20Farms!%20I%20would%20like%20to%20enquire%20about%20your%20products.%20Please%20share%20the%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-leaf hover:bg-leaf-hover text-white font-semibold text-sm shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream/40 rounded-3xl p-7 sm:p-10 border border-sage/80 shadow-card">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-forest">
                  Send an Enquiry
                </h3>
                <p className="text-forest/75 text-sm mt-1">
                  Fill in your requirements below. Submitting launches your pre-filled inquiry directly in WhatsApp for prompt assistance.
                </p>
              </div>

              {formStatus.error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                  <span>{formStatus.error}</span>
                </div>
              )}

              {formStatus.submitted && (
                <div className="mb-6 p-5 rounded-2xl bg-sage-light border border-leaf/40 text-forest text-xs sm:text-sm flex items-start gap-3.5 shadow-sm animate-in fade-in duration-300">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-leaf mt-0.5" />
                  <div className="flex-grow">
                    <strong className="font-bold text-sm block text-forest">WhatsApp Chat Initialized!</strong>
                    <p className="text-forest/80 mt-1 leading-relaxed">
                      Your details for <strong>{formData.product}</strong> have been formatted into your WhatsApp chat message.
                    </p>
                    <a
                      href={formStatus.lastGeneratedUrl || getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-leaf text-white font-semibold text-xs shadow-xs hover:bg-leaf-hover transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Open WhatsApp Chat Again</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-forest/80 mb-2">
                      Your Name <span className="text-leaf">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage focus:border-leaf focus:ring-2 focus:ring-leaf/30 text-sm text-forest placeholder:text-forest/40 transition-all outline-none"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-forest/80 mb-2">
                      Phone Number <span className="text-leaf">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage focus:border-leaf focus:ring-2 focus:ring-leaf/30 text-sm text-forest placeholder:text-forest/40 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-forest/80 mb-2">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sage focus:border-leaf focus:ring-2 focus:ring-leaf/30 text-sm text-forest transition-all outline-none cursor-pointer"
                  >
                    <option value="Fresh Vegetables">Fresh Vegetables (காய்கறிகள்)</option>
                    <option value="Fresh Coconuts">Fresh Coconuts (தேங்காய்)</option>
                    <option value="Coconut Oil">Coconut Oil (தேங்காய் எண்ணெய்)</option>
                    <option value="Bulk / Multiple Products">Bulk / Multiple Products</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-forest/80 mb-2">
                    Specific Requirements or Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what quantities or varieties you are looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sage focus:border-leaf focus:ring-2 focus:ring-leaf/30 text-sm text-forest placeholder:text-forest/40 transition-all outline-none resize-y"
                  />
                </div>

                {/* Live Message Preview Bubble */}
                <div className="p-4 rounded-2xl bg-white border border-sage/70 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest/60 flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-leaf" />
                      <span>Live WhatsApp Message Preview:</span>
                    </span>
                    <span className="text-[10px] text-leaf font-semibold px-2 py-0.5 rounded-full bg-sage-light">
                      Auto-Formatted
                    </span>
                  </div>
                  
                  <div className="bg-[#E9F5E8] border border-leaf/20 p-3.5 rounded-xl text-xs text-forest space-y-1 font-mono sm:font-sans">
                    <p className="font-bold text-forest">Hello வையகம் Farms! 🌾</p>
                    <p className="text-forest/80 text-[11px]">I would like to make an enquiry from your website:</p>
                    <p><strong className="text-forest">Name:</strong> {formData.name.trim() || <span className="text-forest/40 italic">[Your Name]</span>}</p>
                    <p><strong className="text-forest">Phone:</strong> {formData.phone.trim() || <span className="text-forest/40 italic">[Your Phone]</span>}</p>
                    <p><strong className="text-forest">Product of Interest:</strong> <span className="text-leaf font-semibold">{formData.product}</span></p>
                    <p><strong className="text-forest">Requirement / Message:</strong> {formData.message.trim() || <span className="text-forest/60 italic">Please share product availability, pricing, and ordering details.</span>}</p>
                    <div className="flex justify-end items-center gap-1 text-[10px] text-forest/50 pt-1">
                      <span>Ready to send</span>
                      <CheckCheck className="w-3.5 h-3.5 text-leaf" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-forest hover:bg-forest-light text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-sage-light" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-forest/60">
                  Clicking opens WhatsApp to <strong>+91 79046 37078</strong> with your filled details already typed in the message box.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Interactive Google Map Location Card */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-sage/80 shadow-card bg-cream/50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/50 border border-sage text-forest text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-leaf" />
                <span>Google Maps Location</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
                வையகம் ஃபார்ம் (Vaiyagam Farms)
              </h3>
              <p className="text-xs sm:text-sm text-forest/75 mt-1">
                Coordinates: 10.6342564, 77.3375498 • Tamil Nadu, India
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-forest hover:bg-forest-light text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all flex-shrink-0"
            >
              <Navigation className="w-4 h-4 text-leaf-light" />
              <span>Get Directions on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Embedded Google Map iframe */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-sage/70 shadow-xs bg-forest/5">
            <iframe
              title="வையகம் ஃபார்ம் (Vaiyagam Farms) Google Maps Location"
              src="https://maps.google.com/maps?q=10.6342564,77.3375498&hl=en&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
}
