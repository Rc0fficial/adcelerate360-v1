'use client';

import { useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const marketplaces = [
  { name: 'Amazon', color: 'from-orange-500 to-amber-500' },
  { name: 'Walmart', color: 'from-blue-500 to-cyan-500' },
  { name: 'Target', color: 'from-red-500 to-pink-500' },
  { name: 'eBay', color: 'from-yellow-500 to-amber-500' },
  { name: 'Etsy', color: 'from-orange-600 to-amber-600' },
  { name: 'Shopify', color: 'from-green-500 to-emerald-500' },
  { name: 'Google Shopping', color: 'from-blue-600 to-indigo-600' },
  { name: 'Best Buy', color: 'from-yellow-400 to-amber-400' },
  { name: 'Wayfair', color: 'from-purple-500 to-pink-500' },
  { name: 'Rakuten', color: 'from-red-600 to-rose-600' },
];

export default function TrustedMarketplaces() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate the marketplaces array for seamless infinite loop
  const duplicatedMarketplaces = [...marketplaces, ...marketplaces];

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    const totalDistance = (280 + 32) * marketplaces.length;

    controls.start({
      x: [null, -totalDistance],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#006f9108_1px,transparent_1px),linear-gradient(to_bottom,#006f9108_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-100">Trusted on </span>
            <span className="text-gradient-teal">Major Marketplaces</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We deliver exceptional results across the world&apos;s leading e-commerce platforms
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
                  const totalDistance = (280 + 32) * marketplaces.length;
                  controls.start({
                    x: [0, -totalDistance],
                    transition: {
                      duration: 30,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  });
                }
              }}
              style={{ width: 'fit-content' }}
            >
              {duplicatedMarketplaces.map((marketplace, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                  style={{ minWidth: '280px' }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${marketplace.color} rounded-t-2xl`} />

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${marketplace.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <ShoppingCart className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Marketplace Name */}
                    <h3 className="text-xl font-bold text-slate-100 text-center mb-3">
                      {marketplace.name}
                    </h3>

                    {/* Trust Badge */}
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Verified Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full w-full justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-cyan-400">Verified Partner</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient-teal mb-2">15+</div>
              <div className="text-sm text-slate-400 font-medium">Active Marketplaces</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-sm text-slate-400 font-medium">Products Managed</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-gradient-teal mb-2">99.8%</div>
              <div className="text-sm text-slate-400 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
