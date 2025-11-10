'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';

const benefits = [
  'Complete Amazon account audit worth $997',
  'Personalized growth strategy roadmap',
  'Competitor analysis & market insights',
  'PPC campaign optimization recommendations',
  'Product listing & SEO improvement plan',
  'Revenue projection for next 90 days',
];

export default function LeadMagnet() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    monthlyRevenue: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send data to your backend/CRM
    console.log('Lead captured:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-500/40 rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Success! Check Your Email 📧
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              We&apos;ve sent your free Amazon audit report to <span className="font-semibold text-green-400">{formData.email}</span>
            </p>
            <p className="text-slate-400">
              Our team will reach out within 24 hours to discuss your personalized growth strategy.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="free-audit" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-2xl p-1">
            <div className="bg-slate-950 rounded-xl px-6 py-4">
              <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-100 font-semibold">Limited Time Offer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300">Only <span className="font-bold text-amber-400">5 spots</span> left this month</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300"><span className="font-bold text-green-400">$997 value</span> - FREE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">FREE Amazon Performance Audit</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-slate-100">Get Your </span>
              <span className="text-gradient">Free $997 Amazon Audit</span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Discover exactly how to increase your Amazon sales by 100-300% in the next 90 days. Our expert team will analyze your account and create a personalized growth roadmap.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 mb-2">No Obligations. 100% Free.</h4>
                  <p className="text-sm text-slate-300">
                    Get actionable insights you can implement immediately, even if you don&apos;t work with us. That&apos;s how confident we are in our expertise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  Claim Your Free Audit Now
                </h3>
                <p className="text-slate-400">Takes less than 60 seconds</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-slate-200 mb-2">
                    Business/Brand Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="monthlyRevenue" className="block text-sm font-semibold text-slate-200 mb-2">
                    Current Monthly Amazon Revenue *
                  </label>
                  <select
                    id="monthlyRevenue"
                    name="monthlyRevenue"
                    required
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-100 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  >
                    <option value="">Select revenue range</option>
                    <option value="0-10k">$0 - $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-lg"
                >
                  Get My Free Audit Report
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-xs text-slate-500 text-center">
                  🔒 Your information is 100% secure. We respect your privacy.
                </p>
              </form>

              {/* Trust Elements */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gradient mb-1">24hrs</div>
                    <div className="text-xs text-slate-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-teal mb-1">500+</div>
                    <div className="text-xs text-slate-400">Audits Done</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient mb-1">4.9★</div>
                    <div className="text-xs text-slate-400">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
