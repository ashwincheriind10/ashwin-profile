"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Heart,
  Trophy,
  Rocket,
  Target,
  Lightbulb,
  Globe
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
  microscope: <Microscope className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  trophy: <Trophy className="w-6 h-6" />,
  rocket: <Rocket className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
  lightbulb: <Lightbulb className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />
};

export function FutureGoals() {
  const { futureGoals } = siteData;

  return (
    <section id="goals" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Future Goals"
          subtitle="Where I'm headed and what I'm working towards"
        />

        {/* Timeline-style goals */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block" />

          <div className="space-y-8">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-gray-900 hidden md:block" />

                <Card hover={true} delay={index * 0.1}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                        {iconMap[goal.icon] || <Target className="w-6 h-6" />}
                      </div>

                      <div className="flex-1">
                        {/* Timeline badge */}
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-2">
                          {goal.timeline}
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {goal.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Robotics callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl transform rotate-1" />
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden border border-gray-700">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 border border-white rounded-full transform -translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <span className="text-5xl">🤖</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Robotics?
                </h3>
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p>
                    <em>&ldquo;The idea of innovation in a world that we don&apos;t even know the potential of excites me.&rdquo;</em>
                  </p>
                  <p>
                    Robotics combines everything I love — mathematics, physics, coding, and hands-on building. 
                    From building Equibot at Plaksha to designing Mars rovers for Team SOLACE, 
                    I&apos;ve discovered that robots aren&apos;t just machines — they&apos;re solutions waiting to be built.
                  </p>
                  <p>
                    My robotics mentor says the best universities are where you learn to innovate, not just study. 
                    That&apos;s what I&apos;m looking for — a place where I can turn ideas into reality 
                    and build technology that makes a difference.
                  </p>
                </div>
                
                {/* What drives me */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 backdrop-blur-sm border border-primary-500/20">
                    <div className="text-2xl mb-1">🔧</div>
                    <div className="font-semibold text-primary-300">Build & Learn</div>
                    <div className="text-sm text-gray-400">Hands-on engineering</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 backdrop-blur-sm border border-accent-500/20">
                    <div className="text-2xl mb-1">🚀</div>
                    <div className="font-semibold text-accent-300">Dream Big</div>
                    <div className="text-sm text-gray-400">From Earth to Mars</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-success-500/20 to-success-600/10 backdrop-blur-sm border border-success-500/20">
                    <div className="text-2xl mb-1">❤️</div>
                    <div className="font-semibold text-success-300">Create Impact</div>
                    <div className="text-sm text-gray-400">Technology for good</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
