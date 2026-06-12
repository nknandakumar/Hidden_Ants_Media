"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Hidden Ants Media completely transformed our cafe's image. Our Reels started going viral locally in Shivamogga, and we saw a 40% increase in weekend walk-ins within two months!",
      author: "Raghav Gowda",
      role: "Founder & Head Barista",
      company: "The Malnad Cafe",
    },
    {
      id: 2,
      quote: "Their understanding of the local market combined with modern editorial aesthetics is unmatched. They don't just post content; they build campaigns that convert followers into paying showroom clients.",
      author: "Priya Hegde",
      role: "Managing Director",
      company: "Sahyadri Fashion Hub",
    },
    {
      id: 3,
      quote: "The level of professionalism and responsiveness they maintain is rare. The brand guidelines and photography layout they created for our luxury store feel world-class.",
      author: "Kiran Kumar",
      role: "Founder",
      company: "Elegance Showroom",
    },
    {
      id: 4,
      quote: "We hired them for our grand opening social media campaign and reels production. The results exceeded expectations—we were fully booked for the first ten days!",
      author: "Shwetha Rao",
      role: "Co-Founder",
      company: "Elysian Salon",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 border border-accent-yellow/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">
            Client Success
          </span>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-text-primary">
            Loved By Local <span className="font-instrument italic text-accent-yellow">Leaders</span>
          </h2>
        </div>

        {/* Quote Icon decorative */}
        <div className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-accent-yellow/20" />
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[260px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-3xl"
            >
              <blockquote className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="mt-8">
                <cite className="not-italic block text-base font-bold text-accent-yellow">
                  {testimonials[currentIndex].author}
                </cite>
                <span className="text-xs text-text-secondary uppercase tracking-wider block mt-1">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-surface text-text-primary hover:text-accent-yellow thin-border flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dot Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-accent-yellow" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-surface text-text-primary hover:text-accent-yellow thin-border flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
