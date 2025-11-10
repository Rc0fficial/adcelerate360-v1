'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, ShoppingCart, BarChart3, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const metrics = [
  {
    label: 'Total Sales',
    value: '$2.8M',
    change: '+180%',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
  },
  {
    label: 'ACOS',
    value: '12.3%',
    change: '-45%',
    icon: Target,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    label: 'Units Sold',
    value: '45.2K',
    change: '+220%',
    icon: ShoppingCart,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    label: 'ROAS',
    value: '8.2x',
    change: '+165%',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
  },
];

const monthlyGrowth = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 65 },
  { month: 'Apr', value: 78 },
  { month: 'May', value: 88 },
  { month: 'Jun', value: 100 },
];

export default function ResultsDashboard() {
  const maxValue = Math.max(...monthlyGrowth.map(m => m.value));

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

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
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-green-400">Real Performance Data</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-100">See the </span>
            <span className="text-gradient">Numbers That Matter</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-center">
            Real results from our Amazon seller dashboard. This is what data-driven optimization looks like.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Dashboard Image with Overlay Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden p-6 hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/charts/dashboard-1.jpg"
                  alt="Amazon Dashboard Analytics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                {/* Floating Metric Cards */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/90 backdrop-blur-md border border-green-500/30 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Revenue Today</div>
                    <div className="text-xl font-bold text-green-400">$47,892</div>
                    <div className="flex items-center gap-1 text-xs text-green-400">
                      <ArrowUpRight className="w-3 h-3" />
                      <span>+22.5%</span>
                    </div>
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Orders</div>
                    <div className="text-xl font-bold text-cyan-400">1,284</div>
                    <div className="flex items-center gap-1 text-xs text-cyan-400">
                      <ArrowUpRight className="w-3 h-3" />
                      <span>+18.2%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Chart */}
              <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-100">6-Month Growth Trajectory</h3>
                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-xs font-semibold text-green-400">+150%</span>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-2 h-32">
                  {monthlyGrowth.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(item.value / maxValue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div className="w-full bg-gradient-to-t from-green-600 to-emerald-500 rounded-t-lg relative group">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-green-500/30 px-2 py-1 rounded text-xs text-green-400 whitespace-nowrap">
                          {item.value}%
                        </div>
                      </div>
                      <div className="text-xs text-slate-400 mt-2">{item.month}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                Live Performance Metrics
              </h3>

              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}>
                          <metric.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400 mb-1">{metric.label}</div>
                          <div className="text-2xl font-bold text-slate-100">{metric.value}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent font-bold text-lg`}>
                          <ArrowUpRight className="w-4 h-4" style={{ color: 'rgb(34, 197, 94)' }} />
                          {metric.change}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">vs last period</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">Real-Time Dashboard Access</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Every client gets 24/7 access to their personalized dashboard. Track your growth, monitor campaigns, and watch your sales climb in real-time.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Want to See Results Like These for Your Brand?
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Get a free Amazon performance audit and see exactly how we can grow your sales.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-bold shadow-xl glow-gold transition-all px-8 py-4 rounded-full text-base"
            >
              Get Free Performance Audit
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
