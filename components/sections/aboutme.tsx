import Image from "next/image";
import { Card } from "../ui/card";

export function AboutMe() {
  return (
    <Card className="w-full mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full">
        <div className="relative w-full aspect-[1/1] rounded-2xl max-w-sm overflow-hidden">
          <Image
            src="/portret.jpg"
            alt="Luuk de Graaf"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About me
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed ">
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
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed ">
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
