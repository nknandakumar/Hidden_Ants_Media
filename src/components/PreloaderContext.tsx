"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface PreloaderContextType {
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
  shouldPlay: boolean;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasVisited = sessionStorage.getItem("hidden_ants_visited");
    
    // Check if query parameter forces preloader to play (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const forcePreloader = urlParams.get("preloader") === "true";

    if (hasVisited && !forcePreloader) {
      setIsLoaded(true);
      setShouldPlay(false);
    } else {
      if (!forcePreloader) {
        sessionStorage.setItem("hidden_ants_visited", "true");
      }
      setIsLoaded(false);
      setShouldPlay(true);
    }
  }, []);

  return (
    <PreloaderContext.Provider value={{ isLoaded, setIsLoaded, shouldPlay }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    // If not wrapped in provider, default to true/false respectively to not block anything
    return { isLoaded: true, setIsLoaded: () => {}, shouldPlay: false };
  }
  return context;
}
