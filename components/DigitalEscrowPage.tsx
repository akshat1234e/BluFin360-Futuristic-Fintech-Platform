import { motion } from 'framer-motion';
import {
  Shield,
  ArrowLeft,
  Users,
  FileText,
  Scale,
  Clock,
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

export function DigitalEscrowPage() {
  const prefersReducedMotion = useReducedMotion();

  const escrowData = {
    id: 'digital-escrow',
    name: 'Digital Escrow',
    subtitle: 'bluFin360 escrow+',
    description: 'Secure digital vault with automated fund allocation and intelligent dispute resolution. Multi-party escrow solutions with smart contract integration for complete transaction security.',
    features: [
      {
        title: 'Multi-party Escrow',
        description: 'Support for complex transactions with multiple stakeholders and conditional releases',
        icon: Users
      },
      {
        title: 'Smart Contracts',
        description: 'Automated execution based on predefined conditions and milestones',
        icon: FileText
      },
      {
        title: 'Dispute Resolution',
        description: 'AI-powered mediation system with transparent resolution processes',
        icon: Scale
      },
      {
        title: 'Automated Release',
        description: 'Instant fund release upon condition fulfillment with audit trails',
        icon: Clock
      }
    ],
    demo: {
      title: 'Live Escrow Transaction',
      code: `{
  "escrow_id": "esc_def456",
  "status": "funds_held",
  "total_amount": 50000.00,
  "currency": "USD",
  "parties": {
    "buyer": "buyer_abc123",
    "seller": "seller_xyz789",
    "arbitrator": "arb_mno345"
  },
  "conditions": [
    {
      "type": "milestone_completion",
      "status": "pending",
      "due_date": "2024-02-15T00:00:00Z"
    }
  ],
  "smart_contract": {
    "address": "0x742d35Cc6634C0532925a3b8D",
    "status": "active"
  }
}`
    },
    stats: [
      { label: 'Escrow Security', value: '100%' },
      { label: 'Avg Resolution Time', value: '2.3 days' },
      { label: 'Funds Protected', value: '$2.8B+' },
      { label: 'Success Rate', value: '99.7%' }
    ]
  };

  return (
    <ParallaxContainer className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Elements with Parallax */}
      <div className="fixed inset-0 opacity-30">
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.2} blur>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF88]/10 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.3} blur>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF88]/15 rounded-full"></div>
        </ParallaxBackground>
        <ParallaxBackground speed={prefersReducedMotion ? 0 : 0.1} blur>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88]/5 rounded-full"></div>
        </ParallaxBackground>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 animated-gradient-green">
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
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-green text-[#00FF88] mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Digital Escrow</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                  <TypewriterText text={escrowData.name} className="block" />
                  <br />
                  <span className="text-gradient-green">
                    <GlitchText text={escrowData.subtitle} />
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {escrowData.description}
                </p>

                <div className="flex space-x-4">
                  <Button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-medium group slide-button scale-button">
                    Start Escrow
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" className="text-white hover:bg-white/5 border-grow">
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
                <div className="glass-green rounded-2xl p-8 glow-green">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#00FF88]/20 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-[#00FF88]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Live Escrow Demo</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-[#00FF88]">Secure Transaction</p>
                        <DotPulse color="green" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-[#00FF88] whitespace-pre-wrap">
                      {escrowData.demo.code}
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
              {escrowData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center glass rounded-xl p-6 glow-green-hover fade-in-up stagger-${index + 1}`}
                >
                  <div className="text-3xl font-black text-[#00FF88] mb-2">
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
                Secure
                <br />
                <span className="text-gradient-green">Escrow Features</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Advanced escrow technology with multi-party support, smart contracts, and automated dispute resolution.
              </p>
            </motion.div>
          </ParallaxElement>

          <div className="grid lg:grid-cols-2 gap-8">
            {escrowData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ParallaxElement key={feature.title} speed={prefersReducedMotion ? 0 : 0.05 * (index + 1)}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border-grow glow-green-hover"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-xl bg-[#00FF88]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-[#00FF88]" />
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
              className="glass-green rounded-2xl p-12 glow-green animated-gradient-green"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Secure Your Transactions
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start using our digital escrow solution today and protect your high-value transactions with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-medium group slide-button scale-button">
                  Create Escrow Account
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/5 border-grow">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </ParallaxElement>
      </section>
    </ParallaxContainer>
  );
}
