import Link from "next/link";
import GithubIcon from "@/components/icons/githubIcon";
import { Project } from "@/types/projectType";
import { ExternalLink } from "lucide-react";

export function ProjectLayout({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <>
          <div className="flex flex-col gap-5 pb-6">
            <div className="rounded-xl overflow-hidden border-1 border-muted">
              <Link href={`/projects/${project.slug}`}>
                <img
                  src={project.image || "/projects/default.jpg"}
                  alt="Event cover"
                  className="relative aspect-video w-full object-cover bg-muted"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-3 sm:px-4">
              <div className="flex flex-row justify-between">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <div className="flex flex-row items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {project.description}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <span>Continue reading</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
