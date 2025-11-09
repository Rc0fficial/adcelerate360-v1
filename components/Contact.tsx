'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

          <h2 className="font-bold tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}>
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
              <h3 className="font-bold text-slate-100" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Business Hours</h3>
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
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid sm:grid-cols-2" style={{ gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-800/50 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                    style={{ padding: '12px 16px', borderRadius: '12px' }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-slate-800/50 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                    style={{ padding: '12px 16px', borderRadius: '12px' }}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-slate-800/50 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  style={{ padding: '12px 16px', borderRadius: '12px' }}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-slate-800/50 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-500/50 transition-colors"
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
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-slate-800/50 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  style={{ padding: '12px 16px', borderRadius: '12px' }}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-lg shadow-xl glow-gold transition-all flex items-center justify-center gap-2"
                style={{ padding: '16px 32px', borderRadius: '9999px' }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
