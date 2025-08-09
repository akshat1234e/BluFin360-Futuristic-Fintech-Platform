import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProductsShowcase } from './components/ProductsShowcase';
import { TechnologyStack } from './components/TechnologyStack';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ApiBankingPage } from './components/ApiBankingPage';

// Homepage component
function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsShowcase />
      <TechnologyStack />
      <FinalCTA />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Force dark mode for BluFin360
    document.documentElement.classList.add('dark');
    
    // Hide default cursor for custom cursor
    document.body.style.cursor = 'none';
    
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Enhanced scroll performance
    const handleScroll = () => {
      // Add scroll-based optimizations here if needed
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Preload critical resources
    const preloadResources = async () => {
      // Simulate resource loading
      await new Promise(resolve => setTimeout(resolve, 100));
      setIsReady(true);
    };

    preloadResources();

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.cursor = 'auto';
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router basename="/BluFin360-Futuristic-Fintech-Platform">
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && isReady && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main Application */}
      <AnimatePresence>
        {!isLoading && (
          <>
            {/* Accessibility Skip Link */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>

            {/* Enhanced UI Components */}
            <ScrollProgress />
            <CustomCursor />
            
            {/* Navigation */}
            <Navigation />
            
            {/* Main Content */}
            <main id="main-content" className="relative">
              <Suspense fallback={<div className="min-h-screen bg-black" />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/api-banking" element={<ApiBankingPage />} />
                </Routes>
              </Suspense>
            </main>

            {/* Footer - Only show on homepage */}
            <Routes>
              <Route path="/" element={<Footer />} />
            </Routes>

            {/* Performance Monitoring */}
            <div id="analytics-ready" style={{ display: 'none' }} />
          </>
        )}
      </AnimatePresence>

      {/* Global Styles for Enhanced UX */}
      <style>{`
        /* Smooth scrolling for all elements */
        * {
          scroll-behavior: smooth;
        }

        /* Enhanced selection colors */
        ::selection {
          background: rgba(0, 212, 255, 0.3);
          color: white;
        }

        ::-moz-selection {
          background: rgba(0, 212, 255, 0.3);
          color: white;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00D4FF, #00FF88);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00FF88, #00D4FF);
        }

        /* Firefox scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #00D4FF rgba(255, 255, 255, 0.05);
        }

        /* Prevent text selection on interactive elements */
        button, .cursor-pointer {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        /* Enhanced focus states */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        textarea:focus-visible {
          outline: 2px solid #00D4FF;
          outline-offset: 2px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .glass {
            background: rgba(255, 255, 255, 0.15) !important;
            border: 2px solid rgba(255, 255, 255, 0.4) !important;
          }

          .text-white\\/80 {
            color: white !important;
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Performance optimizations */
        .glass {
          will-change: transform;
          transform: translateZ(0);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }

          .parallax-element {
            transform: none !important;
          }
        }

        /* Print styles */
        @media print {
          .fixed, .absolute {
            position: static !important;
          }

          .bg-black {
            background: white !important;
            color: black !important;
          }

          .text-white {
            color: black !important;
          }
        }

        /* Loading states */
        .loading {
          pointer-events: none;
          opacity: 0.7;
        }

        /* Accessibility improvements */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Skip link for keyboard navigation */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #00D4FF;
          color: black;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
        }

        .skip-link:focus {
          top: 6px;
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .glass {
            background: rgba(255, 255, 255, 0.1) !important;
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
          }
        }
        
        /* Print styles */
        @media print {
          .fixed, .absolute {
            position: static !important;
          }
          
          .bg-black {
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
      </div>
    </Router>
  );
}