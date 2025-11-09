'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, TrendingUp, Target, Globe2, Users, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'AI-Powered PPC',
    description: 'Advanced marketplace PPC management across Amazon, Walmart, and Target with AI-driven optimization and real-time bid adjustments.',
    features: ['Sponsored Ads', 'DSP Campaigns', 'Bid Automation', 'ROAS Optimization'],
    color: 'gold',
  },
  {
    icon: TrendingUp,
    title: 'E-Commerce SEO',
    description: 'Data-driven SEO strategies to dominate marketplace search results and increase organic visibility across all platforms.',
    features: ['Keyword Strategy', 'Content Optimization', 'Rank Tracking', 'A+ Content'],
    color: 'teal',
  },
  {
    icon: Target,
    title: 'Brand Strategy',
    description: 'Comprehensive brand consultancy and account governance to position your brand as a market leader, not just a competitor.',
    features: ['Brand Positioning', 'Account Governance', 'Market Analysis', 'Growth Planning'],
    color: 'purple',
  },
  {
    icon: Globe2,
    title: 'Cross-Border Expansion',
    description: 'Expert guidance for expanding into US, EU, UK, and GCC markets with localized strategies and compliance support.',
    features: ['Market Entry', 'Localization', 'Compliance', 'Multi-Region PPC'],
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'White-Label Solutions',
    description: 'Specialized e-commerce teams that integrate seamlessly into your agency operations without requiring extensive training.',
    features: ['Dedicated Teams', 'Agency Partnership', 'Seamless Integration', 'Scalable Resources'],
    color: 'amber',
  },
  {
    icon: Sparkles,
    title: 'Marketplace Management',
    description: 'Full-service marketplace management covering Amazon, Walmart, Target, and beyond with battle-tested expertise.',
    features: ['Multi-Platform', 'Inventory Management', 'Performance Tracking', '24/7 Monitoring'],
    color: 'rose',
  },
];

const colorClasses = {
  gold: {
    gradient: 'from-amber-500 to-yellow-500',
    light: 'from-amber-500/10 to-yellow-500/10',
    icon: 'text-amber-400',
    glow: 'shadow-amber-500/20',
  },
  teal: {
    gradient: 'from-cyan-500 to-teal-500',
    light: 'from-cyan-500/10 to-teal-500/10',
    icon: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
  purple: {
    gradient: 'from-purple-500 to-pink-500',
    light: 'from-purple-500/10 to-pink-500/10',
    icon: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
  cyan: {
    gradient: 'from-blue-500 to-cyan-500',
    light: 'from-blue-500/10 to-cyan-500/10',
    icon: 'text-blue-400',
    glow: 'shadow-blue-500/20',
  },
  amber: {
    gradient: 'from-orange-500 to-amber-500',
    light: 'from-orange-500/10 to-amber-500/10',
    icon: 'text-orange-400',
    glow: 'shadow-orange-500/20',
  },
  rose: {
    gradient: 'from-pink-500 to-rose-500',
    light: 'from-pink-500/10 to-rose-500/10',
    icon: 'text-pink-400',
    glow: 'shadow-pink-500/20',
  },
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="services" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold uppercase tracking-wide" style={{ padding: '0.625rem 1.5rem', borderRadius: '9999px' }}>
              Our Services
            </span>
          </motion.div>
          <h2 className="font-bold tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
            <span className="text-slate-100">Comprehensive Solutions for</span>
            <br />
            <span className="text-gradient">
              Marketplace Dominance
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-center" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}>
            From AI-powered advertising to strategic brand development, we provide end-to-end solutions for explosive growth across all major marketplaces.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem', marginBottom: '5rem' }}>
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 card-hover" style={{ padding: '2rem', borderRadius: '1rem' }}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center bg-gradient-to-br ${colors.gradient} shadow-lg ${colors.glow}`} style={{ width: '4rem', height: '4rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
                    <service.icon className="w-8 h-8 text-slate-950" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-slate-100 group-hover:text-gradient transition-all" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm" style={{ marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-400" style={{ gap: '0.625rem' }}>
                        <div className={`rounded-full bg-gradient-to-r ${colors.gradient}`} style={{ width: '0.375rem', height: '0.375rem' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderRadius: '1rem', zIndex: -10 }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}
        >
          <p className="text-slate-300" style={{ fontSize: '1.25rem' }}>
            Ready to accelerate your marketplace growth?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-lg shadow-2xl glow-gold transition-all"
            style={{ padding: '16px 40px', borderRadius: '9999px' }}
          >
            Get Your Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
