// Optimized Framer Motion configuration for better performance
export const reducedMotionConfig = {
  // Use reduced animation durations
  duration: 0.3,

  // Simpler easing
  ease: [0.4, 0, 0.2, 1], // cubic-bezier

  // Disable layout animations (they're expensive)
  layout: false,
};

// Simple fade-in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

// Simple fade-in with minimal transform
export const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

// Simple scale animation
export const scaleIn = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

// Hover effect (simpler)
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
};

// Stagger children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
