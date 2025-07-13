import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_INFO } from '../utils/constants'
import Card from './ui/Card'
import Button from './ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Qualification validation
    if (!formData.qualification) {
      newErrors.qualification = 'Please select your qualification'
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const qualificationOptions = [
    { value: '', label: 'Select your qualification' },
    { value: 'bds', label: 'BDS Graduate' },
    { value: 'mds', label: 'MDS Student' },
    { value: 'mds-graduate', label: 'MDS Graduate' },
    { value: 'general-dentist', label: 'General Dentist' },
    { value: 'specialist', label: 'Dental Specialist' },
    { value: 'other', label: 'Other' }
  ]

  const experienceOptions = [
    { value: '', label: 'Select your experience level' },
    { value: 'fresh-graduate', label: 'Fresh Graduate (0-1 years)' },
    { value: 'early-career', label: 'Early Career (1-3 years)' },
    { value: 'mid-career', label: 'Mid Career (3-7 years)' },
    { value: 'experienced', label: 'Experienced (7+ years)' }
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-12">
                <div className="text-6xl mb-6">✅</div>
                <h2 className="text-3xl font-bold text-primary-700 mb-4">
                  Application Submitted Successfully!
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Thank you for your interest in EndoEdge Academy. We have received your application 
                  and will get back to you within 24 hours with course details and next steps.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                >
                  Submit Another Application
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding gradient-bg">
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
            Apply for <span className="text-gradient">Next Batch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Take the first step towards mastering endodontics. Fill out the application form 
            and we'll get back to you with course details and enrollment information.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">
                Application Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Qualification Field */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Qualification *
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.qualification ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  >
                    {qualificationOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
                </div>

                {/* Experience Field */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.experience ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  >
                    {experienceOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder="Tell us about your interest in endodontics and any specific questions you have about the course..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-primary-700 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Phone</h4>
                      <p className="text-neutral-600">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Email</h4>
                      <p className="text-neutral-600">{CONTACT_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Address</h4>
                      <p className="text-neutral-600">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Office Hours</h4>
                      <p className="text-neutral-600">{CONTACT_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
                <h4 className="text-xl font-bold text-primary-700 mb-4">
                  Need Immediate Assistance?
                </h4>
                <p className="text-primary-600 mb-4">
                  Have questions about the course? Our admissions team is ready to help you 
                  with course details, eligibility, and enrollment process.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="sm"
                    className="bg-primary-600 hover:bg-primary-700"
                    onClick={() => window.open(`tel:${CONTACT_INFO.phone}`, '_self')}
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}`, '_self')}
                  >
                    Send Email
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact