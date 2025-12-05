"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Globe, MapPin, School } from "lucide-react";
import { Competition } from "@/data/types";

interface AwardBadgeProps {
  competition: Competition;
  index: number;
}

const levelConfig = {
  school: {
    icon: <School className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-600 dark:text-blue-400"
  },
  regional: {
    icon: <MapPin className="w-5 h-5" />,
    color: "from-green-400 to-green-600",
    bg: "bg-green-50 dark:bg-green-900/20",
    text: "text-green-600 dark:text-green-400"
  },
  national: {
    icon: <Award className="w-5 h-5" />,
    color: "from-purple-400 to-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    text: "text-purple-600 dark:text-purple-400"
  },
  international: {
    icon: <Globe className="w-5 h-5" />,
    color: "from-amber-400 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    text: "text-amber-600 dark:text-amber-400"
  }
};

const categoryIcons = {
  olympiad: <Star className="w-4 h-4" />,
  robotics: <span className="text-sm">🤖</span>,
  science: <span className="text-sm">🔬</span>,
  math: <span className="text-sm">📐</span>,
  other: <Medal className="w-4 h-4" />
};

export function AwardBadge({ competition, index }: AwardBadgeProps) {
  const level = levelConfig[competition.level];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative p-5 rounded-2xl ${level.bg} border border-gray-100 dark:border-gray-700 overflow-hidden`}
    >
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${level.color}`} />
      
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm ${level.text}`}>
          {level.icon}
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-medium uppercase tracking-wide ${level.text}`}>
              {competition.level}
            </span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {competition.year}
            </span>
          </div>

          {/* Title */}
          <h4 className="font-bold text-gray-900 dark:text-white mb-1 truncate">
            {competition.name}
          </h4>

          {/* Organizer */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {competition.organizer}
          </p>

          {/* Achievement */}
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {competition.achievement}
            </span>
          </div>

          {/* Description */}
          {competition.description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {competition.description}
            </p>
          )}
        </div>

        {/* Category icon */}
        <div className="flex-shrink-0 opacity-50">
          {categoryIcons[competition.category]}
        </div>
      </div>
    </motion.div>
  );
}
