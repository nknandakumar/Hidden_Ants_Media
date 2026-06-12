"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Palette, Camera, Video, Share2, CalendarDays, Check } from "lucide-react";
import Link from "next/link";

/* ─── Service data ──────────────────────────────────────────────────────────── */
const services = [
  {
    id: 1,
    label: "Brand Identity",
    icon: Palette,
    title: "Brand Identity\nDesign",
    bullets: [
      "Custom logo design that sets you apart from competitors",
      "Full visual identity — colours, typography & tone",
      "Brand guidelines document your team can follow",
      "Menu, packaging & print collateral design",
    ],
    cta: "Explore Branding",
    href: "/services#branding",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283608/branding_HNM_k05xxs.png",
    glowColor: "255,204,1",
  },
  {
    id: 2,
    label: "Content Creation",
    icon: Camera,
    title: "Content Creation\n& Photography",
    bullets: [
      "Magazine-quality product & food photography",
      "On-location shoots at your store, cafe or salon",
      "Social-ready content calendars delivered monthly",
      "Zero generic stock photos — every frame is yours",
    ],
    cta: "See Portfolio",
    href: "/portfolio",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781284119/68c1a562-98f0-4d15-bb5d-1e3070fc6f0c.png",
    glowColor: "255,120,40",
  },
  {
    id: 3,
    label: "Video Production",
    icon: Video,
    title: "Cinematic Video\nProduction",
    bullets: [
      "Scroll-stopping Instagram & YouTube Reels",
      "Cinematic brand films that tell your story",
      "Ad-ready videos optimised for paid campaigns",
      "Professional editing, colour grade & sound design",
    ],
    cta: "View Showreel",
    href: "/services#video",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283594/video_production_fyck8o.jpg",
    glowColor: "60,100,255",
  },
  {
    id: 4,
    label: "Social Media",
    icon: Share2,
    title: "Social Media\nManagement",
    bullets: [
      "Complete channel strategy & content calendar",
      "Daily publishing across Instagram, Facebook & more",
      "Community management & DM response handling",
      "Targeted paid ad campaigns to grow reach & leads",
    ],
    cta: "Get Started",
    href: "/services#smm",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283778/815a9b1f-6022-4f9e-8dad-d65098ef5a87.png",
    glowColor: "140,60,255",
  },
  {
    id: 5,
    label: "Festival Marketing",
    icon: CalendarDays,
    title: "Festival Marketing\n& Campaigns",
    bullets: [
      "Culturally resonant campaigns for Ugadi, Diwali, Eid & more",
      "Eye-catching seasonal poster & creative design",
      "Flash-sale and offer promotions that drive footfall",
      "Event hype reels and stories for maximum reach",
    ],
    cta: "Plan a Campaign",
    href: "/services#festival",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781283587/fab3a305-67c2-4971-91db-77a17276f5ad_lze8nt.png",
    glowColor: "0,200,80",
  },
];

/* ─── Right-side image panel ────────────────────────────────────────────────── */
function ServiceVisual({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden" style={{ minHeight: 300 }}>
      {/* The image — fills the whole right panel */}
      <Image
        src={service.image}
        alt={service.label}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={service.id <= 2}
      />

      {/* Subtle gradient vignette so image edges blend with card bg */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent pointer-events-none" />

      {/* Accent glow overlay — very subtle tint */}
      <div
        className="absolute inset-0 mix-blend-soft-light pointer-events-none opacity-20"
        style={{ background: `radial-gradient(ellipse at 60% 40%, rgba(${service.glowColor},0.6) 0%, transparent 70%)` }}
      />

      {/* Service number watermark */}
      <span className="absolute top-4 right-5 font-black text-white/10 select-none font-mono pointer-events-none text-7xl leading-none">
        0{service.id}
      </span>
    </div>
  );
}

/* ─── Single sticky card ────────────────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
  total,
  sectionRef,
}: {
  service: (typeof services)[0];
  index: number;
  total: number;
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const shrinkStart = Math.min((index + 1) / total - 0.05, 0.99);
  const shrinkEnd   = Math.min((index + 1) / total + 0.02, 1.0);

  const scale = useTransform(
    scrollYProgress,
    [shrinkStart, shrinkEnd],
    [1, index < total - 1 ? 0.93 : 1]
  );

  const filterVal = useTransform(
    scrollYProgress,
    [shrinkStart, shrinkEnd],
    ["brightness(1)", index < total - 1 ? "brightness(0.45)" : "brightness(1)"]
  );

  const Icon = service.icon;

  return (
    <div
      className="sticky"
      style={{ top: `${72 + index * 8}px`, zIndex: 10 + index, paddingBottom: 16 }}
    >
      <motion.div
        style={{ scale, filter: filterVal }}
        className="w-full"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Card ── */}
        <div
          className="rounded-2xl md:rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          style={{ background: "#111111", minHeight: 480 }}
        >
          {/* LEFT: Content */}
          <div className="flex flex-col p-8 md:p-12 lg:p-14">

            {/* Meta row */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `rgba(${service.glowColor},0.12)` }}
              >
                <Icon className="w-4 h-4 text-accent-yellow" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                {service.label}
              </span>
              <span className="ml-auto text-xs font-mono text-white/20 tabular-nums select-none">
                {String(service.id).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-bold tracking-tight text-text-primary whitespace-pre-line mb-8"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1.05 }}
            >
              {service.title}
            </h3>

            {/* Bullet points */}
            <ul className="space-y-3 mb-10 flex-1">
              {service.bullets.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${service.glowColor},0.15)` }}
                  >
                    <Check className="w-3 h-3 text-accent-yellow" strokeWidth={3} />
                  </span>
                  <span className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 group"
              >
                <span>{service.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="p-4 md:p-5 flex">
            <div className="flex-1 relative">
              <ServiceVisual service={service} />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────────── */
export default function ServicesStack() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-bg-primary pt-20 md:pt-32"
      style={{ minHeight: `${services.length * 100}vh` }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="pb-20 md:pb-28 text-center">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
            Everything You Need To{" "}<br/>
            <span className="font-instrument italic text-accent-yellow">Grow Online</span>.
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-sm mx-auto mt-6">
            End-to-end creative marketing &amp; production.
            <br className="hidden md:block" />
            No outsourcing. No templates.
          </p>
        </div>

        {/* Stacking cards */}
        <div>
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              total={services.length}
              sectionRef={sectionRef}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
