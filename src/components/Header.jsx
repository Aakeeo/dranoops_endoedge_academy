import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Courses", id: "courses" },
    { label: "Program Details", id: "skills" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-amber-100/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="cursor-pointer group"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <div
              className={`relative p-3 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-white/5"
                  : "bg-black/15 backdrop-blur-sm group-hover:bg-black/25 shadow-md"
              }`}
            >
              <img
                src="/Update_logo.png"
                alt="Dr Anoop's EndoEdge Academy Logo"
                className={`w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain transition-all duration-400 filter ${
                  isScrolled
                    ? "drop-shadow-lg group-hover:drop-shadow-xl brightness-100"
                    : "drop-shadow-md group-hover:drop-shadow-lg brightness-105 contrast-110"
                }`}
                style={{ imageRendering: "crisp-edges" }}
              />
              {!isScrolled && (
                <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-300"></div>
              )}
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-all duration-300 py-2.5 px-3 group text-sm tracking-wider ${
                  isScrolled
                    ? "text-neutral-600 hover:text-amber-700"
                    : "text-white hover:text-amber-100 drop-shadow-md"
                } hover:scale-105`}
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontSize: "0.8125rem",
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                <div
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-4/5 transition-all duration-300 ease-out rounded-full ${
                    isScrolled
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 shadow-sm"
                      : "bg-gradient-to-r from-amber-200 to-yellow-100 shadow-md"
                  }`}
                ></div>
              </motion.button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className={`font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                  : "bg-white/95 hover:bg-white text-amber-800 hover:text-amber-900 backdrop-blur-sm shadow-md"
              }`}
            >
              Apply Now
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2.5 rounded-xl focus:outline-none transition-all duration-300 ${
              isScrolled
                ? "text-neutral-600 hover:text-amber-600 hover:bg-amber-50"
                : "text-white hover:text-amber-200 hover:bg-white/10 drop-shadow-md"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="block w-5 h-0.5 bg-current mb-1.5 rounded-full"
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-current mb-1.5 rounded-full"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-current rounded-full"
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`lg:hidden py-6 ${
                isScrolled
                  ? "border-t border-amber-100/50 bg-white/95 backdrop-blur-xl"
                  : "border-t border-white/20 bg-black/20 backdrop-blur-md"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? "text-neutral-600 hover:text-amber-700 hover:bg-amber-50"
                        : "text-white hover:text-amber-100 hover:bg-white/10"
                    }`}
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontWeight: "500",
                      letterSpacing: "0.025em",
                    }}
                    whileHover={{ x: 8 }}
                    whileTap={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <div className="pt-4">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 ${
                      isScrolled
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg"
                        : "bg-white/95 hover:bg-white text-amber-800 hover:text-amber-900 shadow-md"
                    }`}
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
  );
};

export default Header;
