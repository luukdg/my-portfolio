export function Resume() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Resume</h1>
      </div>

      <div className="flex flex-col gap-8 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          I’m a frontend developer focused on building fast, accessible, and
          user-friendly web applications. I enjoy working with modern tools like
          Next.js, TypeScript, and Tailwind CSS to create clean and scalable
          interfaces.
        </p>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>

          <div>
            <p className="font-medium text-zinc-800 dark:text-zinc-200">
              Frontend Developer — Freelance
            </p>
            <p>
              2024 – Present · Building web apps and portfolio projects using
              Next.js and React.
            </p>
          </div>

          <div>
            <p className="font-medium text-zinc-800 dark:text-zinc-200">
              Junior Web Developer — Personal Projects
            </p>
            <p>
              2023 – 2024 · Focused on learning React, UI design, and backend
              basics with Node.js.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Skills
          </h2>
          <p>Next.js · React · TypeScript · Tailwind CSS · Node.js · Git</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Education
          </h2>
          <p>
            Bachelor in Information Technology (or self-taught equivalent) —
            focused on web development and software engineering fundamentals.
          </p>
        </div>
      </div>
    </div>
  );
}
