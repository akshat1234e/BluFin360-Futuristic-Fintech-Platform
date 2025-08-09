import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowLeft,
  BarChart3,
  Target,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { 
  ParallaxElement, 
  ParallaxContainer, 
  ParallaxBackground, 
  useReducedMotion 
} from './ui/parallax';
import { TypewriterText, GlitchText, DotPulse } from './ui/animations';

export function TreasuryPage() {
  const prefersReducedMotion = useReducedMotion();

  const treasuryData = {
    id: 'treasury',
    name: 'Treasury as a Service',
    subtitle: 'TaaS',
    description: 'Smart dashboard with predictive cash flow analytics and automated treasury management. Optimize your liquidity, manage risk, and maximize returns with AI-powered treasury operations.',
    features: [
      {
        title: 'Cash Flow Forecasting',
        description: 'AI-powered predictions with 95% accuracy for up to 12 months ahead',
        icon: BarChart3
      },
      {
        title: 'Yield Optimization',
        description: 'Automated investment strategies to maximize returns on idle cash',
        icon: Target
      },
      {
        title: 'Risk Management',
        description: 'Real-time risk assessment with automated hedging strategies',
        icon: Shield
      },
      {
        title: 'Multi-currency',
        description: 'Global treasury management with 150+ currencies and real-time FX',
        icon: Globe
      }
    ],
    demo: {
      title: 'Live Treasury Dashboard',
      code: `{
  "treasury_id": "trs_ghi789",
  "total_balance": 15750000.00,
  "currency": "USD",
  "cash_flow_forecast": {
    "next_30_days": 2450000.00,
    "confidence": 0.94,
    "trend": "positive"
  },
  "yield_optimization": {
    "current_apy": 4.75,
    "projected_earnings": 748125.00,
    "strategy": "conservative_growth"
  },
  "risk_metrics": {
    "var_95": 125000.00,
    "exposure_limit": 0.15,
    "hedge_ratio": 0.82
  }
}`
    },
    stats: [
      { label: 'Forecast Accuracy', value: '95.2%' },
      { label: 'Avg Yield Increase', value: '+2.3%' },
      { label: 'Assets Under Management', value: '$12.5B' },
      { label: 'Risk Reduction', value: '67%' }
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
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Treasury as a Service</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                  <TypewriterText text={treasuryData.name} className="block" />
                  <br />
                  <span className="text-gradient-blue">
                    <GlitchText text={treasuryData.subtitle} />
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {treasuryData.description}
                </p>

                <div className="flex space-x-4">
                  <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group slide-button scale-button">
                    Start Treasury Management
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/5 border-grow">
                    View Analytics Demo
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
                      <TrendingUp className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Live Treasury Analytics</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-[#00D4FF]">Real-time Optimization</p>
                        <DotPulse color="blue" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-[#00D4FF] whitespace-pre-wrap">
                      {treasuryData.demo.code}
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
        <ParallaxElement speed={prefersReducedMotion ? 0 : 0.15}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {treasuryData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center glass rounded-xl p-6 glow-blue-hover fade-in-up stagger-${index + 1}`}
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
          <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Intelligent
                <br />
                <span className="text-gradient-blue">Treasury Management</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Advanced analytics and automation to optimize your treasury operations with predictive insights and risk management.
              </p>
            </motion.div>
          </ParallaxElement>

          <div className="grid lg:grid-cols-2 gap-8">
            {treasuryData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ParallaxElement key={feature.title} speed={prefersReducedMotion ? 0 : 0.05 * (index + 1)}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border-grow glow-blue-hover"
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
        <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-blue rounded-2xl p-12 glow-blue animated-gradient-blue"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Optimize Your Treasury
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Transform your treasury operations with AI-powered analytics and automated optimization strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group slide-button scale-button">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/5 border-grow">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </ParallaxElement>
      </section>
    </ParallaxContainer>
  );
}
