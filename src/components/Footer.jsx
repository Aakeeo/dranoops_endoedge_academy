import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT_INFO } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About Us", id: "about" },
    { label: "Course Modules", id: "courses" },
    { label: "Skills & Materials", id: "skills" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const courseHighlights = [
    "Rotary Root Canal Treatment",
    "IPS e.max Restorations",
    "Zirconia Crown Preparation",
    "Real Patient Clinical Experience",
    "Expert Mentorship",
    "Small Batch Training",
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/Update_logo.png"
                alt="Dr Anoop's EndoEdge Academy Logo"
                className="w-16 h-16 object-contain drop-shadow-lg"
                style={{ imageRendering: "crisp-edges" }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  Dr Anoop's EndoEdge Academy
                </h3>
                <p className="text-neutral-400 text-sm">
                  Clinical Excellence in Endodontics
                </p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">
              Transform your endodontic skills with Dr. Anoop's comprehensive
              training program. Real patient experience, expert mentorship, and
              cutting-edge techniques.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedin, href: "https://linkedin.com/in/dr-anoop", label: "LinkedIn", color: "hover:bg-blue-600" },
                { icon: FaFacebook, href: "https://facebook.com/endoedgeacademy", label: "Facebook", color: "hover:bg-blue-700" },
                { icon: FaInstagram, href: "https://instagram.com/endoedgeacademy", label: "Instagram", color: "hover:bg-pink-600" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                </motion.a>
              ))}
              
              {/* Contact Icons */}
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="w-4 h-4 text-white group-hover:text-white transition-colors" />
              </motion.a>
              
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <FaPhone className="w-4 h-4 text-white group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Course Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Course Highlights</h4>
            <ul className="space-y-3">
              {courseHighlights.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-primary-400">✓</span>
                  <span className="text-neutral-300 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📞</span>
                <div>
                  <p className="text-neutral-300 text-sm">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">✉️</span>
                <div>
                  <p className="text-neutral-300 text-sm">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📍</span>
                <div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">🕒</span>
                <div>
                  <p className="text-neutral-300 text-sm">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-neutral-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} Dr Anoop's EndoEdge Academy. All rights
                reserved.
              </p>
              <p className="mt-1">
                Empowering dental professionals with clinical excellence in
                endodontics.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <motion.button
                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("hero")}
                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors flex items-center space-x-1"
                whileHover={{ y: -2 }}
              >
                <span>Back to Top</span>
                <span>↑</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
