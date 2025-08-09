import { motion } from 'framer-motion';
import {
  Wallet,
  ArrowLeft,
  Zap,
  RefreshCw,
  Building2,
  Route,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { 
  ParallaxElement, 
  ParallaxContainer, 
  ParallaxBackground, 
  useReducedMotion 
} from './ui/parallax';
import { TypewriterText, GlitchText, Spinner, DotPulse } from './ui/animations';

export function VirtualAccountsPage() {
  const prefersReducedMotion = useReducedMotion();

  const virtualAccountsData = {
    id: 'virtual-accounts',
    name: 'Virtual Account Solutions',
    subtitle: 'Scalable Infrastructure',
    description: 'Interconnected virtual accounts with real-time cash flow streams and automated reconciliation. Create unlimited virtual accounts instantly with multi-bank support and intelligent routing.',
    features: [
      {
        title: 'Instant Account Creation',
        description: 'Generate virtual accounts in milliseconds with unique identifiers and routing',
        icon: Zap
      },
      {
        title: 'Real-time Reconciliation',
        description: 'Automated matching and reconciliation with sub-second processing speeds',
        icon: RefreshCw
      },
      {
        title: 'Multi-bank Support',
        description: 'Connect with 200+ banks globally through unified API infrastructure',
        icon: Building2
      },
      {
        title: 'Automated Routing',
        description: 'Intelligent payment routing based on cost, speed, and reliability metrics',
        icon: Route
      }
    ],
    demo: {
      title: 'Live Virtual Account System',
      code: `{
  "account_id": "va_pqr345",
  "status": "active",
  "balance": 125000.00,
  "currency": "USD",
  "creation_time": "45ms",
  "routing": {
    "bank_code": "CHASE_NYC",
    "account_number": "4532-1098-7654",
    "routing_number": "021000021"
  },
  "reconciliation": {
    "auto_match_rate": 0.987,
    "pending_items": 3,
    "processed_today": 1247
  },
  "real_time_streams": {
    "inbound": 15,
    "outbound": 8,
    "net_flow": "+7500.00"
  }
}`
    },
    stats: [
      { label: 'Account Creation Speed', value: '<50ms' },
      { label: 'Reconciliation Rate', value: '98.7%' },
      { label: 'Bank Connections', value: '200+' },
      { label: 'Daily Transactions', value: '5.2M+' }
    ]
  };

  return (
    <ParallaxContainer className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Multi-layered Background Elements with Mixed Parallax Speeds */}
      <div className="fixed inset-0 opacity-30">
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.1} blur>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.2} blur>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/15 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.3} blur>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D4FF]/5 rounded-full"></div>
        </ParallaxBackground>
        {/* Additional floating elements with different speeds */}
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.15} blur>
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-[#00D4FF]/8 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.25} blur>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#00D4FF]/12 rounded-full"></div>
        </ParallaxBackground>
      </div>

      {/* Hero Section with Animated Gradient Background */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 animated-gradient-blue">
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
              className="text-white hover:bg-white/5 group scale-button"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content with Mixed Animations */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="fade-in-up"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-blue text-[#00D4FF] mb-6 scale-button">
                  <Wallet className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Virtual Account Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                  <TypewriterText text={virtualAccountsData.name} className="block" />
                  <br />
                  <span className="text-gradient-blue">
                    <GlitchText text={virtualAccountsData.subtitle} />
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed fade-in-up stagger-2">
                  {virtualAccountsData.description}
                </p>

                <div className="flex space-x-4 fade-in-up stagger-3">
                  <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group slide-button scale-button">
                    Create Virtual Accounts
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/5 border-grow scale-button">
                    View Integration Guide
                  </Button>
                </div>
              </motion.div>
            </ParallaxElement>

            {/* Hero Visual with Mixed Effects */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative fade-in-right"
              >
                <div className="glass-blue rounded-2xl p-8 glow-blue scale-button">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center scale-button">
                      <Wallet className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Live Account System</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-[#00D4FF]">Real-time Processing</p>
                        <DotPulse color="blue" />
                        <Spinner size="small" color="blue" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border-grow">
                    <pre className="text-[#00D4FF] whitespace-pre-wrap">
                      {virtualAccountsData.demo.code}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </ParallaxElement>
          </div>
        </div>
      </section>

      {/* Stats Section with Staggered Timing */}
      <section className="py-20 relative">
        <ParallaxElement speed={prefersReducedMotion ? 0 : 0.15}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {virtualAccountsData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className={`text-center glass rounded-xl p-6 glow-blue-hover border-grow scale-button fade-in-up stagger-${index + 1}`}
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

      {/* Features Section with Mixed Interactive Effects */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                <TypewriterText text="Scalable" className="block" />
                <br />
                <span className="text-gradient-blue">
                  <GlitchText text="Virtual Infrastructure" />
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto fade-in-up stagger-2">
                Advanced virtual account technology with instant creation, real-time reconciliation, and intelligent routing.
              </p>
            </motion.div>
          </ParallaxElement>

          <div className="grid lg:grid-cols-2 gap-8">
            {virtualAccountsData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ParallaxElement key={feature.title} speed={prefersReducedMotion ? 0 : 0.05 * (index + 1)}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                    className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border-grow glow-blue-hover scale-button"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 scale-button">
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

      {/* CTA Section with Layered Animations */}
      <section className="py-20 relative">
        <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-blue rounded-2xl p-12 glow-blue animated-gradient-blue scale-button"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <TypewriterText text="Scale Your Operations" />
              </h2>
              <p className="text-xl text-white/80 mb-8 fade-in-up stagger-2">
                Transform your payment infrastructure with unlimited virtual accounts and real-time processing capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
                <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group slide-button scale-button">
                  Start Free Integration
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/5 border-grow scale-button">
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
