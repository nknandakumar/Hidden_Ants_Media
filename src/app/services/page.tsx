"use client";

import React from "react";
import { Palette, Camera, Video, Share2, CalendarDays, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const whatsappNumber = "919876543210";

  const services = [
    {
      id: "branding",
      icon: Palette,
      title: "Brand Identity Design",
      tagline: "Build trust instantly with premium, intentional aesthetics.",
      desc: "Your brand is more than just a logo. It's the visual language that speaks to customers before they even read your menu or browse your racks. We design modern brand identities tailored for your industry.",
      deliverables: [
        "Custom Logo Suite (Primary, Secondary, Submark)",
        "Premium Color Palette (HSL custom configured)",
        "Typography Pairing (Headings + Body font matching)",
        "Visual Brand Guidelines & Asset Checklist",
        "Business Cards & Menu Card Layout Design",
      ],
      whatsappMsg: "Hi Hidden Ants! I am interested in your Brand Identity Design service for my business.",
    },
    {
      id: "content",
      icon: Camera,
      title: "Content Creation & Photography",
      tagline: "Magazine-quality visuals that make your products irresistible.",
      desc: "Stock photos don't convert. We set up professional on-site shoots to capture real, high-resolution imagery of your restaurant dishes, café lattes, boutique outfits, or salon interiors.",
      deliverables: [
        "Professional Product & Styling Photography",
        "High-Resolution Food & Beverage Shoots",
        "Boutique Clothing & Showroom Modeling shoots",
        "High-contrast, clean social media template packs",
        "Basic color grading and retouching included",
      ],
      whatsappMsg: "Hi Hidden Ants! I am interested in your Content Creation & Photography service for my business.",
    },
    {
      id: "video",
      icon: Video,
      title: "Video Production (Reels & Ads)",
      tagline: "Cinematic vertical videos designed for the local feed algorithm.",
      desc: "Video is the fastest way to build local attention. We write hooks, record high-definition vertical videos, edit with dynamic timing, and add custom typography subtitles to keep viewers hooked.",
      deliverables: [
        "Hook-oriented Reels & TikTok/Shorts scripts",
        "On-site 4K Mobile/Mirrorless Video Recording",
        "Dynamic Editing, Sound Design, & Trending Audio syncing",
        "Custom bold text overlay subtitles",
        "High-converting Video Ads for Instagram & Facebook",
      ],
      whatsappMsg: "Hi Hidden Ants! I am interested in your Video Production (Reels & Ads) service for my business.",
    },
    {
      id: "smm",
      icon: Share2,
      title: "Social Media SMM",
      tagline: "End-to-end management so you can focus on operations.",
      desc: "Stop worrying about what to post tomorrow. We plan your calendar, write captions, post content, and engage with local leads in your direct messages to drive bookings and sales.",
      deliverables: [
        "Monthly content calendar & strategy mapping",
        "Copywriting & caption writing (English + Kannada support)",
        "Post scheduling & optimization (best local times)",
        "Community engagement & comment moderation",
        "Monthly performance analytics & lead tracking",
      ],
      whatsappMsg: "Hi Hidden Ants! I am interested in your Social Media SMM service for my business.",
    },
    {
      id: "festival",
      icon: CalendarDays,
      title: "Festival & Seasonal Marketing",
      tagline: "Capitalize on celebrations with targeted local campaigns.",
      desc: "Festivals are when local consumer spending peaks. We design high-converting, seasonal campaigns (Deewavali, Dasara, Eid, New Year) to drive foot traffic to your Shivamogga store.",
      deliverables: [
        "Seasonal campaign conceptualization & copy",
        "Festival-themed posters & social graphic templates",
        "SMS & WhatsApp local broadcaster copywriting",
        "Targeted local digital advertising setups",
        "Limited-time discount and campaign structures",
      ],
      whatsappMsg: "Hi Hidden Ants! I am interested in your Festival & Seasonal Marketing service for my business.",
    },
  ];

  return (
    <div className="bg-bg-primary pt-24 pb-16">
      
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow bg-surface thin-border px-4 py-1.5 rounded-full">
            Our Catalog
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-text-primary leading-tight max-w-4xl mx-auto">
            Everything You Need To{" "}
            <span className="font-instrument italic text-accent-yellow block mt-2">
              Scale Your Brand
            </span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We provide boutique-quality assets and result-driven marketing consultancy customized for local showrooms, restaurants, and brands.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-16 md:space-y-24">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-surface thin-border rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative overflow-hidden"
            >
              {/* Giant decorative icon BG */}
              <div className="absolute -right-4 -bottom-4 text-white/[0.01] pointer-events-none select-none">
                <Icon className="w-48 h-48" />
              </div>

              {/* Service Info (Column 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="w-12 h-12 bg-bg-primary text-accent-yellow flex items-center justify-center rounded-lg thin-border">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm font-semibold text-accent-yellow uppercase tracking-wider">
                    {service.tagline}
                  </p>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Deliverables List (Column 5) */}
              <div className="lg:col-span-5 bg-bg-primary/50 thin-border p-6 rounded-xl space-y-4 relative z-10 self-start">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  Key Deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start text-xs text-text-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full shrink-0 mr-3 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          );
        })}
      </section>

    </div>
  );
}
