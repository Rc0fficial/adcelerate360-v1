'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What makes Adcelerate360 different from other marketplace agencies?',
        answer: 'We provide embedded teams of battle-tested experts (no freelancers) who operate as your dedicated white-label team. Our AI-powered approach combines data-driven strategies with hands-on execution across Amazon, Walmart, Target, and international markets. We focus on sustainable ROI, not just short-term gains.',
      },
      {
        question: 'Which marketplaces do you support?',
        answer: 'We specialize in Amazon (US, EU, UK, GCC), Walmart, Target, and eBay. Our team has expertise in cross-border expansion and can help you dominate both established and emerging marketplace platforms.',
      },
      {
        question: 'How long does it take to see results?',
        answer: 'Most clients see measurable improvements within 30-60 days, with significant growth typically occurring within 90-120 days. However, timelines vary based on your current position, competition, and marketplace dynamics. We provide realistic projections during our initial strategy session.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        question: 'Do you offer white-label services for agencies?',
        answer: 'Absolutely! Our white-label growth engine is designed specifically for agencies looking to scale without hiring overhead. Your clients will never know we exist - we operate entirely under your brand, seamlessly integrating with your team.',
      },
      {
        question: 'What is included in your PPC management?',
        answer: 'Our PPC services include Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP management. We use AI-powered optimization, competitor analysis, negative keyword sculpting, and continuous bid management to maximize ROAS while minimizing ACOS.',
      },
      {
        question: 'Can you help with international expansion?',
        answer: 'Yes! We specialize in global marketplace expansion with multilingual SEO, localized content translation, compliance audits for EU/UK/GCC markets, and launch campaigns in multiple languages. We handle everything from VAT registration to cultural adaptation.',
      },
    ],
  },
  {
    category: 'Pricing & Contracts',
    questions: [
      {
        question: 'How does your pricing model work?',
        answer: 'We offer flexible pricing models including performance-based fees, monthly retainers, and hybrid structures. Pricing depends on your revenue, number of SKUs, marketplace platforms, and service scope. Contact us for a customized quote tailored to your needs.',
      },
      {
        question: 'Do you require long-term contracts?',
        answer: 'We typically work on 6-12 month engagements to ensure we can deliver meaningful results. However, we offer flexibility based on your specific situation. Month-to-month options are available for certain service packages.',
      },
      {
        question: 'Is there a minimum ad spend requirement?',
        answer: 'For PPC management, we recommend a minimum monthly ad spend of $5,000 to see optimal results. However, we work with brands at various stages and can discuss options that align with your current budget and growth goals.',
      },
    ],
  },
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What information do you need to get started?',
        answer: 'We\'ll need access to your Seller Central/Vendor Central account, advertising console, current performance data, and business goals. During onboarding, we conduct a comprehensive audit to understand your current state and opportunities.',
      },
      {
        question: 'How quickly can we start working together?',
        answer: 'Once we agree on scope and terms, onboarding typically takes 5-7 business days. This includes team assignment, tool integration, account audits, and strategy development. We can expedite for urgent situations.',
      },
      {
        question: 'Do you provide training or knowledge transfer?',
        answer: 'Yes! We believe in empowering our clients. We provide regular strategy sessions, detailed reporting, and can include training for your internal team as part of our engagement. Knowledge transfer ensures you understand the "why" behind our recommendations.',
      },
    ],
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<{ category: number; question: number } | null>(null);

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    if (activeIndex?.category === categoryIndex && activeIndex?.question === questionIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex({ category: categoryIndex, question: questionIndex });
    }
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap((section) =>
      section.questions.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
      id="faq"
      className="relative overflow-hidden"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

      <div
        className="relative z-10 max-w-5xl mx-auto"
        style={{
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{
            marginBottom: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-slate-100">Frequently Asked </span>
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto text-center px-4">
            Everything you need to know about partnering with Adcelerate360.
            Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {faqs.map((section, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 px-6 py-3 rounded-xl">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full" />
                  <h3 className="text-xl font-bold text-amber-50">
                    {section.category}
                  </h3>
                </div>
              </div>

              {/* Questions */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {section.questions.map((faq, questionIndex) => {
                  const isActive =
                    activeIndex?.category === categoryIndex &&
                    activeIndex?.question === questionIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full text-left flex items-start justify-between gap-3 sm:gap-6 group sm:p-7"
                        style={{ padding: "1.25rem 1rem" }}
                      >
                        <span className="text-slate-100 font-semibold text-base sm:text-lg group-hover:text-amber-400 transition-colors leading-relaxed">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0 mt-0.5">
                          {isActive ? (
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                            </div>
                          ) : (
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-700/30 border border-slate-600/30 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                            </div>
                          )}
                        </div>
                      </button>

                      {/* Answer */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-8 pb-5 sm:pb-7">
                              <div className="border-t border-slate-700/50 pt-4 sm:pt-6">
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: "4rem" }}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 lg:p-10">
            <div
              className="text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                className="text-2xl sm:text-3xl font-bold text-slate-100 px-4"
                style={{ marginBottom: "1rem" }}
              >
                Still Have Questions?
              </h3>
              <p
                className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg px-4"
                style={{ marginBottom: "1.5rem", textAlign: "center" }}
              >
                Our team is here to help. Schedule a free consultation to
                discuss your specific needs and get personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-full shadow-xl glow-gold transition-all"
                  style={{ padding: "1rem 2rem" }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:hammad@adcelerate360.com"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm text-slate-100 font-semibold rounded-full border-2 border-amber-500/30 hover:border-amber-500/50 transition-all"
                  style={{ padding: "1rem 2rem" }}
                >
                  Email Us Directly
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
