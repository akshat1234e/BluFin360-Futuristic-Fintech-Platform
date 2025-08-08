import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#00FF88]/10"></div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-gradient-conic from-[#00D4FF]/20 via-transparent to-[#00FF88]/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00D4FF] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-green text-[#00FF88] mb-8 group hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="font-medium">Ready to Transform Banking?</span>
            <div className="w-2 h-2 bg-[#00FF88] rounded-full ml-2 animate-pulse"></div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          Build the Future of
          <br />
          <span className="text-gradient-blue relative">
            Financial Services
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Join leading fintech companies and enterprises already using BluFin360 
          to power their financial infrastructure. Start building today.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button 
            size="lg"
            className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 font-medium text-lg px-10 py-6 h-auto glow-green group transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Start Building Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="ghost"
            size="lg"
            className="text-white hover:text-[#00D4FF] hover:bg-white/5 font-medium text-lg px-10 py-6 h-auto border border-white/20 hover:border-[#00D4FF]/50 transition-all duration-300 group hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Schedule Demo
          </Button>
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10"
        >
          {[
            { value: '500+', label: 'Enterprise Clients', icon: '🏢' },
            { value: '$100B+', label: 'Transaction Volume', icon: '💰' },
            { value: '99.99%', label: 'System Uptime', icon: '⚡' },
            { value: '150+', label: 'Countries Supported', icon: '🌍' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 glass rounded-xl hover:glass-blue transition-all duration-300 group cursor-pointer"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-gradient-green mb-2 group-hover:text-gradient-blue transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/5"
        >
          {['SOC 2 Type II', 'PCI DSS Level 1', 'ISO 27001', 'Bank Grade Security'].map((badge, _index) => (
            <motion.div
              key={badge}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 glass rounded-full text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              🛡️ {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}