'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

// Define interfaces for type safety
interface Step {
  title: string;
  description: string;
  number: string;
}

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps extends CardProps {}

interface CardDescriptionProps extends CardProps {}

// Steps data structure
const steps: Step[] = [
  {
    title: "Take the Eco Quiz",
    description: "Tell us about your lifestyle and sustainability goals through our quick 2-minute quiz.",
    number: "01",
  },
  {
    title: "Get Your Personalized Box",
    description: "Receive a curated selection of eco-friendly products tailored to your preferences.",
    number: "02",
  },
  {
    title: "Make an Impact",
    description: "Track your environmental impact as you replace traditional products with sustainable alternatives.",
    number: "03",
  },
];

export const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Making Sustainability Simple
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Join thousands of households reducing their environmental impact through our easy three-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, idx) => {
            
            return (
              <div
                key={`${step.number}-${step.title}`} // Ensure unique key
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-gradient-to-br from-green-50 to-green-100 block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.8 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.8, delay: 0.8 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card>
                  <div className="flex items-center justify-between">
                    
                    <span className="text-4xl font-bold text-green-100">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 group-hover:border-green-500/50 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
  return (
    <h4 className={cn("text-gray-900 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription: React.FC<CardDescriptionProps> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default HowItWorks;
