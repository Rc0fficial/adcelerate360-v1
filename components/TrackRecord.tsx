'use client';

import { motion } from 'framer-motion';
import { Award, Users, Handshake, ThumbsUp, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '10+',
    label: 'Years of Experience',
    description: 'Battle-tested expertise',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Users,
    value: '250+',
    label: 'Brands Managed',
    description: 'Across all marketplaces',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Handshake,
    value: '20+',
    label: 'Agency Partners',
    description: 'Trusted collaborations',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: ThumbsUp,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Proven track record',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function TrackRecord() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Industry Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-100">Proven Track Record </span>
            <span className="text-gradient">of Success</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our numbers speak for themselves. With a decade of marketplace expertise and hundreds of successful partnerships, we deliver results that matter.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 h-full">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`} />

                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className={`text-5xl font-bold text-center mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-slate-100 text-center mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 text-center">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Let&apos;s leverage our proven expertise to accelerate your marketplace growth and achieve exceptional results together.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold shadow-xl glow-gold transition-all px-8 py-3 rounded-full text-base"
            >
              Start Your Success Story
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
