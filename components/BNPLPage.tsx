import { motion } from 'framer-motion';
import {
  ShoppingCart,
  ArrowLeft,
  Zap,
  Calendar,
  Target,
  Store,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { 
  ParallaxElement, 
  ParallaxContainer, 
  ParallaxBackground, 
  useReducedMotion 
} from './ui/parallax';
import { TypewriterText, GlitchText, Spinner, DotPulse } from './ui/animations';

export function BNPLPage() {
  const prefersReducedMotion = useReducedMotion();

  const bnplData = {
    id: 'bnpl',
    name: 'BNPL Experience',
    subtitle: 'Instant Credit Engine',
    description: 'Buy Now Pay Later platform with instant credit decisions and flexible payment terms. Empower customers with smart financing options while reducing merchant risk through AI-powered assessment.',
    features: [
      {
        title: 'Instant Approval',
        description: 'Real-time credit decisions in under 2 seconds with 95% approval accuracy',
        icon: Zap
      },
      {
        title: 'Flexible Terms',
        description: 'Customizable payment plans from 3 to 36 months with dynamic interest rates',
        icon: Calendar
      },
      {
        title: 'Risk Assessment',
        description: 'Advanced ML models analyzing 500+ data points for precise risk scoring',
        icon: Target
      },
      {
        title: 'Merchant Integration',
        description: 'Seamless checkout integration with 1-click deployment for any platform',
        icon: Store
      }
    ],
    demo: {
      title: 'Live BNPL Transaction',
      code: `{
  "transaction_id": "bnpl_stu678",
  "status": "approved",
  "purchase_amount": 899.99,
  "currency": "USD",
  "approval_time": "1.8s",
  "customer": {
    "credit_score": 742,
    "risk_level": "low",
    "approval_probability": 0.94
  },
  "payment_plan": {
    "installments": 4,
    "amount_per_payment": 224.99,
    "frequency": "bi_weekly",
    "interest_rate": 0.0
  },
  "merchant": {
    "id": "merchant_abc789",
    "commission_rate": 0.035,
    "settlement_time": "24h"
  }
}`
    },
    stats: [
      { label: 'Approval Speed', value: '<2s' },
      { label: 'Approval Rate', value: '87%' },
      { label: 'Default Rate', value: '<1.2%' },
      { label: 'Merchant Partners', value: '15K+' }
    ]
  };

  return (
    <ParallaxContainer className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Complex Multi-layered Background with Mixed Speeds */}
      <div className="fixed inset-0 opacity-30">
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.1} blur>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF88]/10 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.2} blur>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF88]/15 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.3} blur>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88]/5 rounded-full"></div>
        </ParallaxBackground>
        {/* Additional floating elements with varied speeds */}
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.12} blur>
          <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-[#00FF88]/20 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.18} blur>
          <div className="absolute bottom-1/6 left-1/6 w-48 h-48 bg-[#00FF88]/8 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.25} blur>
          <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-[#00FF88]/25 rounded-full"></div>
        </ParallaxBackground>
      </div>

      {/* Hero Section with Animated Gradient + Parallax */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 animated-gradient-green">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation with Scale Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/5 group scale-button glow-green-hover"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content with Mixed Glitch + Slide Effects */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="fade-in-left"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-green text-[#00FF88] mb-6 scale-button border-grow">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">BNPL Experience</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                  <GlitchText text={bnplData.name} />
                  <br />
                  <span className="text-gradient-green">
                    <TypewriterText text={bnplData.subtitle} />
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed fade-in-up stagger-2">
                  {bnplData.description}
                </p>

                <div className="flex space-x-4 fade-in-up stagger-3">
                  <Button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-medium group slide-button scale-button">
                    Enable BNPL Checkout
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/5 border-grow scale-button glow-green-hover">
                    View Integration Demo
                  </Button>
                </div>
              </motion.div>
            </ParallaxElement>

            {/* Hero Visual with Dot Pulse + Spinner Combinations */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative fade-in-right"
              >
                <div className="glass-green rounded-2xl p-8 glow-green scale-button border-grow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#00FF88]/20 flex items-center justify-center scale-button">
                      <ShoppingCart className="w-8 h-8 text-[#00FF88]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Live BNPL Engine</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-[#00FF88]">Instant Decisions</p>
                        <DotPulse color="green" />
                        <Spinner size="small" color="green" />
                        <CheckCircle className="w-4 h-4 text-[#00FF88]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border-grow">
                    <pre className="text-[#00FF88] whitespace-pre-wrap">
                      {bnplData.demo.code}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </ParallaxElement>
          </div>
        </div>
      </section>

      {/* Stats Section with Complex Staggered Timing */}
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
              {bnplData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + (index * 0.15),
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`text-center glass rounded-xl p-6 glow-green-hover border-grow scale-button fade-in-up stagger-${index + 1}`}
                >
                  <div className="text-3xl font-black text-[#00FF88] mb-2">
                    <GlitchText text={stat.value} />
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ParallaxElement>
      </section>

      {/* Features Section with Layered Interactive Effects */}
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
                <GlitchText text="Smart" />
                <br />
                <span className="text-gradient-green">
                  <TypewriterText text="Credit Solutions" />
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto fade-in-up stagger-2">
                Advanced BNPL technology with instant approvals, flexible terms, and intelligent risk assessment for merchants and customers.
              </p>
            </motion.div>
          </ParallaxElement>

          <div className="grid lg:grid-cols-2 gap-8">
            {bnplData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ParallaxElement key={feature.title} speed={prefersReducedMotion ? 0 : 0.05 * (index + 1)}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -50 : 50,
                      rotateY: index % 2 === 0 ? -10 : 10
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + (index * 0.2),
                      type: "spring",
                      stiffness: 80
                    }}
                    className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border-grow glow-green-hover scale-button"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-[#00FF88]/20 flex items-center justify-center flex-shrink-0 scale-button border-grow">
                        <Icon className="w-8 h-8 text-[#00FF88]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-3">
                          <GlitchText text={feature.title} />
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

      {/* CTA Section with Maximum Animation Mixing */}
      <section className="py-20 relative">
        <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="glass-green rounded-2xl p-12 glow-green animated-gradient-green scale-button border-grow"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <GlitchText text="Transform Checkout" />
                <br />
                <TypewriterText text="Experience" />
              </h2>
              <p className="text-xl text-white/80 mb-8 fade-in-up stagger-2">
                Boost conversion rates by 40% with instant BNPL options and reduce cart abandonment with flexible payment solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
                <Button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-medium group slide-button scale-button border-grow">
                  Launch BNPL Integration
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/5 border-grow scale-button glow-green-hover">
                  <div className="flex items-center space-x-2">
                    <span>View Success Stories</span>
                    <DotPulse color="green" />
                  </div>
                </Button>
              </div>
            </motion.div>
          </div>
        </ParallaxElement>
      </section>
    </ParallaxContainer>
  );
}
