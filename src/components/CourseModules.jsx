import { useState } from "react";
import { motion } from "framer-motion";
import { COURSE_MODULES } from "../utils/constants";
import Card from "./ui/Card";
import Button from "./ui/Button";

const CourseModules = () => {
  const [activeModule, setActiveModule] = useState(0);

  const tabVariants = {
    inactive: {
      opacity: 0.7,
      scale: 0.95,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    active: {
      opacity: 1,
      scale: 1,
      backgroundColor: "rgba(218, 165, 32, 0.1)",
    },
  };

  return (
    <section
      id="courses"
      className="section-padding bg-white scroll-margin-nav"
    >
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-8 bg-amber-50 rounded-full border border-amber-200"
          >
            <span className="text-amber-600 font-medium text-sm tracking-wide uppercase">
              Our Courses
            </span>
          </motion.div>
          <motion.h2
            className="mb-8 text-neutral-900 font-serif leading-tight"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive{" "}
            <span className="elegant-underline animate text-amber-700">
              Course Modules
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-600 leading-relaxed font-light max-w-3xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our meticulously designed 3-module curriculum takes you from
            theoretical foundation to advanced clinical practice with real
            patient experience.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-col lg:flex-row lg:justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {COURSE_MODULES.map((module, index) => (
            <motion.button
              key={module.id}
              onClick={() => setActiveModule(index)}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left lg:flex-1 max-w-sm lg:max-w-none mx-auto lg:mx-0 shadow-md hover:shadow-lg ${
                activeModule === index
                  ? "border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl"
                  : "border-neutral-200 bg-white hover:border-amber-200 hover:bg-amber-25"
              }`}
              variants={tabVariants}
              animate={activeModule === index ? "active" : "inactive"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{module.icon}</span>
                <div>
                  <h3
                    className="text-xl font-bold text-neutral-900 font-serif"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    {module.title}
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold">
                    Duration: {module.duration}
                  </p>
                </div>
              </div>
              <p
                className="text-neutral-600 leading-relaxed font-sans"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {module.description}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Module Content */}
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 lg:p-16 border-amber-100 shadow-xl bg-gradient-to-br from-white to-amber-50/30">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Module Details */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-4xl">
                      {COURSE_MODULES[activeModule].icon}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-3xl font-bold text-neutral-900 font-serif"
                      style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                    >
                      <span className="elegant-underline-thin animate">
                        {COURSE_MODULES[activeModule].title}
                      </span>
                    </h3>
                    <p className="text-amber-600 font-semibold text-lg">
                      {COURSE_MODULES[activeModule].duration} intensive training
                    </p>
                  </div>
                </div>

                <p
                  className="text-xl text-neutral-700 mb-8 leading-relaxed font-light"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {COURSE_MODULES[activeModule].description}
                </p>

                {/* Module Benefits */}
                <div className="space-y-4 mb-10">
                  <h4
                    className="font-bold text-neutral-900 mb-6 text-xl font-serif"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    <span className="elegant-underline-thin animate">
                      What You'll Gain
                    </span>
                    :
                  </h4>
                  {activeModule === 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Complete understanding of endodontic principles
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Diagnostic skills for complex cases
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Foundation for advanced procedures
                        </span>
                      </div>
                    </div>
                  )}
                  {activeModule === 1 && (
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Hands-on technical skills development
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Practice with premium materials
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Confidence in laboratory procedures
                        </span>
                      </div>
                    </div>
                  )}
                  {activeModule === 2 && (
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Real patient treatment experience
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Advanced clinical skills mastery
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 mr-3 text-lg">✓</span>
                        <span className="text-neutral-700 font-medium">
                          Professional confidence building
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Topics Covered */}
              <div>
                <h4
                  className="text-xl font-bold text-neutral-900 mb-6 font-serif"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  <span className="elegant-underline-thin animate">
                    Topics Covered
                  </span>
                </h4>

                <div className="space-y-4">
                  {COURSE_MODULES[activeModule].topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-amber-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <span className="text-amber-700 font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <p
                        className="text-neutral-700 leading-relaxed font-medium"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Module-specific CTA */}
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                  <h5
                    className="font-bold text-amber-800 mb-3 font-serif"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    {activeModule === 0 && "Build Your Foundation"}
                    {activeModule === 1 && "Master the Techniques"}
                    {activeModule === 2 && "Gain Real Experience"}
                  </h5>
                  <p
                    className="text-neutral-700 mb-4 font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {activeModule === 0 &&
                      "Start with comprehensive theoretical knowledge"}
                    {activeModule === 1 &&
                      "Practice with hands-on preclinical training"}
                    {activeModule === 2 &&
                      "Apply skills with real patient cases"}
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Course Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 text-white border-0 shadow-2xl">
            <h3
              className="text-4xl font-bold mb-6 font-serif"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Complete 9-Week Transformation Program
            </h3>
            <p
              className="text-xl mb-8 text-amber-100 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              From theoretical foundation to clinical mastery – our
              comprehensive curriculum ensures you graduate with the confidence
              to handle any endodontic challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-amber-700 hover:bg-amber-50 border-0 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Apply for Next Batch
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-primary-900 border-0"
                onClick={() => {
                  const element = document.getElementById("testimonials");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Read Success Stories
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseModules;
