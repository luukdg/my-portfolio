import { JSX } from "react";
import { Button } from "../ui/button";
import Chatbot from "@/components/ui/Chatbot";

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
    <div className=" w-full h-[90svh] flex items-center justify-center">
      <div className="relative flex flex-col w-full items-start sm:items-center justify-between gap-10 max-w-7xl sm:px-16 px-5">
        <div className="flex flex-col gap-2 z-1 items-start sm:items-center">
          <h1 className="text-5xl lg:text-9xl sm:text-7xl font-black  whitespace-nowrap tracking-wide">
            LUUK <br />
            <strong className="">DE GRAAF</strong>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-leading tracking-tight whitespace-nowrap">
            Hi I'm Luuk, a front-end developer <br className="sm:hidden" /> with
            a background in the creative industry.
          </p>
          <Button
            className="sm:hidden"
            onClick={() => setIsChatbotOpen(!isOpen)}
          >
            Ask my AI anything 👋
          </Button>
          <div className="pt-10 relative w-full">
            <Chatbot isOpen={isOpen} setIsOpen={setIsChatbotOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
