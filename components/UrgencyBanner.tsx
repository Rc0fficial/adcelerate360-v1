'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, ArrowRight } from 'lucide-react';

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [spotsLeft, setSpotsLeft] = useState(5);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Simulate spots being taken
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => Math.max(2, prev - 1));
    }, 180000); // Every 3 minutes

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-20 left-0 right-0 z-40"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-2xl p-1 shadow-2xl">
            <div className="bg-slate-950 rounded-xl px-6 py-4 relative">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center pr-8">
                {/* Limited Spots */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <Users className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-100 font-semibold">
                    Only <span className="text-amber-400 font-bold text-lg">{spotsLeft}</span> spots left this month
                  </span>
                </div>

                {/* Countdown */}
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300 font-medium">Offer ends in:</span>
                  <div className="flex gap-1">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded px-2 py-1">
                      <span className="text-amber-400 font-bold tabular-nums">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-amber-400/60 text-xs ml-0.5">h</span>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded px-2 py-1">
                      <span className="text-amber-400 font-bold tabular-nums">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-amber-400/60 text-xs ml-0.5">m</span>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded px-2 py-1">
                      <span className="text-amber-400 font-bold tabular-nums">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-amber-400/60 text-xs ml-0.5">s</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#free-audit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-6 py-2 rounded-full text-sm shadow-lg transition-all"
                >
                  Claim Your Free Audit
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
