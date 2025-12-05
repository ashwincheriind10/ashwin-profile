"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ActivityCard } from "@/components/cards/ActivityCard";
import { siteData } from "@/data/siteData";

export function Activities() {
  const { activities } = siteData;

  return (
    <section id="activities" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Beyond Academics"
          subtitle="Exploring creativity, sports, and personal growth"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
