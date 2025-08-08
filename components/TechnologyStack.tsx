import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const technologies = [
  {
    category: 'Infrastructure',
    color: 'blue',
    icon: Cloud,
    items: [
      { name: 'Multi-Cloud Architecture', status: 'Enterprise' },
      { name: '99.99% Uptime SLA', status: 'Guaranteed' },
      { name: 'Auto-scaling', status: 'Intelligent' },
      { name: 'Global CDN', status: 'Ultra-fast' }
    ]
  },
  {
    category: 'Security',
    color: 'green',
    icon: Shield,
    items: [
      { name: 'Bank-grade Encryption', status: 'AES-256' },
      { name: 'Zero Trust Network', status: 'Advanced' },
      { name: 'Fraud Detection AI', status: 'Real-time' },
      { name: 'PCI DSS Level 1', status: 'Compliant' }
    ]
  },
  {
    category: 'Performance',
    color: 'blue',
    icon: Zap,
    items: [
      { name: 'Sub-100ms Latency', status: 'Global' },
      { name: 'Real-time Processing', status: '24/7' },
      { name: 'Edge Computing', status: 'Optimized' },
      { name: 'Smart Caching', status: 'Intelligent' }
    ]
  },
  {
    category: 'Compliance',
    color: 'green',
    icon: CheckCircle,
    items: [
      { name: 'SOC 2 Type II', status: 'Certified' },
      { name: 'GDPR Compliant', status: 'Full' },
      { name: 'ISO 27001', status: 'Certified' },
      { name: 'PCI DSS', status: 'Level 1' }
    ]
  }
];

const integrations = [
  { name: 'Stripe', logo: 'S', category: 'Payments' },
  { name: 'Plaid', logo: 'P', category: 'Banking' },
  { name: 'Twilio', logo: 'T', category: 'Communications' },
  { name: 'AWS', logo: 'A', category: 'Infrastructure' },
  { name: 'Salesforce', logo: 'SF', category: 'CRM' },
  { name: 'MongoDB', logo: 'M', category: 'Database' },
  { name: 'Auth0', logo: 'A0', category: 'Authentication' },
  { name: 'Datadog', logo: 'D', category: 'Monitoring' }
];

export function TechnologyStack() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#00FF88]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-blue text-[#00D4FF] mb-6">
            <Database className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Enterprise Architecture</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Built for
            <br />
            <span className="text-gradient-green">Enterprise Scale</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Military-grade security, enterprise reliability, and global performance. 
            Built on cutting-edge technology that scales with your ambitions.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            
            return (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  tech.color === 'blue' ? 'glass-blue' : 'glass-green'
                } group hover:scale-105 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  tech.color === 'blue' ? 'bg-[#00D4FF]/20' : 'bg-[#00FF88]/20'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    tech.color === 'blue' ? 'text-[#00D4FF]' : 'text-[#00FF88]'
                  }`} />
                </div>
                
                <h3 className="font-black text-white mb-4">{tech.category}</h3>
                
                <div className="space-y-3">
                  {tech.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between">
                      <span className="text-white/80 text-sm flex-1">{item.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tech.color === 'blue' 
                          ? 'bg-[#00D4FF]/20 text-[#00D4FF]' 
                          : 'bg-[#00FF88]/20 text-[#00FF88]'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass rounded-2xl p-8 mb-20"
        >
          <h3 className="text-2xl font-black text-white text-center mb-8">
            System Architecture
          </h3>
          
          <div className="relative">
            {/* Core API Layer */}
            <div className="flex justify-center mb-8">
              <div className="glass-blue rounded-xl p-6 glow-blue">
                <div className="text-center">
                  <div className="text-xl font-black text-white mb-2">BluFin360 Core API</div>
                  <div className="text-sm text-[#00D4FF]">Unified Financial Infrastructure</div>
                </div>
              </div>
            </div>
            
            {/* Service Layers */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Banking Services', services: ['Payments', 'Accounts', 'Cards'] },
                { name: 'Compliance Engine', services: ['KYC/AML', 'Risk', 'Reporting'] },
                { name: 'Data Analytics', services: ['ML/AI', 'Insights', 'Predictions'] }
              ].map((layer, _index) => (
                <div key={layer.name} className="glass rounded-lg p-4">
                  <h4 className="font-black text-white mb-3 text-center">{layer.name}</h4>
                  <div className="space-y-2">
                    {layer.services.map((service) => (
                      <div key={service} className="text-center py-2 px-3 bg-white/5 rounded text-sm text-white/80">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Infrastructure Layer */}
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 glass-green rounded-lg">
                <Globe className="w-5 h-5 text-[#00FF88] mr-2" />
                <span className="text-white font-medium">Global Infrastructure & Security</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-black text-white mb-8">
            Integration Ecosystem
          </h3>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-2 glass rounded-xl flex items-center justify-center group-hover:glass-blue transition-all duration-300">
                  <span className="font-black text-white group-hover:text-[#00D4FF]">
                    {integration.logo}
                  </span>
                </div>
                <div className="text-xs text-white/70 group-hover:text-white transition-colors">
                  {integration.name}
                </div>
              </motion.div>
            ))}
          </div>
          
          <Button className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 font-medium group">
            View All Integrations
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}