'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Award, ArrowUpRight, ShoppingCart, Quote } from 'lucide-react';

const caseStudies = [
  {
    company: 'TechGear Inc.',
    industry: 'Electronics',
    platform: 'Amazon US',
    challenge: 'High ACOS and stagnant sales despite increasing ad spend',
    solution: 'AI-powered PPC optimization and catalog restructuring',
    results: [
      { label: 'Sales Increase', value: '+180%', icon: TrendingUp },
      { label: 'ACOS Reduction', value: '-40%', icon: Target },
      { label: 'Revenue Growth', value: '$2.5M', icon: DollarSign },
    ],
    testimonial: 'Adcelerate360\'s AI-driven approach completely transformed our Amazon strategy. The results speak for themselves.',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    company: 'Wellness Naturals',
    industry: 'Health & Beauty',
    platform: 'Amazon EU',
    challenge: 'Failed international expansion attempts with compliance issues',
    solution: 'Multilingual SEO, localized content, and EU compliance management',
    results: [
      { label: 'Market Entry', value: '5 Countries', icon: Award },
      { label: 'Revenue (Y1)', value: '�850K', icon: DollarSign },
      { label: 'Conversion Rate', value: '+67%', icon: ShoppingCart },
    ],
    testimonial: 'They made EU expansion seamless. Their compliance expertise saved us from costly mistakes.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    company: 'Outdoor Essentials',
    industry: 'Sports & Outdoors',
    platform: 'Walmart & Target',
    challenge: 'Zero presence on Walmart and Target marketplaces',
    solution: 'Multi-platform launch strategy with optimized product listings',
    results: [
      { label: 'Revenue Increase', value: '+245%', icon: TrendingUp },
      { label: 'New Platforms', value: '35% Share', icon: Target },
      { label: 'ROAS', value: '12.5x', icon: DollarSign },
    ],
    testimonial: 'Walmart and Target now represent over a third of our marketplace revenue. Game-changing partnership.',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />

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
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Real Results, Real Growth</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-100">Success Stories That </span>
            <span className="text-gradient">Define Excellence</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-center">
            Data-backed case studies showcasing measurable impact across marketplaces and industries. Your success story could be next.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
                {/* Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${study.gradient}`} />

                <div style={{ padding: '2.5rem 3rem' }}>
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left: Company Info */}
                    <div className="lg:col-span-4">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${study.gradient} text-slate-950 font-bold rounded-lg mb-4 text-xs shadow-lg uppercase tracking-wide`} style={{ padding: '0.5rem 0.875rem' }}>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        Case Study
                      </div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-2 leading-tight">{study.company}</h3>
                      <div className="text-sm text-slate-400 mb-3 font-medium">{study.industry}</div>
                      <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-lg text-xs text-cyan-400 mb-6 shadow-lg" style={{ padding: '0.5rem 0.75rem' }}>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        {study.platform}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl overflow-hidden">
                          <div className="bg-amber-500/10 border-b border-amber-500/20" style={{ padding: '0.875rem 1.25rem' }}>
                            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Challenge</div>
                          </div>
                          <div style={{ padding: '1.25rem 1.25rem' }}>
                            <p className="text-sm text-slate-300 leading-relaxed">{study.challenge}</p>
                          </div>
                        </div>
                        <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl overflow-hidden">
                          <div className="bg-cyan-500/10 border-b border-cyan-500/20" style={{ padding: '0.875rem 1.25rem' }}>
                            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Solution</div>
                          </div>
                          <div style={{ padding: '1.25rem 1.25rem' }}>
                            <p className="text-sm text-slate-300 leading-relaxed">{study.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Results */}
                    <div className="lg:col-span-8">
                      {/* Results Grid */}
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        {study.results.map((result, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                            className="bg-slate-900/60 border border-slate-700/50 rounded-xl text-center hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
                            style={{ padding: '1.5rem 1.25rem' }}
                          >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-lg mb-3">
                              <result.icon className="w-6 h-6 text-amber-400" />
                            </div>
                            <div className={`text-2xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-2`}>
                              {result.value}
                            </div>
                            <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{result.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="relative bg-slate-900/40 border border-slate-700/50 rounded-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-500 to-yellow-500" style={{ padding: '0.875rem 1.25rem' }}>
                          <span className="text-xs font-bold text-slate-950 uppercase tracking-wider flex items-center gap-2">
                            <Quote className="w-4 h-4" />
                            Client Testimonial
                          </span>
                        </div>
                        <div style={{ padding: '1.25rem 1.25rem' }}>
                          <p className="text-slate-200 italic leading-relaxed text-sm">&ldquo;{study.testimonial}&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '3rem' }}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl" style={{ padding: '2.5rem 2rem' }}>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-sm text-slate-400 font-medium">Brands Scaled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient-teal mb-2">$120M+</div>
                <div className="text-sm text-slate-400 font-medium">Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                <div className="text-sm text-slate-400 font-medium">Marketplaces</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient-teal mb-2">98%</div>
                <div className="text-sm text-slate-400 font-medium">Client Retention</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '2rem' }}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl" style={{ padding: '2.5rem' }}>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold text-slate-100" style={{ marginBottom: '1rem' }}>
                Want Results Like These for Your Brand?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                Join hundreds of successful brands who&apos;ve transformed their marketplace performance. Let&apos;s write your success story together.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold shadow-xl glow-gold transition-all"
                style={{ padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1rem' }}
              >
                Get Your Free Strategy Session
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
