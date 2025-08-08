import { motion } from 'framer-motion';
import { cn } from './ui/utils';

interface Logo3DProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
  showText?: boolean;
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-4xl'
};

const containerSizes = {
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-10',
  xl: 'h-16'
};

export function Logo3D({
  size = 'md',
  className = '',
  animated = true,
  showText = true
}: Logo3DProps) {
  const logoText = "BluFin360";

  const baseClasses = cn(
    "font-black tracking-tight select-none",
    "relative inline-block",
    sizeClasses[size],
    className
  );

  const shadowClasses = cn(
    "absolute inset-0 font-black tracking-tight",
    "text-[#001122] opacity-80",
    "z-[-1]",
    sizeClasses[size]
  );

  const glowClasses = cn(
    "absolute inset-0 font-black tracking-tight",
    "text-[#00D4FF] opacity-40 blur-sm",
    "z-[-2]",
    sizeClasses[size]
  );

  const containerClasses = cn(
    "relative inline-flex items-center",
    "transform-gpu perspective-1000",
    containerSizes[size]
  );

  const logoStyle: React.CSSProperties = {
    textShadow: `
      0 1px 0 #001122,
      0 2px 0 #001122,
      0 3px 0 #001122,
      0 4px 0 #001122,
      0 5px 0 #001122,
      0 6px 0 #001122,
      0 7px 1px rgba(0, 0, 0, 0.2),
      0 0 8px rgba(0, 212, 255, 0.5),
      0 0 15px rgba(0, 255, 136, 0.3),
      0 2px 4px rgba(0, 0, 0, 0.4),
      0 4px 8px rgba(0, 0, 0, 0.3),
      0 6px 12px rgba(0, 0, 0, 0.2)
    `,
    transform: 'rotateX(12deg) rotateY(-3deg) translateZ(0)',
    filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 25px rgba(0, 255, 136, 0.3))',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden' as const
  };

  const motionProps = animated ? {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: 45,
      rotateY: -15
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotateX: 15,
      rotateY: -5
    },
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    },
    whileHover: {
      scale: 1.08,
      rotateX: 8,
      rotateY: 2,
      filter: 'drop-shadow(0 0 25px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 35px rgba(0, 255, 136, 0.5))',
      textShadow: `
        0 1px 0 #001122,
        0 2px 0 #001122,
        0 3px 0 #001122,
        0 4px 0 #001122,
        0 5px 0 #001122,
        0 6px 0 #001122,
        0 7px 1px rgba(0, 0, 0, 0.2),
        0 0 12px rgba(0, 212, 255, 0.8),
        0 0 20px rgba(0, 255, 136, 0.6),
        0 2px 4px rgba(0, 0, 0, 0.4),
        0 4px 8px rgba(0, 0, 0, 0.3),
        0 6px 12px rgba(0, 0, 0, 0.2)
      `,
      transition: { duration: 0.3 }
    }
  } : {};

  if (!showText) {
    return (
      <motion.div 
        className={containerClasses}
        {...motionProps}
      >
        <div 
          className={baseClasses}
          style={logoStyle}
        >
          {logoText}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={containerClasses}
      {...motionProps}
    >
      {/* Background glow */}
      <div 
        className={glowClasses}
        style={{
          transform: 'rotateX(15deg) rotateY(-5deg)',
        }}
      >
        {logoText}
      </div>
      
      {/* Shadow layer */}
      <div 
        className={shadowClasses}
        style={{
          transform: 'rotateX(15deg) rotateY(-5deg) translateZ(-10px)',
        }}
      >
        {logoText}
      </div>
      
      {/* Main text with gradient */}
      <div
        className={cn(baseClasses, gradientClasses)}
        style={logoStyle}
      >
        {logoText}
      </div>

      {/* Fallback solid color text (hidden when gradient works) */}
      <div
        className={cn(
          baseClasses,
          "absolute inset-0 text-[#00D4FF] z-0",
          "opacity-100 [.logo-3d-gradient:not([style*='transparent'])_+_&]:opacity-0"
        )}
        style={{
          ...logoStyle,
          color: '#00D4FF',
          WebkitTextFillColor: '#00D4FF'
        }}
      >
        {logoText}
      </div>
    </motion.div>
  );
}
