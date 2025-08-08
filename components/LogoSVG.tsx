import { motion } from 'framer-motion';
import { cn } from './ui/utils';

interface LogoSVGProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
  showTagline?: boolean;
}

const sizeClasses = {
  sm: 'h-6',
  md: 'h-8', 
  lg: 'h-12',
  xl: 'h-20'
};

const widthClasses = {
  sm: 'w-18',
  md: 'w-24',
  lg: 'w-36', 
  xl: 'w-60'
};

export function LogoSVG({
  size = 'md',
  className = '',
  animated = true,
  showTagline = true
}: LogoSVGProps) {
  const containerClasses = cn(
    "relative inline-flex items-center",
    "transform-gpu",
    sizeClasses[size],
    widthClasses[size],
    className
  );

  const motionProps = animated ? {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      y: 10
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0
    },
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  } : {};

  return (
    <motion.div 
      className={containerClasses}
      {...motionProps}
    >
      <svg 
        viewBox="0 0 240 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Green gradient for left isometric block */}
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#00FF88", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#00E676", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#00C853", stopOpacity:1}} />
          </linearGradient>
          
          {/* Purple gradient for right isometric block */}
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#8B5CF6", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#7C3AED", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#6D28D9", stopOpacity:1}} />
          </linearGradient>
          
          {/* Darker shades for depth */}
          <linearGradient id="greenDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#00C853", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#00A040", stopOpacity:1}} />
          </linearGradient>
          
          <linearGradient id="purpleDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#6D28D9", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#5B21B6", stopOpacity:1}} />
          </linearGradient>
          
          {/* Glow effect filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Green isometric block (left) */}
        <g transform="translate(10, 15)">
          {/* Top face */}
          <path d="M0 20 L20 5 L40 20 L20 35 Z" fill="url(#greenGradient)" filter="url(#glow)"/>
          {/* Right face */}
          <path d="M20 35 L40 20 L40 40 L20 55 Z" fill="url(#greenDark)"/>
          {/* Left face */}
          <path d="M0 20 L20 35 L20 55 L0 40 Z" fill="url(#greenGradient)" opacity="0.8"/>
        </g>
        
        {/* Purple isometric block (right, overlapping) */}
        <g transform="translate(35, 15)">
          {/* Top face */}
          <path d="M0 20 L20 5 L40 20 L20 35 Z" fill="url(#purpleGradient)" filter="url(#glow)"/>
          {/* Right face */}
          <path d="M20 35 L40 20 L40 40 L20 55 Z" fill="url(#purpleDark)"/>
          {/* Left face */}
          <path d="M0 20 L20 35 L20 55 L0 40 Z" fill="url(#purpleGradient)" opacity="0.8"/>
        </g>
        
        {/* Text: "blu" in black */}
        <text x="90" y="35" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
              fontSize="24" fontWeight="700" fill="#000000" letterSpacing="-0.5px">blu</text>
        
        {/* Text: "Fin360" in purple */}
        <text x="130" y="35" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
              fontSize="24" fontWeight="700" fill="#8B5CF6" letterSpacing="-0.5px">Fin360</text>
        
        {/* Tagline (conditional) */}
        {showTagline && (
          <text x="90" y="55" fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif" 
                fontSize="12" fontWeight="400" fill="#9CA3AF" letterSpacing="0.5px">
            Compliant. Connected. Convenient
          </text>
        )}
        
        {/* Subtle connecting line between blocks */}
        <line x1="50" y1="50" x2="75" y2="50" stroke="url(#greenGradient)" strokeWidth="1" opacity="0.3"/>
      </svg>
    </motion.div>
  );
}
