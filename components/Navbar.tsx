'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg border-b border-amber-500/20'
          : 'bg-slate-950/50 backdrop-blur-md border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="flex items-center justify-between" style={{ height: '5rem' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logos/adcelaratelogo.png"
                alt="Adcelerate360 Logo"
                className="h-10 lg:h-12 w-auto"
              />
              <span className="text-2xl lg:text-3xl font-bold tracking-tight">
                <span className="text-gradient">
                  Adcelerate
                </span>
                <span className="text-gradient-teal">
                  360
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Case Studies', href: '#case-studies' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-all whitespace-nowrap text-slate-200 hover:text-amber-400 hover:bg-slate-800/50"
                style={{ padding: '10px 16px', borderRadius: '8px', display: 'block' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative overflow-hidden group inline-block"
              style={{ borderRadius: '9999px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 transition-transform group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-slate-950 font-bold text-sm block" style={{ padding: '12px 32px' }}>Get Started</span>
              <div className="absolute inset-0 glow-gold opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: '9999px' }}></div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden transition-colors hover:bg-slate-800/50"
            style={{ padding: '8px', borderRadius: '8px' }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-amber-400" />
            ) : (
              <Menu className="w-6 h-6 text-amber-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-amber-500/20"
            style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Case Studies', href: '#case-studies' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-amber-400 hover:bg-slate-800/50 font-medium transition-all"
                style={{ padding: '12px 16px', borderRadius: '8px' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-center shadow-lg"
              style={{ padding: '12px 24px', borderRadius: '9999px', marginTop: '1rem' }}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
