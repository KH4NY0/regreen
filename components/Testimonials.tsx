"use client";

import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  [
    {
      id: 5,
      name: "Jessica Brown",
      feedback: "The subscription has made it easy for me to live more sustainably. I love the convenience, and the products are always high-quality and well-curated."
    },
    {
      id: 6,
      name: "Robert Harris",
      feedback: "I'm amazed at how seamlessly these products fit into my daily routine. I'm reducing waste without sacrificing quality or convenience!"
    },
    {
      id: 7,
      name: "Ava Wilson",
      feedback: "I feel so good about supporting a service that's helping the planet. The items are exactly what I need, and I love that they're eco-friendly!"
    },
    {
      id: 8,
      name: "John Smith",
      feedback: "As a busy professional, I appreciate how easy it is to have everything delivered to my door. Plus, I can feel good about my environmental impact."
    },
    {
      id: 9,
      name: "Olivia Clark",
      feedback: "This has been a game-changer for my household. The thoughtful packaging and sustainable products have made me more conscious of my environmental footprint."
    },
    {
      id: 10,
      name: "Ethan Moore",
      feedback: "I used to struggle with finding eco-friendly products that also fit my lifestyle. This service makes it so simple to switch to sustainable options."
    },
    {
      id: 11,
      name: "Sophia Martinez",
      feedback: "I&apos;m thrilled with the convenience of having eco-friendly products delivered regularly. It's an easy way to make a positive impact every day."
    },
    {
      id: 12,
      name: "Benjamin Taylor",
      feedback: "The sustainable products I receive are amazing! They've helped me reduce waste at home, and I'm seeing a difference in my environmental impact."
    },
    {
      id: 13,
      name: "Charlotte Robinson",
      feedback: "Switching to this subscription has been one of the best decisions I've made. I love how everything is perfectly tailored to my needs and values."
    },
    {
      id: 14,
      name: "William Davis",
      feedback: "I was hesitant at first, but now I can&apos;t imagine going back. The products are incredible, and I love knowing that I&apos;m doing my part for the environment."
    }
  ]
  

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
