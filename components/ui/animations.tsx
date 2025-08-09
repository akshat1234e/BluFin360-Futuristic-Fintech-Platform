import { useState, useEffect } from 'react';

// CSS Animation Utilities with Hardware Acceleration
export const animationStyles = `
  /* Hardware Acceleration Base */
  .hw-accelerated {
    will-change: transform;
    transform: translateZ(0);
  }

  /* Slide Effect Button */
  @keyframes slideEffect {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .slide-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .slide-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .slide-button:hover::before {
    animation: slideEffect 0.6s ease;
  }

  /* Scale Button */
  .scale-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1);
  }

  .scale-button:hover {
    transform: scale(1.05) translateZ(0);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
  }

  .scale-button:active {
    transform: scale(0.98) translateZ(0);
  }

  /* Border Grow Button */
  @keyframes borderGrow {
    0% { width: 0; }
    100% { width: 100%; }
  }

  .border-grow {
    position: relative;
    overflow: hidden;
  }

  .border-grow::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #00D4FF, #00FF88);
    transition: width 0.4s ease;
  }

  .border-grow:hover::after {
    width: 100%;
  }

  /* Typewriter Effect */
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blinkCursor {
    0%, 50% { border-color: transparent; }
    51%, 100% { border-color: #00D4FF; }
  }

  .typewriter {
    overflow: hidden;
    border-right: 2px solid #00D4FF;
    white-space: nowrap;
    animation: typewriter 3s steps(40) 1s forwards, blinkCursor 1s infinite;
    width: 0;
  }

  /* Glitch Effect */
  @keyframes glitch1 {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-2px); }
    40% { transform: translateX(2px); }
    60% { transform: translateX(-1px); }
    80% { transform: translateX(1px); }
  }

  @keyframes glitch2 {
    0%, 100% { transform: translateY(0); }
    20% { transform: translateY(-1px); }
    40% { transform: translateY(1px); }
    60% { transform: translateY(-2px); }
    80% { transform: translateY(2px); }
  }

  .glitch {
    position: relative;
    animation: glitch1 0.3s infinite;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    animation: glitch2 0.3s infinite;
    color: #ff0040;
    z-index: -1;
  }

  .glitch::after {
    animation: glitch1 0.3s infinite reverse;
    color: #00ffff;
    z-index: -2;
  }

  /* Animated Gradient Background */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animated-gradient {
    background: linear-gradient(-45deg, #000000, #001122, #002244, #000000);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
  }

  .animated-gradient-blue {
    background: linear-gradient(-45deg, #000000, #001a33, #00D4FF20, #000000);
    background-size: 400% 400%;
    animation: gradientShift 10s ease infinite;
  }

  .animated-gradient-green {
    background: linear-gradient(-45deg, #000000, #001a1a, #00FF8820, #000000);
    background-size: 400% 400%;
    animation: gradientShift 12s ease infinite;
  }

  /* Spinner */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 212, 255, 0.1);
    border-left: 4px solid #00D4FF;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    transform: translateZ(0);
  }

  .spinner-small {
    width: 20px;
    height: 20px;
    border-width: 2px;
  }

  .spinner-large {
    width: 60px;
    height: 60px;
    border-width: 6px;
  }

  /* Dot Pulse */
  @keyframes dotPulse {
    0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
    40% { transform: scale(1); opacity: 1; }
  }

  .dot-pulse {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .dot-pulse .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00D4FF;
    animation: dotPulse 1.4s infinite ease-in-out;
    transform: translateZ(0);
  }

  .dot-pulse .dot:nth-child(1) { animation-delay: -0.32s; }
  .dot-pulse .dot:nth-child(2) { animation-delay: -0.16s; }
  .dot-pulse .dot:nth-child(3) { animation-delay: 0s; }

  /* Fade In Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-40px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(40px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.8s ease forwards;
  }

  .fade-in-left {
    animation: fadeInLeft 0.8s ease forwards;
  }

  .fade-in-right {
    animation: fadeInRight 0.8s ease forwards;
  }

  /* Stagger Animation Delays */
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }

  /* Hover Glow Effects */
  .glow-blue-hover {
    transition: all 0.3s ease;
  }

  .glow-blue-hover:hover {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
    transform: translateY(-2px) translateZ(0);
  }

  .glow-green-hover {
    transition: all 0.3s ease;
  }

  .glow-green-hover:hover {
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
    transform: translateY(-2px) translateZ(0);
  }

  /* Performance Optimizations */
  .gpu-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  /* Reduced Motion Support */
  @media (prefers-reduced-motion: reduce) {
    .typewriter,
    .glitch,
    .animated-gradient,
    .animated-gradient-blue,
    .animated-gradient-green,
    .spinner,
    .dot-pulse .dot,
    .fade-in-up,
    .fade-in-left,
    .fade-in-right {
      animation: none !important;
    }
    
    .scale-button:hover,
    .glow-blue-hover:hover,
    .glow-green-hover:hover {
      transform: none !important;
    }
  }
`;

// React Components for Animations
interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
}

export const TypewriterText = ({ text, className = '', speed = 50 }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {text}
    </span>
  );
};

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'green';
  className?: string;
}

export const Spinner = ({ size = 'medium', color = 'blue', className = '' }: SpinnerProps) => {
  const sizeClass = size === 'small' ? 'spinner-small' : size === 'large' ? 'spinner-large' : '';
  const colorStyle = color === 'green' ? { borderLeftColor: '#00FF88' } : {};

  return (
    <div 
      className={`spinner ${sizeClass} ${className}`}
      style={colorStyle}
    />
  );
};

interface DotPulseProps {
  color?: 'blue' | 'green';
  className?: string;
}

export const DotPulse = ({ color = 'blue', className = '' }: DotPulseProps) => {
  const dotColor = color === 'green' ? '#00FF88' : '#00D4FF';

  return (
    <div className={`dot-pulse ${className}`}>
      <div className="dot" style={{ background: dotColor }}></div>
      <div className="dot" style={{ background: dotColor }}></div>
      <div className="dot" style={{ background: dotColor }}></div>
    </div>
  );
};

// Animation Hook
export const useAnimation = (trigger: boolean, delay: number = 0) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (trigger) {
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [trigger, delay]);

  return shouldAnimate;
};
