import { useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import Button from "./ui/Button";

const Skills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const underlineElements = document.querySelectorAll(
        "#skills .elegant-underline, #skills .elegant-underline-thin"
      );

      underlineElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          element.classList.add("animate");
        }
      });
    };

    // Check on mount
    handleScroll();

    // Check on scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-white scroll-margin-nav">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="mr-2">📅</span>
            Program Details
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Course Duration{" "}
            <span className="relative inline-block">
              <span className="text-amber-600">& Timing</span>
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
            Complete program structure, timing, and investment details for your
            comprehensive endodontic training journey.
          </motion.p>
        </motion.div>

        {/* Course Duration & Fee Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Duration & Timing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-gradient-to-br from-white via-amber-50/30 to-blue-50/30 p-10 rounded-3xl shadow-2xl border-2 border-amber-200/50 backdrop-blur-sm">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-3xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 font-['Playfair_Display']">
                      Course Duration & Timing
                    </h3>
                    <p className="text-amber-600 font-medium font-['Inter']">
                      Comprehensive Training Schedule
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-100 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-4 font-['Playfair_Display'] text-xl">
                      📚 Total Duration: 4 to 5 Months
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700 font-['Inter']">
                        <span className="text-amber-500 mr-3 text-lg">📖</span>
                        <span className="font-semibold">Number of Modules:</span>
                        <span className="ml-2 text-amber-700 font-bold">3</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-md">
                    <h4 className="font-bold text-gray-800 mb-4 font-['Playfair_Display'] text-xl">
                      🕐 Timing
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700 font-['Inter']">
                        <span className="text-blue-500 mr-3 text-lg">📆</span>
                        <span className="font-semibold">Monday to Saturday:</span>
                        <span className="ml-2 text-blue-700 font-bold">10:00 AM – 2:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right Column - Course Fee */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white via-amber-50/50 to-orange-50/50 p-10 rounded-3xl shadow-2xl border-2 border-amber-200/50 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">�</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 font-['Playfair_Display'] mb-2">
                    Course Fee
                  </h4>
                </div>

                <div className="text-center space-y-6">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-2xl shadow-lg">
                    <div className="text-5xl md:text-6xl font-bold text-white font-['Playfair_Display'] mb-2 tracking-tight">
                      ₹2,80,000
                    </div>
                    <div className="text-xl text-amber-100 font-['Inter'] font-medium">
                      Only
                    </div>
                  </div>
                  
                  <div className="text-lg text-gray-600 font-['Inter'] leading-relaxed font-medium">
                    (INR Two Lakh Eighty Thousand only)
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-5 rounded-xl border-2 border-amber-200 shadow-inner">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl">💡</span>
                      <span className="text-amber-800 font-bold font-['Inter'] text-lg">
                        Complete Package Includes:
                      </span>
                    </div>
                    <div className="space-y-2 text-amber-700 font-medium font-['Inter']">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-amber-600">✓</span>
                        <span>All premium materials & equipment</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-amber-600">✓</span>
                        <span>Individual working station</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-amber-600">✓</span>
                        <span>Study materials & certification</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-lg">
                    <div className="text-sm font-bold uppercase tracking-wider mb-1">
                      🎯 Best Value Investment
                    </div>
                    <div className="text-lg font-semibold">
                      Transform Your Career in 4-5 Months
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Salient Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
              ⭐ Salient Features of{" "}
              <span className="relative inline-block">
                <span className="text-amber-600">the Program</span>
                <span className="elegant-underline-thin"></span>
              </span>
            </h3>
            <p className="text-lg text-gray-600 font-['Inter'] max-w-2xl mx-auto">
              Comprehensive features that make our program unique and valuable
              for your professional development
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Track Record */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-amber-50 group-hover:to-yellow-50">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 font-['Playfair_Display'] group-hover:text-amber-700 transition-colors">
                    Track Record
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 text-lg mt-1">🎯</span>
                    <span className="text-gray-700 font-['Inter'] leading-relaxed">
                      <strong>10 years</strong> of experience in training both Undergraduate 
                      and Postgraduate dental professionals
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-500 text-lg mt-1">🎓</span>
                    <span className="text-gray-700 font-['Inter'] leading-relaxed">
                      <strong>120+ graduates</strong> successfully completed training
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Clinical Exposure */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 font-['Playfair_Display'] group-hover:text-blue-700 transition-colors">
                    Clinical Exposure
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-lg mt-1">🏥</span>
                    <span className="text-gray-700 font-['Inter'] leading-relaxed">
                      <strong>Minimum 50 clinical cases</strong> assured per participant
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-lg mt-1">👥</span>
                    <span className="text-gray-700 font-['Inter'] leading-relaxed">
                      <strong>All patients provided</strong> by the academy
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Certification and Career Support */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-emerald-50">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 font-['Playfair_Display'] group-hover:text-green-700 transition-colors">
                    Certification & Career Support
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-sm mt-1">📜</span>
                    <span className="text-gray-700 font-['Inter'] text-sm leading-relaxed">
                      Course Completion Certificate
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-sm mt-1">📝</span>
                    <span className="text-gray-700 font-['Inter'] text-sm leading-relaxed">
                      Reference / Recommendation Letter for studies or jobs
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-sm mt-1">🤝</span>
                    <span className="text-gray-700 font-['Inter'] text-sm leading-relaxed">
                      Lifelong personal mentorship after course completion
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-sm mt-1">📚</span>
                    <span className="text-gray-700 font-['Inter'] text-sm leading-relaxed">
                      Study material provided
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-sm mt-1">🏢</span>
                    <span className="text-gray-700 font-['Inter'] text-sm leading-relaxed">
                      Individual working station and locker facility
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl blur-3xl"></div>
            <Card className="relative p-12 bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-500 text-white border-0 shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display']">
                    Ready to Begin Your Journey?
                  </h3>
                  <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-['Inter'] leading-relaxed">
                    Join our comprehensive endodontic training program and transform
                    your clinical practice with expert guidance and hands-on experience.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-amber-700 hover:bg-gray-50 font-['Inter'] font-semibold px-8 py-4 text-lg shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply Now
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white border-0 font-['Inter'] font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById("courses");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Course Details
                  </Button>
                </motion.div>

                <motion.div
                  className="mt-8 flex flex-wrap justify-center items-center gap-8 text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    <span className="font-['Inter']">4-5 Months Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">�</span>
                    <span className="font-['Inter']">50+ Clinical Cases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    <span className="font-['Inter']">Lifelong Mentorship</span>
                  </div>
                </motion.div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
