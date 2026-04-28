import { Project } from "@/types/projectType";

export const creative: Project[] = [
  {
    slug: "ing-motion-rebrand",
    title: "ING Motion Rebrand",
    description:
      "Motion design package for ING's brand refresh, including animated logo, transitions, and social media assets.",
    tags: ["Motion Design", "After Effects", "Cinema 4D"],
    image: "/projects/creative/ing.jpg",
    content: {
      problem:
        "ING needed a consistent motion language across digital channels.",
      solution:
        "Delivered a full motion design system with reusable templates.",
      features: ["Animated logo", "Social templates", "Brand guidelines"],
      learnings: "Learned to scale motion assets across a large brand system.",
    },
  },

  {
    slug: "skyshowtime-launch",
    title: "SkyShowtime Launch Campaign",
    description:
      "Video production and motion graphics for the SkyShowtime streaming platform launch across Europe.",
    tags: ["Video Production", "Motion Design", "After Effects"],
    image: "/projects/creative/skyshowtime.jpg",
    content: {
      problem:
        "SkyShowtime needed launch content for multiple European markets.",
      solution: "Produced localized video assets and motion graphics at scale.",
      features: ["Multi-market delivery", "Motion graphics", "Video editing"],
      learnings: "Improved workflow for large-scale multi-market production.",
    },
  },

  {
    slug: "amazon-3d-campaign",
    title: "Amazon 3D Campaign",
    description:
      "3D modeling and animation for an Amazon product campaign, featuring realistic product renders and animated sequences.",
    tags: ["3D Modeling", "Cinema 4D", "After Effects"],
    image: "/projects/creative/amazon.jpg",
    content: {
      problem: "Amazon needed high-quality 3D product visuals for a campaign.",
      solution: "Created photorealistic 3D renders and animated sequences.",
      features: ["Product modeling", "Realistic rendering", "Animation"],
      learnings: "Deepened knowledge of lighting and rendering pipelines.",
    },
  },

  {
    slug: "showreel-2024",
    title: "Showreel 2024",
    description:
      "A compilation of motion design, video production, and 3D work from 2024.",
    tags: ["Motion Design", "Video Production", "3D Modeling"],
    live: "https://vimeo.com/",
    image: "/projects/creative/showreel.jpg",
    content: {
      problem: "Needed a single showcase of all creative work.",
      solution: "Compiled best work into a punchy 90-second showreel.",
      features: ["Motion design", "3D sequences", "Video production"],
      learnings: "Learned to tell a cohesive story through diverse work.",
    },
  },
];
