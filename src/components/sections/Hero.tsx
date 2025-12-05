"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HighlightBadge } from "@/components/ui/HighlightBadge";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />
};

export function Hero() {
  const { personal, socials } = siteData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      
      {/* Subtle star field effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-[10%] w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 left-[25%] w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-100" />
        <div className="absolute top-32 left-[60%] w-1 h-1 bg-primary-300 rounded-full animate-pulse delay-200" />
        <div className="absolute top-60 left-[80%] w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300" />
        <div className="absolute top-80 left-[15%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
        <div className="absolute top-[70%] left-[70%] w-1 h-1 bg-accent-300 rounded-full animate-pulse delay-150" />
        <div className="absolute top-[85%] left-[40%] w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-200" />
      </div>
      
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      {/* Glowing orbs - Cyan (tech) and Red (Mars) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-success-500 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-primary-500/20">
            <img 
              src="/images/profile.jpg" 
              alt={personal.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-accent-500/20 to-primary-500/20 text-white border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-success-400 mr-2 animate-pulse" />
            {personal.grade} • Building the Future
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          {personal.tagline}
        </motion.p>

        {/* Aspirations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {personal.aspirations.map((aspiration, index) => (
            <span 
              key={index} 
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10"
            >
              {aspiration}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
          >
            Explore My Journey
            <ArrowDown className="ml-2 w-5 h-5" />
          </button>
          {personal.resumeLink && (
            <a
              href={personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg backdrop-blur-sm"
            >
              <FileText className="mr-2 w-5 h-5" />
              View Resume
            </a>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white/80 hover:text-primary-400 hover:bg-white/20 hover:scale-110 transition-all border border-white/10"
              aria-label={social.platform}
            >
              {iconMap[social.icon]}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
