'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Target, Users, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

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
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

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

          {/* Right Content - Professional Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Professional Image Card */}
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-3xl overflow-hidden p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl">
              {/* Professional Business Person Image */}
              <div className="relative w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
                  alt="Professional E-Commerce Consultant"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-slate-100 font-bold text-lg">Expert Team</div>
                        <div className="text-cyan-400 text-sm font-medium">Your Growth Partners</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 bg-slate-900/40 border border-slate-700/30 rounded-lg p-3 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-slate-100 font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">Proven Success</span>
                </div>
                <div className="text-3xl font-bold">10+ Years</div>
                <div className="text-sm opacity-90">250+ Brands</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
