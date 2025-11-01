'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, TrendingUp, Award, Sparkles, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: '10+ years of marketplace expertise with 200+ successful brand partnerships across global markets.',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Clock,
      title: 'Rapid Integration',
      description: 'Specialized teams that integrate seamlessly without extensive training, getting results from day one.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Optimization',
      description: 'Advanced algorithms and automation that optimize your campaigns 24/7 for maximum ROAS.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Battle-Tested Strategies',
      description: 'Methodologies refined through thousands of campaigns across Amazon, Walmart, Target, and beyond.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expertise in US, EU, UK, and GCC markets with localized strategies for each region.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Sparkles,
      title: 'White-Label Excellence',
      description: 'Perfect for agencies seeking expert teams that work as an extension of their operations.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="why-choose-us" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1981010_1px,transparent_1px),linear-gradient(to_bottom,#d1981010_1px,transparent_1px)] bg-[size:32px_32px] z-0" />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        {/* Section Header */}
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
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="font-bold tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
            <span className="text-slate-100">What Makes</span>{' '}
            <span className="text-gradient">Adcelerate360</span>
            <br />
            <span className="text-gradient-teal">Different</span>
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-center" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}>
            We&apos;re not just another agency. We&apos;re your strategic growth partner with the expertise, technology, and dedication to transform your marketplace presence.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 card-hover" style={{ padding: '2rem', borderRadius: '1rem' }}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center bg-gradient-to-br ${reason.gradient} shadow-lg`} style={{ width: '4rem', height: '4rem', borderRadius: '1rem', marginBottom: '1.5rem' }}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-slate-100" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {reason.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} style={{ borderRadius: '1rem', zIndex: -10 }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
          style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
        >
          <p className="text-slate-300" style={{ fontSize: '1.25rem' }}>
            Ready to experience the Adcelerate360 difference?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-lg shadow-2xl glow-gold transition-all"
            style={{ padding: '16px 40px', borderRadius: '9999px' }}
          >
            Start Your Growth Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
