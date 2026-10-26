import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductShowcase from './components/ProductShowcase';
import QualityCommitment from './components/QualityCommitment';
import HowWeWork from './components/HowWeWork';
import TradingPartner from './components/TradingPartner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col selection:bg-leaf selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <AboutSection />

        {/* Our Products Showcase */}
        <ProductShowcase />

        {/* Quality Commitment & Principles */}
        <QualityCommitment />

        {/* How We Work 3-Step Process */}
        <HowWeWork />

        {/* Trading Partner - SKY Traders (Tasteful lower section placement) */}
        <TradingPartner />

        {/* Contact & WhatsApp Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
