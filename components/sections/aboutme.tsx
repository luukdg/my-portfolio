import Image from "next/image";

export function AboutMe() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <div className="flex gap-10 items-center md:flex-row flex-col">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl flex-1 max-w-1/2">
          <h2>About me</h2>
          <Image
            src="/portret.jpg"
            alt="Luuk de Graaf"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col gap-4 flex-2">
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
      </div>
    </section>
  );
}
