"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    whatsapp: "",
    service: "Branding",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.businessName) return;

    setIsSubmitting(true);
    
    const whatsappNumber = "916363217857";
    const text = `Hi Hidden Ants Media! My name is ${formData.name} from ${formData.businessName}. I just filled out your contact form for "${formData.service}" services. Here are my details:\n\n- Business: ${formData.businessName}\n- Service Needed: ${formData.service}\n- WhatsApp: ${formData.whatsapp}\n- Message: ${formData.message || "None"}\n\nLooking forward to scheduling a call!`;
    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleWhatsappRedirect = () => {
    const whatsappNumber = "916363217857";
    const text = `Hi Hidden Ants Media! My name is ${formData.name} from ${formData.businessName}. I just filled out your contact form for "${formData.service}" services. Here are my details:\n\n- Business: ${formData.businessName}\n- Service Needed: ${formData.service}\n- WhatsApp: ${formData.whatsapp}\n- Message: ${formData.message || "None"}\n\nLooking forward to scheduling a call!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  const servicesList = [
    "Branding & Identity",
    "Content Creation & Photography",
    "Video Production (Reels & Ads)",
    "Social Media SMM",
    "Festival Marketing",
    "Other Marketing Consulting",
  ];

  return (
    <div className="bg-bg-primary pt-24 pb-16">
      
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow bg-surface thin-border px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-text-primary">
            Let's Start a <span className="font-instrument italic text-accent-yellow">Campaign</span>
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Fill out the form below or contact us directly. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details (Column 5) */}
          <div className="lg:col-span-5 space-y-8 self-start">
            <div className="bg-surface thin-border p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-text-primary">
                Contact Information
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Have a question or want to discuss project pricing? Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6 pt-4 border-t border-white/5">
                <div className="flex items-center space-x-4 text-text-secondary">
                  <div className="w-10 h-10 bg-bg-primary text-accent-yellow flex items-center justify-center rounded-lg thin-border shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-text-secondary block">Call Us</span>
                    <a href="tel:+916363217857" className="text-sm font-bold text-text-primary hover:text-accent-yellow transition-colors">
                      +91 63632 17857
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-text-secondary">
                  <div className="w-10 h-10 bg-bg-primary text-accent-yellow flex items-center justify-center rounded-lg thin-border shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-text-secondary block">Email Us</span>
                    <a href="mailto:hiddenantsmedia04@gmail.com" className="text-sm font-bold text-text-primary hover:text-accent-yellow transition-colors">
                      hiddenantsmedia04@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-text-secondary">
                  <div className="w-10 h-10 bg-bg-primary text-accent-yellow flex items-center justify-center rounded-lg thin-border shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-text-secondary block">Visit Us</span>
                    <span className="text-sm font-bold text-text-primary">
                      Shivamogga, Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Promo */}
            <div className="bg-surface thin-border p-8 rounded-2xl border-l-2 border-l-accent-yellow">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                Instant Chat
              </h4>
              <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                Prefer texting? Tap the floating WhatsApp bubble at the bottom right to start a chat with our creative team right away.
              </p>
            </div>
          </div>

          {/* Form Panel (Column 7) */}
          <div className="lg:col-span-7 bg-surface thin-border p-8 md:p-10 rounded-2xl relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold tracking-tight text-text-primary">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        placeholder="Raghav Gowda"
                        className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                      />
                    </div>
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
                        placeholder="The Malnad Cafe"
                        className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="email">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="raghav@gmail.com"
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
                        placeholder="+91 98765 43210"
                        className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="service">
                      Select Service *
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow"
                    >
                      {servicesList.map((service) => (
                        <option key={service} value={service} className="bg-surface">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2" htmlFor="message">
                      Tell us about your brand / goals
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, current challenges, or ideas..."
                      className="w-full bg-bg-primary text-text-primary rounded-lg p-3 text-sm thin-border focus:outline-none focus:border-accent-yellow focus:ring-1 focus:ring-accent-yellow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-yellow hover:bg-accent-yellow/90 text-bg-primary py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-28 flex flex-col justify-center items-center space-y-6"
                >
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto text-accent-yellow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-text-primary">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                      Thank you, {formData.name}. We have received your inquiry regarding our "{formData.service}" services and will get back to you shortly.
                    </p>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
