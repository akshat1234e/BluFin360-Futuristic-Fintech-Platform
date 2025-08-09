import { motion } from 'framer-motion';
import {
  Building2,
  ArrowLeft,
  Brain,
  Database,
  Zap,
  PieChart,
  ArrowRight,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { Button } from './ui/button';
import { 
  ParallaxElement, 
  ParallaxContainer, 
  ParallaxBackground, 
  useReducedMotion 
} from './ui/parallax';
import { TypewriterText, GlitchText, Spinner, DotPulse } from './ui/animations';

export function SMECreditPage() {
  const prefersReducedMotion = useReducedMotion();

  const smeCreditData = {
    id: 'sme-credit',
    name: 'SME Credit Solutions',
    subtitle: 'Digital Lending Platform',
    description: 'Comprehensive lending platform with intelligent underwriting and automated loan processing. Empower small and medium enterprises with instant credit decisions using alternative data and AI-powered risk assessment.',
    features: [
      {
        title: 'AI Underwriting',
        description: 'Machine learning models analyzing 1000+ data points for precise credit scoring',
        icon: Brain
      },
      {
        title: 'Alternative Data',
        description: 'Beyond traditional credit scores - social, transactional, and behavioral insights',
        icon: Database
      },
      {
        title: 'Instant Decisions',
        description: 'Real-time loan approvals in under 60 seconds with automated processing',
        icon: Zap
      },
      {
        title: 'Portfolio Management',
        description: 'Advanced analytics and monitoring tools for loan portfolio optimization',
        icon: PieChart
      }
    ],
    demo: {
      title: 'Live SME Credit Engine',
      code: `{
  "application_id": "sme_vwx901",
  "status": "approved",
  "loan_amount": 250000.00,
  "currency": "USD",
  "processing_time": "47s",
  "business": {
    "name": "TechStart Solutions",
    "industry": "software_development",
    "revenue_annual": 1200000.00,
    "employees": 15
  },
  "ai_assessment": {
    "credit_score": 785,
    "risk_grade": "A-",
    "approval_probability": 0.92,
    "alternative_data_score": 8.7
  },
  "loan_terms": {
    "interest_rate": 0.089,
    "term_months": 36,
    "monthly_payment": 7945.32,
    "collateral_required": false
  }
}`
    },
    stats: [
      { label: 'Decision Speed', value: '<60s' },
      { label: 'Approval Rate', value: '73%' },
      { label: 'Default Rate', value: '<2.1%' },
      { label: 'Loans Processed', value: '50K+' }
    ]
  };

  return (
    <ParallaxContainer className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Ultra-Complex Multi-layered Background with Floating Elements */}
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
        {/* Additional floating geometric elements */}
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.08} blur>
          <div className="absolute top-1/5 right-1/5 w-16 h-16 bg-[#00D4FF]/30 rotate-45"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.14} blur>
          <div className="absolute bottom-1/5 left-1/5 w-24 h-24 bg-[#00D4FF]/20 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.22} blur>
          <div className="absolute top-3/5 right-2/5 w-12 h-12 bg-[#00D4FF]/25 rotate-12"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.28} blur>
          <div className="absolute bottom-2/5 left-3/5 w-20 h-20 bg-[#00D4FF]/15 rounded-full"></div>
        </ParallaxBackground>
      </div>

      {/* Hero Section with Maximum Animation Complexity */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 animated-gradient-blue">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation with Multiple Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/5 group scale-button glow-blue-hover border-grow"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content with Typewriter + Glitch Combination */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80
                }}
                className="fade-in-left"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-blue text-[#00D4FF] mb-6 scale-button border-grow glow-blue-hover">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">SME Credit Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                  <TypewriterText text={smeCreditData.name} className="block" />
                  <br />
                  <span className="text-gradient-blue">
                    <GlitchText text={smeCreditData.subtitle} />
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed fade-in-up stagger-2">
                  {smeCreditData.description}
                </p>

                <div className="flex space-x-4 fade-in-up stagger-3">
                  <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group slide-button scale-button border-grow">
                    Apply AI Underwriting
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/5 border-grow scale-button glow-blue-hover">
                    <div className="flex items-center space-x-2">
                      <span>Portfolio Analytics</span>
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </Button>
                </div>
              </motion.div>
            </ParallaxElement>

            {/* Hero Visual with Complex Loading States */}
            <ParallaxElement speed={prefersReducedMotion ? 0 : 0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 60
                }}
                className="relative fade-in-right"
              >
                <div className="glass-blue rounded-2xl p-8 glow-blue scale-button border-grow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center scale-button border-grow">
                      <Building2 className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">
                        <GlitchText text="Live Credit Engine" />
                      </h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-[#00D4FF]">AI Processing</p>
                        <DotPulse color="blue" />
                        <Spinner size="small" color="blue" />
                        <BarChart3 className="w-4 h-4 text-[#00D4FF]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm border-grow">
                    <pre className="text-[#00D4FF] whitespace-pre-wrap">
                      {smeCreditData.demo.code}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </ParallaxElement>
          </div>
        </div>
      </section>

      {/* Stats Section with Ultra-Complex Staggered Timing */}
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
              {smeCreditData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                    rotateX: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + (index * 0.2),
                    type: "spring",
                    stiffness: 120,
                    damping: 10
                  }}
                  className={`text-center glass rounded-xl p-6 glow-blue-hover border-grow scale-button fade-in-up stagger-${index + 1}`}
                >
                  <div className="text-3xl font-black text-[#00D4FF] mb-2">
                    <TypewriterText text={stat.value} speed={30} />
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ParallaxElement>
      </section>

      {/* Features Section with Maximum Animation Layering */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.0,
                delay: 0.4,
                type: "spring",
                stiffness: 80
              }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                <GlitchText text="Intelligent" />
                <br />
                <span className="text-gradient-blue">
                  <TypewriterText text="Credit Platform" />
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto fade-in-up stagger-2">
                Revolutionary SME lending with AI-powered underwriting, alternative data analysis, and instant decision-making capabilities.
              </p>
            </motion.div>
          </ParallaxElement>

          <div className="grid lg:grid-cols-2 gap-8">
            {smeCreditData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ParallaxElement key={feature.title} speed={prefersReducedMotion ? 0 : 0.05 * (index + 1)}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -80 : 80,
                      rotateY: index % 2 === 0 ? -15 : 15,
                      scale: 0.8
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.0,
                      delay: 0.4 + (index * 0.3),
                      type: "spring",
                      stiffness: 60,
                      damping: 12
                    }}
                    className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border-grow glow-blue-hover scale-button"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 scale-button border-grow glow-blue-hover">
                        <Icon className="w-8 h-8 text-[#00D4FF]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-3">
                          <TypewriterText text={feature.title} speed={40} />
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

      {/* CTA Section with Ultimate Animation Complexity */}
      <section className="py-20 relative">
        <ParallaxElement speed={prefersReducedMotion ? 0 : 0.1}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.8,
                rotateX: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                type: "spring",
                stiffness: 60,
                damping: 15
              }}
              className="glass-blue rounded-2xl p-12 glow-blue animated-gradient-blue scale-button border-grow"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <TypewriterText text="Revolutionize" />
                <br />
                <GlitchText text="SME Lending" />
              </h2>
              <p className="text-xl text-white/80 mb-8 fade-in-up stagger-2">
                Increase approval rates by 60% and reduce processing time by 95% with our AI-powered credit platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
                <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-black font-medium group slide-button scale-button border-grow">
                  <div className="flex items-center space-x-2">
                    <span>Deploy AI Platform</span>
                    <Brain className="w-4 h-4" />
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/5 border-grow scale-button glow-blue-hover">
                  <div className="flex items-center space-x-2">
                    <span>Portfolio Dashboard</span>
                    <DotPulse color="blue" />
                    <Spinner size="small" color="blue" />
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
