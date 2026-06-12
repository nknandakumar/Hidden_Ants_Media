"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 w-full z-50 flex justify-center pointer-events-none px-4">
      
      {/* Floating Pill Navbar */}
      <div
        className={`w-full max-w-3xl pointer-events-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-bg-primary/70 backdrop-blur-lg shadow-2xl"
            : "bg-black/30 backdrop-blur-md shadow-lg"
        }`}
      >
        {/* Left Side: Logo & Name */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="relative rounded-full overflow-hidden  flex items-center justify-center">
            <Image
              src="/logo.webp"
              alt="Hidden Ants Media Logo"
              width={52}
              height={52}
              className="object-cover  "
            />
          </div>
          
        </Link>

        {/* Center: Desktop Nav links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:text-accent-yellow ${
                  isActive ? "text-accent-yellow" : "text-text-secondary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/#free-audit"
            className="inline-flex items-center space-x-1.5 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-4 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
          >
            <span>Free Audit</span>
          
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-accent-yellow transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 w-full h-screen bg-bg-primary/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden flex flex-col justify-center ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-text-primary hover:text-accent-yellow"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col items-center space-y-8 px-6 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold tracking-wider transition-colors hover:text-accent-yellow ${
                  isActive ? "text-accent-yellow" : "text-text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/#free-audit"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center space-x-2 bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
          >
            <span>Get Free Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

