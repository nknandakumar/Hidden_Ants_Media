"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  videoUrl: string;
  skeletonStyle: "saree" | "mango" | "gym" | "dress" | "fixedrate" | "school";
  clientName: string;
  location: string;
  outcome: string;
}

// Sub-component for optimized asynchronous video loading with creative skeletons
function LazyVideo({
  src,
  skeletonStyle,
  title,
  isMuted,
}: {
  src: string;
  skeletonStyle: "saree" | "mango" | "gym" | "dress" | "fixedrate" | "school";
  title: string;
  isMuted: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current && isLoaded) {
      videoRef.current.play().catch((err) => {
        console.log(`Autoplay failed for ${title}:`, err);
      });
    }
  }, [isInView, isLoaded, title]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const getSkeletonGradient = () => {
    switch (skeletonStyle) {
      case "saree":
        return "from-[#200b2c] via-[#0e0316] to-[#05010a]";
      case "mango":
        return "from-[#2c1a05] via-[#160c01] to-[#0a0500]";
      case "gym":
        return "from-[#0a1829] via-[#040c16] to-[#010408]";
      case "dress":
        return "from-[#2d0a1b] via-[#16030c] to-[#0a0105]";
      case "fixedrate":
        return "from-[#282109] via-[#130f03] to-[#070501]";
      case "school":
        return "from-[#081e13] via-[#030e08] to-[#010603]";
      default:
        return "from-[#111111] via-[#090909] to-[#020202]";
    }
  };

  const getSkeletonGlowColor = () => {
    switch (skeletonStyle) {
      case "saree":
        return "bg-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.3)] border-purple-500/30";
      case "mango":
        return "bg-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.3)] border-amber-500/30";
      case "gym":
        return "bg-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.3)] border-blue-500/30";
      case "dress":
        return "bg-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.3)] border-pink-500/30";
      case "fixedrate":
        return "bg-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.3)] border-yellow-500/30";
      case "school":
        return "bg-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.3)] border-emerald-500/30";
      default:
        return "bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] border-white/20";
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-surface overflow-hidden aspect-[9/16]"
    >
      {!isLoaded && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b ${getSkeletonGradient()} animate-shimmer`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border animate-glow-pulse ${getSkeletonGlowColor()}`}
          >
            <Play className="w-5 h-5 text-white/50 fill-white/10 ml-0.5" />
          </div>
        </div>
      )}

      {isInView && (
        <video
          ref={videoRef}
          src={src}
          loop
          muted={isMuted}
          playsInline
          autoPlay
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [unmutedVideoId, setUnmutedVideoId] = useState<number | null>(null);

  useEffect(() => {
    setUnmutedVideoId(null);
  }, [activeFilter]);

  const categories = ["All", "Reels", "Campaigns", "Branding", "Video Production"];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Saree Boutique Showcase",
      category: "Reels",
      subtitle: "Luxury Ethnic Wear Launch Campaign",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286961/saree_b6axdf.mp4",
      skeletonStyle: "saree",
      clientName: "Sahyadri Fashion Hub",
      location: "Bypass Road, Shivamogga",
      outcome: "150K+ organic impressions, fully booked opening week",
    },
    {
      id: 2,
      title: "Shivamogga Mango Festival",
      category: "Campaigns",
      subtitle: "Food & Agriculture Event Promotion",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286957/mangofestival_l6jz7q.mp4",
      skeletonStyle: "mango",
      clientName: "Kannada Food & Agriculture Assoc.",
      location: "National School Grounds, Shivamogga",
      outcome: "+50% foot traffic, 10K+ event attendees",
    },
    {
      id: 3,
      title: "Iron Elite Fitness Hub",
      category: "Video Production",
      subtitle: "High-Octane Gym Promotional Video",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286954/gym_dgefcq.mp4",
      skeletonStyle: "gym",
      clientName: "Iron Elite Gym",
      location: "Nehru Road, Shivamogga",
      outcome: "Double membership sign-ups in 30 days",
    },
    {
      id: 4,
      title: "Zara Inspired Dress Launch",
      category: "Reels",
      subtitle: "Modern Fashion Collection Video",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286961/dress_puu2me.mp4",
      skeletonStyle: "dress",
      clientName: "Zara-inspired clothing brand",
      location: "Gopi Circle, Shivamogga",
      outcome: "120K+ video views, sold out collection in 3 days",
    },
    {
      id: 5,
      title: "Value Hub Store Offers",
      category: "Branding",
      subtitle: "Retail Campaign & Offer Showcase",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286971/140rsfixedrate_gttjrt.mp4",
      skeletonStyle: "fixedrate",
      clientName: "Value Hub Supermarket",
      location: "Shivamogga Town",
      outcome: "+35% daily sales increase during the promo campaign",
    },
    {
      id: 6,
      title: "Greenwood International School",
      category: "Campaigns",
      subtitle: "Ad Campaign & Campus Walkthrough",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781287000/school_darmfs.mp4",
      skeletonStyle: "school",
      clientName: "Greenwood International School",
      location: "Bypass Road, Shivamogga",
      outcome: "+60% admission inquiry rates for the new academic year",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isMuted = unmutedVideoId !== item.id;
              return (
                <motion.div
                  layout
                  key={item.id}
                  onClick={() => {
                    if (unmutedVideoId === item.id) {
                      setUnmutedVideoId(null);
                    } else {
                      setUnmutedVideoId(item.id);
                    }
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative group overflow-hidden rounded-2xl bg-surface thin-border cursor-pointer aspect-[9/16] block"
                >
                  {/* Lazy Loaded optimized video stream */}
                  <LazyVideo
                    src={item.videoUrl}
                    skeletonStyle={item.skeletonStyle}
                    title={item.title}
                    isMuted={isMuted}
                  />

                  {/* Cover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity pointer-events-none" />

                  {/* Sound Toggle Indicator */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white transition-all duration-300 hover:scale-110">
                    {isMuted ? (
                      <VolumeX className="w-4.5 h-4.5 text-white/70" />
                    ) : (
                      <Volume2 className="w-4.5 h-4.5 text-accent-yellow animate-pulse" />
                    )}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none z-10">
                    {/* Category Label */}
                    <span className="self-start px-2.5 py-1 bg-accent-yellow text-bg-primary text-[10px] font-bold uppercase tracking-widest rounded mb-3">
                      {item.category}
                    </span>

                    <h3 className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent-yellow transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">
                      {item.subtitle}
                    </p>

                    {/* Extended client details and metrics on hover */}
                    <div className="mt-4 pt-4 border-t border-white/10 transition-all duration-500 ease-out space-y-1">
                      <p className="text-[10px] uppercase font-semibold text-text-secondary">
                        Client: <span className="text-text-primary">{item.clientName}</span>
                      </p>
                      <p className="text-[10px] uppercase font-semibold text-text-secondary">
                        Location: <span className="text-text-primary">{item.location}</span>
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
              );
            })}
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
