'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-100 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-black mb-4">
            <Image
                alt="regreen logo"
                src="/images/regreen-logo.svg"
                width={78}
                height={78}
                className="h-8 w-auto mx-auto"
            />
          </h1>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Empowering Sustainable Living, One Home at a Time.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mt-8"
        >
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-900 hover:text-gray-700 transition duration-200"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-900 hover:text-gray-700 transition duration-200"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Youtube"
            className="text-gray-900 hover:text-gray-700 transition duration-200"
          >
            <Youtube className="w-6 h-6" />
          </a>
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
