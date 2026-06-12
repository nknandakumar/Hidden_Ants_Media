"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FounderStory() {
  return (
    <section className="bg-bg-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side (Column 5) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden thin-border bg-surface"
            >
              <Image
                src="/images/founder_portrait.png"
                alt="Founder of Hidden Ants Media"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-40" />
            </motion.div>
            
            {/* Decal */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent-yellow/30 pointer-events-none rounded-tl-2xl" />
          </div>

          {/* Text Side (Column 7) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <span className="w-max mx-auto lg:mx-0 inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow text-center lg:text-left">
              Origin
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary leading-[0.95] text-center lg:text-left">
              The Story Behind
              <br />
              <span className="font-instrument italic text-accent-yellow block mt-2">
                Hidden Ants Media
              </span>
            </h2>

            <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
              <p>
                Hidden Ants Media was born out of a simple observation in Shivamogga: local brands had incredible products, but their online presence was practically invisible. Many business owners were posting random photos, using generic templates, or ignoring social media entirely because they were too busy running their operations.
              </p>
              <p>
                We wanted to change that. We chose the name <strong className="text-text-primary font-semibold">"Hidden Ants"</strong> because, like ants, our team works tirelessly behind the scenes to lift heavy, impactful campaigns that elevate your brand. We focus on small details that make a massive difference.
              </p>
              <p>
                Our mission is simple: to make local businesses in Shivamogga look and perform like world-class brands. We do this by bringing agency-level strategy, cinematic video quality, and conversion-focused thinking directly to your store, cafe, salon, or showroom.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 border-b border-accent-yellow text-text-primary hover:text-accent-yellow pb-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200"
              >
                <span>Read Full Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
