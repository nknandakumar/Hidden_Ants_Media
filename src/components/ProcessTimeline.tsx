"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function ProcessTimeline() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Trigger for tablets & mobile
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* CARD 1: Discover Your Brand */}
          <motion.div
            initial="initial"
            whileHover="hover"
            whileInView={isMobile ? ["animate", "hover"] : "animate"}
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="bg-surface thin-border rounded-2xl p-4 flex flex-col group cursor-default"
          >
            {/* Visual Container */}
            <div className="w-full aspect-[4/3] rounded-xl bg-bg-primary border border-white/5 flex items-center justify-center p-6 relative overflow-hidden mb-6">
              
              <motion.div 
                variants={{
                  initial: { y: 0, scale: 1 },
                  hover: { y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
                className="w-full max-w-[220px] bg-surface thin-border rounded-xl p-5 shadow-xl z-10"
              >
                <div className="flex items-center justify-between mb-4">
                   <span className="text-sm font-bold text-text-primary">Brand Discovery</span>
                   <div className="w-4 h-4 rounded-full border-2 border-accent-yellow flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-accent-yellow" />
                   </div>
                </div>
                <div className="flex items-center justify-between mb-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="text-sm text-text-secondary">Target Audience</span>
                   <div className="w-4 h-4 rounded-full border-2 border-text-secondary" />
                </div>
                <motion.button 
                  variants={{
                    initial: { backgroundColor: "rgba(255, 232, 102, 0.1)", color: "rgba(255, 232, 102, 1)" },
                    hover: { backgroundColor: "rgba(255, 232, 102, 1)", color: "#000000" }
                  }}
                  className="w-full py-2.5 rounded-lg text-xs font-bold transition-colors duration-300"
                >
                  Start Discovery
                </motion.button>
              </motion.div>
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] opacity-50" />
            </div>

            <div className="px-2 pb-4">
              <span className="text-xs font-mono font-bold text-accent-yellow tracking-widest block mb-2 uppercase">
                Step 1
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary mb-3 group-hover:text-accent-yellow transition-colors duration-300">
                Discover Your Brand
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                We understand your business, target customers and goals so the content matches your brand.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Plan Content & Creatives */}
          <motion.div
            initial="initial"
            whileHover="hover"
            whileInView={isMobile ? ["animate", "hover"] : "animate"}
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="bg-surface thin-border rounded-2xl p-4 flex flex-col group cursor-default"
          >
            <div className="w-full aspect-[4/3] rounded-xl bg-bg-primary border border-white/5 flex flex-col items-center justify-center p-6 relative overflow-hidden mb-6">
               <motion.div 
                 variants={{
                   hover: { transition: { staggerChildren: 0.08 } }
                 }}
                 className="w-full max-w-[220px] space-y-3 z-10"
               >
                 {[
                   { text: "Logos & Branding", active: true },
                   { text: "Shoot Planning", active: true },
                   { text: "Reels Scripting", active: false },
                 ].map((item, idx) => (
                   <motion.div 
                     key={item.text}
                     variants={{
                       initial: { x: 0, backgroundColor: "rgba(255,255,255,0)" },
                       hover: { x: 8, backgroundColor: "rgba(255,255,255,0.03)", transition: { type: "spring", stiffness: 300, damping: 20 } }
                     }}
                     className="bg-surface thin-border rounded-lg p-3 flex items-center gap-3 shadow-lg"
                   >
                      <motion.div 
                        variants={{
                          initial: { borderColor: "rgba(255,255,255,0.2)" },
                          hover: { borderColor: item.active ? "rgba(255, 232, 102, 1)" : "rgba(255,255,255,0.2)" }
                        }}
                        className="w-4 h-4 rounded-sm border flex items-center justify-center"
                      >
                        {item.active && (
                          <motion.div
                            variants={{ initial: { scale: 0 }, hover: { scale: 1 } }}
                          >
                            <Check className="w-3 h-3 text-accent-yellow" />
                          </motion.div>
                        )}
                      </motion.div>
                      <span className="text-xs font-medium text-text-secondary">{item.text}</span>
                   </motion.div>
                 ))}
               </motion.div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] opacity-50" />
            </div>

            <div className="px-2 pb-4">
              <span className="text-xs font-mono font-bold text-accent-yellow tracking-widest block mb-2 uppercase">
                Step 2
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary mb-3 group-hover:text-accent-yellow transition-colors duration-300">
                Plan Content & Creatives
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                We plan your logos, shoots, reels and posts in a simple content plan.
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Create, Post & Optimize */}
          <motion.div
            initial="initial"
            whileHover="hover"
            whileInView={isMobile ? ["animate", "hover"] : "animate"}
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="bg-surface thin-border rounded-2xl p-4 flex flex-col group cursor-default"
          >
            <div className="w-full aspect-[4/3] rounded-xl bg-bg-primary border border-white/5 flex flex-col items-center justify-center p-6 relative overflow-hidden mb-6">
              
              {/* Content Creation & Analytics Illustration */}
              <div className="relative w-full h-full max-w-[200px] flex items-center justify-center mt-2 z-10">
                
                {/* Social Media Post Card */}
                <motion.div 
                  variants={{
                    initial: { y: 0, rotateZ: -2, scale: 1 },
                    hover: { y: -15, rotateZ: -4, scale: 0.95, transition: { type: "spring", stiffness: 300, damping: 20 } }
                  }}
                  className="absolute bg-surface thin-border rounded-lg p-3 w-40 shadow-lg"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                    <div className="space-y-1">
                      <div className="w-12 h-1.5 bg-white/20 rounded" />
                      <div className="w-8 h-1 bg-white/10 rounded" />
                    </div>
                  </div>
                  {/* Image/Video Placeholder */}
                  <div className="w-full aspect-square rounded bg-accent-yellow/10 flex items-center justify-center mb-2 border border-accent-yellow/20">
                    <div className="w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-accent-yellow border-b-[4px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  {/* Footer lines */}
                  <div className="space-y-1.5">
                    <div className="w-full h-1.5 bg-white/20 rounded" />
                    <div className="w-2/3 h-1.5 bg-white/10 rounded" />
                  </div>
                </motion.div>

                {/* Analytics Popup */}
                <motion.div 
                  variants={{
                    initial: { y: 20, x: 20, opacity: 0, scale: 0.8 },
                    hover: { y: 15, x: 35, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 } }
                  }}
                  className="absolute bottom-4 right-[-15px] bg-bg-secondary thin-border border-accent-yellow/30 rounded-lg p-3 w-36 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-3 h-3 text-accent-yellow" />
                    <span className="text-[10px] font-bold text-white tracking-wide">Reach +240%</span>
                  </div>
                  {/* Mini Bar Chart */}
                  <div className="flex items-end gap-1.5 h-8">
                    <div className="w-1/4 bg-white/20 rounded-sm" style={{ height: "30%" }} />
                    <div className="w-1/4 bg-white/30 rounded-sm" style={{ height: "50%" }} />
                    <div className="w-1/4 bg-accent-yellow/60 rounded-sm" style={{ height: "80%" }} />
                    <div className="w-1/4 bg-accent-yellow rounded-sm" style={{ height: "100%" }} />
                  </div>
                </motion.div>

              </div>

              <span className="text-[10px] text-text-secondary mt-auto pt-4 font-mono tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                Hover to preview
              </span>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px] opacity-50 -z-10" />
            </div>

            <div className="px-2 pb-4">
              <span className="text-xs font-mono font-bold text-accent-yellow tracking-widest block mb-2 uppercase">
                Step 3
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary mb-3 group-hover:text-accent-yellow transition-colors duration-300">
                Create, Post & Optimize
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                We shoot, design and post content, then track performance to improve reach and engagement.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
