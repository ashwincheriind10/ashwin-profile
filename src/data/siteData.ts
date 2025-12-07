// ============================================
// ASHWIN CHERIPALLY - PROFILE DATA
// ============================================
// All website content is managed here.
// The structure is defined in types.ts

import { SiteData } from "./types";

export const siteData: SiteData = {
  // ==========================================
  // PERSONAL INFORMATION
  // ==========================================
  personal: {
    name: "Ashwin Cheripally",
    tagline: "Robotics Enthusiast | Founder, Cheri Foundation | Mars Society 1st Place Winner",
    location: "India",
    email: "acheripally@ashwincheripally.com",
    grade: "10th Grade",
    school: "India",
    aspirations: [
      "Robotics & Mechatronics",
      "Innovation & Engineering",
      "Education for All"
    ],
    profileImage: "/images/profile.jpg",
    resumeLink: "/resume.pdf"
  },

  // ==========================================
  // SOCIAL LINKS
  // ==========================================
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ashwin-cheripally-054214206/",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/ashwin-cheripally",
      icon: "github"
    },
    {
      platform: "Email",
      url: "mailto:acheripally@ashwincheripally.com",
      icon: "mail"
    }
  ],

  // ==========================================
  // LEADERSHIP & INITIATIVES
  // ==========================================
  leadership: [
    {
      id: "cheri-foundation",
      title: "Cheri Foundation",
      organization: "Self-Founded Initiative",
      role: "Founder",
      duration: "2024 - Present",
      description: "Founded to support those who have the potential and ambition but cannot afford opportunities. Through school visits, mentorship classes, and fundraising, we're making education and comfort accessible to those in need.",
      impact: [
        "Mentorship classes at multiple underprivileged schools in rural areas",
        "40% of students showed keen interest in new learning methods",
        "Donated TV for visual learning — students now more engaged",
        "Donated 70-100 necessities to old age homes",
        "Received official recognition from partner schools"
      ],
      metrics: [
        { label: "Students Reached", value: "40-50" },
        { label: "Funds Raised", value: "₹3L+" },
        { label: "Old Age Donations", value: "₹20K+" }
      ],
      image: "/images/cheri-foundation.jpg",
      link: undefined
    },
    {
      id: "empower-education",
      title: "Empower Education Fundraiser",
      organization: "Cheri Foundation Campaign",
      role: "Campaign Lead",
      duration: "2024",
      description: "Launched the Empower Education fundraiser to raise funds for donating basic school supplies to children in rural areas. Successfully raised close to ₹3 Lakhs and donated equipment to many schools.",
      impact: [
        "Raised close to ₹3 Lakhs for rural education",
        "Donated school supplies to multiple schools",
        "Students learning logical thinking through Rubik's Cubes",
        "Principals reported increased student engagement"
      ],
      metrics: [
        { label: "Amount Raised", value: "₹3L" },
        { label: "Schools Supported", value: "Multiple" },
        { label: "Grades Taught", value: "3-10" }
      ],
      image: "/images/fundraiser.jpg"
    }
  ],

  // ==========================================
  // STEM PROJECTS
  // ==========================================
  projects: [
    {
      id: "equibot",
      title: "Equibot — Self-Balancing Robot",
      program: "Plaksha Young Tech Scholars (YTS) 2025",
      year: "2025",
      description: "Built the best self-balancing robot at Plaksha University's YTS program. One week of intensive theory classes combined with hands-on labs culminated in our team presenting Equibot on stage during the closing ceremony.",
      technologies: [
        "Gyroscope Sensors",
        "Balance Systems",
        "Woodworking",
        "Aerodynamics",
        "Team Collaboration",
        "Hands-on Engineering"
      ],
      highlights: [
        "Built a self-balancing robot using gyroscope technology",
        "Learned aerodynamics and balance principles",
        "Hands-on woodworking and fabrication skills",
        "Team presented Equibot on stage at closing ceremony",
        "Received participation certificate from Plaksha University"
      ],
      image: "/images/equibotimage.jpeg",
      status: "completed",
      link: undefined
    },
    {
      id: "mars-society",
      title: "Team SOLACE — Mars Mission Design",
      program: "Mars Society International Design Competition",
      year: "2025",
      description: "Led the Engineering team for Team SOLACE in designing a complete theoretical 1.5-year mission to Mars. Our project included designing maps, rovers, and innovative solutions for Mars exploration.",
      technologies: [
        "Mission Planning",
        "Rover Design",
        "Risk Assessment",
        "Data Analysis",
        "Engineering Leadership",
        "Design Validation"
      ],
      highlights: [
        "Won 1st position overall in International Design Competition",
        "Won 1st place in the Engineering division",
        "Competed against students from all over the world",
        "Invited to the 2025 Mars Society Convention at University of Southern California, LA, USA",
        "Travelled to the USA to present at USC",
        "Led the Engineering team for the project",
        "Designed complete 1.5-year Mars mission plan",
        "Created maps, rovers, and new innovative ideas"
      ],
      image: "/images/mars-convention-ashwin.jpeg",
      status: "completed",
      featured: true,
      link: undefined
    },
    {
      id: "collect-cubes",
      title: "Collect the Cubes — 3D Game",
      program: "Self-Taught Project (Age 9)",
      year: "2020",
      description: "At just 9 years old in grade 4, I created a 3D game called 'Collect the Cubes' where players collect cubes as fast as possible to gain coins. This early project sparked my passion for coding and game development.",
      technologies: [
        "C# Programming",
        "Unity Game Engine",
        "3ds Max Modeling",
        "Game Design",
        "3D Graphics"
      ],
      highlights: [
        "Built complete 3D game at age 9",
        "Self-taught C# programming in Unity",
        "Created 3D models using 3ds Max",
        "Designed game mechanics and scoring system",
        "Early demonstration of coding passion"
      ],
      image: "/images/collect-cubes-game.png",
      status: "completed",
      link: undefined
    }
  ],

  // ==========================================
  // COMPETITIONS & AWARDS
  // ==========================================
  competitions: [
    {
      id: "mars-society-comp",
      name: "Mars Society International Design Competition",
      organizer: "The Mars Society",
      year: "2025",
      achievement: "1st Place Overall & 1st in Engineering",
      description: "Won 1st position overall and 1st in the Engineering division in an International design competition with students from all over the world. Invited to present at the 2025 Mars Society Convention at University of Southern California, LA, USA.",
      level: "international",
      category: "science"
    },
    {
      id: "dps-robotics",
      name: "DPS Robotics Carnival",
      organizer: "Delhi Public School",
      year: "2025",
      achievement: "2nd Place",
      description: "Robotics competition showcasing engineering skills and innovation in robot design and programming.",
      level: "national",
      category: "robotics"
    },
    {
      id: "plaksha-yts",
      name: "Plaksha Young Tech Scholars (YTS)",
      organizer: "Plaksha University",
      year: "2025",
      achievement: "Selected Participant — Best Robot",
      description: "Intensive hands-on engineering program at Plaksha University. Our team built the best self-balancing robot (Equibot) and presented at the closing ceremony.",
      level: "national",
      category: "robotics"
    },
    {
      id: "aryabhatta-maths",
      name: "Aryabhatta Maths Competition",
      organizer: "Aryabhatta Foundation",
      year: "2025",
      achievement: "Participant",
      description: "Mathematics competition testing problem-solving skills and mathematical reasoning.",
      level: "national",
      category: "olympiad"
    },
    {
      id: "dps-archery-nationals",
      name: "DPS Nationals Archery",
      organizer: "Delhi Public School",
      year: "2025",
      achievement: "3rd Place",
      description: "National-level archery competition among DPS schools across India.",
      level: "national",
      category: "other"
    },
    {
      id: "cbse-archery",
      name: "CBSE South Zone Nationals",
      organizer: "CBSE",
      year: "2025",
      achievement: "Participant",
      description: "CBSE South Zone national archery championship representing school at zonal level.",
      level: "national",
      category: "other"
    }
  ],

  // ==========================================
  // AWARDS & RECOGNITION
  // ==========================================
  awards: [
    {
      id: "dps-archery-3rd",
      title: "DPS Nationals Archery — 3rd Place",
      issuer: "Delhi Public School",
      year: "2025",
      description: "National-level archery competition"
    },
    {
      id: "dps-robotics-2nd",
      title: "DPS Robotics Carnival — 2nd Place",
      issuer: "Delhi Public School",
      year: "2025",
      description: "Robotics competition"
    },
    {
      id: "cheri-recognition",
      title: "School Recognition — Cheri Foundation",
      issuer: "Partner Schools",
      year: "2024",
      description: "Official recognition for mentorship and educational contributions"
    }
  ],

  // ==========================================
  // EXTRACURRICULAR ACTIVITIES
  // ==========================================
  activities: [
    {
      id: "archery",
      name: "Archery",
      category: "sports",
      description: "It gives a sense of calmness and peace to me. Whenever I do Archery, I forget all the things troubling me in life. Started 6 months ago and already competing at national level.",
      achievements: [
        "DPS Nationals 2025 — 3rd Place",
        "CBSE South Zone Nationals participant",
        "Association Games U17",
        "Sub-junior state meet",
        "Seniors open competitions"
      ],
      icon: "target"
    },
    {
      id: "drawing",
      name: "Drawing & Art",
      category: "arts",
      description: "Creative expression through sketching and illustration. Drawing helps me visualize ideas and relax.",
      achievements: [
        "Regular sketching practice",
        "Technical illustrations for projects"
      ],
      icon: "pencil"
    },
    {
      id: "reading",
      name: "Reading",
      category: "reading",
      description: "Passionate reader with a focus on mathematical research-oriented books. Reading expands my understanding of complex concepts.",
      achievements: [
        "Mathematical research-oriented books",
        "Self-study of advanced topics"
      ],
      icon: "book-open"
    },
    {
      id: "coding",
      name: "Coding & Robotics",
      category: "technology",
      description: "Building robots and writing code to solve real-world problems. Combining programming with hands-on engineering.",
      achievements: [
        "Self-balancing robot (Equibot)",
        "DPS Robotics Carnival — 2nd Place",
        "Hands-on engineering projects"
      ],
      icon: "code"
    },
    {
      id: "design",
      name: "Design (Photoshop)",
      category: "technology",
      description: "Creating visual content and designs using Adobe Photoshop for projects and presentations.",
      achievements: [
        "Photoshop design skills",
        "Project presentations",
        "Visual content creation"
      ],
      icon: "palette"
    },
    {
      id: "math",
      name: "Mathematics",
      category: "other",
      description: "Strong foundation in mathematics with participation in competitions and a love for problem-solving.",
      achievements: [
        "Aryabhatta Maths Competition 2025",
        "Mathematical research reading",
        "Problem-solving practice"
      ],
      icon: "calculator"
    }
  ],

  // ==========================================
  // GALLERY
  // ==========================================
  gallery: [
    {
      id: "gallery-1",
      src: "/images/gallery/equibot-demo.jpg",
      alt: "Equibot self-balancing robot demonstration",
      caption: "Presenting Equibot at Plaksha YTS 2025",
      category: "projects"
    },
    {
      id: "gallery-2",
      src: "/images/gallery/plaksha-team.jpg",
      alt: "Plaksha YTS cohort",
      caption: "With fellow scholars at Plaksha University",
      category: "projects"
    },
    {
      id: "gallery-3",
      src: "/images/gallery/cheri-tutoring.jpg",
      alt: "Teaching at Cheri Foundation",
      caption: "Mathematics session with rural students",
      category: "leadership"
    },
    {
      id: "gallery-4",
      src: "/images/gallery/cheri-event.jpg",
      alt: "Cheri Foundation fundraising event",
      caption: "Community fundraising event for education",
      category: "leadership"
    },
    {
      id: "gallery-5",
      src: "/images/gallery/archery-competition.jpg",
      alt: "State archery championship",
      caption: "Competing at State Archery Championship 2024",
      category: "activities"
    },
    {
      id: "gallery-6",
      src: "/images/gallery/mars-presentation.jpg",
      alt: "Mars Society presentation preparation",
      caption: "Preparing for USC Mars Society presentation",
      category: "competitions"
    }
  ],

  // ==========================================
  // FUTURE GOALS
  // ==========================================
  futureGoals: [
    {
      id: "goal-robotics",
      title: "Study Robotics & Mechatronics",
      description: "The idea of innovation in a world that we don't even know the potential of excites me. I want to pursue Robotics/Mechatronics at a top engineering university and contribute to cutting-edge research.",
      timeline: "2027",
      icon: "graduation-cap"
    },
    {
      id: "goal-mars",
      title: "Present at Mars Society Convention",
      description: "Present Team SOLACE's Mars mission design at the Mars Society Convention 2025 at USC. Share our innovative ideas for Mars exploration with the global space community.",
      timeline: "2025",
      icon: "rocket"
    },
    {
      id: "goal-cheri-scale",
      title: "Expand Cheri Foundation",
      description: "Reach more students and schools with our mentorship programs. Continue raising funds to provide educational resources and support to underprivileged communities.",
      timeline: "2025-2026",
      icon: "heart"
    },
    {
      id: "goal-competitions",
      title: "Excel in Robotics Competitions",
      description: "Continue competing in robotics events and aim for top placements. Build on the success at DPS Robotics Carnival and Plaksha YTS.",
      timeline: "2025-2026",
      icon: "trophy"
    },
    {
      id: "goal-archery",
      title: "Advance in Archery",
      description: "Continue training and competing at national level. Build on the 3rd place finish at DPS Nationals and aim for higher achievements.",
      timeline: "2025-2026",
      icon: "target"
    }
  ],

  // ==========================================
  // TIMELINE
  // ==========================================
  timeline: [
    {
      id: "timeline-1",
      year: "2025",
      title: "Mars Society — 1st Place & USC Convention",
      description: "Won 1st place overall and 1st in Engineering. Travelled to USA to present at Mars Society Convention at USC, Los Angeles.",
      type: "achievement"
    },
    {
      id: "timeline-2",
      year: "2025",
      title: "Plaksha YTS — Best Robot",
      description: "Built Equibot, the best self-balancing robot at the program.",
      type: "project"
    },
    {
      id: "timeline-3",
      year: "2025",
      title: "DPS Robotics Carnival — 2nd Place",
      description: "Secured second place in robotics competition.",
      type: "achievement"
    },
    {
      id: "timeline-4",
      year: "2025",
      title: "DPS Nationals Archery — 3rd Place",
      description: "Bronze medal at national archery competition.",
      type: "achievement"
    },
    {
      id: "timeline-5",
      year: "2025",
      title: "CBSE South Zone Nationals",
      description: "Represented school at zonal archery championship.",
      type: "achievement"
    },
    {
      id: "timeline-6",
      year: "2024",
      title: "Founded Cheri Foundation",
      description: "Started initiative to support underprivileged students.",
      type: "leadership"
    },
    {
      id: "timeline-7",
      year: "2024",
      title: "Empower Education Fundraiser",
      description: "Raised ₹3 Lakhs for rural education supplies.",
      type: "leadership"
    },
    {
      id: "timeline-8",
      year: "2020",
      title: "First 3D Game — Age 9",
      description: "Created 'Collect the Cubes' game using C# and Unity.",
      type: "project"
    }
  ]
};

export default siteData;
