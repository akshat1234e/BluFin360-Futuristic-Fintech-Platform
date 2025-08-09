import { useState, useEffect, useRef, ReactNode } from 'react';

// Enhanced parallax hook with performance optimizations
export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    let ticking = false;
    
    const updateScrollY = () => {
      setScrollY(window.pageYOffset);
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };
    
    const handleScroll = () => requestTick();
    
    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollY;
};

// Enhanced parallax element with data-speed support
interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  offset?: number;
  disabled?: boolean;
}

export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'vertical',
  offset = 0,
  disabled = false
}: ParallaxElementProps) => {
  const scrollY = useParallax();
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const onResize = () => {
      setElementTop(element.offsetTop);
      setClientHeight(window.innerHeight);
    };
    
    onResize();
    window.addEventListener('resize', onResize);
    
    return () => window.removeEventListener('resize', onResize);
  }, []);
  
  // Calculate parallax offset
  const parallaxOffset = disabled ? 0 : (scrollY - elementTop + offset) * speed;
  
  // Apply transform based on direction
  const transform = direction === 'vertical' 
    ? `translate3d(0, ${parallaxOffset}px, 0)`
    : `translate3d(${parallaxOffset}px, 0, 0)`;
  
  // Only apply parallax if element is in viewport
  const isInViewport = scrollY + clientHeight >= elementTop && scrollY <= elementTop + clientHeight;
  
  return (
    <div 
      ref={elementRef}
      className={className}
      style={{ 
        transform: isInViewport ? transform : 'translate3d(0, 0, 0)',
        willChange: 'transform'
      }}
      data-speed={speed}
    >
      {children}
    </div>
  );
};

// Parallax container for managing multiple elements
interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
}

export const ParallaxContainer = ({ children, className = '' }: ParallaxContainerProps) => {
  return (
    <div className={`relative ${className}`} style={{ perspective: '1000px' }}>
      {children}
    </div>
  );
};

// Parallax background component for decorative elements
interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  blur?: boolean;
}

export const ParallaxBackground = ({ 
  children, 
  speed = 0.2, 
  className = '',
  blur = false 
}: ParallaxBackgroundProps) => {
  return (
    <ParallaxElement 
      speed={speed} 
      className={`absolute inset-0 ${blur ? 'blur-3xl' : ''} ${className}`}
    >
      {children}
    </ParallaxElement>
  );
};

// Hook for scroll-triggered animations
export const useScrollTrigger = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return { isVisible, elementRef };
};

// Parallax text component with staggered animation
interface ParallaxTextProps {
  children: string;
  speed?: number;
  className?: string;
  stagger?: boolean;
}

export const ParallaxText = ({ 
  children, 
  speed = 0.1, 
  className = '',
  stagger = false 
}: ParallaxTextProps) => {
  if (!stagger) {
    return (
      <ParallaxElement speed={speed} className={className}>
        {children}
      </ParallaxElement>
    );
  }
  
  const words = children.split(' ');
  
  return (
    <div className={className}>
      {words.map((word, index) => (
        <ParallaxElement 
          key={index} 
          speed={speed + (index * 0.02)} 
          className="inline-block mr-2"
        >
          {word}
        </ParallaxElement>
      ))}
    </div>
  );
};

// Performance monitoring for parallax effects
export const useParallaxPerformance = () => {
  const [fps, setFps] = useState(60);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  
  useEffect(() => {
    let animationId: number;
    
    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime.current + 1000) {
        setFps(Math.round((frameCount.current * 1000) / (currentTime - lastTime.current)));
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };
    
    measureFPS();
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  return fps;
};

// Utility function to detect reduced motion preference
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};
