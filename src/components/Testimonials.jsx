import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../utils/constants'
import Card from './ui/Card'
import Button from './ui/Button'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    )
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? 'text-yellow-400' : 'text-neutral-300'
        }`}
      >
        ★
      </span>
    ))
  }

  const testimonialVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
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
            What Our <span className="text-gradient">Graduates Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from our successful graduates who have transformed their practice 
            and career through our comprehensive endodontic training program.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Testimonial Card */}
            <div className="relative h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={testimonialVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Card className="h-full p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-center">
                      {/* Quote */}
                      <div className="mb-8">
                        <span className="text-6xl text-primary-200 leading-none">"</span>
                        <p className="text-xl lg:text-2xl text-neutral-700 leading-relaxed italic mt-4 mb-4">
                          {TESTIMONIALS[currentIndex].content}
                        </p>
                        <span className="text-6xl text-primary-200 leading-none">"</span>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {renderStars(TESTIMONIALS[currentIndex].rating)}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary-200">
                          <img 
                            src={TESTIMONIALS[currentIndex].image} 
                            alt={TESTIMONIALS[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-primary-700">
                            {TESTIMONIALS[currentIndex].name}
                          </h4>
                          <p className="text-primary-600 font-medium">
                            {TESTIMONIALS[currentIndex].designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-medium flex items-center justify-center text-primary-600 hover:bg-white hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-medium flex items-center justify-center text-primary-600 hover:bg-white hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-neutral-300 hover:bg-primary-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Success Stats */}
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              number: '500+',
              label: 'Successful Graduates',
              description: 'Dental professionals trained',
              icon: '🎓'
            },
            {
              number: '95%',
              label: 'Satisfaction Rate',
              description: 'Student satisfaction score',
              icon: '⭐'
            },
            {
              number: '85%',
              label: 'Career Growth',
              description: 'Graduates reporting practice improvement',
              icon: '📈'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">{stat.label}</h4>
                <p className="text-neutral-600">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
              Transform your endodontic skills and join hundreds of successful graduates 
              who have elevated their practice with our comprehensive training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Apply for Next Batch
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('courses')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Learn More About Courses
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials