"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  businessName: string;
  date: string;
  name: string;
  handle: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    businessName: "The Malnad Cafe",
    date: "Nov 22, 2025",
    name: "Raghav Gowda",
    handle: "@raghav_malnad",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80",
    text: "As someone with zero digital marketing experience, I was worried about running ads. But Hidden Ants made it so simple. Our weekend walk-ins have increased by 40%!",
  },
  {
    id: 2,
    businessName: "Sahyadri Fashion",
    date: "Dec 14, 2025",
    name: "Priya Hegde",
    handle: "@priya_styles",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80",
    text: "I thought building a strong online brand would take months. Their team helped our boutique go viral locally in days, without us needing any technical skills.",
  },
  {
    id: 3,
    businessName: "Smile Dental Clinic",
    date: "Oct 30, 2025",
    name: "Dr. Vikram Rao",
    handle: "@dr_vikram_smiles",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80",
    text: "As a busy dentist, I had no idea where to start with social media. This agency gave me confidence and made the process surprisingly smooth. Patient inquiries have doubled.",
  },
  {
    id: 4,
    businessName: "Urban Nest Real Estate",
    date: "Nov 05, 2025",
    name: "Sneha Patel",
    handle: "@sneha_realtor",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&q=80",
    text: "I never imagined getting leads could be this easy. Their content strategy guided me at every stage, and our property listings now look truly premium and attract high-ticket buyers.",
  },
  {
    id: 5,
    businessName: "Elysian Salon",
    date: "Sep 18, 2025",
    name: "Shwetha Bhat",
    handle: "@shwetha_glam",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&q=80",
    text: "From color palettes to reel formats, customizing our brand was effortless. I finally have a salon page that not only looks great but also works perfectly to book appointments.",
  },
  {
    id: 6,
    businessName: "Apex Fitness Studio",
    date: "Dec 02, 2025",
    name: "Rohit Sharma",
    handle: "@rohit_fitness",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80",
    text: "Every detail was thought through. I didn't feel lost even once, and in just a week our gym had a promotional campaign I'm incredibly proud to share with our members.",
  },

];

export default function Testimonials() {
  return (
    <section className="bg-bg-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Client Success
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
            Loved By Local <span className="font-instrument italic text-accent-yellow">Leaders</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid bg-surface thin-border p-6 rounded-2xl flex flex-col shadow-lg"
            >
              {/* Header: Business */}
              <div className="flex items-center text-[11px] md:text-xs font-semibold text-text-primary mb-5">
                <span>{t.businessName}</span>
              </div>
              
              {/* Profile Row */}
              <div className="flex items-start justify-start gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-white/5 border border-white/10">
                  <Image 
                    src={t.avatar} 
                    alt={t.name} 
                    fill 
                    className="object-cover" 
                    sizes="48px"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-text-primary">{t.name}</span>
                    <BadgeCheck className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2] stroke-white ml-0.5" />
                  </div>
                  <span className="text-xs text-text-secondary mt-0.5">{t.handle}</span>
                   
                   {/* Stars */}
              <div className="flex gap-1 mt-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>
                </div>
                
              </div>

             

              {/* Testimonial Body */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
