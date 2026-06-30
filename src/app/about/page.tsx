"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Globe, 
  Compass, 
  CheckSquare, 
  Zap, 
  Check, 
  Sparkles 
} from "lucide-react";

const InstagramIcon = () => (
  <svg
    className="w-5 h-5 stroke-current fill-none"
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

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const founderName = "Franklin";
  const founderImage = "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781347759/8ca01b99-e52a-4c0b-8b87-34a372d2474b_cxqerz.png";
  const igProfilePic = "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781349434/Screenshot_20260613_125857_Instagram_ctvymo.jpg";
  const founderPhone = "+916363217857";
  const founderEmail = "hiddenantsmedia04@gmail.com";
  const founderInstagram = "https://instagram.com/f_block_14";

  const whyChooseUsCards = [
    {
      icon: Globe,
      title: "Local Market Understanding",
      desc: "Based in Shivamogga, we know exactly what local consumers look for, where they hang out, and what style of content gets their attention.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781332538/9134bc76-5137-4b41-be62-ef97e3bccf25_xeuoqe.png",
    },
    {
      icon: Compass,
      title: "Creative + Strategy",
      desc: "We don't just shoot pretty videos. We pair cinematic storytelling with hard-hitting marketing strategy to ensure every campaign drives business ROI.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781332350/af0120a1-3531-47e1-aba5-418a0aa60fbf.png",
    },
    {
      icon: CheckSquare,
      title: "End-to-End Execution",
      desc: "From branding guidelines and menu design to copywriting, professional shooting, editing, and publishing, we handle everything under one roof.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781333002/7e96260c-61fb-4e85-bb9e-cd332d4844a0_k11xrv.png",
    },
    {
      icon: Zap,
      title: "Fast Communication",
      desc: "No long waiting times or agency red tape. You have direct access to our core creative team, ensuring instant updates and quick turnarounds.",
      image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781333494/4fb33bc1-641a-40b4-be28-2163f833a9b2_kkmajl.png",
    },
  ];

  return (
    <div className="bg-bg-primary pt-24 pb-16">
      
      {/* Section 1: Hero Header */}
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

      {/* Section 2: Origin Story Narrative */}
      <section className="py-16 md:py-24 thin-border-t thin-border-b bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-primary">
            Why We Call Ourselves <span className="text-accent-yellow">"Hidden Ants"</span>
          </h2>
          <div className="space-y-6 text-text-secondary text-sm md:text-base leading-relaxed text-left">
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
      </section>

      {/* Section 3: Founder Story */}
      <section className="py-20 md:py-32 thin-border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow block mb-3">
              The Engine
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-text-primary">
              The Creative Force <span className="font-instrument italic text-accent-yellow">Behind the Ants</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 justify-center items-start">
            
            {/* Founder Image Side (Column 5) */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden border border-white/10 bg-surface shadow-2xl"
              >
                <Image
                  src={founderImage}
                  alt={`Founder ${founderName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
              </motion.div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-yellow/30 pointer-events-none rounded-bl-2xl" />
            </div>

            {/* Details & Info Side (Column 7) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Instagram Account Screenshot */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[520px] rounded-2xl overflow-hidden border border-white/10 bg-surface/50 p-1 shadow-2xl"
              >
                <img
                  src={igProfilePic}
                  alt="Franklin Instagram profile screenshot"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </motion.div>

              {/* Description Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed"
              >
                <p>
                  Meet <strong>{founderName}</strong>, the founder and creative engine behind Hidden Ants Media. Believing that every brand has a story that deserves global aesthetics, he established the agency to build high-end marketing funnels and cinematic content for growth-focused businesses.
                </p>
                <p>
                  From coordinating local cafe shoots to designing premium brand identities, Franklin directs our operations with meticulous attention to detail—ensuring Shivamogga's local businesses stand out and connect deeply.
                </p>
              </motion.div>

              {/* Action Icons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4 pt-2"
              >
                <a
                  href={founderInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 bg-surface/30 flex items-center justify-center text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                  aria-label="Founder Instagram Profile"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={`mailto:${founderEmail}`}
                  className="w-12 h-12 rounded-full border border-white/10 bg-surface/30 flex items-center justify-center text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                  aria-label="Email Founder"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${founderPhone}`}
                  className="w-12 h-12 rounded-full border border-white/10 bg-surface/30 flex items-center justify-center text-text-secondary hover:text-accent-yellow hover:border-accent-yellow/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                  aria-label="Call Founder"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 md:py-32 bg-bg-secondary/40 thin-border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow block mb-3">
              Why Hidden Ants
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-none text-text-primary">
              More Than <span className="font-instrument italic text-accent-yellow">Just Content</span>.
            </h2>
            <p className="text-text-secondary text-sm md:text-base mt-6 max-w-xl mx-auto">
              We are strategic growth partners. We measure our success not by likes, but by customers walking through your doors.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {whyChooseUsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-surface thin-border rounded-2xl overflow-hidden flex flex-col group"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-bg-primary border-b border-white/5">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-bg-primary text-text-secondary group-hover:text-accent-yellow transition-colors duration-300 flex items-center justify-center rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-text-primary group-hover:text-accent-yellow transition-colors duration-200">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mt-4">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Process / Workflow */}
      <section className="py-20 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow block mb-3">
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
              How We <span className="font-instrument italic text-accent-yellow">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Step 1 */}
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

            {/* Step 2 */}
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
                   ].map((item) => (
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

            {/* Step 3 */}
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
                <div className="relative w-full h-full max-w-[200px] flex items-center justify-center mt-2 z-10">
                  <motion.div 
                    variants={{
                      initial: { y: 0, rotateZ: -2, scale: 1 },
                      hover: { y: -15, rotateZ: -4, scale: 0.95, transition: { type: "spring", stiffness: 300, damping: 20 } }
                    }}
                    className="absolute bg-surface thin-border rounded-lg p-3 w-40 shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-white/10" />
                      <div className="space-y-1">
                        <div className="w-12 h-1.5 bg-white/20 rounded" />
                        <div className="w-8 h-1 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="w-full aspect-square rounded bg-accent-yellow/10 flex items-center justify-center mb-2 border border-accent-yellow/20">
                      <div className="w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-accent-yellow border-b-[4px] border-b-transparent ml-1" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="w-full h-1.5 bg-white/20 rounded" />
                      <div className="w-2/3 h-1.5 bg-white/10 rounded" />
                    </div>
                  </motion.div>

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

      {/* Section 6: Action CTA Banner */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="bg-surface thin-border p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h3 className="text-2xl md:text-4xl font-bold text-text-primary">
            Ready to scale your local brand?
          </h3>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Let's collaborate to build high-converting video campaigns and distinct branding. Skip the generic templates today.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
