'use client';

import { motion } from 'framer-motion';
import { Search, Target, Rocket, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Audit',
    description: 'Deep-dive analysis of your current marketplace presence, competitor landscape, and growth opportunities. We identify inefficiencies and create a strategic roadmap.',
    features: ['Account Health Audit', 'Competitor Mapping', 'Market Research', 'AI Forecasting'],
  },
  {
    icon: Target,
    step: '02',
    title: 'Strategy & Planning',
    description: 'Data-driven strategy development tailored to your goals. We define KPIs, pricing models, and create a full-funnel approach to marketplace domination.',
    features: ['Custom Growth Plan', 'Budget Allocation', 'Platform Selection', 'Success Metrics'],
  },
  {
    icon: Users,
    step: '03',
    title: 'Team Integration',
    description: 'Seamless onboarding of our battle-tested experts who operate as your dedicated team. No freelancers, no training overhead - just experienced professionals.',
    features: ['Dedicated Team', 'White-Label Setup', 'Tool Integration', 'Process Alignment'],
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Optimize',
    description: 'Execute campaigns, optimize listings, and launch across platforms. Our AI-powered approach ensures maximum visibility while reducing wasted ad spend.',
    features: ['Campaign Launch', 'Listing Optimization', 'A+ Content', 'DSP & Sponsored Ads'],
  },
  {
    icon: TrendingUp,
    step: '05',
    title: 'Scale & Expand',
    description: 'Continuous optimization and strategic expansion. We help you dominate current markets and expand to new ones with localized strategies.',
    features: ['Multi-Platform Growth', 'International Expansion', 'Category Leadership', 'Market Share Capture'],
  },
  {
    icon: CheckCircle2,
    step: '06',
    title: 'Report & Refine',
    description: 'Transparent reporting with actionable insights. Regular strategy sessions ensure we adapt to market changes and continuously improve ROI.',
    features: ['Weekly Reports', 'Monthly Strategy Calls', 'Performance Analytics', 'Continuous Improvement'],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#006f9115_1px,transparent_1px),linear-gradient(to_bottom,#006f9115_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glowing Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Our Proven Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-100">How We Drive </span>
            <span className="text-gradient-teal">Marketplace Success</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-center">
            A systematic, battle-tested approach that transforms marketplace presence into category leadership. No guesswork, just proven strategies.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Connector Line (except last row) */}
              {index < processSteps.length - 3 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-px h-full bg-gradient-to-b from-cyan-500/30 to-transparent" />
              )}

              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full" style={{ padding: '2.5rem' }}>
                {/* Step Number */}
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl glow-teal text-xl">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-8 mt-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-2 border-cyan-500/30 rounded-2xl group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-100 mb-4">{step.title}</h3>
                <p className="text-slate-300 mb-8 text-base leading-relaxed">{step.description}</p>

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm text-slate-300 group-hover/item:text-cyan-300 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
          style={{ marginTop: '4rem' }}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl" style={{ padding: '2.5rem' }}>
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100" style={{ marginBottom: '1rem' }}>
                Ready to Experience Our Process?
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                Join hundreds of brands and agencies who trust our proven methodology. Let&apos;s build your marketplace success story together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold rounded-full shadow-xl glow-teal transition-all"
                  style={{ padding: '1rem 2rem' }}
                >
                  Schedule Free Consultation
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm text-slate-100 font-semibold rounded-full border-2 border-cyan-500/30 hover:border-cyan-500/50 transition-all"
                  style={{ padding: '1rem 2rem' }}
                >
                  View Our Services
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
