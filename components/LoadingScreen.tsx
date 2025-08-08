import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogoSVG } from './LogoSVG';


interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const texts = [
      'Initializing',
      'Loading Financial Infrastructure',
      'Connecting to BluFin360 Core',
      'Securing Connection',
      'Ready'
    ];

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update loading text based on progress
        if (newProgress > 80) setLoadingText(texts[4]);
        else if (newProgress > 60) setLoadingText(texts[3]);
        else if (newProgress > 40) setLoadingText(texts[2]);
        else if (newProgress > 20) setLoadingText(texts[1]);
        else setLoadingText(texts[0]);

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF88]/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative flex justify-center">
            <LogoSVG size="xl" animated={true} showTagline={false} />
            
            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="relative w-32 h-32">
                {[0, 120, 240].map((rotation, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-3 h-3 bg-[#00D4FF] rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                      transform: `rotate(${rotation}deg) translateY(-80px) translateX(-6px)`
                    }}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.3 
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl font-black text-white mb-2"
        >
          BluFin360
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#00D4FF] mb-12 font-medium"
        >
          Financial Infrastructure Platform
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '300px', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-4"
        >
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00D4FF] to-[#00FF88] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          key={loadingText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-white/70 text-sm"
        >
          {loadingText}
        </motion.p>

        {/* Progress Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[#00FF88] text-xs mt-2 font-mono"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
}