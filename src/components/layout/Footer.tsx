"use client";

import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />
};

export function Footer() {
  const { personal, socials } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              {personal.name}
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Building technology for impact. Aspiring robotics engineer 
              committed to making education accessible to all.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all"
                aria-label={social.platform}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for a brighter future
          </p>
        </div>
      </div>
    </footer>
  );
}
