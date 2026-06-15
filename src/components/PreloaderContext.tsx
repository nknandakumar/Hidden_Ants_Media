"use client";

import React, { createContext, useContext, useState } from "react";

interface PreloaderContextType {
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
  shouldPlay: boolean;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true);

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
