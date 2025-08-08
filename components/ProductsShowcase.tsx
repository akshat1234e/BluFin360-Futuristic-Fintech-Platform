import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Shield, 
  TrendingUp, 
  FileCheck, 
  Wallet, 
  ShoppingCart, 
  Building2,
  ArrowRight,
  CheckCircle,
  Zap,

} from 'lucide-react';
import { Button } from './ui/button';


const products = [
  {
    id: 'api-banking',
    name: 'API-First Banking',
    subtitle: 'Embedded Payments',
    description: 'Modular API blocks connecting with intelligent data streams. Build banking experiences directly into your platform.',
    icon: CreditCard,
    color: 'blue',
    features: ['RESTful APIs', 'Real-time Processing', 'Webhooks', 'SDK Support'],
    demo: {
      title: 'Live API Response',
      code: `{
  "status": "success",
  "transaction_id": "tx_abc123",
  "amount": 1000.00,
  "currency": "USD",
  "processing_time": "45ms"
}`
    }
  },
  {
    id: 'escrow',
    name: 'Digital Escrow',
    subtitle: 'bluFin360 escrow+',
    description: 'Secure digital vault with automated fund allocation and intelligent dispute resolution.',
    icon: Shield,
    color: 'green',
    features: ['Multi-party Escrow', 'Smart Contracts', 'Dispute Resolution', 'Automated Release'],
    demo: {
      title: 'Escrow Status',
      progress: 75,
      status: 'Conditions Met - Auto-Release Pending'
    }
  },
  {
    id: 'treasury',
    name: 'Treasury as a Service',
    subtitle: 'TaaS',
    description: 'Smart dashboard with predictive cash flow analytics and automated treasury management.',
    icon: TrendingUp,
    color: 'blue',
    features: ['Cash Flow Forecasting', 'Yield Optimization', 'Risk Management', 'Multi-currency'],
    demo: {
      title: 'Cash Flow Prediction',
      chart: [
        { month: 'Jan', inflow: 850000, outflow: 620000 },
        { month: 'Feb', inflow: 920000, outflow: 680000 },
        { month: 'Mar', inflow: 1100000, outflow: 750000 },
        { month: 'Apr', inflow: 1250000, outflow: 820000 }
      ]
    }
  },
  {
    id: 'regtech',
    name: 'Regtech as a Service',
    subtitle: 'RaaS',
    description: 'Compliance command center with real-time monitoring and automated regulatory reporting.',
    icon: FileCheck,
    color: 'green',
    features: ['AML Monitoring', 'KYC Automation', 'Regulatory Reporting', 'Risk Scoring'],
    demo: {
      title: 'Compliance Dashboard',
      stats: {
        'AML Alerts': 0,
        'KYC Pending': 3,
        'Risk Score': 'Low',
        'Compliance': '100%'
      }
    }
  },
  {
    id: 'virtual-accounts',
    name: 'Virtual Account Solutions',
    subtitle: 'Scalable Infrastructure',
    description: 'Interconnected virtual accounts with real-time cash flow streams and automated reconciliation.',
    icon: Wallet,
    color: 'blue',
    features: ['Instant Account Creation', 'Real-time Reconciliation', 'Multi-bank Support', 'Automated Routing'],
    demo: {
      title: 'Account Network',
      accounts: [
        { id: 'VA001', balance: 125000, status: 'active' },
        { id: 'VA002', balance: 89500, status: 'active' },
        { id: 'VA003', balance: 234000, status: 'active' }
      ]
    }
  },
  {
    id: 'bnpl',
    name: 'BNPL Experience',
    subtitle: 'Instant Credit Engine',
    description: 'Buy Now Pay Later platform with instant credit decisions and flexible payment terms.',
    icon: ShoppingCart,
    color: 'green',
    features: ['Instant Approval', 'Flexible Terms', 'Risk Assessment', 'Merchant Integration'],
    demo: {
      title: 'Credit Decision',
      decision: 'APPROVED',
      amount: '$2,500',
      terms: '4 payments of $625'
    }
  },
  {
    id: 'sme-credit',
    name: 'SME Credit Solutions',
    subtitle: 'Digital Lending Platform',
    description: 'Comprehensive lending platform with intelligent underwriting and automated loan processing.',
    icon: Building2,
    color: 'blue',
    features: ['AI Underwriting', 'Alternative Data', 'Instant Decisions', 'Portfolio Management'],
    demo: {
      title: 'Loan Application',
      status: 'Processing',
      score: 785,
      probability: '94%'
    }
  }
];

export function ProductsShowcase() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF88]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-green text-[#00FF88] mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">7 Core Products</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Complete Financial
            <br />
            <span className="text-gradient-blue">Product Suite</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Everything you need to build, launch, and scale financial products. 
            From embedded banking to compliance, treasury, and credit solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-1 space-y-4">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isActive = activeProduct.id === product.id;
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveProduct(product)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? product.color === 'blue' 
                        ? 'glass-blue glow-blue' 
                        : 'glass-green glow-green'
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      product.color === 'blue' ? 'bg-[#00D4FF]/20' : 'bg-[#00FF88]/20'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        product.color === 'blue' ? 'text-[#00D4FF]' : 'text-[#00FF88]'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-white mb-1">{product.name}</h3>
                      <p className={`text-sm ${
                        product.color === 'blue' ? 'text-[#00D4FF]' : 'text-[#00FF88]'
                      }`}>
                        {product.subtitle}
                      </p>
                      <p className="text-sm text-white/70 mt-2 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    
                    {isActive && (
                      <CheckCircle className={`w-5 h-5 ${
                        product.color === 'blue' ? 'text-[#00D4FF]' : 'text-[#00FF88]'
                      }`} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Product Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Info */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        activeProduct.color === 'blue' ? 'bg-[#00D4FF]/20' : 'bg-[#00FF88]/20'
                      }`}>
                        <activeProduct.icon className={`w-8 h-8 ${
                          activeProduct.color === 'blue' ? 'text-[#00D4FF]' : 'text-[#00FF88]'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">{activeProduct.name}</h3>
                        <p className={`${
                          activeProduct.color === 'blue' ? 'text-[#00D4FF]' : 'text-[#00FF88]'
                        }`}>
                          {activeProduct.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-white/80 mb-8 text-lg leading-relaxed">
                      {activeProduct.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {activeProduct.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className={`w-5 h-5 ${
                            activeProduct.color === 'blue' ? 'text-[#00D4FF]' : 'text-[#00FF88]'
                          }`} />
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Button 
                        className={`${
                          activeProduct.color === 'blue' 
                            ? 'bg-[#00D4FF] hover:bg-[#00D4FF]/90' 
                            : 'bg-[#00FF88] hover:bg-[#00FF88]/90'
                        } text-black font-medium group`}
                      >
                        Explore Product
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="ghost" className="text-white hover:bg-white/5">
                        View Docs
                      </Button>
                    </div>
                  </div>

                  {/* Interactive Demo */}
                  <div className={`p-6 rounded-xl ${
                    activeProduct.color === 'blue' ? 'bg-[#00D4FF]/5 border border-[#00D4FF]/20' : 'bg-[#00FF88]/5 border border-[#00FF88]/20'
                  }`}>
                    <h4 className="font-black text-white mb-4">{activeProduct.demo.title}</h4>
                    
                    {/* Code Demo */}
                    {activeProduct.demo.code && (
                      <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                        <pre className="text-[#00D4FF]">{activeProduct.demo.code}</pre>
                      </div>
                    )}

                    {/* Progress Demo */}
                    {activeProduct.demo.progress && (
                      <div>
                        <div className="flex justify-between text-sm text-white/70 mb-2">
                          <span>Progress</span>
                          <span>{activeProduct.demo.progress}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                          <div 
                            className="bg-[#00FF88] h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${activeProduct.demo.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-[#00FF88] text-sm">{activeProduct.demo.status}</p>
                      </div>
                    )}

                    {/* Chart Demo */}
                    {activeProduct.demo.chart && (
                      <div className="space-y-3">
                        {activeProduct.demo.chart.map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-white/70">{item.month}</span>
                            <div className="flex space-x-4">
                              <span className="text-[#00FF88]">+${(item.inflow / 1000).toFixed(0)}K</span>
                              <span className="text-[#00D4FF]">-${(item.outflow / 1000).toFixed(0)}K</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Stats Demo */}
                    {activeProduct.demo.stats && (
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(activeProduct.demo.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-black text-[#00FF88]">{value}</div>
                            <div className="text-xs text-white/70">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Decision Demo */}
                    {activeProduct.demo.decision && (
                      <div className="text-center">
                        <div className="text-2xl font-black text-[#00FF88] mb-2">
                          {activeProduct.demo.decision}
                        </div>
                        <div className="text-white mb-2">{activeProduct.demo.amount}</div>
                        <div className="text-sm text-white/70">{activeProduct.demo.terms}</div>
                      </div>
                    )}

                    {/* Loan Demo */}
                    {activeProduct.demo.score && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-white/70">Credit Score</span>
                          <span className="text-[#00D4FF] font-black text-xl">{activeProduct.demo.score}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-white/70">Approval Probability</span>
                          <span className="text-[#00FF88] font-black">{activeProduct.demo.probability}</span>
                        </div>
                        <div className="text-center py-4">
                          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D4FF]/20 text-[#00D4FF]">
                            <div className="w-2 h-2 bg-[#00D4FF] rounded-full mr-2 animate-pulse"></div>
                            {activeProduct.demo.status}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Accounts Demo */}
                    {activeProduct.demo.accounts && (
                      <div className="space-y-3">
                        {activeProduct.demo.accounts.map((account) => (
                          <div key={account.id} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-white font-medium">{account.id}</span>
                            <div className="text-right">
                              <div className="text-[#00FF88] font-black">${account.balance.toLocaleString()}</div>
                              <div className="text-xs text-white/70 capitalize">{account.status}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}