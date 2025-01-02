'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const ImpactMetrics = ({ id }: { id: string }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const data = [
    { month: "Jan", Plastic: 2000, Trees: 100, Carbon: 800 },
    { month: "Feb", Plastic: 3000, Trees: 300, Carbon: 900 },
    { month: "Mar", Plastic: 4000, Trees: 600, Carbon: 1200 },
    { month: "Apr", Plastic: 6000, Trees: 1000, Carbon: 1500 },
    { month: "May", Plastic: 8000, Trees: 1300, Carbon: 1800 },
    { month: "Jun", Plastic: 10000, Trees: 1800, Carbon: 2200 },
    { month: "Jul", Plastic: 12000, Trees: 2500, Carbon: 3000 },
  ];

  return (
    <section id="impact-metrics" className="py-24 bg-white text-gray-900 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Our Collective Impact
          </h2>
          <p className="mt-6 text-lg text-gray-900 ">
            Together with our community, we're making a measurable difference
            for our planet.
          </p>
        </div>

        {/* Line Graph with Scroll Animation */}
        <motion.div
          ref={ref}
          className="flex justify-center items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
          }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis
                dataKey="month"
                tick={{ fill: "black", fontSize: 14 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fill: "black", fontSize: 14 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "white", borderRadius: 8 }}
                labelStyle={{ color: "black " }}
              />
              <Line
                type="monotone"
                dataKey="Plastic"
                stroke="#43936C"
                strokeWidth={3}
                dot={{ r: 6, fill: "#43936C" }}
              />
              <Line
                type="monotone"
                dataKey="Trees"
                stroke="#2F5233"
                strokeWidth={3}
                dot={{ r: 6, fill: "#2F5233" }}
              />
              <Line
                type="monotone"
                dataKey="Carbon"
                stroke="#7FA086"
                strokeWidth={3}
                dot={{ r: 6, fill: "#7FA086" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
