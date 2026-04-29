import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/sections/navbar";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
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
            <h2 className="text-2xl font-bold">Demo</h2>

            <Card>
              <div>
                <img
                  src={project.image}
                  alt={`${project.title} demo preview`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Card>
          </section>

          {/* Problem */}
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Problem</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.content.problem}
            </p>
          </section>

          {/* Solution */}
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Solution</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.content.solution}
            </p>
          </section>

          {/* Features */}
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 space-y-1">
              {project.content.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Learnings */}
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Learnings</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.content.learnings}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
