"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Camera, Video, Share2, CalendarDays, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      features: ["Logo Design", "Visual Identity", "Brand Guidelines"],
      desc: "Establish a memorable premium look that instantly builds trust with your local customers.",
    },
    {
      icon: Camera,
      title: "Content Creation",
      features: ["Photography", "Product Shoots", "Social Content"],
      desc: "Stunning, magazine-quality visual assets crafted to showcase your cafe, menu, or products.",
    },
    {
      icon: Video,
      title: "Video Production",
      features: ["Reels", "Ads", "YouTube Videos"],
      desc: "Cinematic vertical reels and video advertisements optimized to capture scroll attention.",
    },
    {
      icon: Share2,
      title: "Social Media SMM",
      features: ["Strategy", "Publishing", "Growth & Engagement"],
      desc: "End-to-end management of your channels to consistently deliver results without you lifting a finger.",
    },
    {
      icon: CalendarDays,
      title: "Festival Marketing",
      features: ["Campaign Creatives", "Seasonal Promotions", "Event Hype"],
      desc: "Capitalize on local festivities in Karnataka with seasonal campaigns that drive sales.",
    },
  ];

  return (
    <section id="services" className="bg-bg-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-none text-text-primary">
            Everything You Need To{" "}
            <span className="font-instrument italic text-accent-yellow">Grow Online</span>.
          </h2>
          <p className="text-text-secondary text-base md:text-lg mt-6 max-w-xl mx-auto">
            We offer end-to-end creative consulting and marketing production. No outsourcing. No templates. Just custom execution.
          </p>
        </div>

        {/* Services Grid (custom asymmetrical grid or columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-surface thin-border p-8 rounded-xl flex flex-col justify-between group transition-all duration-300 hover:border-accent-yellow/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-bg-primary text-text-secondary group-hover:text-accent-yellow transition-colors duration-300 flex items-center justify-center rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-text-secondary hover:text-accent-yellow transition-colors"
                      aria-label={`View details about ${service.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-text-primary mt-6 group-hover:text-accent-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mt-3">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <ul className="space-y-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center text-xs text-text-secondary">
                        <span className="w-1 h-1 bg-accent-yellow rounded-full mr-2" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
