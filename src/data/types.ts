// ============================================
// TYPE DEFINITIONS FOR ASHWIN'S PROFILE DATA
// ============================================
// This file defines the structure for all content.
// Update the siteData.ts file to change actual content.

export interface PersonalInfo {
  name: string;
  tagline: string;
  location: string;
  email: string;
  grade: string;
  school: string;
  aspirations: string[];
  profileImage?: string;
  resumeLink?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface LeadershipInitiative {
  id: string;
  title: string;
  organization: string;
  role: string;
  duration: string;
  description: string;
  impact: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  image?: string;
  link?: string;
}

export interface STEMProject {
  id: string;
  title: string;
  program: string;
  year: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  link?: string;
  status: "completed" | "ongoing" | "upcoming";
}

export interface Competition {
  id: string;
  name: string;
  organizer: string;
  year: string;
  achievement: string;
  description: string;
  level: "school" | "regional" | "national" | "international";
  category: "olympiad" | "robotics" | "science" | "math" | "other";
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface Activity {
  id: string;
  name: string;
  category: "sports" | "arts" | "technology" | "reading" | "other";
  description: string;
  achievements?: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "projects" | "competitions" | "activities" | "leadership";
}

export interface FutureGoal {
  id: string;
  title: string;
  description: string;
  timeline: string;
  icon: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: "education" | "achievement" | "project" | "leadership";
}

export interface SiteData {
  personal: PersonalInfo;
  socials: SocialLink[];
  leadership: LeadershipInitiative[];
  projects: STEMProject[];
  competitions: Competition[];
  awards: Award[];
  activities: Activity[];
  gallery: GalleryItem[];
  futureGoals: FutureGoal[];
  timeline: TimelineEvent[];
}
