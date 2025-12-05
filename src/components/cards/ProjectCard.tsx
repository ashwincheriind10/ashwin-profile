"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, CheckCircle, Clock, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { HighlightBadge } from "@/components/ui/HighlightBadge";
import { STEMProject } from "@/data/types";

interface ProjectCardProps {
  project: STEMProject;
  index: number;
}

const statusConfig = {
  completed: {
    icon: <CheckCircle className="w-4 h-4" />,
    label: "Completed",
    variant: "success" as const
  },
  ongoing: {
    icon: <Clock className="w-4 h-4" />,
    label: "Ongoing",
    variant: "primary" as const
  },
  upcoming: {
    icon: <Rocket className="w-4 h-4" />,
    label: "Upcoming",
    variant: "accent" as const
  }
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <Card delay={index * 0.1} className="overflow-hidden group">
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 overflow-hidden">
        {/* TODO: Replace with actual project image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">🤖</div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <HighlightBadge variant={status.variant} size="sm" className="flex items-center gap-1">
            {status.icon}
            {status.label}
          </HighlightBadge>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Program badge */}
        <HighlightBadge variant="secondary" size="sm" className="mb-3">
          {project.program}
        </HighlightBadge>

        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-gray-400" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          {project.year}
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              {highlight}
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
