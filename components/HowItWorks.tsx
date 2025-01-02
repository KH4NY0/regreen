'use client'

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardIcon, LeafIcon, PackageIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { ReactNode } from "react";



// Steps data structure remains the same for clarity and maintainability
const steps = [
  {
    title: "Take the Eco Quiz",
    description: "Tell us about your lifestyle and sustainability goals through our quick 2-minute quiz.",
    link: "#",
    icon: ClipboardIcon,
    number: "01"
  },
  {
    title: "Get Your Personalized Box",
    description: "Receive a curated selection of eco-friendly products tailored to your preferences.",
    link: "#",
    icon: PackageIcon,
    number: "02"
  },
  {
    title: "Make an Impact",
    description: "Track your environmental impact as you replace traditional products with sustainable alternatives.",
    link: "#",
    icon: LeafIcon,
    number: "03"
  }
];

export const HowItWorks = ({ id }: { id: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    // Changed background to white and adjusted text colors for better contrast
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
            const Icon = step.icon;
            return (
              <div
                key={step.number}
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
                        transition: { duration: 0.800 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.800, delay: 800 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card>
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-green-600" />
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

const Card = ({ className, children }: { className?: string; children: ReactNode }) => {
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

const CardTitle = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <h4 className={cn("text-gray-900 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }: { className?: string; children: ReactNode }) => {
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