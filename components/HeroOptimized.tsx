'use client';

import { ArrowRight, Sparkles, Globe, Zap, Target } from 'lucide-react';
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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

      {/* Simplified Background Elements - Static/CSS only */}
      <div className="absolute inset-0 overflow-hidden z-[1] opacity-15">
        {/* Static marketplace logos - removed complex animations */}
        <div className="absolute top-32 left-10 w-48 h-48">
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-3xl backdrop-blur-sm border border-orange-400/20"
            style={{ boxShadow: '0 20px 60px rgba(255, 153, 0, 0.3)' }}>
            <div className="text-6xl font-bold text-orange-400/80">a</div>
            <div className="absolute bottom-8 left-6 right-6 h-2 bg-orange-400/60 rounded-full"
              style={{ clipPath: 'polygon(0 50%, 100% 50%, 95% 100%, 5% 100%)' }} />
          </div>
        </div>

        <div className="absolute top-24 right-12 w-52 h-52">
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-red-500/30 to-pink-500/20 rounded-full backdrop-blur-sm border border-red-400/20"
            style={{ boxShadow: '0 20px 60px rgba(220, 38, 38, 0.3)' }}>
            <div className="w-32 h-32 rounded-full border-8 border-red-400/80 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-8 border-red-400/80 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-red-400/80"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-16 w-44 h-44">
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
        </div>

        <div className="absolute bottom-32 right-20 w-46 h-46">
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500/30 to-amber-500/20 rounded-2xl backdrop-blur-sm border border-yellow-400/20"
            style={{ boxShadow: '0 18px 55px rgba(234, 179, 8, 0.3)' }}>
            <div className="flex gap-1 text-4xl font-bold">
              <span className="text-red-400/80">e</span>
              <span className="text-blue-400/80">B</span>
              <span className="text-yellow-400/80">a</span>
              <span className="text-green-400/80">y</span>
            </div>
          </div>
        </div>

        {/* Gradient Orbs - Static */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(209, 152, 16, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '3rem' }}>
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Premium Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center backdrop-blur-xl border border-amber-400/30 shadow-2xl relative overflow-hidden" style={{ gap: '0.5rem', padding: '0.625rem 1.5rem', borderRadius: '9999px', fontSize: '0.875rem', background: 'rgba(217, 119, 6, 0.1)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 animate-shimmer" />
                <Sparkles className="w-4 h-4 text-amber-400 relative z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))' }} />
                <span className="font-semibold text-amber-50 relative z-10">E-Commerce Growth Experts</span>
              </div>
            </div>

            {/* Main Headline with Animated Words */}
            <h1
              className="font-bold leading-[1.1] tracking-tight animate-fade-in-up"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', animationDelay: '0.1s' }}
            >
              <span className="text-slate-100">Accelerate Your </span>
              <br />
              <span style={{ display: 'inline-block', minWidth: '100%', height: '1.1em', position: 'relative' }}>
                <span
                  className={`text-gradient text-glow-gold inline-block absolute left-0 top-0 transition-all duration-300 ${
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-slate-300 leading-relaxed max-w-xl animate-fade-in-up"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', lineHeight: '1.7', animationDelay: '0.2s' }}
            >
              Transform your marketplace presence with data-driven strategies, AI-powered PPC campaigns, and expert optimization across Amazon, Walmart, Target, and beyond.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ paddingTop: '1rem', animationDelay: '0.3s' }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold shadow-xl glow-gold smooth-transition hover-scale"
                style={{ padding: '14px 28px', borderRadius: '9999px', fontSize: '1rem' }}
              >
                Start Growing Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm text-slate-100 font-semibold border-2 border-amber-500/30 hover:border-amber-500/50 smooth-transition hover-scale"
                style={{ padding: '14px 28px', borderRadius: '9999px', fontSize: '1rem' }}
              >
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className="grid grid-cols-3 border-t border-amber-500/20 animate-fade-in-up"
              style={{ gap: '1.5rem', paddingTop: '2rem', marginTop: '1.5rem', animationDelay: '0.4s' }}
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
            </div>
          </div>

          {/* Right Content - Simplified Cards */}
          <div className="relative hidden lg:block animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Card - No complex animations */}
              <div
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl shadow-2xl border border-amber-500/20"
                style={{ padding: '2rem', borderRadius: '1.25rem' }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
                  <div>
                    <h3 className="font-bold text-slate-100" style={{ fontSize: '1rem' }}>Multi-Platform Growth</h3>
                    <p className="text-slate-400" style={{ fontSize: '0.875rem' }}>Real-time performance</p>
                  </div>
                  <div className="flex items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-500 glow-gold" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.875rem' }}>
                    <Zap className="w-5 h-5 text-slate-950" />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { platform: 'Amazon', growth: '+245%', color: 'from-amber-500 to-yellow-500' },
                    { platform: 'Walmart', growth: '+189%', color: 'from-cyan-500 to-teal-500' },
                    { platform: 'Target', growth: '+156%', color: 'from-purple-500 to-pink-500' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-900/50 border border-slate-700/50 animate-fade-in"
                      style={{ padding: '0.875rem', borderRadius: '0.75rem', animationDelay: `${0.4 + i * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
                        <span className="text-slate-300 font-medium" style={{ fontSize: '0.9375rem' }}>{item.platform}</span>
                        <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} style={{ fontSize: '1rem' }}>
                          {item.growth}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 overflow-hidden" style={{ height: '0.375rem', borderRadius: '9999px' }}>
                        <div
                          className={`h-full bg-gradient-to-r ${item.color}`}
                          style={{ width: '85%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center bg-slate-900/50 border border-slate-700/50" style={{ gap: '0.5rem', padding: '0.875rem', borderRadius: '0.75rem' }}>
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <div className="flex-1">
                    <div className="text-slate-400" style={{ fontSize: '0.8125rem' }}>Global Reach</div>
                    <div className="font-bold text-slate-100" style={{ fontSize: '1rem' }}>US • EU • UK • GCC</div>
                  </div>
                </div>
              </div>

              {/* Floating Success Badge */}
              <div
                className="absolute bg-gradient-to-br from-amber-500 to-yellow-500 shadow-2xl glow-gold hover-lift animate-scale-in"
                style={{ right: '-1.5rem', bottom: '-1.5rem', padding: '1.25rem', borderRadius: '1rem', width: '14rem', animationDelay: '0.7s' }}
              >
                <div className="text-slate-950">
                  <div className="font-semibold" style={{ marginBottom: '0.25rem', fontSize: '0.8125rem' }}>Battle-Tested Experts</div>
                  <div className="font-bold" style={{ fontSize: '2.25rem', lineHeight: '1', marginBottom: '0.375rem' }}>10+ Years</div>
                  <div className="font-medium opacity-90" style={{ fontSize: '0.75rem' }}>Marketplace Mastery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
