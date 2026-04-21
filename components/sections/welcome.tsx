import Image from "next/image";
import { Button } from "../ui/button";

interface WelcomeProps {
  isOpen: boolean;
  setIsChatbotOpen: (isOpen: boolean) => void;
}

export function Welcome({ isOpen, setIsChatbotOpen }: WelcomeProps) {
  return (
    <div className="relative flex flex-row w-full rounded-xl items-center justify-between gap-10 pt-10">
      <div className="flex flex-col gap-4 py-10 z-1 items-start">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold whitespace-nowrap">
          Hi, I'm Luuk <br className="block lg:hidden" /> de Graaf
        </h1>
        <p className="text-sm md:text-xl text-leading text-zinc-600 dark:text-zinc-400 tracking-tight whitespace-nowrap">
          An enthusiastic <br className="block lg:hidden" /> front-end developer{" "}
          <br className="block lg:hidden" /> with a creative background.
        </p>
        <Button onClick={() => setIsChatbotOpen(!isOpen)}>
          Ask my AI anything 👋
        </Button>
      </div>
      <div className="flex w-full h-full items-center justify-end pr-10 pb-10">
        <div className="relative w-full max-w-[300px] aspect-square">
          {/* Border (behind) */}
          <div className="absolute left-5 top-5 w-full h-full border border-secondary-foreground rounded-xl z-0"></div>

          {/* Image (on top) */}
          <Image
            src="/portret.jpg"
            alt="Luuk de Graaf"
            fill
            className="object-top object-cover rounded-xl z-10"
          />
        </div>
      </div>
    </div>
  );
}
