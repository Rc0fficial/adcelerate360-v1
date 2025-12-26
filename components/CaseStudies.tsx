'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Award, ShoppingCart, Quote, BarChart3 } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Sales growth data for TechGear Inc.
const techGearSalesData = [
  { month: 'Jan', sales: 45000, acos: 35 },
  { month: 'Feb', sales: 52000, acos: 33 },
  { month: 'Mar', sales: 68000, acos: 28 },
  { month: 'Apr', sales: 85000, acos: 24 },
  { month: 'May', sales: 102000, acos: 22 },
  { month: 'Jun', sales: 126000, acos: 21 },
];

// Wellness Naturals market penetration
const wellnessMarketData = [
  { country: 'UK', revenue: 285000 },
  { country: 'DE', revenue: 245000 },
  { country: 'FR', revenue: 180000 },
  { country: 'IT', revenue: 85000 },
  { country: 'ES', revenue: 55000 },
];

// Outdoor Essentials platform distribution
const outdoorPlatformData = [
  { name: 'Amazon', value: 65, color: '#FF9900' },
  { name: 'Walmart', value: 22, color: '#0071CE' },
  { name: 'Target', value: 13, color: '#CC0000' },
];

const caseStudies = [
  {
    company: 'TechGear Pro',
    industry: 'Consumer Electronics',
    platform: 'Amazon US',
    logo: '/logos/techgear-pro.svg',
    challenge: 'Struggling with 35% ACOS and plateaued monthly sales at $45K despite aggressive advertising spend. Losing market share to competitors.',
    solution: 'Implemented AI-powered bid optimization, restructured product catalog with enhanced A+ content, launched strategic Sponsored Brand campaigns, and optimized for high-intent keywords.',
    results: [
      { label: 'Sales Increase', value: '+180%', icon: TrendingUp, detail: '$45K → $126K/mo' },
      { label: 'ACOS Reduction', value: '-40%', icon: Target, detail: '35% → 21%' },
      { label: 'Total Revenue', value: '$2.5M', icon: DollarSign, detail: 'In 6 months' },
    ],
    testimonial: 'Adcelerate360 completely transformed our Amazon business. Their data-driven approach and AI optimization delivered results beyond our expectations. We\'ve gone from struggling to dominating our category.',
    client: {
      name: 'Michael Chen',
      role: 'CEO, TechGear Pro',
      image: '/images/profiles/michael-chen.jpg',
    },
    gradient: 'from-amber-500 to-yellow-500',
    chartData: techGearSalesData,
    chartType: 'line',
    dashboardImage: '/images/dashboards/analytics-1.jpg',
  },
  {
    company: 'Wellness Naturals',
    industry: 'Health & Beauty',
    platform: 'Amazon EU (5 Countries)',
    logo: '/logos/wellness-naturals.svg',
    challenge: 'Multiple failed attempts at EU expansion due to complex compliance requirements, language barriers, and lack of localized marketing strategy.',
    solution: 'Comprehensive EU compliance audit, multilingual SEO optimization across 5 markets, localized A+ content creation, region-specific PPC campaigns, and automated inventory management.',
    results: [
      { label: 'Markets Launched', value: '5 EU', icon: Award, detail: 'UK, DE, FR, IT, ES' },
      { label: 'First Year Revenue', value: '€850K', icon: DollarSign, detail: 'Across all markets' },
      { label: 'Conversion Rate', value: '+67%', icon: ShoppingCart, detail: 'vs initial attempts' },
    ],
    testimonial: 'After two failed expansion attempts, Adcelerate360 made it look easy. Their expertise in EU compliance and localization saved us countless headaches and expensive mistakes. Now EU represents 40% of our business.',
    client: {
      name: 'Sarah Williams',
      role: 'Founder, Wellness Naturals',
      image: '/images/profiles/sarah-williams.jpg',
    },
    gradient: 'from-cyan-500 to-teal-500',
    chartData: wellnessMarketData,
    chartType: 'bar',
    dashboardImage: '/images/dashboards/analytics-2.jpg',
  },
  {
    company: 'Outdoor Essentials',
    industry: 'Sports & Outdoors',
    platform: 'Amazon, Walmart & Target',
    logo: '/logos/outdoor-essentials.svg',
    challenge: 'Over-reliance on Amazon (100% of marketplace revenue) with zero presence on Walmart and Target. Vulnerable to platform policy changes and seasonal fluctuations.',
    solution: 'Multi-platform expansion strategy, optimized product listings for Walmart and Target algorithms, synchronized inventory management, platform-specific promotional calendars.',
    results: [
      { label: 'Revenue Growth', value: '+245%', icon: TrendingUp, detail: 'Total marketplace' },
      { label: 'New Platforms', value: '35%', icon: Target, detail: 'Of total revenue' },
      { label: 'Average ROAS', value: '12.5x', icon: DollarSign, detail: 'Across platforms' },
    ],
    testimonial: 'Diversifying beyond Amazon was the best business decision we made. Adcelerate360 handled the entire expansion seamlessly. Walmart and Target now contribute over a third of our revenue - true game-changer.',
    client: {
      name: 'David Rodriguez',
      role: 'VP of E-commerce, Outdoor Essentials',
      image: '/images/profiles/david-rodriguez.jpg',
    },
    gradient: 'from-purple-500 to-pink-500',
    chartData: outdoorPlatformData,
    chartType: 'pie',
    dashboardImage: '/images/dashboards/analytics-2.jpg',
  },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-slate-200 font-semibold mb-1">{label}</p>
        {payload.map((entry, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-slate-100">Success Stories That </span>
            <span className="text-gradient">Define Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto text-center px-4">
            Data-backed case studies with real metrics, analytics dashboards, and measurable impact across marketplaces and industries.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
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

                <div style={{ padding: '1.5rem' }} className="sm:p-8 lg:px-12 lg:py-10">
                  {/* Company Header with Logo */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-lg">
                        <img src={study.logo} alt={study.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-tight">{study.company}</h3>
                        <div className="text-sm text-slate-400 mt-1 font-medium">{study.industry}</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-lg text-xs text-cyan-400 shadow-lg" style={{ padding: '0.5rem 0.75rem' }}>
                      <ShoppingCart className="w-3.5 h-3.5" />
                      {study.platform}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Left: Challenge & Solution */}
                    <div className="lg:col-span-5">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl overflow-hidden">
                          <div className="bg-red-500/10 border-b border-red-500/20" style={{ padding: '0.875rem 1.25rem' }}>
                            <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                              <Target className="w-3.5 h-3.5" />
                              The Challenge
                            </div>
                          </div>
                          <div style={{ padding: '1.25rem' }}>
                            <p className="text-sm text-slate-300 leading-relaxed">{study.challenge}</p>
                          </div>
                        </div>
                        <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl overflow-hidden">
                          <div className="bg-cyan-500/10 border-b border-cyan-500/20" style={{ padding: '0.875rem 1.25rem' }}>
                            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                              <BarChart3 className="w-3.5 h-3.5" />
                              Our Solution
                            </div>
                          </div>
                          <div style={{ padding: '1.25rem' }}>
                            <p className="text-sm text-slate-300 leading-relaxed">{study.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-1 gap-4 mt-6">
                        {study.results.map((result, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                            className="bg-slate-900/60 border border-slate-700/50 rounded-xl hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
                            style={{ padding: '1.25rem' }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-lg flex-shrink-0">
                                <result.icon className="w-6 h-6 text-amber-400" />
                              </div>
                              <div className="flex-1">
                                <div className={`text-2xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                  {result.value}
                                </div>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{result.label}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{result.detail}</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Analytics & Dashboard */}
                    <div className="lg:col-span-7">
                      {/* Dashboard Preview */}
                      <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl overflow-hidden mb-6">
                        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50 p-4">
                          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Analytics Dashboard
                          </div>
                        </div>
                        <div className="p-6">
                          {study.chartType === 'line' && (
                            <ResponsiveContainer width="100%" height={250}>
                              <AreaChart data={study.chartData}>
                                <defs>
                                  <linearGradient id={`colorSales${index}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                                  </linearGradient>
                                  <linearGradient id={`colorAcos${index}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                                <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="sales" stroke="#f59e0b" fillOpacity={1} fill={`url(#colorSales${index})`} strokeWidth={2} />
                                <Area type="monotone" dataKey="acos" stroke="#06b6d4" fillOpacity={1} fill={`url(#colorAcos${index})`} strokeWidth={2} />
                              </AreaChart>
                            </ResponsiveContainer>
                          )}
                          {study.chartType === 'bar' && (
                            <ResponsiveContainer width="100%" height={250}>
                              <BarChart data={study.chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                <XAxis dataKey="country" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                                <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="revenue" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                              </BarChart>
                            </ResponsiveContainer>
                          )}
                          {study.chartType === 'pie' && (
                            <div className="flex items-center justify-center gap-8">
                              <ResponsiveContainer width="60%" height={250}>
                                <PieChart>
                                  <Pie
                                    data={study.chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                  >
                                    {study.chartData.map((entry, i) => (
                                      <Cell key={`cell-${i}`} fill={'color' in entry ? entry.color : '#8884d8'} />
                                    ))}
                                  </Pie>
                                  <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                              </ResponsiveContainer>
                              <div className="flex flex-col gap-3">
                                {study.chartData.map((item, i) => (
                                  'color' in item && 'name' in item && 'value' in item ? (
                                    <div key={i} className="flex items-center gap-2">
                                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                                      <span className="text-sm text-slate-300">{item.name}: {item.value}%</span>
                                    </div>
                                  ) : null
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Performance Metrics Cards */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="bg-slate-900/60 border border-green-500/30 rounded-xl p-4">
                          <div className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Conversion Rate
                          </div>
                          <div className="text-2xl font-bold text-green-400">
                            {study.chartType === 'line' ? '4.2%' : study.chartType === 'bar' ? '3.8%' : '5.1%'}
                          </div>
                          <div className="text-xs text-green-400 mt-1">+0.8% vs last month</div>
                        </div>
                        <div className="bg-slate-900/60 border border-amber-500/30 rounded-xl p-4">
                          <div className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                            <ShoppingCart className="w-3 h-3" />
                            Total Orders
                          </div>
                          <div className="text-2xl font-bold text-amber-400">
                            {study.chartType === 'line' ? '2,847' : study.chartType === 'bar' ? '1,234' : '3,521'}
                          </div>
                          <div className="text-xs text-amber-400 mt-1">+22% growth</div>
                        </div>
                        <div className="bg-slate-900/60 border border-cyan-500/30 rounded-xl p-4">
                          <div className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            Avg. Order Value
                          </div>
                          <div className="text-2xl font-bold text-cyan-400">
                            {study.chartType === 'line' ? '$44' : study.chartType === 'bar' ? '€52' : '$38'}
                          </div>
                          <div className="text-xs text-cyan-400 mt-1">+12% increase</div>
                        </div>
                      </div>

                      {/* Testimonial with Client Photo */}
                      <div className="relative bg-slate-900/40 border border-slate-700/50 rounded-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-500 to-yellow-500" style={{ padding: '0.875rem 1.25rem' }}>
                          <span className="text-xs font-bold text-slate-950 uppercase tracking-wider flex items-center gap-2">
                            <Quote className="w-4 h-4" />
                            Client Testimonial
                          </span>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                          <p className="text-slate-200 italic leading-relaxed text-sm mb-4">&ldquo;{study.testimonial}&rdquo;</p>
                          <div className="flex items-center gap-3 pt-3 border-t border-slate-700/50">
                            <img
                              src={study.client.image}
                              alt={study.client.name}
                              className="w-12 h-12 rounded-full border-2 border-amber-500/50"
                            />
                            <div>
                              <div className="text-sm font-bold text-slate-100">{study.client.name}</div>
                              <div className="text-xs text-slate-400">{study.client.role}</div>
                            </div>
                          </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
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
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 px-4" style={{ marginBottom: '1rem' }}>
                Want Results Like These for Your Brand?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl px-4" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
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
