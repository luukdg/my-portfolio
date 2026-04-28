import {
  React,
  TypeScript,
  JavaScript,
  HTML5,
  CSS,
  TailwindCSS,
  ViteJS,
  ShadcnUI,
  Git,
  Firebase,
  Docker,
} from "developer-icons";

const techSkills = [
  { Icon: JavaScript, label: "JavaScript" },
  { Icon: TypeScript, label: "TypeScript" },
  { Icon: React, label: "React" },
  { Icon: HTML5, label: "HTML5" },
  { Icon: CSS, label: "CSS" },
  { Icon: TailwindCSS, label: "Tailwind" },
  { Icon: ViteJS, label: "Vite" },
  { Icon: ShadcnUI, label: "Shadcn/UI" },
  { Icon: Git, label: "Git" },
  { Icon: Firebase, label: "Firebase" },
  { Icon: Docker, label: "Docker" },
];

const creativeSkills = [
  { label: "Motion Design", icon: "🎬" },
  { label: "Video Editing", icon: "✂️" },
  { label: "Video Production", icon: "🎥" },
  { label: "3D Modeling", icon: "🧊" },
  { label: "Color Grading", icon: "🎨" },
];

export function Skills() {
  return (
    <div className="w-full">
      <div>
        <h2>Skills</h2>
      </div>
      <div className="flex flex-col gap-6 flex-[2]">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-foreground/80">Tech</span>
          <div className="flex flex-wrap gap-4">
            {techSkills.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon
                  className={`w-10 h-10 ${label === "Shadcn/UI" ? "dark:invert" : ""}`}
                />
                <span className="text-xs text-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-base font-semibold text-foreground/80">
            Creative
          </span>
          <div className="flex flex-wrap gap-3">
            {creativeSkills.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
              >
                <span>{icon}</span>
                <span className="text-sm font-medium text-foreground/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
