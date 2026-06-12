import React from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesStack from "@/components/ServicesStack";
import WhoWeHelp from "@/components/WhoWeHelp";
import FeaturedWork from "@/components/FeaturedWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import FounderStory from "@/components/FounderStory";
import Testimonials from "@/components/Testimonials";
import FreeAuditOffer from "@/components/FreeAuditOffer";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Trust Bar */}
      <TrustBar />

      {/* Section 3: Services Stack (stacking scroll cards) */}
      <ServicesStack />

      {/* Section 4: Who We Help */}
      <WhoWeHelp />

      {/* Section 5: Featured Work */}
      <FeaturedWork />

      {/* Section 6: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 7: Process */}
      <ProcessTimeline />

      {/* Section 8: Founder Story */}
      <FounderStory />

      {/* Section 9: Testimonials */}
      <Testimonials />

      {/* Section 10: Free Audit Offer */}
      <FreeAuditOffer />

      {/* Section 11: Final CTA */}
      <FinalCTA />
    </>
  );
}
