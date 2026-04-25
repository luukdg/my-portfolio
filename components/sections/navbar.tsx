import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "../ui/button";

type NavBarProps = {
  className?: string;
};

export function NavBar({ className }: NavBarProps) {
  return (
    <div className={className}>
      <div className="flex flex-row items-center gap-3">
        <ThemeToggle />
      </div>
      <div className="flex flex-row gap-4 items-center sm:gap-6 text-sm sm:text-base">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
      </div>
    </div>
  );
}
