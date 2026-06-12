"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  size: "large" | "medium" | "small";
}

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Reels", "Photography", "Branding", "Campaigns", "Posters"];

  const items: PortfolioItem[] = [
    {
      id: 1,
      title: "The Malnad Coffee Co.",
      category: "Photography",
      subtitle: "Gourmet Cafe Product Shoot",
      image: "/images/portfolio_cafe.png",
      size: "large",
    },
    {
      id: 2,
      title: "Sahyadri Fashion Hub",
      category: "Reels",
      subtitle: "Cinematic Launch Reels",
      image: "/images/portfolio_showroom.png",
      size: "medium",
    },
    {
      id: 3,
      title: "Elysian Salon & Spa",
      category: "Branding",
      subtitle: "Visual Identity & Menu Guidelines",
      image: "/images/portfolio_salon.png",
      size: "small",
    },
    {
      id: 4,
      title: "Spicy House Restaurant",
      category: "Photography",
      subtitle: "Social Media Food Styling",
      image: "/images/portfolio_restaurant.png",
      size: "medium",
    },
    {
      id: 5,
      title: "Western Ghats Eco-Stay",
      category: "Campaigns",
      subtitle: "Tourism Ad Campaign & Lead Gen",
      image: "/images/portfolio_cafe.png",
      size: "small",
    },
    {
      id: 6,
      title: "Shivamogga Food Festival",
      category: "Posters",
      subtitle: "Event Identity & Poster Design",
      image: "/images/portfolio_restaurant.png",
      size: "large",
    },
  ];

  const filteredItems = activeFilter === "All"
    ? items
    : items.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-bg-primary py-20 md:py-32 thin-border-b">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow block mb-3">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
              Recent <span className="font-instrument italic text-accent-yellow">Work</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0">
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

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[340px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative group overflow-hidden rounded-xl bg-surface thin-border cursor-pointer ${
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
                  priority={item.id <= 3}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  {/* Category Pill */}
                  <span className="self-start px-2.5 py-1 bg-accent-yellow text-bg-primary text-[10px] font-bold uppercase tracking-widest rounded mb-3">
                    {item.category}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent-yellow transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary mt-1">
                    {item.subtitle}
                  </p>

                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent-yellow text-bg-primary flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 md:mt-24">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 border border-text-secondary/20 hover:border-accent-yellow text-text-primary hover:text-accent-yellow px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
