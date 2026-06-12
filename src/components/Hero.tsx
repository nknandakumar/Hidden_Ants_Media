"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Phone } from "lucide-react";

export default function Hero() {
  const videoUrls = {
    layout: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781255715/layoutsales_ygddrb.mp4",
    gym: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781255718/gym_ve5ji3.mp4",
    resort: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781255741/resort_gnrfsn.mp4",
    school: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781255752/school_qiyhki.mp4",
  };

  const clientAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop",
  ];

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col lg:flex-row bg-bg-primary overflow-hidden">
      
      {/* Editorial Decorative Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-3 divide-x divide-white/10">
          <div className="h-full" />
          <div className="h-full" />
          <div className="h-full" />
        </div>
      </div>

      {/* Left Side Content Container */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-12 lg:py-0 lg:h-full relative z-10">
        <div className="space-y-6 max-w-2xl">
          
          {/* Social Proof Review Eyebrow */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-3">
              {clientAvatars.map((url, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border border-bg-primary overflow-hidden bg-surface">
                  <img src={url} alt={`Client avatar ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Stars & Text */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent-yellow text-accent-yellow" />
                ))}
                <span className="text-xs font-bold text-text-primary ml-1">5.0</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-text-secondary">
                Loved by 50+ local businesses
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-normal tracking-tight text-text-primary leading-[1.05]">
            Digital Growth Partner
            <br />
            <span className="text-text-secondary">for Businesses That Want </span> 
            <span className="font-instrument italic text-accent-yellow block sm:inline mt-1 sm:mt-0">
              More Customers
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            From branding and content creation to social media management and video production, we help businesses build visibility and drive growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center space-x-2 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-yellow/10"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center space-x-2 bg-surface hover:bg-surface/80 text-text-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest thin-border transition-all duration-300 hover:scale-105"
            >
              <span>View Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Full Screen Height Staggered Video Marquee */}
      <div className="w-full lg:w-[45%] h-[60vh] lg:h-full relative overflow-hidden flex items-center  z-10">
        <div className="grid grid-cols-2 gap-4 w-full h-full px-4 lg:px-6 py-0">
          
          {/* Left Column Marquee (Videos 1 & 2 duplicated for seamless loop) - Scrolls Upwards */}
          <div className="w-full h-full overflow-hidden relative">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              className="space-y-4 py-4 flex flex-col"
            >
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.layout} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.gym} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              {/* Duplicates */}
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.layout} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.gym} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Right Column Marquee (Videos 3 & 4 duplicated for seamless loop) - Scrolls Downwards */}
          <div className="w-full h-full overflow-hidden relative">
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              className="space-y-4 py-4 flex flex-col"
            >
              {/* Duplicates */}
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.resort} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.school} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              {/* Originals */}
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.resort} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl">
                <video src={videoUrls.school} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}



