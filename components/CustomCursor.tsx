import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  // Use motion values for better performance
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // More aggressive spring settings for ultra-responsive tracking
  const springConfig = {
    stiffness: 1200,
    damping: 35,
    mass: 0.03,
    restDelta: 0.001,
    restSpeed: 0.001
  };

  const trailConfig = {
    stiffness: 400,
    damping: 30,
    mass: 0.08,
    restDelta: 0.001,
    restSpeed: 0.001
  };

  // Use springs for smoother, more responsive movement
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Trailing cursor with different spring settings
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  // RAF-based position updates for maximum smoothness
  const rafRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };

    // Cancel previous RAF if it exists
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use RAF for smooth updates
    rafRef.current = requestAnimationFrame(() => {
      cursorX.set(mousePos.current.x);
      cursorY.set(mousePos.current.y);
    });
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over interactive elements
      if (target.matches('button, a, [role="button"], .cursor-pointer')) {
        setIsHovering(true);

        // Set cursor text based on element
        if (target.matches('button:contains("Start Building"), a:contains("Start Building")')) {
          setCursorText('Build');
        } else if (target.matches('button:contains("Demo"), a:contains("Demo")')) {
          setCursorText('Watch');
        } else if (target.matches('a, button')) {
          setCursorText('Click');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    // Use passive listeners for better performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);

      // Cleanup RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateMousePosition]);

  // Hide on mobile devices
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference will-change-transform"
        style={{
          x: springX,
          y: springY,
          translateX: -16,
          translateY: -16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 600,
            damping: 30,
            mass: 0.1
          }
        }}
      >
        <div className={`w-8 h-8 rounded-full border-2 transition-colors duration-100 ${
          isHovering
            ? 'border-[#00FF88] bg-[#00FF88]/20'
            : 'border-white bg-white/10'
        }`} />
      </motion.div>

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 text-xs font-medium text-white bg-black/80 px-2 py-1 rounded-full will-change-transform"
          style={{
            x: springX,
            y: springY,
            translateX: 20,
            translateY: -10,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 30,
            mass: 0.1
          }}
        >
          {cursorText}
        </motion.div>
      )}

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 will-change-transform"
        style={{
          x: trailX,
          y: trailY,
          translateX: -4,
          translateY: -4,
        }}
      >
        <div className="w-2 h-2 bg-[#00D4FF] rounded-full opacity-60" />
      </motion.div>
    </>
  );
}