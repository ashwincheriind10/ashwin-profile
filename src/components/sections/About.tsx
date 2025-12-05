"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Users, Rocket, Trophy, IndianRupee } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { siteData } from "@/data/siteData";

export function About() {
  const { personal } = siteData;

  const stats = [
    {
      value: "50+",
      label: "Students Taught",
      icon: <Users className="w-6 h-6" />,
      color: "text-success-500"
    },
    {
      value: "₹3L",
      label: "Funds Raised",
      icon: <IndianRupee className="w-6 h-6" />,
      color: "text-success-500"
    },
    {
      value: "2",
      label: "Major Projects",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-primary-500"
    },
    {
      value: "6+",
      label: "Competitions",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-warning-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="About Me"
          subtitle="Engineering solutions for real-world problems"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 overflow-hidden">
              {/* Profile image */}
              <img 
                src="/images/profile.jpg" 
                alt={personal.name}
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-200 dark:bg-accent-800/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 dark:bg-primary-800/30 rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
              <MapPin className="w-4 h-4" />
              <span>{personal.location}</span>
              <span className="mx-2">•</span>
              <GraduationCap className="w-4 h-4" />
              <span>{personal.grade}</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Where Engineering Meets Purpose
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I build robots, but more importantly, I build solutions. As a {personal.grade.toLowerCase()} student, 
                I&apos;ve learned that the best engineering happens when you&apos;re solving problems that matter to real people.
              </p>
              <p>
                That&apos;s why I founded the <a href="https://cherifoundation.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 underline decoration-2 underline-offset-2">Cheri Foundation</a> — 
                to bring quality education to 50+ rural students who deserve the same opportunities I&apos;ve had. 
                Raising ₹3 lakh and seeing students improve their scores by 40% taught me more about impact than any textbook could.
              </p>
              <p>
                From building <strong className="text-primary-600 dark:text-primary-400">Equibot</strong> at Plaksha YTS 
                to being selected as a <strong className="text-primary-600 dark:text-primary-400">Mars Society finalist</strong> presenting at USC, 
                I&apos;m constantly pushing to turn ambitious ideas into working prototypes.
              </p>
              <p className="text-sm italic border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-r-lg">
                &ldquo;The best way to predict the future is to invent it.&rdquo; — Alan Kay
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} hover={false} delay={index * 0.1} className="text-center">
                  <CardContent className="p-4">
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
