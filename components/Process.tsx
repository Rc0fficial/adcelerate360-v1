'use client';

import { motion } from 'framer-motion';
import { Users, FileText, Zap, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    icon: Users,
    step: '01',
    title: 'Discovery Call',
    description: 'We analyze your current performance and identify growth opportunities.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Strategy Blueprint',
    description: 'Custom roadmap with clear milestones tailored to your goals.',
  },
  {
    icon: Zap,
    step: '03',
    title: 'Launch & Optimize',
    description: 'Execute with precision and continuously optimize for maximum ROI.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Scale & Dominate',
    description: 'Expand your presence and establish category leadership.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

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
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-100">Your Journey to E-Commerce </span>
            <span className="text-gradient-teal">Dominance</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-center">
            A proven 4-step methodology that transforms brands into marketplace leaders.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Connector Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="text-cyan-400/30 text-4xl font-light">+</div>
                </div>
              )}

              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full p-8">
                {/* Step Number */}
                <div className="text-8xl font-bold text-cyan-500/10 mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-100 mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
