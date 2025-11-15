'use client';

import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Users, Star, Zap, BarChart3, Target } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    title: 'Verified Amazon Partner',
    description: 'Official Amazon Advertising Partner',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Top 1% Agency',
    description: 'Ranked in Clutch.co&apos;s Top Agencies',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: CheckCircle,
    title: 'Money-Back Guarantee',
    description: '90-day performance guarantee',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: '500+ Brands Scaled',
    description: 'Trusted by industry leaders',
    color: 'from-purple-500 to-pink-500',
  },
];

const clientLogos = [
  { name: 'TechGear Pro', logo: 'https://logo.clearbit.com/anker.com' },
  { name: 'Wellness Naturals', logo: 'https://logo.clearbit.com/vitaminshoppe.com' },
  { name: 'Outdoor Essentials', logo: 'https://logo.clearbit.com/rei.com' },
  { name: 'HomeStyle Brands', logo: 'https://logo.clearbit.com/wayfair.com' },
  { name: 'Fashion Forward', logo: 'https://logo.clearbit.com/asos.com' },
  { name: 'Pet Paradise', logo: 'https://logo.clearbit.com/chewy.com' },
];

const achievements = [
  {
    icon: BarChart3,
    value: '$120M+',
    label: 'Revenue Generated',
    description: 'For clients since 2014',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    value: '180%',
    label: 'Avg Sales Increase',
    description: 'Within first 6 months',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Zap,
    value: '8.5x',
    label: 'Average ROAS',
    description: 'Across all campaigns',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Marketplaces',
    description: 'Global coverage',
    color: 'from-purple-500 to-pink-500'
  },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Trust Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${badge.color} rounded-t-2xl`} />

                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <badge.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-2">{badge.title}</h3>
                    <p className="text-sm text-slate-400">{badge.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Client Testimonials with Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                <h3 className="text-2xl font-bold text-slate-100">What Our Clients Say</h3>
              </div>

              <div className="space-y-6">
                {/* Client Testimonial 1 */}
                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Michael Chen"
                      className="w-14 h-14 rounded-full border-2 border-amber-500/30 object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-100">Michael Chen</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">CEO, TechGear Pro</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;Revenue increased by 180% in just 6 months. The team&apos;s expertise in Amazon PPC is unmatched. Best investment we&apos;ve made for our business.&rdquo;
                  </p>
                </div>

                {/* Agency Testimonial 1 */}
                <div className="bg-slate-900/60 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/89.jpg"
                      alt="Priya Patel"
                      className="w-14 h-14 rounded-full border-2 border-green-500/30 object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-100">Priya Patel</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Agency Owner, Growth Partners
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;As a white-label partner, they&apos;ve allowed us to scale our agency from 5 to 40+ marketplace clients without hiring a single specialist. Game changer!&rdquo;
                  </p>
                </div>

                {/* Client Testimonial 2 */}
                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah Williams"
                      className="w-14 h-14 rounded-full border-2 border-cyan-500/30 object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-100">Sarah Williams</h4>
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400 opacity-50" />
                          <span className="text-xs text-amber-400 font-semibold ml-1">4.9</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">Founder, Wellness Naturals</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;They helped us expand to 5 EU countries seamlessly. Their compliance expertise saved us from costly mistakes. Highly recommend!&rdquo;
                  </p>
                </div>

                {/* Agency Testimonial 2 */}
                <div className="bg-slate-900/60 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Jennifer Martinez"
                      className="w-14 h-14 rounded-full border-2 border-green-500/30 object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-100">Jennifer Martinez</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Marketing Director, HomeStyle Agency
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;The white-label team integrated seamlessly with our agency. Clients think they&apos;re our in-house experts. No training overhead, just pure results.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Key Achievements Grid */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold text-slate-100">Our Track Record</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                      {achievement.value}
                    </div>
                    <h4 className="text-sm font-bold text-slate-100 mb-1">{achievement.label}</h4>
                    <p className="text-xs text-slate-400">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Client Logos */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-100 mb-6 text-center">Trusted By Leading Brands</h3>
              <div className="grid grid-cols-3 gap-4">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/95 border border-slate-300/50 rounded-lg p-4 flex items-center justify-center hover:border-amber-500/50 hover:shadow-lg transition-all duration-300"
                  >
                    <img src={client.logo} alt={client.name} className="w-full h-8 object-contain" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Rating Summary */}
            <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-amber-400">4.9/5</span>
                  </div>
                  <p className="text-sm text-slate-300">Based on 250+ client reviews</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gradient mb-1">98%</div>
                  <p className="text-xs text-slate-400">Client Retention Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
