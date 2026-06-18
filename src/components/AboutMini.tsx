"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMini() {
  return (
    <section className="bg-bg-primary py-16 md:py-24 border-y border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Minimal Eyebrow */}
          <span className="inline-block px-3 py-1 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Who We Are
          </span>

          {/* Heading containing: Who we are, what we do, and for whom */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary leading-tight max-w-5xl mx-auto">
            We are a Shivamogga-based{" "}
            <span className="font-instrument italic text-accent-yellow">digital growth partner</span>{" "}
            blending creative storytelling and marketing to help local businesses{" "}
            <span className="font-instrument italic text-accent-yellow">win more customers</span>.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
