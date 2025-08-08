import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/20 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#00D4FF] via-[#00FF88] to-[#00D4FF] relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </motion.div>
    </motion.div>
  );
}