export function AboutMe() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Tekst */}
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-2xl font-bold">About me</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            After 7 years in the creative industry, working on motion design,
            video production, and 3D for clients like ING, Amazon, and
            SkyShowtime, I decided to turn my passion for technology into a
            career. I'm now a self-taught front-end developer, building projects
            with React, Next.js, and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
}
