import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../utils/constants";
import Card from "./ui/Card";
import Button from "./ui/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const underlineElements = document.querySelectorAll(
        "#contact .elegant-underline, #contact .elegant-underline-thin"
      );

      underlineElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          element.classList.add("animate");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Qualification validation
    if (!formData.qualification) {
      newErrors.qualification = "Please select your qualification";
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const qualificationOptions = [
    { value: "", label: "Select your qualification" },
    { value: "bds", label: "BDS Graduate" },
    { value: "mds", label: "MDS Student" },
    { value: "mds-graduate", label: "MDS Graduate" },
    { value: "general-dentist", label: "General Dentist" },
    { value: "specialist", label: "Dental Specialist" },
    { value: "other", label: "Other" },
  ];

  const experienceOptions = [
    { value: "", label: "Select your experience level" },
    { value: "fresh-graduate", label: "Fresh Graduate (0-1 years)" },
    { value: "early-career", label: "Early Career (1-3 years)" },
    { value: "mid-career", label: "Mid Career (3-7 years)" },
    { value: "experienced", label: "Experienced (7+ years)" },
  ];

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="section-padding relative overflow-hidden scroll-margin-nav"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50"></div>
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl"></div>

        <div className="container-custom relative">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl blur-3xl"></div>
                <Card className="relative p-12 bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl">
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
                    Application Submitted Successfully!
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 font-['Inter'] leading-relaxed">
                    Thank you for your interest in EndoEdge Academy. We have
                    received your application and will get back to you within 24
                    hours with course details and next steps.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-['Inter'] font-semibold px-8 py-4 text-lg shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                  >
                    Submit Another Application
                  </Button>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden scroll-margin-nav"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-amber-100/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-yellow-100/50 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 rounded-full blur-xl animate-float"></div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-amber-100/80 backdrop-blur-sm border border-amber-200/50 rounded-full text-amber-700 font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="mr-2">🚀</span>
            Start Your Journey
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Apply for{" "}
            <span className="relative inline-block">
              <span className="text-amber-600">Next Batch</span>
              <span className="elegant-underline"></span>
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Take the first step towards mastering endodontics. Fill out the
            application form and we'll get back to you with course details and
            enrollment information.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form with Glass Morphism */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2 font-['Playfair_Display']">
                  Application{" "}
                  <span className="relative inline-block">
                    <span className="text-amber-600">Form</span>
                    <span className="elegant-underline-thin"></span>
                  </span>
                </h3>
                <p className="text-gray-600 font-['Inter']">
                  Join the next generation of endodontic excellence
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-['Inter']">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 font-['Inter'] ${
                        errors.name
                          ? "border-red-400 bg-red-50/50"
                          : "hover:border-amber-300"
                      }`}
                      placeholder="Dr. Your Full Name"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 font-['Inter']">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-['Inter']">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 font-['Inter'] ${
                        errors.email
                          ? "border-red-400 bg-red-50/50"
                          : "hover:border-amber-300"
                      }`}
                      placeholder="your@email.com"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 font-['Inter']">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-['Inter']">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 font-['Inter'] ${
                        errors.phone
                          ? "border-red-400 bg-red-50/50"
                          : "hover:border-amber-300"
                      }`}
                      placeholder="+91 9876543210"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2 font-['Inter']">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Qualification Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-['Inter']">
                    Qualification *
                  </label>
                  <div className="relative">
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 font-['Inter'] ${
                        errors.qualification
                          ? "border-red-400 bg-red-50/50"
                          : "hover:border-amber-300"
                      }`}
                    >
                      {qualificationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.qualification && (
                    <p className="text-red-500 text-sm mt-2 font-['Inter']">
                      {errors.qualification}
                    </p>
                  )}
                </div>

                {/* Experience Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-['Inter']">
                    Experience Level *
                  </label>
                  <div className="relative">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 font-['Inter'] ${
                        errors.experience
                          ? "border-red-400 bg-red-50/50"
                          : "hover:border-amber-300"
                      }`}
                    >
                      {experienceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-2 font-['Inter']">
                      {errors.experience}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-['Inter']">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none placeholder-gray-400 font-['Inter'] ${
                        errors.message
                          ? "border-red-400 bg-red-50/50"
                          : "hover:border-amber-300"
                      }`}
                      placeholder="Tell us about your interest in endodontics and any specific questions you have about the course..."
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 font-['Inter']">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-['Inter'] font-bold py-4 text-lg shadow-xl border-0 hover:shadow-2xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Application...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Submit Application</span>
                        <span>🚀</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Contact Details Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2 font-['Playfair_Display']">
                      Contact{" "}
                      <span className="relative inline-block">
                        <span className="text-amber-600">Information</span>
                        <span className="elegant-underline-thin"></span>
                      </span>
                    </h3>
                    <p className="text-gray-600 font-['Inter']">
                      Get in touch with our admissions team
                    </p>
                  </div>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1 font-['Playfair_Display'] text-lg">
                          Phone
                        </h4>
                        <p className="text-gray-600 font-['Inter']">
                          {CONTACT_INFO.phone}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1 font-['Playfair_Display'] text-lg">
                          Email
                        </h4>
                        <p className="text-gray-600 font-['Inter']">
                          {CONTACT_INFO.email}
                        </p>
                        <p className="text-sm text-blue-600 font-['Inter']">
                          Quick response within 24 hours
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1 font-['Playfair_Display'] text-lg">
                          Address
                        </h4>
                        <p className="text-gray-600 font-['Inter'] leading-relaxed">
                          {CONTACT_INFO.address}
                        </p>
                        <p className="text-sm text-green-600 font-['Inter']">
                          Easy metro connectivity
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1 font-['Playfair_Display'] text-lg">
                          Office Hours
                        </h4>
                        <p className="text-gray-600 font-['Inter']">
                          {CONTACT_INFO.hours}
                        </p>
                        <p className="text-sm text-purple-600 font-['Inter']">
                          Consultations by appointment
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Immediate Assistance Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-500 rounded-2xl p-8 text-white shadow-2xl">
                  <h4 className="text-2xl font-bold mb-4 font-['Playfair_Display']">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-white/90 mb-6 font-['Inter'] leading-relaxed">
                    Have questions about the course? Our admissions team is
                    ready to help you with course details, eligibility, and
                    enrollment process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="bg-white text-amber-700 hover:bg-gray-50 font-['Inter'] font-semibold shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                        onClick={() =>
                          window.open(`tel:${CONTACT_INFO.phone}`, "_self")
                        }
                      >
                        📞 Call Now
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="bg-gray-900 hover:bg-gray-800 text-white border-0 font-['Inter'] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() =>
                          window.open(`mailto:${CONTACT_INFO.email}`, "_self")
                        }
                      >
                        ✉️ Send Email
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
