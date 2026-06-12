"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  size: "large" | "medium" | "small";
  clientName: string;
  location: string;
  outcome: string;
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Reels", "Photography", "Branding", "Campaigns", "Posters"];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "The Malnad Coffee Co.",
      category: "Photography",
      subtitle: "Gourmet Cafe Product Shoot",
      image: "/images/portfolio_cafe.png",
      size: "large",
      clientName: "Malnad Coffee Roasters",
      location: "Shivamogga Town",
      outcome: "+40% foot traffic, viral cafe reels layout",
    },
    {
      id: 2,
      title: "Sahyadri Fashion Hub",
      category: "Reels",
      subtitle: "Cinematic Launch Reels",
      image: "/images/portfolio_showroom.png",
      size: "medium",
      clientName: "Sahyadri Showrooms",
      location: "Bypass Road, Shivamogga",
      outcome: "150K+ organic impressions, fully booked opening week",
    },
    {
      id: 3,
      title: "Elysian Salon & Spa",
      category: "Branding",
      subtitle: "Visual Identity & Menu Guidelines",
      image: "/images/portfolio_salon.png",
      size: "small",
      clientName: "Elysian Wellness",
      location: "Nehru Road, Shivamogga",
      outcome: "Premium logo & custom salon typography suite",
    },
    {
      id: 4,
      title: "Spicy House Restaurant",
      category: "Photography",
      subtitle: "Social Media Food Styling",
      image: "/images/portfolio_restaurant.png",
      size: "medium",
      clientName: "Spicy House Hotel Group",
      location: "Gopi Circle, Shivamogga",
      outcome: "Stunning food photography catalog, +25% dinner bookings",
    },
    {
      id: 5,
      title: "Western Ghats Eco-Stay",
      category: "Campaigns",
      subtitle: "Tourism Ad Campaign & Lead Gen",
      image: "/images/portfolio_cafe.png",
      size: "small",
      clientName: "Sahyadri Retreats",
      location: "Koppa Forest Range",
      outcome: "200+ qualified staycation bookings in 30 days",
    },
    {
      id: 6,
      title: "Shivamogga Food Festival",
      category: "Posters",
      subtitle: "Event Identity & Poster Design",
      image: "/images/portfolio_restaurant.png",
      size: "large",
      clientName: "Kannada Food Association",
      location: "National School Grounds",
      outcome: "Official brand identity, 10K+ festival attendees",
    },
  ];

  const filteredItems = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-bg-primary pt-24 pb-16">
      
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow bg-surface thin-border px-4 py-1.5 rounded-full">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-text-primary leading-tight max-w-4xl mx-auto">
            Visual Proof of{" "}
            <span className="font-instrument italic text-accent-yellow block mt-2">
              Brand Growth
            </span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We collaborate with local cafes, premium showrooms, salons, and food brands to build visual campaigns that perform.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-accent-yellow text-bg-primary font-semibold"
                    : "bg-surface text-text-secondary hover:text-text-primary thin-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Showroom */}
      <section className="px-6 max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[340px] md:auto-rows-[420px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative group overflow-hidden rounded-2xl bg-surface thin-border cursor-pointer ${
                  item.size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : item.size === "medium"
                    ? "md:col-span-1 md:row-span-2"
                    : "md:col-span-1 md:row-span-1"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Cover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Category */}
                  <span className="self-start px-2.5 py-1 bg-accent-yellow text-bg-primary text-[10px] font-bold uppercase tracking-widest rounded mb-3">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent-yellow transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    {item.subtitle}
                  </p>

                  {/* Extended details shown on hover/large screens */}
                  <div className="mt-4 pt-4 border-t border-white/10 hidden md:block max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out space-y-1">
                    <p className="text-[10px] uppercase font-semibold text-text-secondary">
                      Client: <span className="text-text-primary">{item.clientName}</span>
                    </p>
                    <p className="text-[10px] uppercase font-semibold text-text-secondary">
                      Outcome: <span className="text-accent-yellow font-bold">{item.outcome}</span>
                    </p>
                  </div>

                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-accent-yellow text-bg-primary flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Work With Us banner */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="bg-surface thin-border p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
            Want to see your brand featured here?
          </h3>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Let's sit down for a coffee in Shivamogga and map out a creative video and social campaign for your business.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
            >
              <span>Start Your Campaign</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
