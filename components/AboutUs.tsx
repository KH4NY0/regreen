'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Leaf, Recycle, Globe, TreePine } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: {
    value: string;
    label: string;
  }[];
}

const timeline: TimelineEvent[] = [
  {
    year: '2022',
    title: 'Our Journey Began',
    description: 'Founded with a mission to make sustainable living accessible to everyone through eco-friendly home essentials.',
    icon: <Leaf className="w-6 h-6" />,
    stats: [
      { value: '1,000+', label: 'Early Adopters' },
      { value: '5', label: 'Product Lines' }
    ]
  },
  {
    year: '2023',
    title: 'Zero Waste Initiative',
    description: 'Achieved 100% plastic-free packaging and established partnerships with sustainable manufacturers.',
    icon: <Recycle className="w-6 h-6" />,
    stats: [
      { value: '25,000+', label: 'Active Subscribers' },
      { value: '100,000', label: 'lbs Plastic Prevented' }
    ]
  },
  {
    year: '2024',
    title: 'Carbon Neutral Achievement',
    description: 'Reached carbon neutrality across all operations and launched our tree planting initiative.',
    icon: <Globe className="w-6 h-6" />,
    stats: [
      { value: '50,000+', label: 'Trees Planted' },
      { value: '90%', label: 'Emission Reduction' }
    ]
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Expanding our impact with new product lines and enhanced sustainability programs.',
    icon: <TreePine className="w-6 h-6" />,
    stats: [
      { value: '100,000+', label: 'Projected Users' },
      { value: '1M+', label: 'Products Delivered' }
    ]
  }
];

const AboutUs = ({ id }: { id: string }) => {
  return (
    <>
      <Head>
        <title>Our Sustainable Journey | Eco-Friendly Home Essentials</title>
        <meta 
          name="description" 
          content="Discover our journey of transforming homes with sustainable essentials. From zero-waste packaging to carbon-neutral operations, see how we're making eco-friendly living accessible."
        />
        <meta name="keywords" content="sustainable living, eco-friendly products, zero waste, carbon neutral, home essentials" />
        <meta property="og:title" content="Our Sustainable Journey | Eco-Friendly Home Essentials" />
        <meta property="og:description" content="Making sustainable living accessible through eco-friendly home essentials since 2022." />
      </Head>

      <section id='about-us' className="py-24 bg-white" aria-label="Company Timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Our Sustainable Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a greener future through innovative home essentials and sustainable practices.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-200" />

            <div className="space-y-24">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-1">
                      <div className={`p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow ${index % 2 === 0 ? 'mr-12' : 'ml-12'}`}>
                        <span className="text-green-600 text-sm font-semibold tracking-wide">
                          {event.year}
                        </span>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900">
                          {event.title}
                        </h2>
                        <p className="mt-3 text-gray-600">
                          {event.description}
                        </p>
                        {event.stats && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            {event.stats.map((stat) => (
                              <div key={stat.label} className="bg-green-50 p-4 rounded-lg">
                                <p className="text-2xl font-bold text-green-600">{stat.value}</p>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 border-4 border-white shadow flex items-center justify-center">
                      <span className="text-green-600">
                        {event.icon}
                      </span>
                    </div>
                    <div className="flex-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;