import { Project } from "@/types/projectType";

export const creative: Project[] = [
  {
    slug: "moneystart",
    title: "Moneystart - video serie",
    description:
      "A educational video series and campaign about debt prevention, to make young people aware of financial debts.",
    tags: ["After Effects", "Premiere Pro", "Videography"],
    image: [
      { type: "image", src: "/projects/moneystart.webp" },
      { type: "video", src: "/projects/moneystart/video-moneystart.mp4" },
    ],
    content: {
      concept:
        "In collaboration with ING and Moneystart, we created an educational video series and awareness campaign focused on debt prevention for young people. The content was designed to be approachable and engaging for students, helping make financial topics easier to understand and discuss.",
      features: [
        "Educational video series for schools",
        "Campaign visuals and social content",
        "Motion graphics and video editing",
        "Storyboarding and concept development",
        "Youth-focused visual communication",
      ],
      learnings:
        "This is probably one of my favorite projects in my career, due to it's social impact.",
    },
  },

  {
    slug: "nextm",
    title: "NextM",
    description:
      "Theme video created for GroupM’s marketing event at the Evoluon, combining historical footage with AI generated visuals and motion design.",

    tags: ["AI Video", "Stable Diffusion", "After Effects"],

    image: [
      { type: "image", src: "/projects/evoluon.webp" },
      { type: "video", src: "/projects/nextm/nextm-2023.mp4" },
    ],

    content: {
      concept:
        "For GroupM’s annual marketing event, I conceptualized and produced a thematic opening video centered around the rise of AI in 2023. Since the event took place at the Evoluon, an iconic symbol of innovation and technology in Eindhoven, I combined historical imagery with AI generated visuals to create a narrative bridging the past and future of technology.",

      features: [
        "Concept development and storytelling",
        "AI generated visuals using open source Stable Diffusion models",
        "Historical footage integration",
        "Motion design and video editing",
        "Event visuals for large scale presentation",
      ],

      learnings:
        "This project gave me the opportunity to experiment with AI as a creative production tool at an early stage of its rise in the industry. I learned how to combine traditional editing workflows with open source generative AI models to create visuals that felt both experimental and cinematic.",
    },
  },

  {
    slug: "3D-work",
    title: "3D work",
    description: "Collection of 3D work, I worked on the past couple of years.",
    tags: ["Blender"],
    image: [
      { type: "image", src: "/projects/3dwork.webp" },
      { type: "video", src: "/projects/3dwork/3dbreakdown.mp4" },
      { type: "video", src: "/projects/3dwork/iciparis-tiktok.mp4" },
      { type: "video", src: "/projects/3dwork/graafmachine.mp4" },
      { type: "video", src: "/projects/3dwork/rain.mp4" },
      { type: "video", src: "/projects/3dwork/lighthouse.mp4" },
    ],
    content: {
      concept:
        "A personal collection of 3D experiments, animations, and visual explorations created over the past few years. These projects allowed me to combine motion, lighting, composition, and storytelling while exploring different styles and workflows in Blender.",
      features: [
        "3D modeling and animation",
        "Lighting and rendering",
        "Motion design integration",
        "Product and abstract visuals",
        "Creative experimentation in Blender",
      ],
      learnings: "This work helped me getting a solid foundation in Blender.",
    },
  },

  {
    slug: "ing-template",
    title: "ING template",
    description:
      "Custom After Effects template created for the new ING AdviesTeamWonen visual identity, focused on scalable and efficient video production workflows.",

    tags: ["After Effects", "Motion Design", "JavaScript"],

    image: [
      { type: "image", src: "/projects/ing-screen.webp" },
      { type: "video", src: "/projects/ing/ing-video1.mp4" },
    ],

    content: {
      concept:
        "For ING AdviesTeamWonen, I developed a flexible motion design template in After Effects based on the brand’s new visual identity. The template was designed to be easily reused and adapted for different types of content, helping streamline production while maintaining consistent branding and animation quality across videos.",

      features: [
        "Motion design template for the new visual identity",
        "Custom After Effects template system",
        "Essential Properties workflow",
        "JavaScript expressions and automation",
        "Scalable branded animations",
      ],

      learnings:
        "This project deepened my understanding of how motion design systems can be built in a scalable and technical way. I learned how to use JavaScript and Essential Properties inside After Effects to create reusable templates that improved both consistency and production efficiency.",
    },
  },
];
