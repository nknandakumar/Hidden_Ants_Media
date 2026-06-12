"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export default function FinalCTA() {
  const whatsappNumber = "919876543210";
  const message = "Hi Hidden Ants Media! I want to grow my brand. I'd like to schedule a consultation call.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-bg-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface thin-border p-8 md:p-16 rounded-3xl text-center relative overflow-hidden space-y-6 md:space-y-8"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-yellow/5 rounded-full blur-[120px] pointer-events-none" />

          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Let's Collaborate
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary max-w-3xl mx-auto leading-tight">
            Ready To Grow Your{" "}
            <span className="font-instrument italic text-accent-yellow">Brand</span>?
          </h2>
          
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Let’s discuss how we can position your business as the leading brand in Shivamogga. Select your preferred channel to get started.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span>Chat On WhatsApp</span>
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.02 14.07 1.045 11.5 1.045 6.064 1.045 1.64 5.415 1.636 10.843c0 1.684.453 3.328 1.312 4.795L1.87 20.21l4.777-1.056z" />
              </svg>
            </a>
            
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 text-text-primary px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest thin-border transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span>Schedule A Call</span>
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
