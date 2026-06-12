"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const steps = [
    {
      step: "Step 01",
      title: "Discover",
      desc: "We dive deep into your business. We analyze your current online presence, study your local competitors in Shivamogga, and identify your exact target audience demographics.",
    },
    {
      step: "Step 02",
      title: "Plan",
      desc: "We build a tailored digital blueprint. This includes mood boards for branding, detailed content calendars for social media, and conversion-focused campaign strategy.",
    },
    {
      step: "Step 03",
      title: "Create",
      desc: "Our creative studio goes to work. We execute premium product shoots, write and produce cinematic reels, and design scroll-stopping posters and graphic ads.",
    },
    {
      step: "Step 04",
      title: "Grow",
      desc: "We deploy, monitor, and scale. From publishing posts to managing targeted advertising campaigns, we optimize every detail to ensure maximum customer inquiries and leads.",
    },
  ];

  return (
    <section className="bg-bg-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
            How We <span className="font-instrument italic text-accent-yellow">Work</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg mt-6 max-w-xl mx-auto">
            A transparent, streamlined creative process designed to move quickly and deliver measurable business results.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.step}
                  className={`flex flex-col lg:flex-row items-center justify-between relative ${
                    isEven ? "" : "lg:flex-row-reverse"
                  } lg:py-16`}
                >
                  {/* Step Connector Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-yellow border-4 border-bg-secondary z-10" />

                  {/* Card Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-[45%] bg-surface thin-border p-8 rounded-xl relative group"
                  >
                    {/* Big Step Number BG */}
                    <span className="absolute top-4 right-6 text-5xl md:text-6xl font-black text-white/[0.03] select-none font-mono">
                      {item.step}
                    </span>

                    <span className="text-xs font-mono font-bold text-accent-yellow tracking-widest block mb-2 uppercase">
                      {item.step}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent-yellow transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mt-4">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* Empty Spacer Side */}
                  <div className="hidden lg:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
