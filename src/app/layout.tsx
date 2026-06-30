import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PreloaderProvider } from "@/components/PreloaderContext";
import PagePreloader from "@/components/PagePreloader";

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
  metadataBase: new URL("https://hiddenants.media"),
  title: "Hidden Ants Media | Creative & Digital Marketing Agency",
  description:
    "Based in Shivamogga, India, Hidden Ants Media is a creative agency offering branding, content creation, social media marketing, and high-end video production.",
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
    title: "Hidden Ants Media | Creative & Digital Marketing Agency",
    description:
      "Elevate your brand with professional branding, content creation, and digital marketing from Hidden Ants Media.",
    siteName: "Hidden Ants Media",
    images: [
      {
        url: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782832902/Creative_Digital_marketing_Agency_ljhuda.png",
        width: 1200,
        height: 630,
        alt: "Hidden Ants Media - Creative & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidden Ants Media | Creative & Digital Marketing Agency",
    description:
      "Elevate your brand with professional branding, content creation, and digital marketing from Hidden Ants Media.",
    images: ["https://res.cloudinary.com/dokrpo5fl/image/upload/v1782832902/Creative_Digital_marketing_Agency_ljhuda.png"],
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary selection:bg-accent-yellow selection:text-bg-primary">
        <PreloaderProvider>
          <PagePreloader />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </PreloaderProvider>
      </body>
    </html>
  );
}
