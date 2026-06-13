"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, CheckSquare, Zap, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Globe,
      title: "Local Market Understanding",
      desc: "Based in Shivamogga, we know exactly what local consumers look for, where they hang out, and what style of content gets their attention.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781332538/9134bc76-5137-4b41-be62-ef97e3bccf25_xeuoqe.png",
    },
    {
      icon: Compass,
      title: "Creative + Strategy",
      desc: "We don't just shoot pretty videos. We pair cinematic storytelling with hard-hitting marketing strategy to ensure every campaign drives business ROI.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781332350/af0120a1-3531-47e1-aba5-418a0aa60fbf.png",
    },
    {
      icon: CheckSquare,
      title: "End-to-End Execution",
      desc: "From branding guidelines and menu design to copywriting, professional shooting, editing, and publishing, we handle everything under one roof.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781333002/7e96260c-61fb-4e85-bb9e-cd332d4844a0_k11xrv.png",
    },
    {
      icon: Zap,
      title: "Fast Communication",
      desc: "No long waiting times or agency red tape. You have direct access to our core creative team, ensuring instant updates and quick turnarounds.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781333494/4fb33bc1-641a-40b4-be28-2163f833a9b2_kkmajl.png",
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-surface thin-border rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Image Section (Edge-to-edge aspect-video at top) */}
                <div className="relative w-full aspect-video overflow-hidden bg-bg-primary border-b border-white/5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                
                </div>

                {/* Text Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-bg-primary text-text-secondary group-hover:text-accent-yellow transition-colors duration-300 flex items-center justify-center rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-text-primary group-hover:text-accent-yellow transition-colors duration-200">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mt-4">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
