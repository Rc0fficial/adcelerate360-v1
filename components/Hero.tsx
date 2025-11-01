'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Zap, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const rotatingWords = [
  'Amazon',
  'Walmart',
  'Target',
  'eBay',
  'Etsy',
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E27]" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Complex Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
        }} />

        {/* Dot Grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(209, 152, 16, 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Gradient Orbs - More Subtle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(209, 152, 16, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Additional Accent Orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '3rem' }}>
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center backdrop-blur-xl border border-amber-400/30 shadow-2xl relative overflow-hidden" style={{ gap: '0.5rem', padding: '0.625rem 1.5rem', borderRadius: '9999px', fontSize: '0.875rem', background: 'rgba(217, 119, 6, 0.1)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 animate-shimmer" />
                <Sparkles className="w-4 h-4 text-amber-400 relative z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))' }} />
                <span className="font-semibold text-amber-50 relative z-10">Full-Service E-Commerce Solutions</span>
              </div>
            </motion.div>

            {/* Main Headline with Animated Words */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              <span className="text-slate-100">Strategic Growth for </span>
              <span style={{ display: 'inline-block', minHeight: '1.1em', position: 'relative', whiteSpace: 'nowrap' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-gradient text-glow-gold inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              {' '}
              <span className="text-gradient-teal">
                & Global Marketplaces
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 leading-relaxed max-w-xl"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', lineHeight: '1.7' }}
            >
              AI-powered PPC, advanced SEO, and expert brand consultancy across US, EU, UK, and GCC markets. Your dedicated growth partner for marketplace dominance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
              style={{ paddingTop: '1rem' }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold shadow-xl glow-gold transition-all"
                style={{ padding: '14px 28px', borderRadius: '9999px', fontSize: '1rem' }}
              >
                Start Growing Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm text-slate-100 font-semibold border-2 border-amber-500/30 hover:border-amber-500/50 transition-all"
                style={{ padding: '14px 28px', borderRadius: '9999px', fontSize: '1rem' }}
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 border-t border-amber-500/20"
              style={{ gap: '1.5rem', paddingTop: '2rem', marginTop: '1.5rem' }}
            >
              {[
                { icon: Globe, value: '4+', label: 'Global Markets' },
                { icon: Zap, value: '10x', label: 'Avg ROAS' },
                { icon: Target, value: '100%', label: 'Dedicated' },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start" style={{ gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <stat.icon className="w-4 h-4 text-amber-400" />
                    <div className="font-bold text-gradient" style={{ fontSize: '1.5rem' }}>{stat.value}</div>
                  </div>
                  <div className="text-slate-400 font-medium" style={{ fontSize: '0.875rem' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl shadow-2xl border border-amber-500/20"
                style={{ padding: '2rem', borderRadius: '1.25rem' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
                  <div>
                    <h3 className="font-bold text-slate-100" style={{ fontSize: '1rem' }}>Multi-Platform Growth</h3>
                    <p className="text-slate-400" style={{ fontSize: '0.875rem' }}>Real-time performance</p>
                  </div>
                  <div className="flex items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-500 glow-gold" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.875rem' }}>
                    <Zap className="w-5 h-5 text-slate-950" />
                  </div>
                </div>

                {/* Platform Stats */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { platform: 'Amazon', growth: '+245%', color: 'from-amber-500 to-yellow-500' },
                    { platform: 'Walmart', growth: '+189%', color: 'from-cyan-500 to-teal-500' },
                    { platform: 'Target', growth: '+156%', color: 'from-purple-500 to-pink-500' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-slate-900/50 border border-slate-700/50"
                      style={{ padding: '0.875rem', borderRadius: '0.75rem' }}
                    >
                      <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
                        <span className="text-slate-300 font-medium" style={{ fontSize: '0.9375rem' }}>{item.platform}</span>
                        <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} style={{ fontSize: '1rem' }}>
                          {item.growth}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 overflow-hidden" style={{ height: '0.375rem', borderRadius: '9999px' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                          className={`h-full bg-gradient-to-r ${item.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Global Reach Badge */}
                <div className="flex items-center bg-slate-900/50 border border-slate-700/50" style={{ gap: '0.5rem', padding: '0.875rem', borderRadius: '0.75rem' }}>
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <div className="flex-1">
                    <div className="text-slate-400" style={{ fontSize: '0.8125rem' }}>Global Reach</div>
                    <div className="font-bold text-slate-100" style={{ fontSize: '1rem' }}>US • EU • UK • GCC</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Success Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute bg-gradient-to-br from-amber-500 to-yellow-500 shadow-2xl glow-gold"
                style={{ right: '-1.5rem', bottom: '-1.5rem', padding: '1.25rem', borderRadius: '1rem', width: '14rem' }}
              >
                <div className="text-slate-950">
                  <div className="font-semibold" style={{ marginBottom: '0.25rem', fontSize: '0.8125rem' }}>Battle-Tested Experts</div>
                  <div className="font-bold" style={{ fontSize: '2.25rem', lineHeight: '1', marginBottom: '0.375rem' }}>10+ Years</div>
                  <div className="font-medium opacity-90" style={{ fontSize: '0.75rem' }}>Marketplace Mastery</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
