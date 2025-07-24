import { motion } from "framer-motion";
import Card from "./ui/Card";

const About = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "15+ Years Experience",
      description: "Extensive clinical expertise in advanced endodontics",
    },
    {
      icon: "🎓",
      title: "500+ Graduates",
      description: "Successfully trained dental professionals across India",
    },
    {
      icon: "🏥",
      title: "Clinical Excellence",
      description: "State-of-the-art facilities with latest equipment",
    },
    {
      icon: "📚",
      title: "Comprehensive Curriculum",
      description: "Theory, preclinical, and real patient clinical training",
    },
  ];

  const whyChooseUs = [
    {
      title: "Hands On Experience",
      description:
        "Unlike other programs, our students work on actual patients under expert supervision, providing invaluable real-world experience.",
      icon: "🦷",
    },
    {
      title: "Small Batch Training",
      description:
        "Limited to 4-5 students per batch ensuring personalized attention and hands-on learning for every participant.",
      icon: "👥",
    },
    {
      title: "Latest Technology",
      description:
        "Train with cutting-edge equipment including rotary systems, apex locators, and premium ceramic materials.",
      icon: "⚡",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn directly from Dr. Anoop, a renowned clinician with extensive experience in complex endodontic cases.",
      icon: "🎯",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white scroll-margin-nav">
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
              About Us
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
            Meet{" "}
            <span className="relative elegant-underline animate">
              Dr. Anoop's EndoEdge Academy
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
            Where cutting-edge endodontic expertise meets personalized
            mentorship. We're not just an academy — we're your gateway to
            clinical excellence.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left Column - About Dr. Anoop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full border-neutral-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mr-6 ring-4 ring-amber-100 bg-amber-50 flex items-center justify-center shadow-lg">
                  <img
                    src="/DrAnoopImage.png"
                    alt="Dr. Anoop - Founder & Chief Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-neutral-900 mb-1 font-serif"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    <span className="elegant-underline-thin animate">
                      Dr. Anoop
                    </span>
                  </h3>
                  <p className="text-amber-600 font-semibold text-lg font-sans">
                    Founder & Chief Mentor
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-amber-400">{"★".repeat(5)}</div>
                    <span className="text-neutral-500 text-sm ml-2 font-medium">
                      15+ Years Excellence
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="space-y-6 text-neutral-700 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p className="text-lg">
                  Dr. Anoop is an eminent clinical endodontist with over 15
                  years of experience in advanced endodontic procedures. His
                  passion for teaching and commitment to clinical excellence has
                  made him a respected figure in the dental community.
                </p>
                <p className="text-lg">
                  Having successfully treated thousands of complex cases, Dr.
                  Anoop brings real-world expertise to the classroom. His
                  approach combines traditional techniques with the latest
                  advancements in endodontic technology.
                </p>
                <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-xl">
                  <p className="italic text-amber-800 font-medium text-lg leading-relaxed">
                    "My goal is not just to teach procedures, but to build
                    confident clinicians who can handle any endodontic challenge
                    with skill and precision."
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-neutral-200">
                <h4
                  className="font-bold text-neutral-900 mb-6 text-xl font-serif"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  <span className="elegant-underline-thin animate">
                    Qualifications & Expertise
                  </span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-amber-50 hover:border-amber-200 transition-all duration-300">
                    <span className="text-amber-500 mr-3 text-xl">✓</span>
                    <span className="text-neutral-700 font-medium">
                      MDS in Conservative Dentistry & Endodontics
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-amber-50 hover:border-amber-200 transition-all duration-300">
                    <span className="text-amber-500 mr-3 text-xl">✓</span>
                    <span className="text-neutral-700 font-medium">
                      Advanced Training in Rotary Endodontics
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-amber-50 hover:border-amber-200 transition-all duration-300">
                    <span className="text-amber-500 mr-3 text-xl">✓</span>
                    <span className="text-neutral-700 font-medium">
                      Expert in Complex Root Canal Treatments
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-amber-50 hover:border-amber-200 transition-all duration-300">
                    <span className="text-amber-500 mr-3 text-xl">✓</span>
                    <span className="text-neutral-700 font-medium">
                      Specialist in Aesthetic Restorations
                    </span>
                  </div>
                </div>
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
            <div className="sticky top-8">
              <h3
                className="text-3xl font-bold text-neutral-900 mb-8 font-serif"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Why Choose{" "}
                <span className="elegant-underline-thin animate">
                  EndoEdge Academy
                </span>
                ?
              </h3>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group p-6 bg-white border border-neutral-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:border-amber-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4
                          className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-amber-700 transition-colors duration-300 font-serif"
                          style={{
                            fontFamily: "Playfair Display, Georgia, serif",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-neutral-600 leading-relaxed font-sans"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-16 border border-amber-100 shadow-xl overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3
                className="text-5xl font-bold text-neutral-900 mb-6 font-serif"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Our Track Record of{" "}
                <span className="elegant-underline animate text-amber-700">
                  Excellence
                </span>
              </h3>
              <p
                className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Numbers that speak for our commitment to quality education and
                clinical excellence. Join a legacy of successful endodontic
                professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-8 text-center h-full bg-white border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <h4
                      className="text-2xl font-bold text-amber-700 mb-4 font-serif group-hover:text-amber-800 transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                    >
                      {achievement.title}
                    </h4>
                    <p
                      className="text-neutral-600 leading-relaxed font-sans group-hover:text-neutral-700 transition-colors duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {achievement.description}
                    </p>
                    <div className="mt-6 w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-300"></div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 bg-gradient-to-br from-amber-50 via-white to-amber-50 border-amber-200 shadow-xl">
            <h3
              className="text-3xl font-bold text-neutral-900 mb-6 font-serif"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              Ready to Transform Your{" "}
              <span className="elegant-underline-thin animate">
                Endodontic Skills
              </span>
              ?
            </h3>
            <p
              className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Where passion fuels precision — master the art of endodontics and step confidently into a future of clinical excellence.
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("courses");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Courses
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
