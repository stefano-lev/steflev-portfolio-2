export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  coverImage?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    title: "Kanji Shishou",
    description:
      "A web-based kanji study utility for Japanese learners, focused on recall and repeated exposure.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/stefano-lev/kanji-study-utility",
    featured: true,
    coverImage: "/images/projects/kanji-1.png",
    screenshots: [
      "/images/projects/kanji-1.png",
      "/images/projects/kanji-2.png",
      "/images/projects/kanji-3.png",
    ],
  },
  {
    title: "SeiRaji",
    description:
      "A web-based application for tracking and managing watch progress for Japanese radio shows.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/stefano-lev/seiraji",
    featured: true,
    coverImage: "/images/projects/seiraji-1.png",
    screenshots: [
      "/images/projects/seiraji-1.png",
      "/images/projects/seiraji-2.png",
      "/images/projects/seiraji-3.png",
      "/images/projects/seiraji-4.png",
      "/images/projects/seiraji-5.png",
    ],
  },
  {
    title: "py-image-stitcher",
    description:
      "A minimal Python tool for stitching images together into shareable memory collages.",
    tech: ["Python"],
    github: "https://github.com/stefano-lev/py-image-stitcher",
    coverImage: "/images/projects/stitch-1.jpg",
    screenshots: ["/images/projects/stitch-1.jpg", "/images/projects/stitch-2.jpg"],
  },
];
