'use client';

import { useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Zap } from 'lucide-react';

const tools = [
  {
    name: 'Pacvue',
    color: 'from-blue-500 to-indigo-500',
    logo: '/logos/pacvue.png',
  },
  {
    name: 'Adbrew',
    color: 'from-purple-500 to-pink-500',
    logo: '/logos/adbrew.png',
  },
  {
    name: 'Helium 10',
    color: 'from-orange-500 to-red-500',
    logo: '/logos/helium10.png',
  },
  {
    name: 'Intentwise',
    color: 'from-green-500 to-emerald-500',
    logo: '/logos/intentwise.png',
  },
  {
    name: 'Jungle Scout',
    color: 'from-teal-500 to-cyan-500',
    logo: '/logos/junglescout.png',
  },
  {
    name: 'Keepa',
    color: 'from-amber-500 to-yellow-500',
    logo: '/logos/keepa.png',
  },
];

export default function Tools() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate the tools array for seamless infinite loop
  const duplicatedTools = [...tools, ...tools];

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    const totalDistance = (320 + 32) * tools.length;

    controls.start({
      x: [null, -totalDistance],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Animated Slider */}
          <div
            className="overflow-hidden py-8"
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="flex gap-8"
              animate={controls}
              initial={{ x: 0 }}
              onAnimationStart={() => {
                if (!containerRef.current) {
                  const totalDistance = (320 + 32) * tools.length;
                  controls.start({
                    x: [0, -totalDistance],
                    transition: {
                      duration: 25,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  });
                }
              }}
              style={{ width: 'fit-content' }}
            >
              {duplicatedTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                  style={{ minWidth: '320px' }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 h-full">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} rounded-t-2xl`} />

                    {/* Logo */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-32 h-32 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-6">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Tool Name */}
                    <h3 className="text-2xl font-bold text-slate-100 text-center mb-4">
                      {tool.name}
                    </h3>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full w-full justify-center">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-semibold text-amber-400">Premium Tool</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">
                  <span className="text-gradient">Advanced Technology Stack</span>
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Our team combines expertise with the industry&apos;s most powerful tools to optimize your campaigns,
                  analyze market trends, and maximize your ROI. We invest in premium software so you don&apos;t have to.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">$50K+</div>
                  <div className="text-xs text-slate-400 font-medium">Annual Tool Investment</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient-teal mb-1">24/7</div>
                  <div className="text-xs text-slate-400 font-medium">Real-Time Monitoring</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">15+</div>
                  <div className="text-xs text-slate-400 font-medium">Integrated Platforms</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient-teal mb-1">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Data Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
