'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechGear Inc.',
    image: 'SM',
    rating: 5,
    text: 'Adcelerate360 reduced our ACOS by 40% while increasing sales by 180%. Their AI-powered approach to PPC is game-changing for our Amazon business.',
    results: '180% Sales Growth',
    platform: 'Amazon',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, HomeStyle Brands',
    image: 'MC',
    rating: 5,
    text: 'The white-label team integrated seamlessly with our agency. Clients think they\'re our in-house experts. No training overhead, just pure results.',
    results: '15+ Client Accounts',
    platform: 'Multi-Platform',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Wellness Naturals',
    image: 'ER',
    rating: 5,
    text: 'Expanding to EU markets seemed impossible until Adcelerate360. Their multilingual SEO and compliance expertise made our international launch smooth.',
    results: 'EU Market Entry',
    platform: 'Amazon EU',
  },
  {
    name: 'James Anderson',
    role: 'VP of Sales, Outdoor Essentials',
    image: 'JA',
    rating: 5,
    text: 'Walmart and Target were completely untapped for us. Within 6 months, they now represent 35% of our total marketplace revenue.',
    results: '245% Revenue Increase',
    platform: 'Walmart & Target',
  },
  {
    name: 'Priya Patel',
    role: 'E-commerce Manager, Fashion Forward',
    image: 'PP',
    rating: 5,
    text: 'Their catalog optimization transformed our messy listings into conversion machines. A+ Content and Brand Store design exceeded expectations.',
    results: '67% Conversion Lift',
    platform: 'Amazon',
  },
  {
    name: 'David Thompson',
    role: 'Agency Owner, Growth Partners',
    image: 'DT',
    rating: 5,
    text: 'As a white-label partner, they\'ve allowed us to scale our agency from 5 to 40+ marketplace clients without hiring a single specialist.',
    results: '8x Client Growth',
    platform: 'Agency Partner',
  },
  {
    name: 'Lisa Chang',
    role: 'Brand Manager, Kitchen Innovations',
    image: 'LC',
    rating: 5,
    text: 'The competitive intelligence reports they provide are worth their weight in gold. We now make data-driven decisions with confidence.',
    results: '10x ROAS',
    platform: 'Amazon & Walmart',
  },
  {
    name: 'Robert Johnson',
    role: 'CEO, Pet Paradise',
    image: 'RJ',
    rating: 5,
    text: 'Their GCC market expansion strategy helped us enter Middle East markets successfully. Sales exceeded projections by 220% in year one.',
    results: '220% Above Target',
    platform: 'Amazon GCC',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-slate-100">Trusted by </span>
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto text-center px-4">
            Don&apos;t just take our word for it. See how we&apos;ve helped brands and agencies achieve marketplace dominance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 p-5 sm:p-7 lg:p-10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-amber-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 leading-relaxed relative z-10 text-sm sm:text-base" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Results Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg mb-5 sm:mb-7">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide">{testimonial.results}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-700/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-slate-950 font-bold text-base sm:text-lg flex-shrink-0">
                  {testimonial.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-100 text-sm sm:text-base truncate">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-slate-400 truncate">{testimonial.role}</div>
                </div>
                <div className="text-xs text-cyan-400 font-medium bg-cyan-500/10 px-2 sm:px-3 py-1 rounded-full border border-cyan-500/20 flex-shrink-0">
                  {testimonial.platform}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
          style={{ marginTop: '4rem' }}
        >
          <p className="text-slate-400 mb-[6px]">Ready to join our success stories?</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-full shadow-xl glow-gold transition-all"
          >
            Start Your Growth Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
