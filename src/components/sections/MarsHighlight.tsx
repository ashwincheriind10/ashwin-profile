"use client";

import { motion } from "framer-motion";
import { Rocket, Trophy, Globe, Plane, Star, MapPin } from "lucide-react";
import Image from "next/image";

const marsImages = [
  {
    src: "/images/mars-convention-ashwin.jpeg",
    alt: "Ashwin at Mars Society Convention 2025",
    caption: "At the 28th Annual Mars Society Convention, USC"
  },
  {
    src: "/images/mars-presentation.jpeg",
    alt: "Team SOLACE presenting Mars mission design",
    caption: "Presenting Mars Habitat Radiation Shielding Strategy"
  },
  {
    src: "/images/mars-auditorium.jpeg",
    alt: "Mars Society Convention auditorium at USC",
    caption: "The convention auditorium at University of Southern California"
  }
];

const achievements = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "1st Place Overall",
    description: "International Design Competition"
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "1st in Engineering",
    description: "Engineering Division Winner"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "International Competition",
    description: "Students from all over the world"
  },
  {
    icon: <Plane className="w-5 h-5" />,
    title: "Travelled to USA",
    description: "Presented at USC, Los Angeles"
  }
];

export function MarsHighlight() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-orange-950 relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-100" />
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200" />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150" />
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-250" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Featured Achievement
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mars Society Convention 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-orange-400 font-semibold">Team SOLACE</span> — 1st Place Winners at the International Mars Mission Design Competition
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>University of Southern California, Los Angeles, USA</span>
          </div>
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                {achievement.icon}
              </div>
              <h3 className="font-bold text-white text-sm mb-1">{achievement.title}</h3>
              <p className="text-xs text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {marsImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">About the Mission</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Led the Engineering team for Team SOLACE in designing a complete theoretical 1.5-year mission to Mars. 
            Our project included designing maps, rovers, and innovative solutions for Mars exploration. 
            The competition brought together students from all over the world, and our team emerged victorious 
            with <span className="text-orange-400 font-semibold">1st position overall</span> and{" "}
            <span className="text-orange-400 font-semibold">1st place in the Engineering division</span>.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Mission Planning", "Rover Design", "Radiation Shielding", "Risk Assessment", "Engineering Leadership"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm border border-orange-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
