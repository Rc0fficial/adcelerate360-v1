'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Globe, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    value: 4,
    suffix: '+',
    label: 'Global Markets',
    description: 'US, EU, UK & GCC Coverage',
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: 'x',
    label: 'Average ROAS',
    description: 'Proven ROI for clients',
  },
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Brands Powered',
    description: 'Across all marketplaces',
  },
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Battle-tested expertise',
  },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] z-0" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold uppercase tracking-wide" style={{ padding: '0.625rem 1.5rem', borderRadius: '9999px' }}>
              Proven Track Record
            </span>
          </motion.div>
          <h2 className="font-bold tracking-tight text-center" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
            <span className="text-slate-100">Numbers That</span>{' '}
            <span className="text-gradient">
              Define Excellence
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-center" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}>
            Our battle-tested strategies and dedicated teams deliver exceptional results across global marketplaces.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300" style={{ padding: '2.5rem', borderRadius: '1rem' }}>
                {/* Icon */}
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg glow-gold" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
                  <stat.icon className="w-7 h-7 text-slate-950" />
                </div>

                {/* Number */}
                <div style={{ marginBottom: '0.75rem' }}>
                  {inView && (
                    <div className="font-bold text-gradient flex items-start" style={{ fontSize: '3rem' }}>
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    </div>
                  )}
                </div>

                {/* Label */}
                <p className="font-semibold text-slate-100" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{stat.label}</p>
                <p className="text-sm text-slate-400">{stat.description}</p>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/10 group-hover:to-yellow-500/10 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
