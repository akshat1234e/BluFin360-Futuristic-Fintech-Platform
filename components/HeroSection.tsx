import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

// TypeScript declarations for UnicornStudio
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? '#00D4FF' : '#00FF88',
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, rgba(0, 0, 0, 1) 70%)' }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-blue text-[#00D4FF] mb-6">
            <div className="w-2 h-2 bg-[#00D4FF] rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Next-Generation Financial Infrastructure</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-none"
        >
          Complete Financial
          <br />
          <span className="text-gradient-blue">Infrastructure</span>
          <br />
          That <span className="text-gradient-green">Scales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Build, launch, and scale your financial products with our unified API-first platform. 
          From embedded payments to digital escrow, treasury management, and compliance solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 font-medium text-lg px-8 py-4 h-auto glow-green group"
          >
            Start Building
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-white hover:text-[#00D4FF] hover:bg-white/5 font-medium text-lg px-8 py-4 h-auto group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Financial Universe Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="relative mx-auto w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
        >
          {/* UnicornStudio Animation */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div
              data-us-project="Nd0JQ7fhzgLprcKaaPQx"
              className="w-full h-full unicorn-studio-container"
              style={{
                width: '120%',
                height: '120%',
                maxWidth: '600px',
                maxHeight: '600px',
                transform: 'scale(1.2)'
              }}
            />
          </div>

          {/* Orbiting Elements */}
          {[
            { name: 'API Banking', color: '#00D4FF', delay: 0 },
            { name: 'Escrow+', color: '#00FF88', delay: 1 },
            { name: 'Treasury', color: '#00D4FF', delay: 2 },
            { name: 'RegTech', color: '#00FF88', delay: 3 },
            { name: 'Virtual Accounts', color: '#00D4FF', delay: 4 },
            { name: 'BNPL', color: '#00FF88', delay: 5 },
            { name: 'SME Credit', color: '#00D4FF', delay: 6 }
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + item.delay * 0.2 }}
              className="absolute"
              style={{
                transform: `rotate(${index * (360 / 7)}deg) translateY(-220px) rotate(-${index * (360 / 7)}deg)`,
                top: '50%',
                left: '50%',
                marginTop: '-15px',
                marginLeft: '-60px'
              }}
            >
              <div
                className="w-30 h-9 rounded-full glass text-sm flex items-center justify-center font-medium text-white pulse-slow px-4"
                style={{
                  borderColor: item.color,
                  minWidth: '120px',
                  boxShadow: `0 0 20px ${item.color}40`
                }}
              >
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<100ms', label: 'API Response' },
            { value: '$50B+', label: 'Processed' },
            { value: '50+', label: 'Integrations' }
          ].map((metric, _index) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gradient-green mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-white/70">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}