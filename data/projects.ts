import { Project } from "@/types/projectType";

export const projects: Project[] = [
  {
    slug: "guess-the-grade",
    title: "Guess the Grade",
    description:
      "Interactive app for climbers to watch bouldering videos, guess grades, and track stats. Designed as a Progressive Web App (PWA) for Android.",
    tags: ["React", "Vite", "Firebase"],
    live: "https://guess-the-grade-1a830.web.app/",
    github: "https://github.com/luukdg/guess-the-grade-react",
    image: [
      "/projects/guessthegrade.jpg",
      "/projects/grade/1.png",
      "/projects/grade/2.png",
      "/projects/grade/3.png",
      "/projects/grade/4.png",
    ],

    content: {
      problem: "Climbers struggle to track progression and benchmark grades.",
      solution:
        "Built a PWA where users guess grades from videos and track stats over time.",
      features: [
        "Video-based guessing system",
        "Progress tracking",
        "PWA install support",
      ],
      learnings:
        "Learned Firebase auth, realtime DB, and PWA caching strategies.",
    },
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Personal portfolio with an AI chatbot that can tell you more about me and my work.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/luukdg/my-portfolio",
    image: ["/projects/portfolio.jpg"],
    content: {
      problem: "Needed a way to showcase my work and personality.",
      solution:
        "Built a portfolio site with an AI chatbot for interactive introduction.",
      features: ["AI chatbot", "Project showcase", "Responsive design"],
      learnings: "Improved Next.js App Router and AI API integration.",
    },
  },

  {
    slug: "smoelenboek",
    title: "Smoelenboek",
    description:
      "An SPFx web part integration for Teams, built to find colleagues within the organisation and share skills and ambitions.",
    tags: ["React", "SPFx", "Microsoft Graph API"],
    github: "https://github.com/luukdg/smoelenboek-react-spfx",
    image: ["/projects/smoelenboek.png"],
    content: {
      problem: "Hard to find colleagues and their skills in large orgs.",
      solution:
        "Built a Teams SPFx app to search employees and visualize skills.",
      features: ["Teams integration", "Employee search", "Skill mapping"],
      learnings: "Learned SPFx and Microsoft Graph API deeply.",
    },
  },

  {
    slug: "the-odin-project",
    title: "The Odin Project",
    description:
      "Various projects built while learning through The Odin Project curriculum, including a Weather App, Todo list, Calculator, and Tic Tac Toe.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/luukdg/the-odin-project-portfolio",
    image: [
      "/projects/odin.jpg",
      "/projects/odin/1.png",
      "/projects/odin/2.png",
      "/projects/odin/3.png",
      "/projects/odin/4.png",
      "/projects/odin/5.png",
      "/projects/odin/6.png",
    ],
    content: {
      problem: "Learning fundamentals of frontend development.",
      solution:
        "Built multiple small apps to practice core JavaScript concepts.",
      features: ["Weather App", "Todo App", "Calculator", "Tic Tac Toe"],
      learnings: "Strong foundation in vanilla JS and DOM manipulation.",
    },
  },

  {
    slug: "wedding-landing-page",
    title: "Wedding landing page",
    description:
      "A responsive landing page for a wedding, built with JavaScript and Tailwind CSS, with a message board.",
    tags: ["HTML", "CSS", "JavaScript", "Vite"],
    github: "https://github.com/luukdg/landing-page-wedding",
    image: ["/projects/wedding.webp"],
    content: {
      problem: "Needed a simple wedding RSVP + info page.",
      solution: "Built a responsive landing page with guest messaging.",
      features: ["RSVP section", "Message board", "Responsive design"],
      learnings: "Improved UI structuring and vanilla JS interactions.",
    },
  },

  {
    slug: "discord-bot",
    title: "Discord Bot",
    description:
      "A Discord bot that scrapes and retrieves Rocket League stats for users.",
    tags: ["Node.js", "Discord.js"],
    github: "https://github.com/luukdg/FlipReStat",
    image: ["/projects/discord.jpg", "/projects/discord/botdemo.gif"],
    content: {
      problem: "Players wanted quick Rocket League stats inside Discord.",
      solution: "Built a bot that fetches and displays player stats.",
      features: ["Discord integration", "API scraping", "Commands system"],
      learnings: "Learned Node.js bot development and API handling.",
    },
  },
];
