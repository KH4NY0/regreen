"use client";

import { motion } from "framer-motion";
import React from "react";

const testimonials = [
    {
      id: 1,
      name: "Sarah Green",
      feedback: "This subscription has transformed the way I shop for home essentials. Its so convenient, and I feel great knowing everything is eco-friendly!",
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
      feedback: "Ive reduced my plastic use by over 50% since subscribing. This service is a game-changer for anyone looking to live more sustainably.",
    },
    {
      id: 5,
      name: "Laura Bennett",
      feedback: "Every delivery feels like a gift! Im so happy to finally have a reliable source for sustainable home products.",
    },
    {
      id: 6,
      name: "James Turner",
      feedback: "I was skeptical at first, but the quality of the products is outstanding. This is now a staple for my household.",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      feedback: "The quiz helped me find exactly what I needed. Its like they knew what I wanted before I did!",
    },
    {
      id: 8,
      name: "Oliver Walker",
      feedback: "Switching to this service has been one of the easiest ways to reduce my carbon footprint. Highly recommend it!",
    },
    {
      id: 9,
      name: "Isabella Cooper",
      feedback: "The products are not just sustainable but beautifully designed. Im obsessed with the packaging too!",
    },
    {
      id: 10,
      name: "Ethan Rogers",
      feedback: "Its amazing how much waste Ive eliminated from my household. Thank you for making sustainability so accessible!",
    },
    {
      id: 11,
      name: "Grace Peterson",
      feedback: "I love the variety in each box. Its like a surprise every month, and I know everything is eco-friendly!",
    },
    {
      id: 12,
      name: "Liam Murphy",
      feedback: "The customer service is excellent, and I feel like they genuinely care about their mission. Great experience!",
    },
    {
      id: 13,
      name: "Amelia King",
      feedback: "I never realized how easy it could be to switch to sustainable products. This service does all the hard work for you!",
    },
    {
      id: 14,
      name: "Lucas Scott",
      feedback: "My kids love unpacking the boxes every month. Its a fun way to teach them about sustainability.",
    },
    {
      id: 15,
      name: "Mia Adams",
      feedback: "Ive been recommending this to all my friends. Its the best decision Ive made for my family and the planet.",
    },
    {
      id: 16,
      name: "Noah Mitchell",
      feedback: "Every product is carefully chosen and actually useful. I never feel like Im wasting money.",
    },
    {
      id: 17,
      name: "Charlotte Hall",
      feedback: "The transition to sustainable living felt overwhelming until I found this service. Now its effortless!",
    },
    {
      id: 18,
      name: "Henry Allen",
      feedback: "This is the subscription I never knew I needed. Its convenient, affordable, and truly impactful.",
    },
    {
      id: 19,
      name: "Ella Carter",
      feedback: "Knowing that my purchases are making a difference is incredibly satisfying. Im a proud subscriber!",
    },
    {
      id: 20,
      name: "Jack Rivera",
      feedback: "I appreciate how transparent the company is about their mission. It feels great to support such a meaningful cause.",
    },
    {
      id: 21,
      name: "Victoria Bailey",
      feedback: "The delivery is always on time, and the quality never disappoints. Thank you for making this so easy!",
    },
    {
      id: 22,
      name: "Daniel Evans",
      feedback: "Im amazed at how much Ive learned about sustainability through this service. Every box tells a story!",
    },
    {
      id: 23,
      name: "Hannah Rivera",
      feedback: "Its more than a subscription; its a lifestyle upgrade. I feel empowered and inspired every month.",
    },
    {
      id: 24,
      name: "Andrew Torres",
      feedback: "The reusable items are game-changers for my kitchen and bathroom. Ill never go back to single-use products.",
    },
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
                            .map((testimonialSet, setIndex) =>
                                testimonialSet.map((testimonial: { id: number; name: string; feedback: string }) => (
                                    <div
                                        key={`${setIndex}-${testimonial.id}`}
                                        className="bg-white shadow-lg rounded-xl p-6 min-w-[300px] flex flex-col items-center"
                                    >
                                        <p className="text-gray-600 italic mb-4">
                                            &quot;{testimonial.feedback}&quot;
                                        </p>
                                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                    </div>
                                ))
                            )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;