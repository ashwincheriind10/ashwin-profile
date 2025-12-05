"use client";

import { motion } from "framer-motion";
import {
  Target,
  Pencil,
  BookOpen,
  Code,
  Palette,
  Dumbbell,
  Music,
  Camera,
  Gamepad2,
  Calculator
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Activity } from "@/data/types";

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  target: <Target className="w-6 h-6" />,
  pencil: <Pencil className="w-6 h-6" />,
  "book-open": <BookOpen className="w-6 h-6" />,
  code: <Code className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  dumbbell: <Dumbbell className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  camera: <Camera className="w-6 h-6" />,
  gamepad: <Gamepad2 className="w-6 h-6" />,
  calculator: <Calculator className="w-6 h-6" />
};

const categoryColors = {
  sports: "from-red-400 to-orange-500",
  arts: "from-purple-400 to-pink-500",
  technology: "from-blue-400 to-cyan-500",
  reading: "from-green-400 to-emerald-500",
  other: "from-gray-400 to-gray-500"
};

export function ActivityCard({ activity, index }: ActivityCardProps) {
  const gradientColor = categoryColors[activity.category];

  return (
    <Card delay={index * 0.1} className="overflow-hidden group">
      <CardContent className="p-6">
        {/* Icon with gradient background */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientColor} flex items-center justify-center text-white mb-4 shadow-lg`}
        >
          {iconMap[activity.icon] || <Target className="w-6 h-6" />}
        </motion.div>

        {/* Category badge */}
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {activity.category}
        </span>

        {/* Title */}
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1 mb-2">
          {activity.name}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {activity.description}
        </p>

        {/* Achievements */}
        {activity.achievements && activity.achievements.length > 0 && (
          <div className="space-y-2">
            {activity.achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradientColor}`} />
                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
