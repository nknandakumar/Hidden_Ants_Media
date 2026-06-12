import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hidden Ants Media | Premium Creative & Digital Marketing Agency",
  description:
    "Based in Shivamogga, India, Hidden Ants Media is a premium creative agency offering branding, content creation, social media marketing, and high-end video production for businesses that want to grow.",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  keywords: [
    "Digital Marketing Agency",
    "Creative Agency Shivamogga",
    "Branding Agency India",
    "Video Production Shivamogga",
    "Social Media Management",
    "Logo Design",
    "Content Creation",
    "Hidden Ants Media",
  ],
  authors: [{ name: "Hidden Ants Media" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hiddenants.media",
    title: "Hidden Ants Media | Premium Creative & Digital Marketing Agency",
    description:
      "Transform your online presence with professional branding, content creation, and result-oriented digital marketing strategies designed for modern businesses.",
    siteName: "Hidden Ants Media",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary selection:bg-accent-yellow selection:text-bg-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
