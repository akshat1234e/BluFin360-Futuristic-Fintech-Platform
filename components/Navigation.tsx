import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { LogoSVG } from './LogoSVG';


const products = [
  {
    id: 'api-banking',
    name: 'API-First Banking',
    description: 'Modular API blocks with data streams',
    color: 'blue',
    route: '/api-banking'
  },
  {
    id: 'escrow',
    name: 'Digital Escrow',
    description: 'Secure digital vault with automation',
    color: 'green',
    route: '/digital-escrow'
  },
  {
    id: 'treasury',
    name: 'Treasury as a Service',
    description: 'Smart dashboard with predictive analytics',
    color: 'blue',
    route: '/treasury'
  },
  {
    id: 'regtech',
    name: 'Regtech as a Service',
    description: 'Compliance command center',
    color: 'green',
    route: '/regtech'
  },
  {
    id: 'virtual-accounts',
    name: 'Virtual Account Solutions',
    description: 'Interconnected virtual accounts',
    color: 'blue',
    route: '/virtual-accounts'
  },
  {
    id: 'bnpl',
    name: 'BNPL Experience',
    description: 'Instant credit engine',
    color: 'green',
    route: '/bnpl'
  },
  {
    id: 'sme-credit',
    name: 'SME Credit Solutions',
    description: 'Digital lending platform',
    color: 'blue',
    route: '/sme-credit'
  }
];

export function Navigation() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (product: typeof products[0]) => {
    if (product.route) {
      navigate(product.route);
      setIsProductsOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      <div className="glass rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <LogoSVG size="md" animated={false} showTagline={false} />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center space-x-8 lg:col-start-2">
            <motion.div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-[#00D4FF] transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 glass rounded-xl p-4"
                  >
                    <div className="grid grid-cols-1 gap-3">
                      {products.map((product, index) => (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleProductClick(product)}
                          className={`group p-3 rounded-lg transition-colors ${
                            product.route
                              ? 'cursor-pointer hover:bg-white/5'
                              : 'cursor-default hover:bg-white/2'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              product.color === 'blue' ? 'bg-[#00D4FF]' : 'bg-[#00FF88]'
                            }`}></div>
                            <div>
                              <h4 className={`font-medium transition-colors ${
                                product.route
                                  ? 'text-white group-hover:text-[#00D4FF]'
                                  : 'text-white/70'
                              }`}>
                                {product.name}
                                {product.route && (
                                  <span className="ml-2 text-xs text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                  </span>
                                )}
                              </h4>
                              <p className="text-sm text-white/70 mt-1">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <button className="text-white hover:text-[#00D4FF] transition-colors">
              Solutions
            </button>
            <button className="text-white hover:text-[#00D4FF] transition-colors">
              Developers
            </button>
            <button className="text-white hover:text-[#00D4FF] transition-colors">
              Pricing
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center justify-end space-x-4 lg:col-start-3">
            <Button variant="ghost" className="text-white hover:text-[#00D4FF] hover:bg-white/5">
              Login
            </Button>
            <Button className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 font-medium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-white/10 pt-4"
            >
              <div className="space-y-4">
                <button className="block w-full text-left text-white hover:text-[#00D4FF]">
                  Products
                </button>
                <button className="block w-full text-left text-white hover:text-[#00D4FF]">
                  Solutions
                </button>
                <button className="block w-full text-left text-white hover:text-[#00D4FF]">
                  Developers
                </button>
                <button className="block w-full text-left text-white hover:text-[#00D4FF]">
                  Pricing
                </button>
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Button variant="ghost" className="w-full text-white hover:bg-white/5">
                    Login
                  </Button>
                  <Button className="w-full bg-[#00FF88] text-black hover:bg-[#00FF88]/90">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}