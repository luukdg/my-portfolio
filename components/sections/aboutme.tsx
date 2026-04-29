import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AboutMe() {
  return (
    <Card className="w-full mx-auto px-4 sm:px-8 py-8">
      <div className="flex gap-16 items-start w-full">
        {/* About text */}
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="p-0">About me</h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            <span className="text-foreground font-medium">
              After 8 years in the creative agency industry,
            </span>{" "}
            working on concepting, motion design, video production, and 3D, I
            found myself wanting to build things that last. Products and
            applications that people actually use every day. That's what led me
            to development.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Knowing it would be a long-term journey, I started with the
            fundamentals and gradually worked my way through{" "}
            <span className="text-foreground font-medium">
              HTML, CSS, JavaScript, React, TypeScript, and Next.js
            </span>
            . Investing serious time and discipline alongside my full-time job,
            and still enjoying it every day after 1.5 years, has only confirmed
            my passion for development.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Today I'm looking for opportunities to keep growing, contribute to
            meaningful projects, and bring together my{" "}
            <span className="text-foreground font-medium">
              creative and technical skills
            </span>
            .
          </p>
          <div>
            <Button asChild variant="outline">
              <a href="/Resume - Luuk de Graaf.pdf" download>
                Download resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
