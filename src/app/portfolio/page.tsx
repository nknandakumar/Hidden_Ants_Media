"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Play, 
  Volume2, 
  VolumeX, 
  MapPin, 
  TrendingUp, 
  Sparkles, 
  X, 
  Check,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { caseStudies, CaseStudy } from "@/data/caseStudies";

const Instagram = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Reel component that autoplays (muted) on hover and triggers full-screen lightbox on click
function ReelVideoCard({
  src,
  title,
  onOpenLightbox,
}: {
  src: string;
  title: string;
  onOpenLightbox: (videoUrl: string) => void;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [, setIsPlaying] = useState(false);
  const [, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay on hover failed:", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenLightbox(src)}
      className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer group shadow-xl hover:scale-[1.03] transition-all duration-300"
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Hover action guide */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <div className="w-12 h-12 rounded-full bg-accent-yellow text-bg-primary flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,204,1,0.5)]">
          <Play className="w-5 h-5 fill-bg-primary ml-0.5" />
        </div>
        <span className="text-[10px] text-accent-yellow uppercase tracking-widest font-bold mt-2">
          Play Reel
        </span>
      </div>

      {/* Decorative indicator in bottom-left */}
      <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow animate-pulse" />
        <span className="text-[9px] uppercase font-mono tracking-widest text-white/60">Preview</span>
      </div>
    </div>
  );
}

// Lightbox Media Modal for full-screen playback/viewing of reels and posts
function MediaLightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  const isVideo = src.includes("/video/upload/");

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-55 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/10 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div 
        onClick={(e) => e.stopPropagation()} 
        className={`relative w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 flex items-center justify-center bg-black ${
          isVideo 
            ? "max-w-[400px] aspect-[9/16]" 
            : "max-w-[650px] aspect-square sm:aspect-[4/5]"
        }`}
      >
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={src}
              loop
              autoPlay
              controls
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Sound toggle button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-16 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105"
            >
              {isMuted ? (
                <VolumeX className="w-4.5 h-4.5 text-white/70" />
              ) : (
                <Volume2 className="w-4.5 h-4.5 text-accent-yellow animate-pulse" />
              )}
            </button>
          </>
        ) : (
          <img
            src={src}
            alt="Expanded Post Content"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </motion.div>
  );
}

// Instagram Phone Mockup Component (renders screenshot directly inside the device frame)
function InstagramMockup({
  image,
  clientName,
}: {
  image: string;
  clientName: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[290px] aspect-[9/18.5] bg-black border-6 border-neutral-800 rounded-[2.5rem] shadow-2xl p-2.5 flex flex-col overflow-hidden select-none">
      {/* Camera Notch/Dynamic Island */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30" />

      {/* Screen Container */}
      <div className="relative w-full h-full rounded-[2rem] bg-[#000000] overflow-hidden border border-neutral-900">
        <img
          src={image}
          alt={clientName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

// Self-contained Case Study Card Component to isolate tab selection state
function CaseStudyCard({
  study,
  onOpenLightbox,
}: {
  study: CaseStudy;
  onOpenLightbox: (url: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<"reels" | "posts">("reels");
  const hasPhoto = !!study.image;
  const hasPosts = !!study.posts && study.posts.length > 0;

  return (
    <motion.div
      layout
      className="relative bg-surface/30 border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 transition-all duration-300 hover:border-accent-yellow/20 shadow-2xl overflow-hidden group"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-yellow/5 rounded-full filter blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Column: IG Profile Mockup (Conditionally shown if photo exists) */}
        {hasPhoto && study.image ? (
          <div className="col-span-1 lg:col-span-4 xl:col-span-4 flex justify-center">
            <InstagramMockup 
              image={study.image} 
              clientName={study.clientName} 
            />
          </div>
        ) : null}

        {/* Right Column: Case Study Details & Video/Image Grid */}
        <div className={`col-span-1 ${hasPhoto ? "lg:col-span-8 xl:col-span-8" : "lg:col-span-12"} flex flex-col h-full`}>
          
          {/* Header Info */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-accent-yellow/10 text-accent-yellow text-[10px] font-bold uppercase tracking-widest rounded-full border border-accent-yellow/20">
                {study.category}
              </span>
              {study.instagramHandle && (
                <a 
                  href={`https://instagram.com/${study.instagramHandle.substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-text-secondary hover:text-accent-yellow transition-colors text-[10px] uppercase font-mono tracking-wider"
                >
                  <Instagram className="w-3 h-3" />
                  <span>{study.instagramHandle}</span>
                </a>
              )}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-instrument italic text-accent-yellow">
              {study.clientName}
            </h2>
            <p className="text-lg font-medium text-text-primary">
              {study.subtitle}
            </p>
            <div className="flex items-center space-x-1.5 text-text-secondary text-xs pt-1">
              <MapPin className="w-3.5 h-3.5 text-accent-yellow" />
              <span>{study.location}</span>
            </div>
          </div>

          {/* Outcome / Impact Metrics Dashboard (Hidden for now) */}
          {/* 
          <div className="mt-8 border-t border-white/5 pt-8">
            <h3 className="text-xs uppercase tracking-widest text-text-secondary font-bold mb-4 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-accent-yellow" />
              <span>Campaign Impact & Outcomes</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {study.outcome.metrics.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-neutral-900/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden group/metric"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/[0.02] to-transparent" />
                  <span className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">
                    {metric.label}
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-accent-yellow tracking-tight mt-1 group-hover/metric:scale-105 transition-transform duration-300 origin-left">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-text-secondary leading-relaxed bg-neutral-900/20 border border-white/5 p-4 rounded-xl">
              {study.outcome.text}
            </p>
          </div>
          */}

          {/* Deliverables Section with Grid vs Reels Tabs */}
          <div className="mt-8 border-t border-white/5 pt-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h3 className="text-xs uppercase tracking-widest text-text-secondary font-bold flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-accent-yellow" />
                <span>Campaign Deliverables</span>
              </h3>

              {/* Sub-tabs toggler - render only if the case study has static image posts */}
              {hasPosts && (
                <div className="flex space-x-1 bg-neutral-950 p-1 rounded-lg border border-white/5 select-none">
                  <button
                    onClick={() => setActiveTab("reels")}
                    className={`px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeTab === "reels"
                        ? "bg-accent-yellow text-bg-primary shadow"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    Campaign Reels
                  </button>
                  <button
                    onClick={() => setActiveTab("posts")}
                    className={`px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeTab === "posts"
                        ? "bg-accent-yellow text-bg-primary shadow"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    Static Posts
                  </button>
                </div>
              )}
            </div>

            {/* Campaign Reels Display */}
            {activeTab === "reels" && (
              <div className={`grid gap-4 ${
                study.videos.length === 1 
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[200px]" 
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-3"
              }`}>
                {study.videos.map((video, idx) => (
                  <ReelVideoCard
                    key={idx}
                    src={video}
                    title={`${study.clientName} Reel ${idx + 1}`}
                    onOpenLightbox={onOpenLightbox}
                  />
                ))}
              </div>
            )}

            {/* Static Grid Posts Display */}
            {activeTab === "posts" && hasPosts && study.posts && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                {study.posts.map((post, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenLightbox(post)}
                    className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer group shadow-xl hover:scale-[1.03] transition-all duration-300"
                  >
                    <img
                      src={post}
                      alt={`${study.clientName} Post ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Hover overlay guide */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <div className="w-10 h-10 rounded-full bg-accent-yellow text-bg-primary flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,204,1,0.5)]">
                        <Maximize2 className="w-4 h-4 stroke-[3px]" />
                      </div>
                      <span className="text-[9px] text-accent-yellow uppercase tracking-widest font-bold mt-2">
                        Zoom Post
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [lightboxMedia, setLightboxMedia] = useState<string | null>(null);

  return (
    <div className="bg-bg-primary pt-24 pb-16 min-h-screen text-text-primary">
      {/* Header */}
      <section className="py-16 md:py-20 border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow bg-surface thin-border px-4 py-1.5 rounded-full">
            Our Case Studies
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight max-w-4xl mx-auto">
            Real Proof of{" "}
            <span className="font-instrument italic text-accent-yellow block mt-2">
              Brand Transformations
            </span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We build visual campaigns that perform. Explore how we help brands stand out in Shivamogga and beyond.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="px-6 max-w-7xl mx-auto py-16 space-y-16">
        <AnimatePresence mode="popLayout">
          {caseStudies.map((study, idx) => (
            <motion.div
              layout
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CaseStudyCard 
                study={study} 
                onOpenLightbox={(url) => setLightboxMedia(url)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Lightbox Media Player */}
      <AnimatePresence>
        {lightboxMedia && (
          <MediaLightbox 
            src={lightboxMedia} 
            onClose={() => setLightboxMedia(null)} 
          />
        )}
      </AnimatePresence>

      
    </div>
  );
}
