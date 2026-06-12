"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, CheckSquare, Zap, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Globe,
      title: "Local Market Understanding",
      desc: "Based in Shivamogga, we know exactly what local consumers look for, where they hang out, and what style of content gets their attention.",
    },
    {
      icon: Compass,
      title: "Creative + Strategy",
      desc: "We don't just shoot pretty videos. We pair cinematic storytelling with hard-hitting marketing strategy to ensure every campaign drives business ROI.",
    },
    {
      icon: CheckSquare,
      title: "End-to-End Execution",
      desc: "From branding guidelines and menu design to copywriting, professional shooting, editing, and publishing, we handle everything under one roof.",
    },
    {
      icon: Zap,
      title: "Fast Communication",
      desc: "No long waiting times or agency red tape. You have direct access to our core creative team, ensuring instant updates and quick turnarounds.",
    },
  ];

  return (
    <section className="bg-bg-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Why Hidden Ants
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-none text-text-primary">
            More Than <span className="font-instrument italic text-accent-yellow">Just Content</span>.
          </h2>
          <p className="text-text-secondary text-base md:text-lg mt-6 max-w-xl mx-auto">
            We are strategic growth partners. We measure our success not by likes, but by customers walking through your doors.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-surface thin-border p-8 md:p-10 rounded-2xl relative group"
              >
                {/* Decorative Node */}
                <div className="absolute top-8 right-8 text-3xl font-black text-white/[0.02] select-none font-mono">
                  {`0${index + 1}`}
                </div>

                <div className="w-12 h-12 bg-bg-primary text-text-secondary group-hover:text-accent-yellow transition-colors duration-300 flex items-center justify-center rounded-lg">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary mt-6 group-hover:text-accent-yellow transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-4 max-w-md">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
