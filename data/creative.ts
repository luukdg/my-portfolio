import { Project } from "@/types/projectType";

export const creative: Project[] = [
  {
    slug: "ing-motion-rebrand",
    title: "Moneystart - video serie",
    description:
      "Motion design package for ING's brand refresh, including animated logo, transitions, and social media assets.",
    tags: ["Motion Design", "After Effects", "Cinema 4D"],
    image: [{ type: "image", src: "/projects/moneystart.jpg" }],
    content: {
      concept:
        "ING needed a consistent motion language across digital channels. Delivered a full motion design system with reusable templates.",
      features: ["Animated logo", "Social templates", "Brand guidelines"],
      learnings: "Learned to scale motion assets across a large brand system.",
    },
  },

  {
    slug: "3D-work",
    title: "3D work",
    description:
      "Video production and motion graphics for the SkyShowtime streaming platform launch across Europe.",
    tags: ["Video Production", "Motion Design", "After Effects"],
    image: [
      { type: "image", src: "/projects/3dwork.png" },
      { type: "video", src: "/projects/3dwork/3dbreakdown.mp4" },
      { type: "video", src: "/projects/3dwork/iciparis-tiktok.mp4" },
    ],
    content: {
      concept:
        "SkyShowtime needed launch content for multiple European markets. Produced localized video assets and motion graphics at scale.",
      features: ["Multi-market delivery", "Motion graphics", "Video editing"],
      learnings: "Improved workflow for large-scale multi-market production.",
    },
  },

  {
    slug: "amazon-3d-campaign",
    title: "Amazon 3D Campaign (placeholder)",
    description:
      "3D modeling and animation for an Amazon product campaign, featuring realistic product renders and animated sequences.",
    tags: ["3D Modeling", "Cinema 4D", "After Effects"],
    image: [{ type: "image", src: "/projects/default.jpg" }],
    content: {
      concept:
        "Amazon needed high-quality 3D product visuals for a campaign. Created photorealistic 3D renders and animated sequences.",
      features: ["Product modeling", "Realistic rendering", "Animation"],
      learnings: "Deepened knowledge of lighting and rendering pipelines.",
    },
  },

  {
    slug: "showreel-2024",
    title: "Showreel 2024 (placeholder)",
    description:
      "A compilation of motion design, video production, and 3D work from 2024.",
    tags: ["Motion Design", "Video Production", "3D Modeling"],
    live: "https://vimeo.com/",
    image: [{ type: "image", src: "/projects/default.jpg" }],
    content: {
      concept:
        "Needed a single showcase of all creative work. Compiled best work into a punchy 90-second showreel.",
      features: ["Motion design", "3D sequences", "Video production"],
      learnings: "Learned to tell a cohesive story through diverse work.",
    },
  },
];
