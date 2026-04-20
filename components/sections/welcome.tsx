import Image from "next/image";
import { Button } from "../ui/button";

interface WelcomeProps {
  setIsChatbotOpen: (isOpen: boolean) => void;
}

export function Welcome({ setIsChatbotOpen }: WelcomeProps) {
  return (
    <div className="relative flex flex-row w-full rounded-xl items-center justify-between gap-10 pt-10">
      <div className="flex flex-col gap-4 py-10 z-1 pl-5 items-start">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold whitespace-nowrap">
          Hi, I'm Luuk <br className="block sm:hidden" /> de Graaf
        </h1>
        <p className="text-sm md:text-xl text-leading text-zinc-600 dark:text-zinc-400 tracking-tight whitespace-nowrap">
          An enthusiastic <br className="block sm:hidden" /> front-end developer{" "}
          <br className="block sm:hidden" /> with a creative background.
        </p>
        <Button onClick={() => setIsChatbotOpen(true)}>
          Ask my AI anything 👋
        </Button>
      </div>
      <div className="flex w-full h-full items-center justify-end pr-10 pb-10">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/portret.jpg"
            alt="Luuk de Graaf"
            width={300} // Intrinsic image dimensions for Next.js Image component
            height={300} // Intrinsic image dimensions for Next.js Image component
            className="absolute object-cover w-full h-full inset-0 z-1 rounded-xl"
          />
          <div className="absolute left-10 top-10 w-full h-full border-secondary-foreground border-1 inset-0 -z-0 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
