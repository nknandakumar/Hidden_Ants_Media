import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary thin-border-t text-text-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="Hidden Ants Media Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-black tracking-tighter text-text-primary">
              HIDDEN <span className="text-accent-yellow">ANTS</span>
            </span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
            A premium creative digital marketing agency based in Shivamogga, India. Helping local brands and small businesses scale online.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/hiddenantsmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-yellow transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="mailto:contact@hiddenants.media"
              className="text-text-secondary hover:text-accent-yellow transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-yellow transition-colors duration-200"
              aria-label="WhatsApp"
            >
              {/* Custom WhatsApp icon using SVG for precision */}
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.02 14.07 1.045 11.5 1.045 6.064 1.045 1.64 5.415 1.636 10.843c0 1.684.453 3.328 1.312 4.795L1.87 20.21l4.777-1.056z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-text-secondary hover:text-accent-yellow transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Featured Work
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Index */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/services#branding" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Brand Identity
              </Link>
            </li>
            <li>
              <Link href="/services#content" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Content Creation
              </Link>
            </li>
            <li>
              <Link href="/services#video" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Video Production
              </Link>
            </li>
            <li>
              <Link href="/services#smm" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Social Media SMM
              </Link>
            </li>
            <li>
              <Link href="/services#festival" className="text-text-secondary hover:text-accent-yellow transition-colors">
                Festival Marketing
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Connect
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3 text-text-secondary">
              <MapPin className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" />
              <span>Shivamogga, Karnataka, India</span>
            </li>
            <li className="flex items-center space-x-3 text-text-secondary">
              <Phone className="w-4 h-4 text-accent-yellow shrink-0" />
              <a href="tel:+919876543210" className="hover:text-accent-yellow transition-colors">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center space-x-3 text-text-secondary">
              <Mail className="w-4 h-4 text-accent-yellow shrink-0" />
              <a href="mailto:contact@hiddenants.media" className="hover:text-accent-yellow transition-colors">
                contact@hiddenants.media
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 thin-border-t flex flex-col md:flex-row items-center justify-between text-xs text-text-secondary space-y-4 md:space-y-0">
        <div>
          © {currentYear} Hidden Ants Media. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-accent-yellow transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-accent-yellow transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
