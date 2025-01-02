"use client";

import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Green",
    feedback: "This subscription has transformed the way I shop for home essentials. It's so convenient, and I feel great knowing everything is eco-friendly!",
  },
  {
    id: 2,
    name: "Michael Lee",
    feedback: "I love how the products align with my values. The curated selections are amazing, and I can see a positive impact on my household waste!",
  },
  {
    id: 3,
    name: "Emily White",
    feedback: "As someone new to sustainable living, this service made it so easy to get started. Everything is thoughtfully packaged and top quality!",
  },
  {
    id: 4,
    name: "David Johnson",
    feedback: "I've reduced my plastic use by over 50% since subscribing. This service is a game-changer for anyone looking to live more sustainably.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-gray-900 sm:text-4xl mb-10">
          Hear from Our Community
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array(2)
              .fill(testimonials)
              .flat()
              .map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`} // Ensure unique keys
                  className="bg-white shadow-lg rounded-xl p-6 min-w-[300px] flex flex-col items-center"
                >
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.feedback}&quot;
                  </p>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
