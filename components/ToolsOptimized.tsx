'use client';

import Marquee from 'react-fast-marquee';
import { Wrench, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tools = [
  { name: 'Pacvue', color: 'from-blue-500 to-indigo-500' },
  { name: 'Adbrew', color: 'from-purple-500 to-pink-500' },
  { name: 'Helium 10', color: 'from-orange-500 to-red-500' },
  { name: 'Intentwise', color: 'from-green-500 to-emerald-500' },
  { name: 'Junglescout', color: 'from-teal-500 to-cyan-500' },
  { name: 'Keepa', color: 'from-amber-500 to-yellow-500' },
];

export default function Tools() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Powered by Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-100">Industry-Leading </span>
            <span className="text-gradient">Tools We Use</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We leverage cutting-edge technology and premium tools to deliver unmatched results for your brand
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Smooth Marquee */}
          <Marquee
            gradient={false}
            speed={35}
            pauseOnHover={true}
            className="py-8"
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                className="mx-4 group"
                style={{ minWidth: '320px' }}
              >
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 smooth-transition h-full">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} rounded-t-2xl`} />

                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg group-hover:scale-110 smooth-transition`}>
                      <Wrench className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-2xl font-bold text-slate-100 text-center">
                    {tool.name}
                  </h3>

                  {/* Premium Badge */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full w-full justify-center">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-400">Premium Tool</span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom Feature Grid */}
        <div className={`mt-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-slate-400 font-medium">Real-Time Monitoring</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-gradient-teal mb-2">AI-Powered</div>
              <div className="text-sm text-slate-400 font-medium">Automated Optimization</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">Advanced</div>
              <div className="text-sm text-slate-400 font-medium">Analytics & Reporting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
