"use client";

import { motion } from "framer-motion";
import { ExternalLink, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { HighlightBadge } from "@/components/ui/HighlightBadge";
import { LeadershipInitiative } from "@/data/types";

interface LeadershipCardProps {
  initiative: LeadershipInitiative;
  index: number;
}

export function LeadershipCard({ initiative, index }: LeadershipCardProps) {
  return (
    <Card delay={index * 0.1} className="overflow-hidden">
      {/* Header with gradient */}
      <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500" />
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <HighlightBadge variant="accent" size="sm" className="mb-2">
              {initiative.role}
            </HighlightBadge>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {initiative.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {initiative.organization} • {initiative.duration}
            </p>
          </div>
          {initiative.link && (
            <a
              href={initiative.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {initiative.description}
        </p>

        {/* Impact Metrics */}
        {initiative.metrics && initiative.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {initiative.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="text-center p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20"
              >
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Impact List */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <TrendingUp className="w-4 h-4 text-primary-500" />
            Key Impact
          </div>
          <ul className="space-y-2">
            {initiative.impact.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
