"use client";

import React from "react";
import Image from "next/image";
import { 
  Palette, 
  Camera, 
  Video, 
  Share2, 
  CalendarDays, 
  ArrowUpRight,
  Phone,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

// Custom SVG Double Sparkles Icon matching the design reference
const DoubleSparkles = () => (
  <svg className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 2c0 4.418 3.582 8 8 8-4.418 0-8 3.582-8 8-4.418 0-8-3.582-8-8 3.582 0 8-3.582 8-8z" />
    <path d="M19 13c0 2.209 1.791 4 4 4-2.209 0-4 1.791-4 4-2.209 0-4-1.791-4-4 1.791 0 4-1.791 4-4z" opacity="0.8" />
  </svg>
);

export default function ServicesPage() {
  const whatsappNumber = "916363217857";

  const services = [
    {
      id: "branding",
      icon: Palette,
      title: "Brand Identity Design",
      tagline: "Build trust instantly with premium, intentional aesthetics.",
      desc: "Your brand is more than just a logo. It's the visual language that speaks to customers before they even read your menu or browse your racks. We design modern brand identities tailored for your industry.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283608/branding_HNM_k05xxs.png",
      glowColor: "255,204,1",
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
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781284119/68c1a562-98f0-4d15-bb5d-1e3070fc6f0c.png",
      glowColor: "255,120,40",
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
      title: "Cinematic Video Production",
      tagline: "Cinematic vertical videos designed for the local feed algorithm.",
      desc: "Video is the fastest way to build local attention. We write hooks, record high-definition vertical videos, edit with dynamic timing, and add custom typography subtitles to keep viewers hooked.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283594/video_production_fyck8o.jpg",
      glowColor: "60,100,255",
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
      title: "Social Media Management",
      tagline: "End-to-end management so you can focus on operations.",
      desc: "Stop worrying about what to post tomorrow. We plan your calendar, write captions, post content, and engage with local leads in your direct messages to drive bookings and sales.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283778/815a9b1f-6022-4f9e-8dad-d65098ef5a87.png",
      glowColor: "140,60,255",
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
      desc: "Festivals are when local consumer spending peaks. We design high-converting, seasonal campaigns (Ugadi, Dasara, Eid, New Year) to drive foot traffic to your Shivamogga store.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283587/fab3a305-67c2-4971-91db-77a17276f5ad_lze8nt.png",
      glowColor: "0,200,80",
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

  // Investment Section Inclusions
  const growthPackagePrice = 40000;
  const packageFeatures = [
    "Logo Design",
    "Brand Poster Designs",
    "1 Content Shoot",
    "5 Promotion Reels",
    "Social Media Handling (1 Month)",
    "Festival Posters",
    "Page Setup (Instagram / Facebook / YouTube)",
  ];
  
  const trustedBrands = [
    "The Malnad Cafe",
    "Sahyadri Fashion",
    "Smile Dental Clinic",
    "Urban Nest Real Estate",
    "Elysian Salon",
  ];

  const packageWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Hidden Ants Media! I want to get started with the Digital Growth Package (Total: ₹40,000). Let's connect!"
  )}`;

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
              {/* Giant background icon accent decoration */}
              <div className="absolute -right-4 -bottom-4 text-white/[0.01] pointer-events-none select-none">
                <Icon className="w-48 h-48" />
              </div>

              {/* Service Info (Column 7) */}
              <div className="lg:col-span-7 space-y-6 relative z-10">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center thin-border"
                  style={{ background: `rgba(${service.glowColor}, 0.05)` }}
                >
                  <Icon className="w-6 h-6 text-accent-yellow" />
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

                {/* Styled Visual Asset Panel for mobile viewports */}
                <div className="lg:hidden relative w-full aspect-video rounded-xl overflow-hidden thin-border my-6">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
                </div>
                
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

              {/* Deliverables List & Cloudinary Image on Desktop (Column 5) */}
              <div className="lg:col-span-5 flex flex-col gap-6 relative z-10 self-start">
                {/* Desktop Visual Preview */}
                <div className="hidden lg:block relative w-full aspect-[4/3] rounded-xl overflow-hidden thin-border bg-bg-primary">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="400px" 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/45 to-transparent pointer-events-none" />
                </div>

                {/* Deliverables Block */}
                <div className="bg-bg-primary/50 thin-border p-6 rounded-xl space-y-4">
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
              </div>

            </motion.div>
          );
        })}
      </section>

      {/* Investment & Simple Pricing Section */}
      <section className="py-20 md:py-32 thin-border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <div className="inline-flex items-center space-x-2 bg-black border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider mb-4 select-none">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span>Pricing Plan</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
              Simple, transparent <span className="font-instrument italic text-accent-yellow">investment</span>
              <br /> made for local leaders
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mt-4 max-w-xl mx-auto">
              We like to keep things simple with one flat, high-value package tailored to scale your brand online.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* Horizontal Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[920px] bg-black border border-white/10 rounded-[32px] p-6 md:p-8 relative overflow-hidden shadow-2xl hover:shadow-accent-yellow/5 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                
                {/* Package & Price details */}
                <div className="lg:col-span-5 bg-surface border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/5 rounded-full blur-[40px] pointer-events-none" />

                  <div>
                    <div className="flex justify-end mb-4">
                      <Sparkles className="w-3.5 h-3.5 text-accent-yellow opacity-40" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight mb-2">
                      Digital Growth Package
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mb-6">
                      A complete starter pack to grow your brand online. No hidden recurring charges.
                    </p>

                    <div className="flex items-baseline mb-6 border-t border-white/5 pt-6">
                      <span className="text-3xl md:text-4xl font-black tracking-tight text-text-primary font-mono">
                        ₹{growthPackagePrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-text-secondary ml-1.5 font-medium">
                        /one-time
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <a
                      href={packageWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary w-full py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] text-center gap-1.5"
                    >
                      <span>Book Now</span>
                      <span className="w-1.5 h-1.5 bg-bg-primary rounded-full animate-pulse" />
                    </a>
                    
                    <div className="text-center">
                      <a
                        href="tel:+916363217857"
                        className="inline-flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-text-secondary hover:text-accent-yellow transition-colors gap-1.5 py-1"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Or Call Us Directly: +91 63632 17857</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6 py-4">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-text-secondary mb-6 select-none">
                    Includes
                  </h4>

                  <div className="flex flex-col gap-4">
                    {packageFeatures.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <DoubleSparkles />
                        <span className="text-xs md:text-sm text-text-primary/95 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Decorative glows */}
              <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-tr from-purple-600/15 to-indigo-500/5 blur-[45px] pointer-events-none mix-blend-screen" />
            </motion.div>

            {/* Trusted Brands */}
            <div className="mt-16 text-center w-full max-w-4xl mx-auto overflow-hidden">
              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-text-secondary opacity-60 block mb-6">
                Services trusted by local leaders:
              </span>
              <div 
                className="relative w-full flex overflow-hidden" 
                style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
              >
                <motion.div
                  className="flex whitespace-nowrap items-center gap-12"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                  {[...trustedBrands, ...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
                    <span
                      key={index}
                      className="text-xs md:text-sm font-black tracking-widest text-text-secondary opacity-40 hover:opacity-85 transition-opacity duration-300 uppercase select-none font-mono shrink-0"
                    >
                      {brand}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
