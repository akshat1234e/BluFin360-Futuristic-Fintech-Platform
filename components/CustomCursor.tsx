import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

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

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

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
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className={`w-8 h-8 rounded-full border-2 transition-colors duration-300 ${
          isHovering 
            ? 'border-[#00FF88] bg-[#00FF88]/20' 
            : 'border-white bg-white/10'
        }`} />
      </motion.div>

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 text-xs font-medium text-white bg-black/80 px-2 py-1 rounded-full"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
            opacity: 1,
            scale: 1
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          {cursorText}
        </motion.div>
      )}

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <div className="w-2 h-2 bg-[#00D4FF] rounded-full opacity-60" />
      </motion.div>
    </>
  );
}