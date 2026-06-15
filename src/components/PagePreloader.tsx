"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "./PreloaderContext";

export default function PagePreloader() {
  const { isLoaded, setIsLoaded, shouldPlay } = usePreloader();
  const [progress, setProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!shouldPlay) {
      setAnimationComplete(true);
      return;
    }

    // Disable scrolling when preloader is active
    document.body.style.overflow = "hidden";

    let startTime = Date.now();
    const duration = 1200; // Minimal and short duration (1.2s)

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min(elapsed / duration, 1);
      
      // Decelerating progress curve (easeOutQuad)
      const easeProgress = progressPercent * (2 - progressPercent);
      const currentVal = Math.floor(easeProgress * 100);
      
      setProgress(currentVal);

      if (progressPercent < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);

        // Wait a very brief moment, then trigger content reveal
        setTimeout(() => {
          setIsLoaded(true);
          // Allow time for panel slide exit (0.85s) before unmounting
          setTimeout(() => {
            setAnimationComplete(true);
            document.body.style.overflow = "";
          }, 1000);
        }, 200);
      }
    };

    const animFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animFrameId);
      document.body.style.overflow = "";
    };
  }, [shouldPlay, setIsLoaded]);

  // If the preloader shouldn't play or has finished its exit animation, remove from DOM
  if (!shouldPlay || animationComplete) return null;

  const panelVariants = {
    initial: {
      y: 0,
    },
    exitTop: {
      y: "-100%",
      transition: {
        duration: 0.85,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exitBottom: {
      y: "100%",
      transition: {
        duration: 0.85,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  } as const;

  const contentVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div className="fixed inset-0 z-[9999] select-none overflow-hidden">
      {/* Horizontal split panels that slide away */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        {/* Top Half Panel */}
        <motion.div
          variants={panelVariants}
          initial="initial"
          animate={isLoaded ? "exitTop" : "initial"}
          className="w-full h-[50.5vh] bg-accent-yellow pointer-events-auto border-b border-black/[0.04]"
        />
        {/* Bottom Half Panel */}
        <motion.div
          variants={panelVariants}
          initial="initial"
          animate={isLoaded ? "exitBottom" : "initial"}
          className="w-full h-[50.5vh] bg-accent-yellow pointer-events-auto"
        />
      </div>

      {/* Loading content centered overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            variants={contentVariants}
            initial="initial"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center justify-center z-[10000] pointer-events-none px-6"
          >
            {/* Minimalist Monospace Percentage */}
            <div className="font-mono text-5xl md:text-7xl font-light text-bg-primary tracking-tighter mb-4">
              {progress}%
            </div>

            {/* Hidden Ants Media Text */}
            <h2 className="font-instrument text-2xl font-semibold md:text-3xl text-bg-primary tracking-wide text-center uppercase">
              Hidden Ants Media
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
