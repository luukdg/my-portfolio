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
      { type: "image", src: "/projects/guessthegrade.jpg" },
      { type: "image", src: "/projects/grade/1.png" },
      { type: "image", src: "/projects/grade/2.png" },
      { type: "image", src: "/projects/grade/3.png" },
      { type: "image", src: "/projects/grade/4.png" },
    ],

    content: {
      concept:
        "As a climber, guessing a boulder's grade without trying it yourself is surprisingly hard. That idea sparked Guess the Grade, a game where you watch video clips of boulders and guess the grade. What started as a fun side project grew into a full-featured app over 6 months. Currently working on a daily boulder challenge (90% done), giving users a reason to come back every day.",
      features: [
        "Watch video clips and guess the boulder grade",
        "Personal progress and stat tracking",
        "View and compare stats with other users",
        "Google Authentication",
        "Installable via Play Store as a PWA",
      ],
      learnings:
        "This project was my deep dive into React and Firebase. I learned how to structure a realtime database, implement Google Authentication, manage app state across components, and publish a PWA to the Play Store. It also taught me a lot about scoping a project — what started simple quickly grew into something much larger.",
    },
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Personal portfolio with an AI chatbot that can tell you more about me and my work.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/luukdg/my-portfolio",
    image: [{ type: "image", src: "/projects/portfolio.jpg" }],
    content: {
      concept:
        "With this project I tipped my toes into Next.js. I wanted to make a portfolio website to make my projects feel alive and showcase what I have done. A nice addition is the functionality to chat with my personalized AI chatbot.",

      features: [
        "AI chatbot for interactive Q&A about me and my work",
        "Project showcase with detailed case pages",
        "Responsive design for all screen sizes",
        "Dark mode support",
      ],

      learnings:
        "Building this portfolio pushed me deeper into the Next.js App Router, TypeScript, and integrating external AI APIs. It taught me about SSR and CSR, and when to use to when. It also made me think more about UX and design, how to present yourself clearly and make a good first impression. It's an ongoing project that I keep refining.",
    },
  },

  {
    slug: "smoelenboek",
    title: "Smoelenboek",
    description:
      "An SPFx web part integration for Teams, built to find colleagues within the organisation and share skills and ambitions.",
    tags: ["React", "SPFx", "Microsoft Graph API"],
    github: "https://github.com/luukdg/smoelenboek-react-spfx",
    image: [
      { type: "image", src: "/projects/smoelenboek.jpg" },
      { type: "image", src: "/projects/smoelenboek/1.png" },
      { type: "image", src: "/projects/smoelenboek/2.png" },
    ],
    content: {
      concept:
        "In large organisations, finding the right colleague, let alone knowing their skills or ambitions, is harder than it should be. Smoelenboek is a SharePoint Framework (SPFx) web part integrated directly into Microsoft Teams, giving employees a way to search their organisation, discover colleagues, and share their own skills and ambitions.",
      features: [
        "Integrated directly into Microsoft Teams as an SPFx web part",
        "Search and browse employees across the organisation",
        "View and share personal skills and ambitions",
        "Profile data pulled live via Microsoft Graph API",
      ],
      learnings:
        "This project was my introduction to the Microsoft ecosystem. I learned how SPFx works within SharePoint and Teams, how to authenticate and query data using the Microsoft Graph API, and how to build enterprise-level tooling with React. It gave me a solid understanding of working within large, structured environments.",
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
      { type: "image", src: "/projects/odin.jpg" },
      { type: "image", src: "/projects/odin/1.png" },
      { type: "image", src: "/projects/odin/2.png" },
      { type: "image", src: "/projects/odin/3.png" },
      { type: "image", src: "/projects/odin/4.png" },
      { type: "image", src: "/projects/odin/5.png" },
      { type: "image", src: "/projects/odin/6.png" },
    ],
    content: {
      concept:
        "The Odin Project is where my development journey started. It's a free, open-source curriculum that teaches web development from the ground up. I worked through the full frontend track, building real projects along the way, not just reading about concepts, but actually applying them.",
      features: [
        "Weather App with live API data",
        "Todo App with local storage",
        "Fully functional Calculator",
        "Tic Tac Toe with game logic",
      ],
      learnings:
        "These projects gave me a strong foundation in HTML, CSS, and vanilla JavaScript. I learned DOM manipulation, event handling, API calls, and how to structure logic without frameworks. It's what everything I've built since is built on top of.",
    },
  },

  {
    slug: "wedding-landing-page",
    title: "Wedding landing page",
    description:
      "A responsive landing page for a wedding, built with JavaScript and Tailwind CSS, with a message board.",
    tags: ["HTML", "CSS", "JavaScript", "Vite"],
    github: "https://github.com/luukdg/landing-page-wedding",
    image: [
      { type: "image", src: "/projects/wedding.webp" },
      { type: "image", src: "/projects/wedding/1.png" },
      { type: "image", src: "/projects/wedding/2.png" },
    ],
    content: {
      concept:
        "Built a website for my own wedding. A practical page where guests could find all the information they needed and RSVP. Designing something this personal made it extra fun to get right. The screenshots are blurred and the names are different to keep the details private.",
      features: [
        "RSVP section for guest registration",
        "Live message board for guest notes",
        "Fully responsive across all devices",
        "Smooth UI built with Tailwind CSS",
      ],
      learnings:
        "Having a real deadline and real guests depending on the site taught me a lot about priorities — what actually matters to the end user versus what's nice to have. I also improved my skills in responsive layout design and handling dynamic content with vanilla JavaScript.",
    },
  },

  {
    slug: "discord-bot",
    title: "Discord Bot",
    description:
      "A Discord bot that scrapes and retrieves Rocket League stats for users.",
    tags: ["Python", "Discord.py"],
    github: "https://github.com/luukdg/FlipReStat",
    image: [
      { type: "image", src: "/projects/discord.jpg" },
      { type: "image", src: "/projects/discord/botdemo.gif" },
    ],
    content: {
      concept:
        "As a Rocket League player, I wanted a quick way to look up player stats without leaving Discord. So I built a bot that takes a username, scrapes the stats, and displays them directly in the chat.",
      features: [
        "Look up Rocket League stats by username",
        "Stats displayed directly in Discord",
        "Custom command system",
        "Web scraping for live stat retrieval",
      ],
      learnings:
        "This was my first real programming project. It was built with the support of AI and became my first introduction to both programming and the possibilities of software development.",
    },
  },
];
