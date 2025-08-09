import { motion } from 'framer-motion';
import {
  CreditCard,
  ArrowLeft,
  Code,
  Zap,
  Globe,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import {
  ParallaxElement,
  ParallaxContainer,
  ParallaxBackground,
  useReducedMotion
} from './ui/parallax';

export function ApiBankingPage() {
  const prefersReducedMotion = useReducedMotion();
  
  const apiBankingData = {
    id: 'api-banking',
    name: 'API-First Banking',
    subtitle: 'Embedded Payments',
    description: 'Modular API blocks connecting with intelligent data streams. Build banking experiences directly into your platform with enterprise-grade security and real-time processing.',
    features: [
      {
        title: 'RESTful APIs',
        description: 'Clean, intuitive REST endpoints with comprehensive documentation',
        icon: Code
      },
      {
        title: 'Real-time Processing',
        description: 'Sub-second transaction processing with instant confirmations',
        icon: Zap
      },
      {
        title: 'Webhooks',
        description: 'Real-time event notifications for seamless integration',
        icon: Globe
      },
      {
        title: 'SDK Support',
        description: 'Native SDKs for popular programming languages',
        icon: Shield
      }
    ],
    demo: {
      title: 'Live API Response',
      code: `{
  "status": "success",
  "transaction_id": "tx_abc123",
  "amount": 1000.00,
  "currency": "USD",
  "processing_time": "45ms",
  "timestamp": "2024-01-15T10:30:00Z",
  "merchant": {
    "id": "merchant_xyz789",
    "name": "TechCorp Solutions"
  },
  "payment_method": {
    "type": "card",
    "last_four": "4242",
    "brand": "visa"
  }
}`
    },
    stats: [
      { label: 'API Uptime', value: '99.99%' },
      { label: 'Avg Response Time', value: '45ms' },
      { label: 'Daily Transactions', value: '2.5M+' },
      { label: 'Global Endpoints', value: '15+' }
    ]
  };

  return (
    <ParallaxContainer className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Elements with Parallax */}
      <div className="fixed inset-0 opacity-30">
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.2} blur>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.3} blur>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/15 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.1} blur>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D4FF]/5 rounded-full"></div>
        </ParallaxBackground>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/5 group"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-blue text-[#00D4FF] mb-6">
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">API-First Banking</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                  {apiBankingData.name}
                  <br />
                  <span className="text-gradient-blue">{apiBankingData.subtitle}</span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {apiBankingData.description}
                </p>

                <div className="flex space-x-4">
                  <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group">
                    Start Integration
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/5">
                    View Documentation
                  </Button>
                </div>
              </motion.div>
            </ParallaxElement>

            {/* Hero Visual */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-blue rounded-2xl p-8 glow-blue">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center">
                      <CreditCard className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Live API Demo</h3>
                      <p className="text-[#00D4FF]">Real-time Processing</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-[#00D4FF] whitespace-pre-wrap">
                      {apiBankingData.demo.code}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </ParallaxElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <ParallaxElement speed={0.15}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {apiBankingData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass rounded-xl p-6"
                >
                  <div className="text-3xl font-black text-[#00D4FF] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ParallaxElement>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxElement speed={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Powerful
                <br />
                <span className="text-gradient-blue">API Features</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to build world-class financial applications with enterprise-grade reliability.
              </p>
            </motion.div>
          </ParallaxElement>

          <div className="grid lg:grid-cols-2 gap-8">
            {apiBankingData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ParallaxElement key={feature.title} speed={0.05 * (index + 1)}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-[#00D4FF]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ParallaxElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <ParallaxElement speed={0.1}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-blue rounded-2xl p-12 glow-blue"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Build?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start integrating our API-First Banking solution today and transform your financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group">
                  Get API Keys
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/5">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </ParallaxElement>
      </section>
    </ParallaxContainer>
  );
}
