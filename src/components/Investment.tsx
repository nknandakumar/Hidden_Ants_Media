"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

// Custom SVG Double Sparkles Icon matching the design reference
const DoubleSparkles = () => (
  <svg className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
    {/* Main Sparkle */}
    <path d="M10 2c0 4.418 3.582 8 8 8-4.418 0-8 3.582-8 8-4.418 0-8-3.582-8-8 3.582 0 8-3.582 8-8z" />
    {/* Smaller Sparkle */}
    <path d="M19 13c0 2.209 1.791 4 4 4-2.209 0-4 1.791-4 4-2.209 0-4-1.791-4-4 1.791 0 4-1.791 4-4z" opacity="0.8" />
  </svg>
);

export default function Investment() {
  const totalPrice = 15000;

  // Contact details
  const whatsappNumber = "916363217857";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Hidden Ants Media! I want to get started with the Digital Growth Package (₹15,000/month). Let's connect!"
  )}`;

  // Features list from Image 2
  const features = [
    "Logo Design",
    "Brand Poster Designs",
    "1 Content Shoot",
    "5 Promotion Reels",
    "Social Media Handling (1 Month)",
    "Festival Posters",
    "Page Setup (Instagram / Facebook / YouTube)",
  ];

  // Trusted local brands from Testimonial
  const trustedBrands = [
    "The Malnad Cafe",
    "Sahyadri Fashion",
    "Smile Dental Clinic",
    "Urban Nest Real Estate",
    "Elysian Salon",
  ];

  return (
    <section className="bg-bg-primary py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Grid Lines to match site aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-3 divide-x divide-white/10">
          <div className="h-full" />
          <div className="h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 bg-black border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider mb-4 select-none">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span>Investment</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
            Simple, transparent <span className="font-instrument italic text-accent-yellow">investment</span>
            <br className="hidden md:inline" /> made for local leaders
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4 max-w-xl mx-auto">
            We like to keep things simple with one flat, high-value package tailored to scale your brand online.
          </p>
        </div>

        {/* Pricing Card Section */}
        <div className="flex flex-col items-center">
          {/* Main Horizontal Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[920px] bg-black border border-white/10 rounded-[32px] p-6 md:p-8 relative overflow-hidden shadow-2xl hover:shadow-accent-yellow/5 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
              
              {/* Left Column: Dark Lighter Card (Package & Price) */}
              <div className="lg:col-span-5 bg-surface border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                {/* Subtle card glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/5 rounded-full blur-[40px] pointer-events-none" />

                <div>
                  {/* Decorative Sparkle icon at the top right of package info */}
                  <div className="flex justify-end mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-accent-yellow opacity-40" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight mb-2">
                    Digital Growth Package
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-6">
                    A complete growth package to build and scale your brand online, month after month.
                  </p>

                  {/* Pricing Display */}
                  <div className="flex items-baseline mb-6 border-t border-white/5 pt-6">
                    <span className="text-3xl md:text-4xl font-black tracking-tight text-text-primary font-mono">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-text-secondary ml-1.5 font-medium">
                      /month
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-4 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary w-full py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center gap-1.5"
                  >
                    <span>Book Now</span>
                    <span className="w-1.5 h-1.5 bg-bg-primary rounded-full animate-pulse" />
                  </a>
                  
                  <div className="text-center">
                    <a
                      href="tel:+916363217857"
                      className="inline-flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-text-secondary hover:text-accent-yellow transition-colors gap-1.5 py-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Or Call Us Directly: +91 63632 17857</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Features List */}
              <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6 py-4">
                <h4 className="text-xs uppercase font-bold tracking-widest text-text-secondary mb-6 select-none">
                  Includes
                </h4>

                {/* Single-column vertical list layout */}
                <div className="flex flex-col gap-4">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <DoubleSparkles />
                      <span className="text-xs md:text-sm text-text-primary/95 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Glowing Accent Blur in bottom right corner of card */}
            <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-tr from-purple-600/15 to-indigo-500/5 blur-[45px] pointer-events-none mix-blend-screen" />
            <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full border border-purple-500/5 pointer-events-none mix-blend-screen" />
          </motion.div>

          {/* Brands Trusted section below the card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center w-full max-w-4xl mx-auto overflow-hidden"
          >
            <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-text-secondary opacity-60 block mb-6">
              Services trusted by local leaders:
            </span>
            <div 
              className="relative w-full flex overflow-hidden" 
              style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
            >
              <motion.div
                className="flex whitespace-nowrap items-center gap-12"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              >
                {[...trustedBrands, ...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm font-black tracking-widest text-text-secondary opacity-40 hover:opacity-85 transition-opacity duration-300 uppercase select-none font-mono shrink-0"
                  >
                    {brand}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
