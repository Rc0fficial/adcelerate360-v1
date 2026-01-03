'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Shield, CheckCircle, Award, Star } from 'lucide-react';

export default function FounderCredibility() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const credentials = [
    {
      icon: Shield,
      title: 'Verified Amazon Partner',
      description: 'Official Amazon Advertising Partner with advanced certifications'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Featured speaker at major e-commerce and marketplace conferences'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: '$120M+ in revenue generated for clients across global markets'
    },
    {
      icon: Star,
      title: 'Client Satisfaction',
      description: '98% client retention rate with 250+ successful partnerships'
    }
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Trusted Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-100">Your Success is </span>
            <span className="text-gradient">Our Commitment</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[650px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50">
              <Image
                src="/images/team/Founder2.jpeg"
                alt="Professional E-Commerce Expert"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Trust Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-slate-950 text-slate-950" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-slate-950">4.9/5</span>
                  </div>
                  <div className="text-slate-950 font-semibold text-lg">Trusted by 250+ Brands Worldwide</div>
                  <div className="text-slate-800 text-sm font-medium mt-1">Based on verified client reviews</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                Battle-Tested Expertise You Can Trust
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                With over a decade of hands-on experience and hundreds of successful campaigns, we bring the expertise and proven strategies that transform marketplace performance.
              </p>
            </div>

            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex gap-4 bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                    <credential.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{credential.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{credential.description}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-full shadow-xl glow-gold transition-all hover:scale-105"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
