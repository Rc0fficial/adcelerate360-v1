'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Zap, Target, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

const rotatingWords = [
  'Amazon Services',
  'Amazon Sales',
  'Target Growth',
  'Market Dominance',
  'Walmart Revenue',
  'Global Expansion',
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

      {/* Animated 3D Elements - Marketplace Logos */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Amazon Logo - Left Top */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-32 left-10 w-48 h-48 opacity-20"
        >
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-3xl backdrop-blur-sm border border-orange-400/20"
            style={{ boxShadow: '0 20px 60px rgba(255, 153, 0, 0.3)' }}>
            <div className="text-6xl font-bold text-orange-400/80">a</div>
            <div className="absolute bottom-8 left-6 right-6 h-2 bg-orange-400/60 rounded-full"
              style={{ clipPath: 'polygon(0 50%, 100% 50%, 95% 100%, 5% 100%)' }} />
          </div>
        </motion.div>

        {/* Walmart Logo - Left Bottom */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-40 left-16 w-44 h-44 opacity-18"
        >
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-400/20"
            style={{ boxShadow: '0 15px 50px rgba(0, 112, 210, 0.3)' }}>
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2">
                <div className="bg-cyan-400/70 rounded-sm transform rotate-45"></div>
                <div className="bg-cyan-400/70 rounded-sm transform rotate-45"></div>
                <div className="bg-cyan-400/70 rounded-sm transform rotate-45"></div>
                <div className="bg-cyan-400/70 rounded-sm transform rotate-45"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Target Logo - Right Top */}
        <motion.div
          animate={{
            y: [0, -35, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-24 right-12 w-52 h-52 opacity-18"
        >
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-red-500/30 to-pink-500/20 rounded-full backdrop-blur-sm border border-red-400/20"
            style={{ boxShadow: '0 20px 60px rgba(220, 38, 38, 0.3)' }}>
            <div className="w-32 h-32 rounded-full border-8 border-red-400/80 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-8 border-red-400/80 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-red-400/80"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* eBay Logo - Right Bottom */}
        <motion.div
          animate={{
            y: [0, 45, 0],
            rotate: [0, -3, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-32 right-20 w-46 h-46 opacity-16"
        >
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500/30 to-amber-500/20 rounded-2xl backdrop-blur-sm border border-yellow-400/20"
            style={{ boxShadow: '0 18px 55px rgba(234, 179, 8, 0.3)' }}>
            <div className="flex gap-1 text-4xl font-bold">
              <span className="text-red-400/80">e</span>
              <span className="text-blue-400/80">B</span>
              <span className="text-yellow-400/80">a</span>
              <span className="text-green-400/80">y</span>
            </div>
          </div>
        </motion.div>

        {/* Shopify Logo - Left Middle */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-[5%] w-40 h-40 opacity-15"
        >
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/30 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-green-400/20"
            style={{ boxShadow: '0 15px 45px rgba(34, 197, 94, 0.3)' }}>
            <div className="text-5xl font-bold text-green-400/80">S</div>
          </div>
        </motion.div>

        {/* Etsy Logo - Right Middle */}
        <motion.div
          animate={{
            y: [0, 35, 0],
            x: [0, -15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-[8%] w-38 h-38 opacity-14"
        >
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-600/30 to-amber-600/20 rounded-full backdrop-blur-sm border border-orange-400/20"
            style={{ boxShadow: '0 14px 40px rgba(234, 88, 12, 0.3)' }}>
            <div className="text-4xl font-bold text-orange-400/80 italic">E</div>
          </div>
        </motion.div>

        {/* Animated Rings */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 right-[20%] w-48 h-48 opacity-15"
          style={{
            border: '2px solid rgba(209, 152, 16, 0.3)',
            borderRadius: '50%',
            boxShadow: 'inset 0 0 40px rgba(209, 152, 16, 0.1), 0 0 40px rgba(209, 152, 16, 0.1)',
          }}
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-[25%] w-40 h-40 opacity-15"
          style={{
            border: '2px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '50%',
            boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.1), 0 0 30px rgba(6, 182, 212, 0.1)',
          }}
        />

        {/* Floating Spheres */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-[15%] w-20 h-20 opacity-25"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.4), rgba(209, 152, 16, 0.1))',
            borderRadius: '50%',
            boxShadow: '0 0 60px rgba(209, 152, 16, 0.3)',
            filter: 'blur(1px)',
          }}
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 right-[12%] w-28 h-28 opacity-25"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.4), rgba(6, 182, 212, 0.1))',
            borderRadius: '50%',
            boxShadow: '0 0 50px rgba(6, 182, 212, 0.3)',
            filter: 'blur(1px)',
          }}
        />

        {/* Animated Gradient Orbs */}
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

        {/* Particle-like Small Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 8}%`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(209, 152, 16, 0.6), transparent)'
                : 'radial-gradient(circle, rgba(6, 182, 212, 0.6), transparent)',
              boxShadow: i % 2 === 0
                ? '0 0 20px rgba(209, 152, 16, 0.4)'
                : '0 0 20px rgba(6, 182, 212, 0.4)',
            }}
          />
        ))}
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
                <span className="font-semibold text-amber-50 relative z-10">E-Commerce Growth Experts</span>
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
              <span className="text-slate-100">Accelerate Your </span>
              <br />
              <span style={{ display: 'inline-block', minWidth: '100%', height: '1.1em', position: 'relative' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-gradient text-glow-gold inline-block absolute left-0 top-0"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
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
              Transform your marketplace presence with data-driven strategies, AI-powered PPC campaigns, and expert optimization across Amazon, Walmart, Target, and beyond. We combine cutting-edge technology with proven expertise to deliver measurable growth and maximize your ROI across US, EU, UK, and GCC markets.
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
                { icon: Globe, value: '10+', label: 'Global Marketplaces' },
                { icon: DollarSign, value: '10M+', label: 'Ad Spend Managed' },
                { icon: Target, value: '50+', label: 'Brands Migrated' },
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
