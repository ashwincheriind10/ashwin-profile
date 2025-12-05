"use client";

import { motion } from "framer-motion";
import { Rocket, Trophy, Heart, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteData } from "@/data/siteData";

const typeConfig = {
  project: {
    icon: <Rocket className="w-4 h-4" />,
    color: "bg-primary-500",
    lightBg: "bg-primary-100 dark:bg-primary-900/30",
    text: "text-primary-600 dark:text-primary-400"
  },
  achievement: {
    icon: <Trophy className="w-4 h-4" />,
    color: "bg-warning-500",
    lightBg: "bg-warning-100 dark:bg-warning-900/30",
    text: "text-warning-600 dark:text-warning-400"
  },
  leadership: {
    icon: <Heart className="w-4 h-4" />,
    color: "bg-success-500",
    lightBg: "bg-success-100 dark:bg-success-900/30",
    text: "text-success-600 dark:text-success-400"
  },
  education: {
    icon: <GraduationCap className="w-4 h-4" />,
    color: "bg-accent-500",
    lightBg: "bg-accent-100 dark:bg-accent-900/30",
    text: "text-accent-600 dark:text-accent-400"
  }
};

export function Timeline() {
  const { timeline } = siteData;

  return (
    <section id="timeline" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="My Journey"
          subtitle="Key milestones in my path toward MIT"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map((event, index) => {
              const config = typeConfig[event.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-3 h-3 rounded-full ${config.color}`} />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-5 rounded-2xl ${config.lightBg} border border-gray-100 dark:border-gray-700`}
                    >
                      {/* Year badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${config.color} text-white mb-2`}>
                        {event.year}
                      </span>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {event.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {event.description}
                      </p>

                      {/* Type indicator */}
                      <div className={`mt-3 flex items-center gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <span className={`${config.text}`}>
                          {config.icon}
                        </span>
                        <span className={`text-xs font-medium uppercase tracking-wide ${config.text}`}>
                          {event.type}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>

          {/* Future indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 text-center"
          >
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 transform -translate-x-1/2 flex items-center justify-center">
              <span className="text-white text-xs font-bold">→</span>
            </div>
            <div className="ml-12 md:ml-0 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium">
              The Journey Continues...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
