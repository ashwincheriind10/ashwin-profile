"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Code, Rocket, Heart, Palette } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const certificates = [
  {
    id: "plaksha-robotics",
    title: "Robotics Project Certificate",
    issuer: "Plaksha University",
    category: "projects",
    image: "/images/certificates/Project_Robotics_Project_Plaksha.jpeg"
  },
  {
    id: "mars-research",
    title: "Mars Mission Research",
    issuer: "Mars Society",
    category: "research",
    image: "/images/certificates/Research_MissionToMars_Space_Certificate_Research.jpeg"
  },
  {
    id: "iitm-datascience",
    title: "Data Science & AI",
    issuer: "IIT Madras",
    category: "projects",
    image: "/images/certificates/Project_Datascience_AI_IITM_Certificate.jpeg"
  },
  {
    id: "python-cert",
    title: "Python Programming",
    issuer: "Michigan University",
    category: "education",
    image: "/images/certificates/Education_PYthon_Certificate_Machinag_University.jpeg"
  },
  {
    id: "c-lang-cert",
    title: "C Language",
    issuer: "UC",
    category: "education",
    image: "/images/certificates/Education_C_Lang_Certificate_UC.jpeg"
  },
  {
    id: "arduino-edu",
    title: "Arduino Programming",
    issuer: "Online Course",
    category: "education",
    image: "/images/certificates/Education_Arduino_certificate.jpeg"
  },
  {
    id: "arduino-robotics",
    title: "Arduino Robotics",
    issuer: "Robotics Program",
    category: "projects",
    image: "/images/certificates/Robotics_Arduino_Certificate.jpeg"
  },
  {
    id: "figma-cert",
    title: "Figma Design",
    issuer: "Online Course",
    category: "education",
    image: "/images/certificates/Education_Figma_Certificate.jpeg"
  },
  {
    id: "math-amc",
    title: "AMC Mathematics",
    issuer: "AMC",
    category: "education",
    image: "/images/certificates/Education_MathCertificate1AMC.jpeg"
  },
  {
    id: "olympiad",
    title: "Science Olympiad",
    issuer: "Olympiad Foundation",
    category: "education",
    image: "/images/certificates/Education_Olympiad1.jpeg"
  },
  {
    id: "appreciation-1",
    title: "Appreciation Certificate",
    issuer: "Cheri Foundation Partner",
    category: "impact",
    image: "/images/certificates/Impact_Appriciation_Certificate1.jpeg"
  },
  {
    id: "appreciation-2",
    title: "Recognition Certificate",
    issuer: "Partner School",
    category: "impact",
    image: "/images/certificates/Impact_Appriciation_Certificate2.jpeg"
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    issuer: "Service Organization",
    category: "impact",
    image: "/images/certificates/Service_CommunityOutreach_Certificate.jpeg"
  },
  {
    id: "drawing-competition",
    title: "Drawing Competition",
    issuer: "Art Competition",
    category: "activities",
    image: "/images/certificates/OtherActivies_Drawing Compition_certificate.jpeg"
  }
];

const categories = [
  { id: "all", label: "All", icon: <Award className="w-4 h-4" /> },
  { id: "projects", label: "Projects", icon: <Rocket className="w-4 h-4" /> },
  { id: "education", label: "Education", icon: <Code className="w-4 h-4" /> },
  { id: "impact", label: "Impact", icon: <Heart className="w-4 h-4" /> },
  { id: "activities", label: "Activities", icon: <Palette className="w-4 h-4" /> }
];

export function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const filteredCerts = selectedCategory === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Certificates & Credentials"
          subtitle="Recognition of learning and achievements"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs truncate">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Certificate count */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Showing {filteredCerts.length} of {certificates.length} certificates
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white dark:bg-gray-900">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {selectedCert.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
