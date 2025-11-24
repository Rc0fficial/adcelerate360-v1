'use client';

import Marquee from 'react-fast-marquee';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const marketplaces = [
  { name: 'Amazon', color: 'from-orange-500 to-amber-500', logo: '/logos/amazon-ads.png' },
  { name: 'Walmart', color: 'from-blue-500 to-cyan-500', logo: '/logos/walmart-connect.png' },
  { name: 'Target', color: 'from-red-500 to-pink-500', logo: '/logos/target-ads.png' },
  { name: 'eBay', color: 'from-yellow-500 to-amber-500', logo: '/logos/ebay.png' },
  { name: 'Etsy', color: 'from-orange-600 to-amber-600', logo: '/logos/etsy.png' },
  { name: 'Shopify', color: 'from-green-500 to-emerald-500', logo: '/logos/shopify.png' },
  { name: 'Google Shopping', color: 'from-blue-600 to-indigo-600', logo: '/logos/google-shopping.png' },
  { name: 'Best Buy', color: 'from-yellow-400 to-amber-400', logo: '/logos/bestbuy.png' },
  { name: 'Wayfair', color: 'from-purple-500 to-pink-500', logo: '/logos/wayfair.png' },
  { name: 'Rakuten', color: 'from-red-600 to-rose-600', logo: '/logos/rakuten.png' },
];

export default function TrustedMarketplaces() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
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
        </div>

        {/* Marquee Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Smooth Marquee */}
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-8"
          >
            {marketplaces.map((marketplace, index) => (
              <div
                key={index}
                className="mx-4 group"
                style={{ minWidth: '280px' }}
              >
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 smooth-transition h-full">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${marketplace.color} rounded-t-2xl`} />

                  {/* Logo */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-xl bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 smooth-transition p-3">
                      <img
                        src={marketplace.logo}
                        alt={`${marketplace.name} logo`}
                        className="w-full h-full object-contain"
                      />
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
          </Marquee>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-gradient-teal mb-2">15+</div>
              <div className="text-sm text-slate-400 font-medium">Active Marketplaces</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-sm text-slate-400 font-medium">Products Managed</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-gradient-teal mb-2">99.8%</div>
              <div className="text-sm text-slate-400 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
