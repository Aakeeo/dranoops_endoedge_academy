import { useEffect } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../utils/constants";
import Card from "./ui/Card";
import Button from "./ui/Button";

const Testimonials = () => {
  useEffect(() => {
    const handleScroll = () => {
      const underlineElements = document.querySelectorAll(
        "#testimonials .elegant-underline, #testimonials .elegant-underline-thin"
      );

      underlineElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          element.classList.add("animate");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-amber-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gray-50 scroll-margin-nav"
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
            className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="mr-2">💬</span>
            Success Stories
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our{" "}
            <span className="relative inline-block">
              <span className="text-amber-600">Graduates Say</span>
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
            Hear from our successful graduates who have transformed their
            practice and career through our comprehensive endodontic training
            program.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card
                className={`p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-amber-50 group-hover:to-yellow-50 ${
                  index % 2 === 0 ? "lg:mt-8" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">"</span>
                  </div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 font-['Inter'] text-sm lg:text-base italic">
                  {testimonial.content}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm font-['Inter']">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm lg:text-base font-['Playfair_Display'] group-hover:text-amber-700 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs lg:text-sm font-['Inter'] leading-tight">
                      {testimonial.designation}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-['Inter']">
                        {testimonial.specialty}
                      </span>
                      <span className="text-xs text-gray-500 ml-2 font-['Inter']">
                        '{testimonial.yearGraduated.toString().slice(-2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stats */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
              Our{" "}
              <span className="relative inline-block">
                <span className="text-amber-600">Impact</span>
                <span className="elegant-underline-thin"></span>
              </span>
            </h3>
            <p className="text-lg text-gray-600 font-['Inter'] max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence in endodontic
              education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "500+",
                label: "Successful Graduates",
                description: "Dental professionals trained",
                icon: "🎓",
                color: "from-blue-400 to-blue-600",
              },
              {
                number: "95%",
                label: "Satisfaction Rate",
                description: "Student satisfaction score",
                icon: "⭐",
                color: "from-amber-400 to-amber-600",
              },
              {
                number: "85%",
                label: "Career Growth",
                description: "Graduates reporting practice improvement",
                icon: "📈",
                color: "from-green-400 to-green-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 text-center h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2 font-['Playfair_Display'] group-hover:text-amber-600 transition-colors">
                    {stat.number}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 font-['Playfair_Display']">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 font-['Inter'] text-sm">
                    {stat.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
                    Ready to Join Our Success Stories?
                  </h3>
                  <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-['Inter'] leading-relaxed">
                    Transform your endodontic skills and join hundreds of
                    successful graduates who have elevated their practice with
                    our comprehensive training program.
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
                    size="lg"
                    className="bg-white text-amber-700 hover:bg-gray-50 font-['Inter'] font-semibold px-8 py-4 text-lg shadow-lg border-0 hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply for Next Batch
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
                    Learn More About Courses
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

export default Testimonials;
