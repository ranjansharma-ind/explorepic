import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "AVID TREKKER",
    content:
      "Explore Epic organized our Spiti trek perfectly. The local knowledge and safety standards they maintain are truly premium.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 2,
    name: "Ananya Singh",
    role: "HR MANAGER, ZEPHYR TECH",
    content:
      "The corporate retreat they designed for our tech team in Jibhi was transformative. Perfect balance of work and adventure.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    role: "LUXURY TRAVELER",
    content:
      "Never knew Rajasthan could be so adventurous! The desert glamping and night safaris were beyond my expectations.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const TestimonialCard = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#003580] mb-2 tracking-wide"
          >
            Trusted by Explorers
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-orange-400 mx-auto mt-4 rounded-full"
          />
        </div>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full relative overflow-hidden"
            >
              {/* Background Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-orange-200/40">
                <Quote size={48} fill="currentColor" stroke="none" />
              </div>

              <div className="relative z-10">
                <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(testimonial.name);
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Trust Badge / Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 mt-16 text-sm uppercase tracking-[0.2em]"
        >
          Join 5,000+ happy adventurers worldwide
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialCard;
