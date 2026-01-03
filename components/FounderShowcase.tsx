'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

export default function FounderShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Award,
      value: '10+ Years',
      label: 'Industry Experience',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Users,
      value: '250+',
      label: 'Brands Scaled',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      value: '$120M+',
      label: 'Revenue Generated',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      value: '15+',
      label: 'Global Markets',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/Founder3.jpeg"
                alt="Founder Speaking at Industry Event"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 10%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/90 backdrop-blur-md border border-amber-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-100 font-bold text-lg">Industry Leader</div>
                      <div className="text-amber-400 text-sm font-medium">Marketplace Expert & Speaker</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide">
                  Founder & CEO
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-slate-100">Leading the Future of </span>
                <span className="text-gradient">
                  Marketplace Advertising
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                With over a decade of experience in e-commerce and marketplace optimization, our founder has helped hundreds of brands achieve exponential growth across global markets.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                From Amazon to emerging marketplaces, we&apos;ve pioneered AI-powered strategies that transform how brands compete and win in the digital marketplace landscape.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-3`}>
                    <highlight.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-1`}>
                    {highlight.value}
                  </div>
                  <div className="text-sm text-slate-400">{highlight.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-full shadow-xl glow-gold transition-all hover:scale-105"
              >
                Partner With Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
