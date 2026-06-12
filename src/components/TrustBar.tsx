"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TrustBar() {
  const stats = [
    { value: "100K+", label: "Audience Reach Experience" },
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Campaigns Executed" },
    { value: "Local", label: "Shivamogga Market Expertise" },
  ];

  return (
    <section className="bg-bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center flex flex-col items-center justify-center p-4 first:pt-0 md:first:pt-4 md:pl-0"
            >
              <span className="text-3xl md:text-5xl font-black tracking-tight text-accent-yellow block mb-2 font-mono">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-text-secondary uppercase max-w-[180px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
