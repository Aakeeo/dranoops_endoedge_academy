import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navigationItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Skills', id: 'skills' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-neutral-200' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/Logo.png" 
              alt="Dr Anoop's EndoEdge Academy Logo" 
              className="w-16 h-16 object-contain drop-shadow-lg"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-neutral-800" style={{ fontFamily: 'Georgia, serif' }}>
                Dr Anoop's EndoEdge Academy
              </h2>
              <p className="text-sm text-primary-600 font-medium hidden sm:block">
                Clinical Excellence in Endodontics
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-800 hover:text-primary-600 font-medium transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="block w-5 h-0.5 bg-current mb-1 rounded"
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-current mb-1 rounded"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-current rounded"
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-neutral-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                    whileHover={{ x: 10 }}
                    whileTap={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-4">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header