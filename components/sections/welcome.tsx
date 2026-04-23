import { JSX, useState } from "react";
import { Button } from "../ui/button";
import Chatbot from "../ui/Chatbot";

interface WelcomeProps {
  isOpen: boolean;
  setIsChatbotOpen: (isOpen: boolean) => void;
  pageLoading?: boolean;
}

export function Welcome({
  isOpen,
  setIsChatbotOpen,
}: WelcomeProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-full rounded-xl items-center justify-center gap-10 py-20">
      <div className="flex flex-col gap-4 z-1 items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold whitespace-nowrap">
          Hi, I'm Luuk <br className="block lg:hidden" /> de Graaf
        </h1>
        <p className="text-sm md:text-xl text-leading text-zinc-600 dark:text-zinc-400 tracking-tight whitespace-nowrap">
          An enthusiastic <br className="block lg:hidden" /> front-end developer{" "}
          <br className="block lg:hidden" /> with a creative background.
        </p>
        <Button className="sm:hidden" onClick={() => setIsChatbotOpen(!isOpen)}>
          Ask my AI anything 👋
        </Button>
      </div>
      <div className="w-3/4">
        <Chatbot isOpen={isOpen} setIsOpen={setIsChatbotOpen} />
      </div>
    </div>
  );
}
