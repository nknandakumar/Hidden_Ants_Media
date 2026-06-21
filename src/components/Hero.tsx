"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Phone } from "lucide-react";
import { usePreloader } from "./PreloaderContext";

export default function Hero() {
  const { isLoaded } = usePreloader();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 24 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        ease: [0.25, 1, 0.5, 1] as const,
        duration: 0.8 
      }
    }
  };


  const clientAvatars = [
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031674/e4b39ff9-26e2-40d8-90da-205fb6a31f27.png",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031727/1235ccd6-a8ae-463e-89e6-3464d3488cea.png",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031732/6d2287fc-9e63-4d38-811f-b143197be90d.png",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031757/dfff0454-cac4-419e-86e4-522aacbb87ec.png",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031791/3691ee26-bbe6-41ed-a515-82e2870298f7.png",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031821/81611b77-8683-4653-ba86-fa50354a7e37.png",
  ];

  const leftColumnImages = [
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782025134/vidhatribhavan_nwzvbi.jpg",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781284119/68c1a562-98f0-4d15-bb5d-1e3070fc6f0c.png",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283594/video_production_fyck8o.jpg",
  ];

  const rightColumnImages = [
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031391/fblock_iljkwt.jpg",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782025134/vidhatribhavan_nwzvbi.jpg",
    "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781333494/4fb33bc1-641a-40b4-be28-2163f833a9b2_kkmajl.png",
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="space-y-6 max-w-2xl text-center lg:text-left"
        >
          {/* Social Proof Review Eyebrow */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
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
                Trusted by 50+ businesses
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-normal tracking-tight text-text-primary leading-[1.05]">
            Digital Growth Partner
            <br />
            <span className="text-text-secondary">for Businesses That Want </span> 
            <span className="font-instrument italic text-accent-yellow block sm:inline mt-1 sm:mt-0">
              More Customers
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-text-secondary text-sm md:text-base leading-relaxed">
            From branding and content creation to social media management and video production, we help businesses build visibility and drive growth.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
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
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side: Full Screen Height Staggered Image Marquee */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.2, delay: 0.7 }}
        className="w-full lg:w-[45%] h-[60vh] lg:h-full relative overflow-hidden flex items-center z-10"
      >
        {/* Top & Bottom gradient fades for seamless scrolling edge transitions */}
        <div className="absolute -mt-8 lg:-mt-0 -top-0.5 left-0 right-0 h-18 lg:h-28 bg-gradient-to-b from-bg-primary to-transparent z-20 pointer-events-none" />
        <div className="absolute -mb-1 lg:-mb-0 bottom-0 left-0 right-0 h-16 lg:h-28 bg-gradient-to-t from-bg-primary to-transparent z-20 pointer-events-none" />

        <div className="grid grid-cols-2 gap-4 w-full h-full px-4 lg:px-6 py-0">
          
          {/* Left Column Marquee (Images 1, 2 & 3 duplicated for seamless loop) - Scrolls Upwards */}
          <div className="w-full h-full overflow-hidden relative">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 28, repeat: Infinity }}
              className="space-y-4 flex flex-col"
            >
              {[...leftColumnImages, ...leftColumnImages].map((url, index) => (
                <div key={`left-img-${index}`} className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl hover:scale-[1.02] transition-transform duration-300">
                  <img src={url} alt={`Branding showcase ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column Marquee (Images 4, 5 & 6 duplicated for seamless loop) - Scrolls Downwards */}
          <div className="w-full h-full overflow-hidden relative">
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 28, repeat: Infinity }}
              className="space-y-4 flex flex-col"
            >
              {[...rightColumnImages, ...rightColumnImages].map((url, index) => (
                <div key={`right-img-${index}`} className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden thin-border bg-surface shadow-xl hover:scale-[1.02] transition-transform duration-300">
                  <img src={url} alt={`Campaign showcase ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}



