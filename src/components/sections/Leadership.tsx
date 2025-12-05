"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadershipCard } from "@/components/cards/LeadershipCard";
import { siteData } from "@/data/siteData";

export function Leadership() {
  const { leadership } = siteData;

  return (
    <section id="leadership" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Leadership & Initiatives"
          subtitle="Creating impact through education and community service"
        />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((initiative, index) => (
            <LeadershipCard
              key={initiative.id}
              initiative={initiative}
              index={index}
            />
          ))}
        </div>

        {/* Impact summary banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-success-600 via-success-700 to-primary-700 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-3xl mx-auto text-center relative">
            <h3 className="text-2xl font-bold mb-3">
              Why I Lead: Education Changes Everything
            </h3>
            <p className="text-success-100 leading-relaxed mb-4">
              Growing up, I saw brilliant kids in rural areas who never got the chance to explore 
              their potential — not because they lacked talent, but because they lacked access. 
              The Cheri Foundation is my answer to that injustice.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">40%</div>
                <div className="text-sm text-success-200">Student Interest</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">₹3L+</div>
                <div className="text-sm text-success-200">Funds Raised</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">100+</div>
                <div className="text-sm text-success-200">Items Donated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
