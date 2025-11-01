'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, Users, TrendingUp, Shield, Clock, HeadphonesIcon } from 'lucide-react';

const managementServices = [
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Optimize stock levels and prevent stockouts.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Monitor KPIs and drive continuous improvement.',
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description: 'Safeguard your brand from unauthorized sellers.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Service',
    description: 'Manage customer inquiries and feedback.',
  },
  {
    icon: Clock,
    title: 'Order Processing',
    description: 'Streamline fulfillment and shipping operations.',
  },
  {
    icon: Users,
    title: 'Seller Support',
    description: 'Handle account health and policy compliance.',
  },
];

export default function AccountManagement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="account-management" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-cyan-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Account Management
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Full-Service{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Amazon Management
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Focus on growing your business while we handle the day-to-day operations of your Amazon account. Our comprehensive management ensures peak performance.
            </p>

            <div className="space-y-5 mb-10">
              {[
                'Dedicated account manager',
                'Proactive performance monitoring',
                'Strategic planning & execution',
                'Monthly reporting & insights',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Get Managed Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Content - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-10"
          >
            {managementServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 shadow-md"
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
