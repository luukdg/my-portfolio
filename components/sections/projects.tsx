import Link from "next/link";
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
import { tagColors } from "../../data/tagColors";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <div className="w-full flex-col flex gap-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            className="hover:scale-101 transition-transform"
            key={project.title}
          >
            <Link href={`/projects/${project.slug}`}>
              <img
                src={project.image || "/projects/default.jpg"}
                alt="Event cover"
                className="relative aspect-video w-full object-cover bg-muted"
              />
            </Link>
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
