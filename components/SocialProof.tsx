'use client';

import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Users, Star, Zap, BarChart3, Target } from 'lucide-react';
import Image from 'next/image';

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
  'TechGear Inc.',
  'Wellness Naturals',
  'Outdoor Essentials',
  'Beauty First',
  'Home & Living Co.',
  'Sports Elite',
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
                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-500/30">
                      <Image
                        src="/images/team/team-1.jpg"
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-100">Sarah Mitchell</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">CEO, TechGear Inc.</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;Revenue increased by 180% in just 6 months. The team&apos;s expertise in Amazon PPC is unmatched. Best investment we&apos;ve made for our business.&rdquo;
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-500/30">
                      <Image
                        src="/images/team/team-2.jpg"
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-100">Michael Chen</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">Founder, Wellness Naturals</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;They helped us expand to 5 EU countries seamlessly. Their compliance expertise saved us from costly mistakes. Highly recommend!&rdquo;
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-500/30">
                      <Image
                        src="/images/team/team-3.jpg"
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-100">Jennifer Davis</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">Director, Outdoor Essentials</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;ROAS of 12.5x! Walmart and Target now make up 35% of our revenue. The multi-platform strategy was a game-changer.&rdquo;
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
                {clientLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-slate-900/60 border border-slate-700/50 rounded-lg p-4 flex items-center justify-center hover:border-amber-500/30 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-slate-300 text-center">{logo}</span>
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
