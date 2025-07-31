import { useState } from "react";
import { motion } from "framer-motion";
import { COURSE_MODULES } from "../utils/constants";
import Card from "./ui/Card";
import Button from "./ui/Button";

const CourseModules = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);

  return (
    <section
      id="courses"
      className="section-padding bg-gradient-to-br from-amber-50 via-white to-orange-50 scroll-margin-nav relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Hero Section Header */}
        <motion.div
          className="text-center max-w-5xl mx-auto mb-20"
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
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg"
          >
            <span className="font-bold text-sm tracking-wider uppercase">
              ⭐ Flagship Program
            </span>
          </motion.div>

          <motion.h2
            className="mb-8 text-neutral-900 font-serif leading-tight text-5xl lg:text-6xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transform Into an{" "}
            <span className="elegant-underline animate text-gradient bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Endodontic Expert
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl text-neutral-600 leading-relaxed font-light max-w-4xl mx-auto mb-12"
            style={{ fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Master the art and science of Endodontics through our revolutionary
            3-module journey that takes you from theoretical foundation to
            clinical excellence
          </motion.p>

          {/* Program Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "🎯", title: "4-5 Months", desc: "Intensive Training" },
              { icon: "👥", title: "4-5 Students", desc: "Per Batch" },
              { icon: "🏆", title: "Real Patients", desc: "Live Experience" },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <div className="font-bold text-xl text-neutral-900 mb-1">
                  {highlight.title}
                </div>
                <div className="text-neutral-600 font-medium">
                  {highlight.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {COURSE_MODULES.map((module, index) => (
            <motion.div
              key={module.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredModule(index)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer border-2 ${
                  selectedModule === index
                    ? "border-amber-400 shadow-2xl"
                    : hoveredModule === index
                    ? "border-amber-300 shadow-xl"
                    : "border-neutral-200 hover:border-amber-200"
                }`}
                onClick={() =>
                  setSelectedModule(selectedModule === index ? null : index)
                }
              >
                {/* Module Header with Visual Impact */}
                <div
                  className={`relative p-8 text-white transition-all duration-500 ${
                    index === 0
                      ? "bg-gradient-to-br from-amber-600 to-orange-600"
                      : index === 1
                      ? "bg-gradient-to-br from-orange-600 to-amber-700"
                      : "bg-gradient-to-br from-amber-700 to-yellow-600"
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-white/20 px-4 py-2 rounded-full text-lg font-bold">
                        Module {index + 1}
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-sm">
                          {module.duration}
                        </div>
                      </div>
                    </div>

                    <h3
                      className="text-2xl font-bold mb-4 font-serif leading-tight"
                      style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                    >
                      {module.title}
                    </h3>

                    <p
                      className="text-white/90 leading-relaxed font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {module.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredModule === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Module Content */}
                <div className="p-8">
                  {/* Key Learning Points */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-neutral-900 mb-4 text-lg">
                      What You'll Learn:
                    </h4>
                    {module.topics.slice(0, 3).map((topic, topicIndex) => (
                      <motion.div
                        key={topicIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                      >
                        <div
                          className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                            index === 0
                              ? "bg-amber-500"
                              : index === 1
                              ? "bg-orange-500"
                              : "bg-yellow-600"
                          }`}
                        ></div>
                        <span className="text-neutral-700 leading-relaxed font-medium text-sm">
                          {topic}
                        </span>
                      </motion.div>
                    ))}
                    {module.topics.length > 3 && (
                      <div className="text-neutral-500 text-sm ml-6">
                        +{module.topics.length - 3} more topics covered
                      </div>
                    )}
                  </div>

                  {/* Prominent Action Button */}
                  <Button
                    className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-6 text-lg ${
                      selectedModule === index
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                        : index === 0
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700"
                        : index === 1
                        ? "bg-gradient-to-r from-orange-500 to-amber-700 text-white hover:from-orange-600 hover:to-amber-800"
                        : "bg-gradient-to-r from-amber-700 to-yellow-600 text-white hover:from-amber-800 hover:to-yellow-700"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      const newSelectedModule =
                        selectedModule === index ? null : index;
                      setSelectedModule(newSelectedModule);

                      // Scroll to the detail card after a brief delay to allow state update
                      if (newSelectedModule !== null) {
                        setTimeout(() => {
                          const detailElement =
                            document.getElementById("module-detail-card");
                          if (detailElement) {
                            const navHeight = 80; // Approximate navigation bar height
                            const elementPosition =
                              detailElement.getBoundingClientRect().top +
                              window.pageYOffset;
                            const offsetPosition = elementPosition - navHeight;

                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth",
                            });
                          }
                        }, 300); // Wait for animation to start
                      }
                    }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>
                        {selectedModule === index
                          ? "Hide Details"
                          : "Explore This Module"}
                      </span>
                      {selectedModule !== index && (
                        <svg
                          className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </div>
                  </Button>

                  {/* Outcome Badge */}
                  <div
                    className={`p-4 rounded-xl ${
                      index === 0
                        ? "bg-amber-50 border border-amber-200"
                        : index === 1
                        ? "bg-orange-50 border border-orange-200"
                        : "bg-yellow-50 border border-yellow-200"
                    }`}
                  >
                    <div className="font-semibold text-neutral-900 mb-2">
                      {index === 0
                        ? "🎓 You Will Master"
                        : index === 1
                        ? "🔬 You Will Practice"
                        : "🎯 You Will Achieve"}
                      :
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        index === 0
                          ? "text-amber-700"
                          : index === 1
                          ? "text-orange-700"
                          : "text-yellow-700"
                      }`}
                    >
                      {index === 0
                        ? "Complete diagnostic confidence and theoretical mastery"
                        : index === 1
                        ? "Advanced technical skills through hands-on practice"
                        : "Real-world clinical expertise with live patients"}
                    </div>
                  </div>
                </div>

                {/* Selection Indicator */}
                {selectedModule === index && (
                  <motion.div
                    className="absolute top-4 left-4 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Module Expansion */}
        {selectedModule !== null && (
          <motion.div
            id="module-detail-card"
            className="mb-20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-12 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 border-2 border-amber-300 shadow-2xl">
              <div className="text-center mb-12">
                <div
                  className={`inline-flex items-center justify-center w-28 h-28 rounded-full mb-8 shadow-xl ${
                    selectedModule === 0
                      ? "bg-gradient-to-br from-amber-600 to-orange-600"
                      : selectedModule === 1
                      ? "bg-gradient-to-br from-orange-600 to-amber-700"
                      : "bg-gradient-to-br from-amber-700 to-yellow-600"
                  }`}
                >
                  <span className="text-5xl font-bold text-white">
                    {selectedModule + 1}
                  </span>
                </div>

                <h3
                  className="text-4xl font-bold text-neutral-900 mb-6 font-serif"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  <span className="elegant-underline-thin animate">
                    {COURSE_MODULES[selectedModule].title}
                  </span>
                </h3>

                <div className="flex justify-center items-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      {COURSE_MODULES[selectedModule].topics.length}
                    </div>
                    <div className="text-neutral-600 text-sm">Topics</div>
                  </div>
                  <div className="w-px h-12 bg-neutral-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      {selectedModule === 0
                        ? "📚"
                        : selectedModule === 1
                        ? "🔬"
                        : "🏥"}
                    </div>
                    <div className="text-neutral-600 text-sm">
                      {selectedModule === 0
                        ? "Theory"
                        : selectedModule === 1
                        ? "Lab Work"
                        : "Clinical"}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`grid gap-12 ${
                  COURSE_MODULES[selectedModule].topics.length > 8
                    ? "lg:grid-cols-1"
                    : "lg:grid-cols-5"
                }`}
              >
                {/* Complete Topics List */}
                <div
                  className={
                    COURSE_MODULES[selectedModule].topics.length > 8
                      ? "w-full"
                      : "lg:col-span-3"
                  }
                >
                  <h4
                    className="text-2xl font-bold text-neutral-900 mb-8 font-serif"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    <span className="elegant-underline-thin animate">
                      Complete Curriculum
                    </span>
                  </h4>

                  <div
                    className={`grid gap-4 ${
                      COURSE_MODULES[selectedModule].topics.length > 8
                        ? "md:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1"
                    }`}
                  >
                    {COURSE_MODULES[selectedModule].topics.map(
                      (topic, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg text-sm ${
                              selectedModule === 0
                                ? "bg-gradient-to-br from-amber-500 to-orange-600"
                                : selectedModule === 1
                                ? "bg-gradient-to-br from-orange-500 to-amber-700"
                                : "bg-gradient-to-br from-yellow-600 to-amber-600"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p
                              className="text-neutral-800 font-semibold leading-relaxed text-base"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {topic}
                            </p>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Learning Outcomes & Benefits - Only show when not too many topics */}
                {COURSE_MODULES[selectedModule].topics.length <= 8 && (
                  <div className="lg:col-span-2">
                    <h4
                      className="text-2xl font-bold text-neutral-900 mb-8 font-serif"
                      style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                    >
                      <span className="elegant-underline-thin animate">
                        What You'll Achieve
                      </span>
                    </h4>

                    {/* Skills Gained */}
                    <div className="mb-8">
                      <h5 className="text-xl font-semibold text-neutral-800 mb-6">
                        Skills You'll Master:
                      </h5>
                      <div className="space-y-3">
                        {selectedModule === 0 &&
                          [
                            "Advanced Diagnostic Abilities",
                            "Treatment Planning Expertise",
                            "Anatomical Understanding",
                            "Instrumentation Mastery",
                          ].map((skill, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-200"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                              <span className="font-medium text-neutral-800">
                                {skill}
                              </span>
                            </motion.div>
                          ))}

                        {selectedModule === 1 &&
                          [
                            "Rotary Instrumentation",
                            "Laboratory Techniques",
                            "Biomechanical Preparation",
                            "Material Science Application",
                          ].map((skill, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="font-medium text-neutral-800">
                                {skill}
                              </span>
                            </motion.div>
                          ))}

                        {selectedModule === 2 &&
                          [
                            "Clinical Decision Making",
                            "Patient Management",
                            "Complex Case Handling",
                            "Professional Confidence",
                          ].map((skill, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></div>
                              <span className="font-medium text-neutral-800">
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                      </div>
                    </div>

                    {/* Career Impact */}
                    <div
                      className={`p-8 rounded-2xl ${
                        selectedModule === 0
                          ? "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200"
                          : selectedModule === 1
                          ? "bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200"
                          : "bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200"
                      }`}
                    >
                      <h5 className="text-xl font-bold mb-4 text-neutral-900">
                        Career Impact:
                      </h5>
                      <p
                        className={`font-semibold text-lg mb-4 ${
                          selectedModule === 0
                            ? "text-amber-700"
                            : selectedModule === 1
                            ? "text-orange-700"
                            : "text-yellow-700"
                        }`}
                      >
                        {selectedModule === 0
                          ? "🎯 Build Unshakeable Foundation"
                          : selectedModule === 1
                          ? "🔬 Master Advanced Techniques"
                          : "🏆 Achieve Clinical Excellence"}
                      </p>
                      <p
                        className="text-neutral-700 leading-relaxed mb-6"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {selectedModule === 0
                          ? "Establish yourself as a knowledgeable diagnostician with deep understanding of endodontic principles and patient care protocols."
                          : selectedModule === 1
                          ? "Develop the technical prowess and hands-on skills that set expert endodontists apart from general practitioners."
                          : "Transform into a confident specialist ready to handle the most challenging cases with precision and expertise."}
                      </p>

                      <Button
                        size="lg"
                        className={`w-full font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                          selectedModule === 0
                            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                            : selectedModule === 1
                            ? "bg-gradient-to-r from-orange-500 to-amber-700 text-white"
                            : "bg-gradient-to-r from-yellow-600 to-amber-600 text-white"
                        }`}
                        onClick={() => {
                          const element = document.getElementById("contact");
                          if (element)
                            element.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Start Your{" "}
                        {selectedModule === 0
                          ? "Foundation"
                          : selectedModule === 1
                          ? "Skills"
                          : "Mastery"}{" "}
                        Journey
                      </Button>
                    </div>
                  </div>
                )}

                {/* Skills Section for modules with many topics */}
                {COURSE_MODULES[selectedModule].topics.length > 8 && (
                  <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {/* Skills Column */}
                    <div>
                      <h4
                        className="text-2xl font-bold text-neutral-900 mb-6 font-serif"
                        style={{
                          fontFamily: "Playfair Display, Georgia, serif",
                        }}
                      >
                        <span className="elegant-underline-thin animate">
                          Skills You'll Master
                        </span>
                      </h4>
                      <div className="space-y-3">
                        {selectedModule === 1 &&
                          [
                            "Advanced Access Opening Techniques",
                            "Precise Working Length Determination",
                            "Expert Biomechanical Preparation",
                            "Professional Irrigation Protocols",
                            "Obturation Mastery",
                          ].map((skill, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="font-medium text-neutral-800">
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                      </div>
                    </div>

                    {/* Career Impact Column */}
                    <div>
                      <h4
                        className="text-2xl font-bold text-neutral-900 mb-6 font-serif"
                        style={{
                          fontFamily: "Playfair Display, Georgia, serif",
                        }}
                      >
                        <span className="elegant-underline-thin animate">
                          Career Impact
                        </span>
                      </h4>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200">
                        <p className="font-semibold text-lg mb-4 text-orange-700">
                          🔬 Master Advanced Techniques
                        </p>
                        <p
                          className="text-neutral-700 leading-relaxed mb-6"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          Develop comprehensive technical expertise from basic
                          access to advanced restorative procedures, making you
                          proficient in complete endodontic care.
                        </p>
                        <Button
                          size="lg"
                          className="w-full font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-orange-500 to-amber-700 text-white"
                          onClick={() => {
                            const element = document.getElementById("contact");
                            if (element)
                              element.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Start Your Skills Journey
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Spectacular Program Summary */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="relative p-16 bg-gradient-to-br from-amber-600 via-orange-500 to-amber-500 text-white border-0 shadow-2xl overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-12 h-12 border-2 border-white/20 rounded-full"
                animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-white/20 rounded-full"
                animate={{ rotate: 360, y: [-10, 10, -10] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <h3
                className="text-5xl lg:text-6xl font-bold mb-8 font-serif leading-tight"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Your Complete Transformation Awaits
              </h3>

              <p
                className="text-2xl mb-12 text-orange-100 max-w-4xl mx-auto leading-relaxed font-light"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                From theoretical foundation to clinical mastery – emerge as the
                endodontic specialist you've always aspired to become
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    number: "4-5",
                    label: "Months of Intensive Training",
                    icon: "📅",
                  },
                  { number: "120+", label: "Graduates", icon: "🎓" },
                  { number: "4-5", label: "Students per Batch", icon: "👥" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-orange-200 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-orange-50 border-0 font-bold text-lg px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  🎯 Secure Your Spot Today
                </Button>
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-300 text-amber-900 border-0 font-bold text-lg px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById("testimonials");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  ⭐ Read Success Stories
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseModules;
