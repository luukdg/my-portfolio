import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "../ui/button";

type NavBarProps = {
  className?: string;
};

export function NavBar({ className }: NavBarProps) {
  return (
    <div className={className}>
      <div className="flex flex-row items-center gap-3 ">
        <ThemeToggle />
        <Button asChild variant="outline">
          <a href="https://github.com/luukdg" target="_blank">
            GitHub
          </a>
        </Button>

        <Button asChild variant="outline">
          <a href="https://www.linkedin.com/in/luuk-de-graaf/" target="_blank">
            LinkedIn
          </a>
        </Button>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
      </div>
    </div>
  );
}
