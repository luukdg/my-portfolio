import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

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
        <Link
          className="hover:text-primary duration-300 transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:text-primary duration-300 transition-colors"
          href="/#projects"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
