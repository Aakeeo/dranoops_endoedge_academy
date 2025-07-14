import { useEffect } from "react";
import { motion } from "framer-motion";
import { SKILLS_COVERED } from "../utils/constants";
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
            <span className="mr-2">🎯</span>
            Clinical Excellence
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Advanced{" "}
            <span className="relative inline-block">
              <span className="text-amber-600">Endodontic Skills</span>
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
            Master cutting-edge endodontic techniques through hands-on training
            with state-of-the-art equipment and personalized mentorship from Dr.
            Anoop.
          </motion.p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 font-['Playfair_Display']">
                    Clinical Mastery
                  </h3>
                  <p className="text-amber-600 font-medium font-['Inter']">
                    Advanced Endodontic Techniques
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-['Inter']">
                Our comprehensive training program covers every aspect of modern
                endodontics, from basic procedures to complex surgical
                interventions. You'll master both traditional techniques and the
                latest innovations in the field.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-100">
                <h4 className="font-semibold text-gray-800 mb-4 font-['Playfair_Display'] text-lg">
                  What Makes Our Training Unique
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700 font-['Inter']">
                    <span className="text-amber-500 mr-3 text-lg">✓</span>
                    Hands-on practice with real patient cases
                  </div>
                  <div className="flex items-center text-gray-700 font-['Inter']">
                    <span className="text-amber-500 mr-3 text-lg">✓</span>
                    One-on-one mentorship with Dr. Anoop
                  </div>
                  <div className="flex items-center text-gray-700 font-['Inter']">
                    <span className="text-amber-500 mr-3 text-lg">✓</span>
                    Latest rotary and reciprocating systems
                  </div>
                  <div className="flex items-center text-gray-700 font-['Inter']">
                    <span className="text-amber-500 mr-3 text-lg">✓</span>
                    Advanced imaging and diagnosis techniques
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🔬</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 font-['Playfair_Display']">
                    Premium Learning Experience
                  </h4>
                  <p className="text-gray-600 font-['Inter']">
                    State-of-the-art equipment and materials
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg">
                    <span className="text-2xl mr-3">🏆</span>
                    <span className="text-gray-700 font-['Inter']">
                      Industry-leading techniques
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg">
                    <span className="text-2xl mr-3">💎</span>
                    <span className="text-gray-700 font-['Inter']">
                      Premium materials training
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg">
                    <span className="text-2xl mr-3">🎓</span>
                    <span className="text-gray-700 font-['Inter']">
                      Expert certification
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
              Skills You'll{" "}
              <span className="relative inline-block">
                <span className="text-amber-600">Master</span>
                <span className="elegant-underline-thin"></span>
              </span>
            </h3>
            <p className="text-lg text-gray-600 font-['Inter'] max-w-2xl mx-auto">
              Comprehensive training in advanced endodontic techniques that will
              transform your clinical practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_COVERED.map((skill, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-amber-50 group-hover:to-yellow-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-800 mb-2 font-['Playfair_Display'] text-lg group-hover:text-amber-700 transition-colors">
                        {skill.name}
                      </h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 font-['Inter']">
                        {skill.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium font-['Inter'] ${
                            skill.level === "Expert"
                              ? "bg-red-100 text-red-700"
                              : skill.level === "Advanced"
                              ? "bg-amber-100 text-amber-700"
                              : skill.level === "Premium"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {skill.level}
                        </span>
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
                    Master Advanced Endodontics
                  </h3>
                  <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-['Inter'] leading-relaxed">
                    Don't settle for basic training. Learn with industry-leading
                    techniques and equipment that will elevate your practice to
                    new heights.
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
                    Start Your Journey
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
                  className="mt-8 flex justify-center items-center gap-8 text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <span className="font-['Inter']">Expert Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💎</span>
                    <span className="font-['Inter']">Premium Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    <span className="font-['Inter']">Certification</span>
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
