export type Project = {
  title: string;
  tagline: string;
  description: string[];
  highlights?: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "Live Demo" | "Beta" | "In Progress";
  coverImage?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    title: "SeiRaji",
    tagline:
      "A full-stack media tracker for Japanese radio, podcast, and seiyuu programs.",
    description: [
      "SeiRaji is a full-stack React/TypeScript application for tracking Japanese radio, podcast, and streaming programs across multiple platforms.",
      "The app combines a responsive media library, user-specific progress tracking, tagging, activity history, statistics, preferences, and demo onboarding with a backend that imports and normalizes external program metadata.",
    ],
    highlights: [
      "Built a searchable, responsive media library with progress tracking, tags, pinned programs, stats, and activity history",
      "Developed Node/Express import services that scrape, normalize, cache, and refresh metadata from multiple external platforms",
      "Added realistic demo onboarding data so recruiters and visitors can explore the app without manual setup",
      "Designed around a real personal workflow instead of a generic tutorial use case",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "REST APIs",
      "Render",
      "Cloudflare Pages",
    ],
    github: "https://github.com/stefano-lev/seiraji",
    demo: "https://seiraji.stef-lev.xyz/",
    featured: true,
    status: "Live Demo",
    coverImage: "/images/projects/seiraji-1.png",
    screenshots: ["/images/projects/seiraji-1.png", "/images/projects/seiraji-2.png"],
  },
  {
    title: "Kanji Shishou",
    tagline:
      "A Japanese kanji study app with quizzes, review workflows, and progress tracking.",
    description: [
      "Kanji Shishou is a React/TypeScript study application built around kanji lookup, flashcards, quiz modes, spaced repetition review, and learner progress tracking.",
      "The project focuses on making Japanese self-study more interactive while exploring frontend architecture, local persistence, reusable study flows, and responsive UI design.",
    ],
    highlights: [
      "Implemented flashcard, multiple-choice, dictionary, and spaced repetition review workflows",
      "Built reusable React components for quiz flows, study summaries, statistics, preferences, and progress tracking",
      "Integrated structured kanji data and stroke-order resources for learner-focused study tools",
      "Designed as a practical language-learning tool based on my own Japanese study workflow",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Local Storage", "REST APIs"],
    github: "https://github.com/stefano-lev/Kanji-Shishou",
    demo: "https://kanji.stef-lev.xyz/",
    featured: true,
    status: "Live Demo",
    coverImage: "/images/projects/kanji-1.png",
    screenshots: [
      "/images/projects/kanji-1.png",
      "/images/projects/kanji-2.png",
      "/images/projects/kanji-3.png",
      "/images/projects/kanji-4.png",
      "/images/projects/kanji-5.png",
      "/images/projects/kanji-6.png",
      "/images/projects/kanji-7.png",
      "/images/projects/kanji-8.png",
      "/images/projects/kanji-9.png",
      "/images/projects/kanji-10.png",
    ],
  },
  {
    title: "py-image-stitcher",
    tagline: "A Python utility for building simple image collages.",
    description: [
      "py-image-stitcher is a small desktop and command-line utility for combining multiple images into horizontal or vertical collages. ",
      "The project focuses on practical Python scripting, image-processing workflows, and packaging a focused tool with both GUI and CLI usage.",
    ],
    highlights: [
      "Supports both GUI and command-line workflows",
      "Handles image ordering, stitching direction, preview, and export",
      "Built as a simple utility around a real repetitive task",
    ],
    tech: ["Python", "PyQt5", "Pillow"],
    github: "https://github.com/stefano-lev/py-image-stitcher",
    coverImage: "/images/projects/stitch-1.jpg",
    screenshots: ["/images/projects/stitch-1.jpg", "/images/projects/stitch-2.jpg"],
  },
];
