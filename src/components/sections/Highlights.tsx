"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Globe, Award } from "lucide-react";

const highlights = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Mars Society",
    subtitle: "USC Convention 2025",
    color: "from-accent-500 to-accent-600",
    glow: "shadow-accent-500/20"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Plaksha YTS",
    subtitle: "Best Robot — Equibot",
    color: "from-primary-500 to-primary-600",
    glow: "shadow-primary-500/20"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "DPS Robotics",
    subtitle: "2nd Place",
    color: "from-warning-500 to-warning-600",
    glow: "shadow-warning-500/20"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Cheri Foundation",
    subtitle: "₹3L+ Raised",
    color: "from-success-500 to-success-600",
    glow: "shadow-success-500/20"
  }
];

export function Highlights() {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Key Achievements
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg ${item.glow} border border-gray-100 dark:border-gray-700`}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {item.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
