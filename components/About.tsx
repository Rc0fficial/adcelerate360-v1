'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Target, Users, Zap } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Rocket,
      title: 'Battle-Tested Experts',
      description: 'Specialized e-commerce teams with 10+ years of marketplace mastery who integrate seamlessly into your operations.',
    },
    {
      icon: Target,
      title: 'Market Leaders, Not Competitors',
      description: 'We position your brand to dominate categories, not just compete. Strategic positioning that sets you apart.',
    },
    {
      icon: Users,
      title: 'White-Label Partnership',
      description: 'Dedicated teams that work as an extension of your agency without requiring extensive training or onboarding.',
    },
    {
      icon: Zap,
      title: 'AI-Powered Growth',
      description: 'Cutting-edge AI and automation tools that optimize campaigns 24/7 for maximum ROAS and efficiency.',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#006f9110_1px,transparent_1px),linear-gradient(to_bottom,#006f9110_1px,transparent_1px)] bg-[size:32px_32px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '5rem' }}>
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 text-cyan-400 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide">
                  About Adcelerate360
                </span>
              </motion.div>

              <h2 className="font-bold leading-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', marginBottom: '1.5rem' }}>
                <span className="text-slate-100">Your Strategic Growth Partner for</span>
                {' '}
                <span className="text-gradient-teal">
                  Global Marketplaces
                </span>
              </h2>

              <p className="text-slate-300 leading-relaxed" style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                At Adcelerate360, we don&apos;t just manage campaignswe build marketplace empires. Our specialized e-commerce teams integrate seamlessly into your operations, bringing battle-tested expertise without the training overhead.
              </p>

              <p className="text-slate-300 leading-relaxed" style={{ fontSize: '1.125rem' }}>
                From Amazon to Walmart, Target to international expansion, we leverage AI-powered strategies and data-driven insights to position your brand as a market leader across US, EU, UK, and GCC markets.
              </p>
            </div>

            {/* Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group"
              >
                <span>Learn more about our approach</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2"
            style={{ gap: '1.5rem' }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                  <div className="flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg glow-teal" style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', marginBottom: '1rem' }}>
                    <feature.icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <h3 className="font-bold text-slate-100 group-hover:text-gradient-teal transition-all" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
