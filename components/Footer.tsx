'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden border-t border-amber-500/20">
      {/* Subtle gradient orb */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl" />

      <div
        className="relative z-10 max-w-7xl mx-auto"
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          padding: "5rem 1.5rem 3rem",
        }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-3">
                <span className="text-gradient">Adcelerate</span>
                <span className="text-gradient-teal">360</span>
              </h3>
              <p className="text-base text-amber-400 font-semibold mb-6">
                White-Label Excellence for Agencies and Brands
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed text-base">
                Your strategic growth partner for Amazon, Walmart, Target, and
                beyond. AI-powered solutions across US, EU, UK & GCC markets.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-500 hover:border-amber-500/30 flex items-center justify-center transition-all group shadow-lg"
                  >
                    <social.icon className="w-5 h-5 text-slate-300 group-hover:text-slate-950 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-slate-100">Services</h4>
            <ul className="space-y-4">
              {[
                "AI-Powered PPC",
                "E-Commerce SEO",
                "Brand Strategy",
                "Cross-Border Expansion",
                "White-Label Solutions",
                "Marketplace Management",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center gap-3 group text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-slate-100">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-choose-us" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center gap-3 group text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 text-slate-100">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">
                    Email
                  </div>
                  <a
                    href="mailto:Info@adcelerate360.com"
                    className="text-slate-200 hover:text-amber-400 transition-colors text-base"
                  >
                    Info@adcelerate360.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">
                    Phone
                  </div>
                  <a
                    href="tel:+17374370802"
                    className="text-slate-200 hover:text-amber-400 transition-colors text-base"
                  >
                    +1 (737) 437-0802
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">
                    Locations
                  </div>
                  <p className="text-slate-200 text-base">
                    Sheridan, Wyoming, USA
                    <br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">
                    Hours
                  </div>
                  <p className="text-slate-200 text-base">
                    Mon-Fri: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-10 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-slate-400 text-base text-center md:text-left"
            >
              © 2025 Adcelerate360. All rights reserved. Built with excellence
              for global marketplace dominance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-8 text-base"
            >
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-cyan-500" />
    </footer>
  );
}
