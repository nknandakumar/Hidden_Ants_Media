"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const InstagramIcon = () => (
  <svg
    className="w-5 h-5 stroke-current fill-none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function FounderStory() {
  const founderName = "Franklin";
  const founderImage = "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781347759/8ca01b99-e52a-4c0b-8b87-34a372d2474b_cxqerz.png";
  const igProfilePic = "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781349434/Screenshot_20260613_125857_Instagram_ctvymo.jpg";
  const founderPhone = "+916363217857";
  const founderEmail = "franklinfrank.smg@gmail.com";
  const founderInstagram = "https://instagram.com/f_block_14";

  return (
    <section className="bg-bg-primary py-20 md:py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Section Heading */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
      
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-text-primary">
            The Creative Force <span className="font-instrument italic text-accent-yellow">Behind the Ants</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 justify-center items-start">
          
          {/* Founder Image Side (Column 5) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden border border-white/10 bg-surface"
            >
              <Image
                src={founderImage}
                alt={`Founder ${founderName}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
            </motion.div>
            
            {/* Decal */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-yellow/30 pointer-events-none rounded-bl-2xl" />
          </div>

          {/* Details & Info Side (Column 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Actual Instagram Account Full Image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[520px] rounded-2xl overflow-hidden border border-white/10 bg-surface/50 p-1 shrink-0 shadow-2xl"
            >
              <img
                src={igProfilePic}
                alt="F_BLOCK Instagram Full Account Screenshot"
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed max-w-xl"
            >
              <p>
                Meet <strong>{founderName}</strong>, the founder and creative engine behind Hidden Ants Media. Believing that every brand has a story that deserves global aesthetics, he established the agency to build high-end marketing funnels and cinematic content for growth-focused businesses.
              </p>
              <p>
                From coordinating local cafe shoots to designing premium brand identities, Franklin directs our operations with meticulous attention to detail—ensuring Shivamogga's local businesses stand out and connect deeply.
              </p>
            </motion.div>

            {/* Circular Social & Action Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4 pt-2"
            >
              <a
                href={founderInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-surface/30 flex items-center justify-center text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                aria-label="Founder Instagram Profile"
              >
                <InstagramIcon />
              </a>
              <a
                href={`mailto:${founderEmail}`}
                className="w-12 h-12 rounded-full border border-white/10 bg-surface/30 flex items-center justify-center text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                aria-label="Email Founder"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${founderPhone}`}
                className="w-12 h-12 rounded-full border border-white/10 bg-surface/30 flex items-center justify-center text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                aria-label="Call Founder"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
