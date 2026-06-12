"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function FreeAuditOffer() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    instagram: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.businessName || !formData.whatsapp) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleWhatsappRedirect = () => {
    const whatsappNumber = "919876543210";
    const text = `Hi Hidden Ants Media! My name is ${formData.name} from ${formData.businessName}. I just submitted a request for a Free Social Media Audit. Here are my details:\n\n- Business: ${formData.businessName}\n- Instagram: ${formData.instagram || "N/A"}\n- WhatsApp: ${formData.whatsapp}\n- Details: ${formData.details || "None"}\n\nLooking forward to hearing from you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section id="free-audit" className="bg-bg-primary py-20 md:py-32 thin-border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Info Side */}
          <div className="space-y-6 md:space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow block">
              Exclusive Value
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-none text-text-primary">
              Get A Free Social <span className="font-instrument italic text-accent-yellow">Media Audit</span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-lg">
              Wondering why your competitor gets all the attention? We will personally audit your Instagram, content quality, brand consistency, and lead conversion funnel. 
            </p>
            
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">Custom Competitor Analysis</h4>
                  <p className="text-xs text-text-secondary mt-1">See what top local and national brands in your niche are doing to win customers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">Actionable Content Playbook</h4>
                  <p className="text-xs text-text-secondary mt-1">Receive 3 concrete Reels concepts tailored specifically for your cafe, salon, or store.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">Funnel Fixes</h4>
                  <p className="text-xs text-text-secondary mt-1">Identify why visitors aren't clicking your WhatsApp links or booking appointments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-surface thin-border p-8 md:p-10 rounded-2xl relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="audit-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold tracking-tight text-text-primary">
                    Request Your Free Audit
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Raghav Gowda"
                      className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="businessName">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. The Malnad Cafe"
                        className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="whatsapp">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="instagram">
                      Instagram Handle / Website (Optional)
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      placeholder="e.g. @themalnadcafe"
                      className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="details">
                      Any specific challenges you're facing?
                    </label>
                    <textarea
                      id="details"
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="e.g. Low engagement, need help with Reels aesthetics..."
                      className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <span>Analyzing...</span>
                    ) : (
                      <>
                        <span>Request Free Audit</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="audit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto text-accent-yellow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-text-primary">
                      Audit Request Received!
                    </h3>
                    <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                      Thank you, {formData.name}. We will review your online presence for {formData.businessName} and contact you within 24-48 hours.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-4">
                    <p className="text-xs text-text-secondary">
                      Want to skip the line? Send your details directly to our team via WhatsApp for an instant response.
                    </p>
                    <button
                      onClick={handleWhatsappRedirect}
                      className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    >
                      <span>Send via WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
