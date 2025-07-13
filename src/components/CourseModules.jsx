import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COURSE_MODULES } from '../utils/constants'
import Card from './ui/Card'
import Button from './ui/Button'

const CourseModules = () => {
  const [activeModule, setActiveModule] = useState(0)

  const tabVariants = {
    inactive: { 
      opacity: 0.7, 
      scale: 0.95,
      backgroundColor: "rgba(255, 255, 255, 0.8)"
    },
    active: { 
      opacity: 1, 
      scale: 1,
      backgroundColor: "rgba(218, 165, 32, 0.1)"
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20, scale: 0.95 }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive <span className="text-gradient">Course Modules</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our meticulously designed 3-module curriculum takes you from theoretical 
            foundation to advanced clinical practice with real patient experience.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {COURSE_MODULES.map((module, index) => (
            <motion.button
              key={module.id}
              onClick={() => setActiveModule(index)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left lg:flex-1 max-w-sm lg:max-w-none mx-auto lg:mx-0 ${
                activeModule === index 
                  ? 'border-primary-300 bg-primary-50 shadow-medium' 
                  : 'border-neutral-200 bg-white hover:border-primary-200 hover:bg-primary-25'
              }`}
              variants={tabVariants}
              animate={activeModule === index ? "active" : "inactive"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{module.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">
                    {module.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium">
                    Duration: {module.duration}
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {module.description}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Module Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Module Details */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-3xl">{COURSE_MODULES[activeModule].icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-700">
                        {COURSE_MODULES[activeModule].title}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {COURSE_MODULES[activeModule].duration} intensive training
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                    {COURSE_MODULES[activeModule].description}
                  </p>

                  {/* Module Benefits */}
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-neutral-800 mb-4">What You'll Gain:</h4>
                    {activeModule === 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Complete understanding of endodontic principles
                        </div>
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Diagnostic skills for complex cases
                        </div>
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Foundation for advanced procedures
                        </div>
                      </div>
                    )}
                    {activeModule === 1 && (
                      <div className="space-y-2">
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Hands-on technical skills development
                        </div>
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Practice with premium materials
                        </div>
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Confidence in laboratory procedures
                        </div>
                      </div>
                    )}
                    {activeModule === 2 && (
                      <div className="space-y-2">
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Real patient treatment experience
                        </div>
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Advanced clinical skills mastery
                        </div>
                        <div className="flex items-center text-neutral-700">
                          <span className="text-accent-500 mr-2">✓</span>
                          Professional confidence building
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Right Column - Topics Covered */}
                <motion.div variants={itemVariants}>
                  <h4 className="text-xl font-semibold text-neutral-800 mb-6">
                    Topics Covered
                  </h4>
                  
                  <div className="space-y-4">
                    {COURSE_MODULES[activeModule].topics.map((topic, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(218, 165, 32, 0.05)" }}
                      >
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-600 font-semibold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">
                          {topic}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Module-specific CTA */}
                  <motion.div 
                    className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg"
                    variants={itemVariants}
                  >
                    <h5 className="font-semibold text-primary-700 mb-2">
                      {activeModule === 0 && "Build Your Foundation"}
                      {activeModule === 1 && "Master the Techniques"}
                      {activeModule === 2 && "Gain Real Experience"}
                    </h5>
                    <p className="text-primary-600 text-sm mb-4">
                      {activeModule === 0 && "Start with comprehensive theoretical knowledge"}
                      {activeModule === 1 && "Practice with hands-on preclinical training"}
                      {activeModule === 2 && "Apply skills with real patient cases"}
                    </p>
                    <Button 
                      size="sm"
                      onClick={() => {
                        const element = document.getElementById('contact')
                        if (element) element.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      Enroll Now
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Course Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Complete 9-Week Transformation Program
            </h3>
            <p className="text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
              From theoretical foundation to clinical mastery – our comprehensive curriculum 
              ensures you graduate with the confidence to handle any endodontic challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-blue-50"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Apply for Next Batch
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-primary-900 border-0"
                onClick={() => {
                  const element = document.getElementById('testimonials')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Read Success Stories
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default CourseModules