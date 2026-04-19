import Image from "next/image";
import Chatbot from "@/components/ui/Chatbot";

export function Welcome() {
  return (
    <div className="relative flex flex-row w-full sm:justify-center sm:items-center dark:bg-card dark:border-card border rounded-xl overflow-hidden">
      <div className="flex flex-col gap-4 py-10 z-1 pl-5 items-start">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap">
          Hi, I'm Luuk <br /> de Graaf
        </h1>
        <p className="text-sm md:text-xl text-leading text-zinc-600 dark:text-zinc-400 tracking-tight whitespace-nowrap">
          An enthusiastic <br className="block sm:hidden" /> front-end developer{" "}
          <br /> with a creative background.
        </p>
        <Chatbot />
      </div>
      <div className="absolute sm:relative h-72 w-55 md:w-72 md:h-96 -right-3 z-0 sm:z-auto">
        <Image
          src="/portret.jpg"
          alt="Luuk de Graaf"
          fill
          className="object-top object-cover rounded-full"
        />
      </div>
    </div>
  );
}
