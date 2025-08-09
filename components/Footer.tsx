import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { LogoSVG } from './LogoSVG';


export function Footer() {
  const navigate = useNavigate();

  const productLinks = [
    { name: 'API-First Banking', route: '/api-banking' },
    { name: 'Digital Escrow', route: '/digital-escrow' },
    { name: 'Treasury as a Service', route: '/treasury' },
    { name: 'Regtech as a Service', route: '/regtech' },
    { name: 'Virtual Accounts', route: null },
    { name: 'BNPL Experience', route: null },
    { name: 'SME Credit Solutions', route: null }
  ];

  const handleProductClick = (link: typeof productLinks[0]) => {
    if (link.route) {
      navigate(link.route);
    }
  };
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00FF88]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 border-b border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-4">
              Stay ahead of the
              <span className="text-gradient-blue"> financial future</span>
            </h3>
            <p className="text-white/80 mb-8">
              Get the latest updates on financial technology, product releases, and industry insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 font-medium group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <LogoSVG size="md" animated={false} showTagline={true} />
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Complete financial infrastructure that scales with your ambitions. 
                  Build, launch, and scale financial products with our unified API-first platform.
                </p>
                
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, href: '#' },
                    { icon: Linkedin, href: '#' },
                    { icon: Github, href: '#' },
                    { icon: Mail, href: '#' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 glass rounded-lg flex items-center justify-center text-white/70 hover:text-[#00D4FF] transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Products */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-black text-white mb-6">Products</h4>
                <div className="space-y-3">
                  {productLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleProductClick(link)}
                      className={`block text-left text-sm transition-colors ${
                        link.route
                          ? 'text-white/70 hover:text-[#00D4FF] cursor-pointer'
                          : 'text-white/50 cursor-default'
                      }`}
                    >
                      {link.name}
                      {link.route && (
                        <span className="ml-1 text-xs opacity-0 hover:opacity-100 transition-opacity">
                          →
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Solutions */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-black text-white mb-6">Solutions</h4>
                <div className="space-y-3">
                  {[
                    'Enterprise Banking',
                    'Fintech Platforms',
                    'Marketplace Payments',
                    'B2B Lending',
                    'Digital Wallets',
                    'Compliance Suite'
                  ].map((link) => (
                    <a 
                      key={link}
                      href="#"
                      className="block text-white/70 hover:text-[#00D4FF] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Developers */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-black text-white mb-6">Developers</h4>
                <div className="space-y-3">
                  {[
                    'API Documentation',
                    'SDKs & Libraries',
                    'Code Examples',
                    'Webhooks',
                    'Testing Tools',
                    'Status Page'
                  ].map((link) => (
                    <a 
                      key={link}
                      href="#"
                      className="block text-white/70 hover:text-[#00D4FF] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-black text-white mb-6">Company</h4>
                <div className="space-y-3">
                  {[
                    'About Us',
                    'Careers',
                    'Blog',
                    'Press',
                    'Partners',
                    'Contact'
                  ].map((link) => (
                    <a 
                      key={link}
                      href="#"
                      className="block text-white/70 hover:text-[#00D4FF] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Security Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white/70">
                <Shield className="w-5 h-5 text-[#00FF88]" />
                <span className="text-sm">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Shield className="w-5 h-5 text-[#00FF88]" />
                <span className="text-sm">PCI DSS Level 1</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Zap className="w-5 h-5 text-[#00D4FF]" />
                <span className="text-sm">99.99% Uptime</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                  <a 
                    key={link}
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="text-sm text-white/50">
                © 2024 BluFin360. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}