import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ_DATA } from '../utils/constants'
import Card from './ui/Card'
import Button from './ui/Button'

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId)
  }

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  }

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  }

  return (
    <section id="faq" className="section-padding bg-white">
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Get answers to the most common questions about our endodontic training program, 
            eligibility criteria, and what to expect during the course.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {FAQ_DATA.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <motion.button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    whileHover={{ backgroundColor: "rgba(218, 165, 32, 0.02)" }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-neutral-800 pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        variants={iconVariants}
                        animate={openItem === faq.id ? "open" : "closed"}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 text-xl font-bold">+</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {openItem === faq.id && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px bg-neutral-200 mb-4"></div>
                          <p className="text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Help Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-primary-700 mb-6 leading-relaxed">
                  Our admissions team is here to help! If you couldn't find the answer to your question, 
                  don't hesitate to reach out. We're happy to provide personalized guidance about our 
                  endodontic training program.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('tel:+919876543210', '_self')}
                  >
                    Call Directly
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-primary-200">
                  <h4 className="font-semibold text-primary-700 mb-4">Quick Facts</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="font-semibold text-primary-600 mb-1">Course Duration</div>
                      <div className="text-primary-700">9 Weeks Total</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary-600 mb-1">Batch Size</div>
                      <div className="text-primary-700">8-10 Students Max</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary-600 mb-1">Clinical Training</div>
                      <div className="text-primary-700">Real Patient Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Popular Questions Quick Links */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-center text-neutral-800 mb-8">
              Popular Questions
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { 
                  question: "Eligibility Criteria", 
                  answer: "BDS graduates, MDS students, and practicing dentists",
                  id: 1 
                },
                { 
                  question: "Course Duration", 
                  answer: "9 weeks: Theory (2w) + Preclinical (3w) + Clinical (4w)",
                  id: 2 
                },
                { 
                  question: "Batch Size", 
                  answer: "Maximum 8-10 students for personalized attention",
                  id: 3 
                }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => toggleItem(item.id)}
                  className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 transition-colors text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h5 className="font-semibold text-neutral-800 mb-2">{item.question}</h5>
                  <p className="text-sm text-neutral-600">{item.answer}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ