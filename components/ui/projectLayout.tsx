import Link from "next/link";
import Image from "next/image";
import GithubIcon from "@/components/icons/githubIcon";
import { Project } from "@/types/projectType";
import { ExternalLink } from "lucide-react";
import { CrosshairCard } from "../animations/crosshais";

export function ProjectLayout({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <div key={project.slug} className="flex flex-col gap-5 pb-6">
          <div className="rounded-xl overflow-hidden border-1 border-muted">
            <Link href={`/projects/${project.slug}`}>
              <CrosshairCard>
                <Image
                  src={project.image?.[0]?.src || "/projects/default.jpg"}
                  alt="Event cover"
                  width={640}
                  height={360}
                  className="aspect-video w-full object-cover object-top"
                />
              </CrosshairCard>
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:px-4">
            <div className="flex flex-row justify-between">
              <h3 className="font-semibold text-xl p-0">{project.title}</h3>
              {project.github && (
                <div className="flex flex-row items-start gap-3">
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
              )}
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
      ))}
    </div>
  );
}
