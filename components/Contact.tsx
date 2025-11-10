'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, Star } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    revenue: '',
    service: 'AI-Powered PPC',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Info@adcelerate360.com',
      link: 'mailto:Info@adcelerate360.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (737) 437-0802',
      link: 'tel:+17374370802',
    },
    {
      icon: MapPin,
      label: 'Locations',
      value: 'Sheridan, WY " Islamabad, PK',
      link: null,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-3xl" />
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
              Get In Touch
            </span>
          </motion.div>

          <h2 className="font-bold tracking-tight px-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
            <span className="text-slate-100">Let&apos;s</span>{' '}
            <span className="text-gradient">Accelerate</span>
            <br />
            <span className="text-gradient-teal">Your Growth</span>
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-center" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}>
            Ready to dominate your marketplace? Contact us today for a free consultation and discover how we can transform your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2" style={{ gap: '4rem' }}>
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}

            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg glow-gold" style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem' }}>
                    <info.icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-semibold text-slate-100 hover:text-amber-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-slate-100">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20"
              style={{ padding: '2rem', borderRadius: '1rem' }}
            >
              <h3 className="font-bold text-slate-100 text-lg sm:text-xl" style={{ marginBottom: '1rem' }}>Business Hours</h3>
              <div className="text-slate-300" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-slate-400">Available across US, EU, UK & GCC timezones</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-500/40 rounded-3xl p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-100 mb-4">
                  Message Received! 🎉
                </h3>
                <p className="text-lg text-slate-300 mb-6">
                  Thank you for reaching out, <span className="font-semibold text-green-400">{formData.name}</span>!
                </p>
                <p className="text-slate-400 mb-8">
                  Our team will review your message and get back to you within 24 hours at{' '}
                  <span className="font-semibold text-cyan-400">{formData.email}</span>
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-400">
                  In the meantime, check out our{' '}
                  <a href="#case-studies" className="text-amber-400 hover:text-amber-300 underline">
                    case studies
                  </a>
                  {' '}to see what we can achieve together.
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-4 sm:p-6 lg:p-8">
                {/* Trust Badge */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="font-semibold text-slate-100 text-sm">Average Response Time: 2 Hours</p>
                      <p className="text-xs text-slate-400">Get expert advice from our team fast</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem' }}>
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
                        className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        style={{ padding: '12px 16px', borderRadius: '12px' }}
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
                        className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        style={{ padding: '12px 16px', borderRadius: '12px' }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-200 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        style={{ padding: '12px 16px', borderRadius: '12px' }}
                        placeholder="Your Company Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-200 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                        style={{ padding: '12px 16px', borderRadius: '12px' }}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="revenue" className="block text-sm font-semibold text-slate-200 mb-2">
                      Current Monthly Revenue *
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      required
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-100 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      style={{ padding: '12px 16px', borderRadius: '12px' }}
                    >
                      <option value="">Select revenue range</option>
                      <option value="0-10k">$0 - $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-200 mb-2">
                      Primary Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-100 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                      style={{ padding: '12px 16px', borderRadius: '12px' }}
                    >
                      <option>AI-Powered PPC</option>
                      <option>E-Commerce SEO</option>
                      <option>Brand Strategy</option>
                      <option>Cross-Border Expansion</option>
                      <option>White-Label Solutions</option>
                      <option>Full Marketplace Management</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                      style={{ padding: '12px 16px', borderRadius: '12px' }}
                      placeholder="What are your biggest challenges? What results are you looking to achieve?"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-lg shadow-xl glow-gold transition-all flex items-center justify-center gap-2"
                    style={{ padding: '16px 32px', borderRadius: '9999px' }}
                  >
                    Get Free Consultation
                    <Send className="w-5 h-5" />
                  </motion.button>

                  <p className="text-xs text-slate-500 text-center">
                    🔒 Your information is secure. We never share your data.
                  </p>

                  {/* Trust Elements */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-gradient mb-1">2hrs</div>
                        <div className="text-xs text-slate-400">Avg Response</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gradient-teal mb-1">500+</div>
                        <div className="text-xs text-slate-400">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gradient mb-1">4.9★</div>
                        <div className="text-xs text-slate-400">Client Rating</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
