import { projects } from "@/data/projects";
import { creative } from "@/data/creative";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/sections/navbar";
import { ImageCarousel } from "@/components/ui/imageCarousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/githubIcon";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = [...projects, ...creative].find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="flex flex-col flex-1 items-center justify-center pb-16 sm:pb-20">
      <NavBar className="w-full flex flex-row justify-between max-w-7xl py-3 px-5 pt-5 sm:px-16" />

      <div className="w-full max-w-7xl px-5 sm:px-16 pt-6">
        <Button variant="ghost" asChild>
          <Link href="/#projects">
            <ArrowLeft />
            Back to projects
          </Link>
        </Button>
      </div>

      <main className="gap-10 flex flex-1 w-full max-w-7xl flex-col px-5 sm:px-16 items-start">
        <div className="flex flex-col gap-4 pt-10">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {project.description}
          </p>

          {/* Tags */}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-10 w-full max-w-3xl pt-6">
          {/* Demo */}

          <section className="flex flex-col gap-2 w-full max-w-3xl">
            <h3>Screenshots</h3>
            <div className="flex flex-row w-full">
              <ImageCarousel image={project.image} />
            </div>
            {project.github && (
              <div className="flex flex-row items-center gap-3 mt-1">
                {project.live && (
                  <Button asChild variant="outline">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github repository
                    <GithubIcon />
                  </a>
                </Button>
              </div>
            )}
          </section>

          {/* Solution */}
          {project.content.concept && (
            <section className="flex flex-col gap-2">
              <h3>Concept</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.content.concept}
              </p>
            </section>
          )}

          {/* Features */}
          {project.content.features && (
            <section className="flex flex-col gap-2">
              <h3>Features</h3>
              <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 space-y-1">
                {project.content.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Learnings */}
          {project.content.learnings && (
            <section className="flex flex-col gap-2">
              <h3>Learnings</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.content.learnings}
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
