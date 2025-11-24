'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

export default function BookCall() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold uppercase tracking-wide" style={{ padding: '0.625rem 1.5rem', borderRadius: '9999px' }}>
              <Calendar className="w-4 h-4 inline-block mr-2" />
              Free Consultation
            </span>
          </motion.div>

          <h2 className="font-bold tracking-tight px-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
            <span className="text-slate-100">Schedule Your </span>
            <span className="text-gradient">Free Strategy Call</span>
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-center" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}>
            Book a 15-minute discovery call to discuss your marketplace goals and discover how we can help you scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">
                What to Expect on the Call
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  {
                    icon: CheckCircle,
                    title: 'Quick Assessment',
                    description: 'We\'ll review your current marketplace performance and identify growth opportunities',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Custom Strategy',
                    description: 'Get personalized recommendations tailored to your specific business goals',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Clear Next Steps',
                    description: 'Walk away with actionable insights, whether you work with us or not',
                  },
                  {
                    icon: Clock,
                    title: 'No Commitment',
                    description: 'Just 15 minutes of your time. No pressure, no sales pitch—just value',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ display: 'flex', gap: '1rem' }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-lg glow-gold">
                        <benefit.icon className="w-6 h-6 text-slate-950" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 mb-1 text-lg">{benefit.title}</h4>
                      <p className="text-slate-300 text-base leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20"
              style={{ padding: '1.5rem', borderRadius: '1rem' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Video className="w-6 h-6 text-amber-400" />
                <h4 className="font-bold text-slate-100 text-lg">Video or Phone Call</h4>
              </div>
              <p className="text-slate-300 text-base">
                Choose your preferred format. Google Meet link will be sent after booking.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Calendly Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 sm:p-10 lg:p-12 text-center">
              {/* Calendar Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-2xl glow-gold">
                  <Calendar className="w-10 h-10 text-slate-950" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-3">
                Choose Your Time Slot
              </h3>
              <p className="text-slate-300 mb-8 text-base">
                Select a convenient time that works for you. Available slots are shown in your local timezone.
              </p>

              {/* Calendly CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendar.app.google/66Yjh1nU9VSuRUXD8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-lg shadow-2xl glow-gold transition-all w-full"
                style={{ padding: '18px 36px', borderRadius: '9999px' }}
              >
                <Calendar className="w-6 h-6" />
                Book Your Free Call Now
              </motion.a>

              {/* Trust Elements */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gradient mb-1">15min</div>
                    <div className="text-xs text-slate-400">Quick & Easy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-teal mb-1">Free</div>
                    <div className="text-xs text-slate-400">No Cost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient mb-1">100%</div>
                    <div className="text-xs text-slate-400">No Pressure</div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-6">
                🔒 Your privacy matters. We never share your information.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
