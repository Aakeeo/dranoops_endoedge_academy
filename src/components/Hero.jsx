import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Button from "./ui/Button";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "500+", label: "Graduates" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "8", label: "Students per Batch" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20"
    >
      {/* Beautiful Logo-Matching Gradient Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content (60% on desktop) */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1 lg:pr-12">
            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight relative"
              style={{ fontFamily: "Georgia, serif" }}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <span className="relative inline-block">
                Dr. Anoop's EndoEdge Academy
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              className="text-lg md:text-xl text-blue-100 mb-8 font-light tracking-wide relative"
              initial={{ opacity: 0, x: -40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <span className="relative inline-block">
                Sculpting Precision, Inspiring Excellence
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-300 to-white/50 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-blue-50 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              An immersive journey into the art and science of endodontics —
              guided by clinical experience, precision, and patient-centered
              care.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={() => scrollToSection("courses")}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/25 hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{
                  y: -1,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                {/* Glass reflection effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-50"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Button text */}
                <span className="relative z-10">Explore Curriculum</span>

                {/* Subtle inner glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 via-blue-300/10 to-yellow-300/10 opacity-0 rounded-lg"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </motion.div>

            {/* Social Media Icons - Subtle and elegant */}
            <motion.div
              className="flex justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="flex items-center space-x-3">
                {[
                  { icon: FaLinkedin, href: "https://linkedin.com/in/dr-anoop", label: "LinkedIn" },
                  { icon: FaFacebook, href: "https://facebook.com/endoedgeacademy", label: "Facebook" },
                  { icon: FaInstagram, href: "https://instagram.com/endoedgeacademy", label: "Instagram" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-300 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 shadow-md hover:shadow-lg group transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 1.8 }}
                    title={`Follow Dr. Anoop on ${social.label}`}
                  >
                    <social.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dr. Anoop's Image (40% on desktop) */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 100, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
                initial={{ scale: 0.7, rotateZ: -5 }}
                animate={{ scale: 1, rotateZ: 0 }}
                transition={{
                  duration: 1.4,
                  delay: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <motion.img
                  src="/DrAnoopImage.png"
                  alt="Dr. Anoop - Founder & Chief Mentor"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "crisp-edges" }}
                  initial={{ filter: "brightness(0.8) contrast(0.9)" }}
                  animate={{ filter: "brightness(1) contrast(1)" }}
                  transition={{ duration: 1, delay: 0.8 }}
                />

                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-x-0 top-4 bottom-0 bg-gradient-to-br from-yellow-300/20 via-transparent to-blue-300/20 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </motion.div>

              {/* Professional Credentials - Nameplate Style */}
              <motion.div
                className="mt-6 bg-gradient-to-r from-black/25 via-black/20 to-black/25 backdrop-blur-md rounded-lg p-4 border border-yellow-300/30 mx-auto max-w-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {/* Name */}
                <motion.div
                  className="text-center mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                >
                  <h3
                    className="text-xl font-serif text-white font-bold drop-shadow-lg mb-1"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Dr. Anoop P.
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full mx-auto"></div>
                </motion.div>

                {/* Credentials - Compact Nameplate */}
                <motion.div
                  className="text-center space-y-1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                >
                  <p className="text-sm font-semibold text-yellow-200 drop-shadow-md">
                    Microscopic Endodontist & Implantologist
                  </p>
                  <p className="text-xs text-blue-100 font-medium drop-shadow-sm">
                    BDS • MDS
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
