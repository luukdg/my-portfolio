import { Card } from "../ui/card";

export function AboutMe() {
  return (
    <Card className="w-full mx-auto px-4">
      <div className="flex gap-20 items-start w-full">
        {/* Left — About Me */}
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="">About me</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            After 7 years in the creative industry, working on motion design,
            video production, and 3D for clients like ING, Amazon, and
            SkyShowtime, I decided to turn my passion for technology into a
            career.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm now a self-taught front-end developer, building projects with
            React, Next.js, and TypeScript.
          </p>
          <div className="pt-2">
            <span className="text-sm text-zinc-500">
              Based in the Netherlands 🇳🇱
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
