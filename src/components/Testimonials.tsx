"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  businessName: string;
  logo: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    businessName: "Vidhatri Bhavan",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031674/e4b39ff9-26e2-40d8-90da-205fb6a31f27.png",
    text: "Hidden Ants Media is one of our online partners. The reels they created showcase our signature dishes beautifully and bring in a lot of local food lovers.",
  },
  {
    id: 2,
    businessName: "Simple Energy Shivamogga",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031727/1235ccd6-a8ae-463e-89e6-3464d3488cea.png",
    text: "They helped us launch our EV Scooty showroom's social presence in Shimoga. The Instagram reach and local engagement during the launch phase was really good.",
  },
  {
    id: 3,
    businessName: "Barbel Culture Gym",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031732/6d2287fc-9e63-4d38-811f-b143197be90d.png",
    text: "They create high-quality cinematic reels for our gym. The videos showcase our training environment perfectly and get great engagement.",
  },
  {
    id: 4,
    businessName: "MS Furniture",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031757/dfff0454-cac4-419e-86e4-522aacbb87ec.png",
    text: "They handle our entire Instagram account. Since taking over, we don't have to worry about posting or editing reels. Consistent and reliable.",
  },
  {
    id: 5,
    businessName: "Bhumi Rental Gallery",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031791/3691ee26-bbe6-41ed-a515-82e2870298f7.png",
    text: "Their consulting and content ideas helped us grow our clothing rental gallery online. We've seen a very steady flow of new clients.",
  },
  {
    id: 6,
    businessName: "Saivaram",
    logo: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782031821/81611b77-8683-4653-ba86-fa50354a7e37.png",
    text: "They created outstanding reels showcasing our famous dishes and our clean dining atmosphere. Highly recommend them for food brand promotion in Shimoga.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Client Success
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary">
            Loved By Local <span className="font-instrument italic text-accent-yellow">Leaders</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid bg-surface thin-border p-6 rounded-2xl flex flex-col shadow-lg"
            >
              {/* Profile Row */}
              <div className="flex items-center justify-start gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-white border border-white/10 flex items-center justify-center shadow-inner">
                  <Image 
                    src={t.logo} 
                    alt={t.businessName} 
                    fill 
                    className="object-contain p-1 rounded-full" 
                    sizes="48px"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-text-primary">{t.businessName}</span>
                    <BadgeCheck className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2] stroke-white ml-0.5" />
                  </div>
                   
                   {/* Stars */}
                   <div className="flex gap-1 mt-1">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className="w-3.5 h-3.5 fill-accent-yellow text-accent-yellow" />
                     ))}
                   </div>
                </div>
              </div>

              {/* Testimonial Body */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
