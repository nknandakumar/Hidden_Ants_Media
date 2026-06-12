"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Eye, Sparkles } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Eye,
      title: "Attention to Detail",
      desc: "Like ants, we look closely. A minor change in a reel hook, menu typography, or poster spacing can be the difference between scrolling past and walking in.",
    },
    {
      icon: ShieldCheck,
      title: "Strategy First",
      desc: "We don't post for the sake of posting. Every piece of photography, caption, and ad budget is backed by a specific objective to drive business sales.",
    },
    {
      icon: HeartHandshake,
      title: "Radical Honesty",
      desc: "If we believe a marketing idea won't work for your business, we will tell you straight. We prioritize your actual growth over invoice collections.",
    },
    {
      icon: Sparkles,
      title: "Shivamogga Commitment",
      desc: "We are deeply invested in making the local market thrive. We want to put Shivamogga businesses on the national map with premium design.",
    },
  ];

  return (
    <div className="bg-bg-primary pt-24 pb-16">
      
      {/* Hero Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-widest text-accent-yellow bg-surface thin-border px-4 py-1.5 rounded-full"
          >
            Our Mission
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-text-primary leading-tight max-w-4xl mx-auto"
          >
            Growing Local Brands with{" "}
            <span className="font-instrument italic text-accent-yellow block mt-2">
              Global Aesthetics
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            We are a creative agency dedicated to transforming how businesses in Shivamogga connect with their audience.
          </motion.p>
        </div>
      </section>

      {/* Origin Story Split */}
      <section className="py-12 md:py-20 thin-border-t thin-border-b bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden thin-border bg-surface">
              <Image
                src="/images/founder_portrait.png"
                alt="Founder and Creative Director"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Decal */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent-yellow/30 pointer-events-none rounded-br-2xl" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary">
              Why We Call Ourselves <span className="text-accent-yellow">"Hidden Ants"</span>
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
              <p>
                In the digital marketing world, agencies often want to stand in the spotlight, boasting about metrics that don't matter. We operate differently. We believe our client's brand should be the hero. 
              </p>
              <p>
                Ants are small, but they work with incredible synergy, carry loads many times their weight, and construct intricate networks. We work behind the scenes of your business—shooting your product reels, writing copy, managing campaigns, and designing layouts—so that you can focus on providing the best services.
              </p>
              <p>
                We believe that Shivamogga's local showrooms, cafes, salons, and stores deserve the same high-end visual design and strategic execution as brands in Bengaluru or Mumbai.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow block mb-3">
              Core Beliefs
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-text-primary">
              Values That <span className="font-instrument italic text-accent-yellow">Drive Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-surface thin-border p-8 rounded-2xl group hover:border-accent-yellow/30 transition-all"
                >
                  <div className="w-12 h-12 bg-bg-primary text-text-secondary group-hover:text-accent-yellow flex items-center justify-center rounded-lg transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-text-primary mt-6 group-hover:text-accent-yellow transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary mt-3 leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface thin-border p-8 md:p-16 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary">
              Ready to work with a dedicated local creative partner?
            </h3>
            <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto">
              Get in touch today for a free consultation or chat with us on WhatsApp to discuss your project ideas.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105"
              >
                Get in Touch
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-primary hover:bg-white/5 text-text-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest thin-border transition-all hover:scale-105"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
