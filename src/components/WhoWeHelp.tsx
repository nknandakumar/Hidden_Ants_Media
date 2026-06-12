"use client";

import React from "react";
import { motion } from "framer-motion";
import { Utensils, Scissors, Shirt, Store, Coffee, Briefcase, User, Calendar } from "lucide-react";

export default function WhoWeHelp() {
  const targets = [
    { name: "Restaurants", icon: Utensils, desc: "Showcase signature recipes and drive foot traffic with mouth-watering food photography." },
    { name: "Cafes", icon: Coffee, desc: "Establish the go-to aesthetic cozy spot and build a local community of coffee lovers." },
    { name: "Salons & Spas", icon: Scissors, desc: "Showcase client transformations and make booking appointments irresistible." },
    { name: "Fashion Stores", icon: Shirt, desc: "Display new arrivals, collections, and lookbooks with high-fashion aesthetics." },
    { name: "Showrooms", icon: Store, desc: "Highlight grand openings, premium products, and customer walkthrough reels." },
    { name: "Local Brands", icon: Briefcase, desc: "Scale local distribution and establish strong branding in the Shivamogga market." },
    { name: "Personal Brands", icon: User, desc: "Grow thought leadership, create viral short-form content, and build authority." },
    { name: "Event Organizers", icon: Calendar, desc: "Sell out tickets and build hype with premium event teasers and posters." },
  ];

  return (
    <section className="bg-bg-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Target Audience
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-none text-text-primary">
            Built For Businesses That Want{" "}
            <span className="font-instrument italic text-accent-yellow">Attention</span>.
          </h2>
          <p className="text-text-secondary text-base md:text-lg mt-6 max-w-xl mx-auto">
            We don't do boring corporate templates. We build custom visual assets for local leaders who want to stand out and dominate their space.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => {
            const Icon = target.icon;
            return (
              <motion.div
                key={target.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, borderColor: "rgba(255, 204, 1, 0.4)" }}
                className="bg-surface thin-border p-8 rounded-xl flex flex-col justify-between h-64 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-bg-primary flex items-center justify-center text-text-secondary group-hover:text-accent-yellow transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-text-primary mt-6 group-hover:text-accent-yellow transition-colors duration-300">
                    {target.name}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {target.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
