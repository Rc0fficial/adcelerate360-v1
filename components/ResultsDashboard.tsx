'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, ShoppingCart, BarChart3, ArrowUpRight, Clock } from 'lucide-react';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, BarChart, Bar, ComposedChart } from 'recharts';

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
  { month: 'Jan', value: 40, sales: 125000 },
  { month: 'Feb', value: 52, sales: 165000 },
  { month: 'Mar', value: 65, sales: 205000 },
  { month: 'Apr', value: 78, sales: 245000 },
  { month: 'May', value: 88, sales: 278000 },
  { month: 'Jun', value: 100, sales: 315000 },
];

const weeklyPerformance = [
  { day: 'Mon', orders: 182, revenue: 8420 },
  { day: 'Tue', orders: 195, revenue: 9150 },
  { day: 'Wed', orders: 210, revenue: 9870 },
  { day: 'Thu', orders: 225, revenue: 10500 },
  { day: 'Fri', orders: 240, revenue: 11280 },
  { day: 'Sat', orders: 198, revenue: 9240 },
  { day: 'Sun', orders: 175, revenue: 8190 },
];

const performanceComparison = [
  { month: 'Jan', revenue: 125, acos: 18.5 },
  { month: 'Feb', revenue: 165, acos: 16.2 },
  { month: 'Mar', revenue: 205, acos: 14.8 },
  { month: 'Apr', revenue: 245, acos: 13.5 },
  { month: 'May', revenue: 278, acos: 12.9 },
  { month: 'Jun', revenue: 315, acos: 12.3 },
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
            {entry.name === 'sales' ? '$' : ''}{entry.value.toLocaleString()}{entry.name === 'value' ? '%' : ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ResultsDashboard() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-slate-100">See the </span>
            <span className="text-gradient">Numbers That Matter</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto text-center px-4">
            Real results from our Amazon seller dashboard. This is what data-driven optimization looks like.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Dashboard Image with Overlay Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden p-4 sm:p-6 hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-4 sm:mb-6 bg-slate-950">
                <img
                  src="/images/dashboards/analytics-2.jpg"
                  alt="Amazon Dashboard Analytics"
                  className="w-full h-full object-cover opacity-60"
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
              <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100">6-Month Growth Trajectory</h3>
                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-xs font-semibold text-green-400">+150%</span>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={monthlyGrowth} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis
                      dataKey="month"
                      stroke="#94a3b8"
                      style={{ fontSize: '12px' }}
                      tick={{ fill: '#94a3b8' }}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      style={{ fontSize: '12px' }}
                      tick={{ fill: '#94a3b8' }}
                      label={{ value: 'Growth %', angle: -90, position: 'insideLeft', fill: '#94a3b8', style: { fontSize: '12px' } }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
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
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 sm:mb-6">
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
                    className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-3 sm:p-5 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm text-slate-400 mb-0.5 sm:mb-1">{metric.label}</div>
                          <div className="text-xl sm:text-2xl font-bold text-slate-100">{metric.value}</div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right w-full sm:w-auto">
                        <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent font-bold text-base sm:text-lg`}>
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

        {/* Additional Performance Charts */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-8">
          {/* Weekly Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100">Last 7 Days Performance</h3>
                  <p className="text-xs text-slate-400">Daily orders & revenue tracking</p>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={weeklyPerformance} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                  tick={{ fill: '#94a3b8' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="orders"
                  fill="url(#colorOrders)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-slate-900/60 border border-cyan-500/30 rounded-lg p-3">
                <div className="text-xs text-slate-400 mb-1">Avg Daily Orders</div>
                <div className="text-xl font-bold text-cyan-400">203</div>
              </div>
              <div className="bg-slate-900/60 border border-teal-500/30 rounded-lg p-3">
                <div className="text-xs text-slate-400 mb-1">Avg Daily Revenue</div>
                <div className="text-xl font-bold text-teal-400">$9,521</div>
              </div>
            </div>
          </motion.div>

          {/* Revenue vs ACOS Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100">Revenue vs ACOS</h3>
                  <p className="text-xs text-slate-400">Efficiency optimization trend</p>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={240}>
              <ComposedChart data={performanceComparison} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                  tick={{ fill: '#94a3b8' }}
                  label={{ value: 'Revenue ($K)', angle: -90, position: 'insideLeft', fill: '#94a3b8', style: { fontSize: '12px' } }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#94a3b8"
                  style={{ fontSize: '12px' }}
                  tick={{ fill: '#94a3b8' }}
                  label={{ value: 'ACOS (%)', angle: 90, position: 'insideRight', fill: '#94a3b8', style: { fontSize: '12px' } }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#a855f7"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  strokeWidth={3}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="acos"
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-slate-900/60 border border-purple-500/30 rounded-lg p-3">
                <div className="text-xs text-slate-400 mb-1">Revenue Growth</div>
                <div className="text-xl font-bold text-purple-400">+152%</div>
              </div>
              <div className="bg-slate-900/60 border border-pink-500/30 rounded-lg p-3">
                <div className="text-xs text-slate-400 mb-1">ACOS Reduction</div>
                <div className="text-xl font-bold text-pink-400">-33.5%</div>
              </div>
            </div>
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
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 sm:mb-4 px-4">
              Want to See Results Like These for Your Brand?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
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
