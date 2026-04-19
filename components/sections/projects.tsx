import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import GithubIcon from "@/components/icons/githubIcon";
import { ExternalLink } from "lucide-react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const tagColors: Record<string, string> = {
  React: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Next.js": "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20",
  TypeScript: "bg-blue-600/10 text-blue-300 border border-blue-600/20",
  Tailwind: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  Vite: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  Firebase: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border border-green-500/20",
  "Discord.js": "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  SPFx: "bg-blue-700/10 text-blue-300 border border-blue-700/20",
  "Microsoft Graph API":
    "bg-blue-700/10 text-blue-300 border border-blue-700/20",
  HTML: "bg-orange-600/10 text-orange-400 border border-orange-600/20",
  CSS: "bg-blue-400/10 text-blue-300 border border-blue-400/20",
  JavaScript: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
};

const projects = [
  {
    title: "Guess the Grade",
    description:
      "Interactive app for climbers to watch bouldering videos, guess grades, and track stats. Designed as a Progressive Web App (PWA) for Android.",
    tags: ["React", "Vite", "Firebase"],
    live: "https://guess-the-grade-1a830.web.app/",
    github: "https://github.com/luukdg/guess-the-grade-react",
    image: "/projects/guessthegrade.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with an AI chatbot that can tell you more about me and my work.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/luukdg/my-portfolio",
    image: "/projects/portfolio.jpg",
  },
  {
    title: "Smoelenboek",
    description:
      "An SPFx web part integration for Teams, built to find colleagues within the organisation and share skills and ambitions.",
    tags: ["React", "SPFx", "Microsoft Graph API"],
    github: "https://github.com/luukdg/smoelenboek-react-spfx",
    image: "/projects/smoelenboek.png",
  },
  {
    title: "The Odin Project",
    description:
      "Various projects built while learning through The Odin Project curriculum, including a Weather App, Todo list, Calculator, and Tic Tac Toe.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/luukdg/the-odin-project-portfolio",
    image: "/projects/odin.jpg",
  },
  {
    title: "Wedding landing page",
    description:
      "A responsive landing page for a wedding, built with JavaScript and Tailwind CSS, with a message board.",
    tags: ["HTML", "CSS", "JavaScript", "Vite"],
    github: "https://github.com/luukdg/landing-page-wedding",
    image: "/projects/wedding.webp",
  },
  {
    title: "Discord Bot",
    description:
      "A Discord bot that scrapes and retrieves Rocket League stats for users.",
    tags: ["Node.js", "Discord.js"],
    github: "https://github.com/luukdg/FlipReStat",
    image: "/projects/discord.jpg",
  },
];

export function Projects() {
  return (
    <div className="w-full flex-col flex gap-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <img
              src={project.image || "/projects/default.jpg"}
              alt="Event cover"
              className="relative aspect-video w-full object-cover bg-muted"
            />
            <CardHeader>
              <CardTitle className="flex flex-row justify-between">
                <h1>{project.title}</h1>
                <div className="flex flex-row items-center gap-3">
                  {project.live && (
                    <a href={project.live} target="_blank">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a href={project.github} target="_blank">
                    <GithubIcon />
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded-md ${tagColors[tag] ?? "bg-muted text-muted-foreground"}`}
                >
                  {tag}
                </span>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
