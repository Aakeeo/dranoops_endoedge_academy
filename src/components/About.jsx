import { motion } from 'framer-motion'
import Card from './ui/Card'

const About = () => {
  const achievements = [
    {
      icon: '🏆',
      title: '15+ Years Experience',
      description: 'Extensive clinical expertise in advanced endodontics'
    },
    {
      icon: '🎓',
      title: '500+ Graduates',
      description: 'Successfully trained dental professionals across India'
    },
    {
      icon: '🏥',
      title: 'Clinical Excellence',
      description: 'State-of-the-art facilities with latest equipment'
    },
    {
      icon: '📚',
      title: 'Comprehensive Curriculum',
      description: 'Theory, preclinical, and real patient clinical training'
    }
  ]

  const whyChooseUs = [
    {
      title: 'Real Patient Experience',
      description: 'Unlike other programs, our students work on actual patients under expert supervision, providing invaluable real-world experience.',
      icon: '🦷'
    },
    {
      title: 'Small Batch Training',
      description: 'Limited to 8-10 students per batch ensuring personalized attention and hands-on learning for every participant.',
      icon: '👥'
    },
    {
      title: 'Latest Technology',
      description: 'Train with cutting-edge equipment including rotary systems, apex locators, and premium ceramic materials.',
      icon: '⚡'
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn directly from Dr. Anoop, a renowned clinician with extensive experience in complex endodontic cases.',
      icon: '🎯'
    }
  ]

  return (
    <section id="about" className="section-padding gradient-bg">
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
            About <span className="text-gradient">Dr. Anoop's EndoEdge Academy</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Where cutting-edge endodontic expertise meets personalized mentorship. 
            We're not just an academy – we're your gateway to clinical excellence.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - About Dr. Anoop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4 ring-4 ring-primary-200 bg-primary-100 flex items-center justify-center">
                  <img 
                    src="/DrAnoopImage.png" 
                    alt="Dr. Anoop - Founder & Chief Mentor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-1">Dr. Anoop</h3>
                  <p className="text-primary-600 font-medium">Founder & Chief Mentor</p>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700">
                <p>
                  Dr. Anoop is a renowned clinical endodontist with over 15 years of experience 
                  in advanced endodontic procedures. His passion for teaching and commitment to 
                  clinical excellence has made him a respected figure in the dental community.
                </p>
                <p>
                  Having successfully treated thousands of complex cases, Dr. Anoop brings 
                  real-world expertise to the classroom. His approach combines traditional 
                  techniques with the latest advancements in endodontic technology.
                </p>
                <p>
                  "My goal is not just to teach procedures, but to build confident clinicians 
                  who can handle any endodontic challenge with skill and precision."
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-semibold text-neutral-800 mb-3">Qualifications & Expertise</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    MDS in Conservative Dentistry & Endodontics
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    Advanced Training in Rotary Endodontics
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    Expert in Complex Root Canal Treatments
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    Specialist in Aesthetic Restorations
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-neutral-800 mb-8">
              Why Choose EndoEdge Academy?
            </h3>
            
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-neutral-800 mb-12">
            Our Track Record of Excellence
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold text-primary-700 mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-neutral-600">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Ready to Transform Your Endodontic Skills?
            </h3>
            <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful graduates who have elevated their practice 
              with our comprehensive training program.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('courses')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Our Courses
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About