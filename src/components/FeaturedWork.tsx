"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  videoUrl: string;
  link: string;
  skeletonStyle: "saree" | "mango" | "gym" | "dress" | "fixedrate" | "school";
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

  // Intersection Observer to lazy load the video source when close to viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Pause playback when component leaves viewport to save resource consumption
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: "200px", // Trigger load before it enters viewport
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

  // Control playback based on intersection state and loading completion
  useEffect(() => {
    if (isInView && videoRef.current && isLoaded) {
      videoRef.current.play().catch((err) => {
        console.log(`Autoplay failed for ${title}:`, err);
      });
    }
  }, [isInView, isLoaded, title]);

  // Synchronize dynamic muting state with the HTML video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Dynamic colors for creative skeleton styles
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
      {/* Creative Skeleton Loader */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b ${getSkeletonGradient()} animate-shimmer`}
        >
          {/* Central Pulsating Custom Ring */}
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center border animate-glow-pulse ${getSkeletonGlowColor()}`}
          >
            <Play className="w-5 h-5 text-white/50 fill-white/10 ml-0.5" />
          </div>

        </div>
      )}

      {/* Actual Video Element */}
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

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [unmutedVideoId, setUnmutedVideoId] = useState<number | null>(null);

  // Mute any playing audio if the category filter changes
  useEffect(() => {
    setUnmutedVideoId(null);
  }, [activeFilter]);

  const categories = ["All", "Reels", "Campaigns", "Branding", "Video Production"];

  const items: PortfolioItem[] = [
    {
      id: 1,
      title: "Saree Boutique Showcase",
      category: "Reels",
      subtitle: "Luxury Ethnic Wear Launch Campaign",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286961/saree_b6axdf.mp4",
      link: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286961/saree_b6axdf.mp4",
      skeletonStyle: "saree",
    },
    {
      id: 2,
      title: "Shivamogga Mango Festival",
      category: "Campaigns",
      subtitle: "Food & Agriculture Event Promotion",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286957/mangofestival_l6jz7q.mp4",
      link: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286957/mangofestival_l6jz7q.mp4",
      skeletonStyle: "mango",
    },
    {
      id: 3,
      title: "Iron Elite Fitness Hub",
      category: "Video Production",
      subtitle: "High-Octane Gym Promotional Video",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286954/gym_dgefcq.mp4",
      link: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286954/gym_dgefcq.mp4",
      skeletonStyle: "gym",
    },
    {
      id: 4,
      title: "Zara Inspired Dress Launch",
      category: "Reels",
      subtitle: "Modern Fashion Collection Video",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286961/dress_puu2me.mp4",
      link: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286961/dress_puu2me.mp4",
      skeletonStyle: "dress",
    },
    {
      id: 5,
      title: "Value Hub Store Offers",
      category: "Branding",
      subtitle: "Retail Campaign & Offer Showcase",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286971/140rsfixedrate_gttjrt.mp4",
      link: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781286971/140rsfixedrate_gttjrt.mp4",
      skeletonStyle: "fixedrate",
    },
    {
      id: 6,
      title: "Greenwood International School",
      category: "Campaigns",
      subtitle: "Admissions Ad & Campus Walkthrough",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781287000/school_darmfs.mp4",
      link: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781287000/school_darmfs.mp4",
      skeletonStyle: "school",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-bg-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
            Recent{" "}
            <span className="font-instrument italic text-accent-yellow">
              Work
            </span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 md:mb-24">
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

        {/* Vertical Portrait Reels Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="relative group overflow-hidden rounded-xl bg-surface thin-border cursor-pointer aspect-[9/16] block"
                >
                  {/* Lazy Loaded optimized video stream */}
                  <LazyVideo
                    src={item.videoUrl}
                    skeletonStyle={item.skeletonStyle}
                    title={item.title}
                    isMuted={isMuted}
                  />

                  {/* Sound Toggle Indicator */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white transition-all duration-300 hover:scale-110">
                    {isMuted ? (
                      <VolumeX className="w-4.5 h-4.5 text-white/70" />
                    ) : (
                      <Volume2 className="w-4.5 h-4.5 text-accent-yellow animate-pulse" />
                    )}
                  </div>
                </motion.div>
              );
            })}
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
