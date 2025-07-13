import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS_COVERED, PREMIUM_MATERIALS } from '../utils/constants'
import Card from './ui/Card'
import Button from './ui/Button'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills')

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
    <section id="skills" className="section-padding bg-neutral-50">
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
            Advanced <span className="text-gradient">Skills & Materials</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Master cutting-edge endodontic techniques with premium materials and equipment 
            used by leading practitioners worldwide.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { id: 'skills', label: 'Clinical Skills', icon: '🎯' },
            { id: 'materials', label: 'Premium Materials', icon: '🔬' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl border-2 transition-all duration-300 flex items-center space-x-3 ${
                activeTab === tab.id 
                  ? 'border-primary-300 bg-primary-50 shadow-medium' 
                  : 'border-neutral-200 bg-white hover:border-primary-200 hover:bg-primary-25'
              }`}
              variants={tabVariants}
              animate={activeTab === tab.id ? "active" : "inactive"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="font-semibold text-lg">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-6xl mx-auto"
          >
            {activeTab === 'skills' && (
              <Card className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Skills Overview */}
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-700">Clinical Mastery</h3>
                        <p className="text-primary-600 font-medium">Advanced Endodontic Skills</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                      Our comprehensive training program covers every aspect of modern endodontics, 
                      from basic procedures to complex surgical interventions. You'll master both 
                      traditional techniques and the latest innovations in the field.
                    </p>

                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary-700 mb-3">What Makes Our Training Unique</h4>
                      <div className="space-y-3">
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          Hands-on practice with real patient cases
                        </div>
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          One-on-one mentorship with Dr. Anoop
                        </div>
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          Latest rotary and reciprocating systems
                        </div>
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          Advanced imaging and diagnosis techniques
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skills Grid */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-xl font-semibold text-neutral-800 mb-6">
                      Skills You'll Master
                    </h4>
                    
                    <div className="grid gap-4">
                      {SKILLS_COVERED.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 transition-colors"
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(218, 165, 32, 0.02)" }}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-primary-600 font-semibold text-sm">
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <h5 className="font-semibold text-neutral-800 mb-1">{skill.name}</h5>
                              <p className="text-neutral-600 text-sm leading-relaxed">{skill.description}</p>
                              <div className="flex items-center mt-2">
                                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                                  {skill.level}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Card>
            )}

            {activeTab === 'materials' && (
              <Card className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Materials Overview */}
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">🔬</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-700">Premium Equipment</h3>
                        <p className="text-primary-600 font-medium">Industry-Leading Materials</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                      Train with the same premium materials and equipment used by top endodontists 
                      worldwide. Our academy invests in the latest technology to ensure you learn 
                      with industry-standard tools.
                    </p>

                    <div className="bg-gradient-to-r from-accent-50 to-primary-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary-700 mb-3">Investment in Excellence</h4>
                      <div className="space-y-3">
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          Latest rotary file systems and motors
                        </div>
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          Advanced apex locators and measurement tools
                        </div>
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          Premium sealing and obturation materials
                        </div>
                        <div className="flex items-center text-primary-600">
                          <span className="text-accent-500 mr-2">✓</span>
                          State-of-the-art microscopes and imaging
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Materials Grid */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-xl font-semibold text-neutral-800 mb-6">
                      Premium Materials & Equipment
                    </h4>
                    
                    <div className="grid gap-4">
                      {PREMIUM_MATERIALS.map((material, index) => (
                        <motion.div
                          key={index}
                          className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 transition-colors"
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(218, 165, 32, 0.02)" }}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-xl">{material.icon}</span>
                            </div>
                            <div>
                              <h5 className="font-semibold text-neutral-800 mb-1">{material.name}</h5>
                              <p className="text-neutral-600 text-sm leading-relaxed mb-2">{material.description}</p>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded-full">
                                  {material.brand}
                                </span>
                                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                                  {material.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Skills CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-accent-600 to-primary-600 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Master Advanced Endodontics with Premium Tools
            </h3>
            <p className="text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
              Don't settle for basic training. Learn with the same equipment and materials 
              used by leading endodontists and elevate your practice to new heights.
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
                Start Your Journey
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-primary-900 border-0"
                onClick={() => {
                  const element = document.getElementById('courses')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Course Details
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills