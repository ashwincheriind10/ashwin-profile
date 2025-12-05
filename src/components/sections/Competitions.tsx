"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AwardBadge } from "@/components/cards/AwardBadge";
import { siteData } from "@/data/siteData";

export function Competitions() {
  const { competitions, awards } = siteData;

  // Sort competitions by level (international first)
  const sortedCompetitions = [...competitions].sort((a, b) => {
    const levelOrder = { international: 0, national: 1, regional: 2, school: 3 };
    return levelOrder[a.level] - levelOrder[b.level];
  });

  return (
    <section id="competitions" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Competitions & Awards"
          subtitle="Recognition for academic excellence and innovation"
        />

        {/* Competitions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sortedCompetitions.map((competition, index) => (
            <AwardBadge
              key={competition.id}
              competition={competition}
              index={index}
            />
          ))}
        </div>

        {/* Awards Section */}
        {awards.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Other Awards & Recognition
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {award.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {award.issuer} • {award.year}
                      </p>
                    </div>
                  </div>
                  {award.description && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {award.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
