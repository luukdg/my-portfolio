import { JSX } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

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
    <div className=" w-full flex items-center justify-center py-0 sm:py-30">
      <div className="relative flex flex-col sm:flex-row w-full items-start justify-between gap-10 max-w-7xl">
        <div className="flex flex-col gap-2 z-1 items-start order-2 sm:order-1">
          <h1 className="text-6xl xl:text-9xl lg:text-8xl md:text-7xl font-black  whitespace-nowrap tracking-wide">
            LUUK <br />
            <strong className="">DE GRAAF</strong>
          </h1>
          <p className="text-sm xl:text-lg md:text-base  text-leading tracking-tight pb-2">
            Hi I'm Luuk, a front-end developer <br className="sm:hidden" /> with
            a background in the creative industry.
          </p>
          <MotionButton
            initial="rest"
            whileHover="hover"
            animate="rest"
            onClick={() => setIsChatbotOpen(!isOpen)}
          >
            Ask my AI anything{" "}
            <motion.p
              variants={{
                rest: { rotate: 0 },
                hover: {
                  rotate: [0, -15, 15, -15, 15, -15, 15, 0],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
              style={{ display: "inline-block" }}
            >
              👋
            </motion.p>
          </MotionButton>
        </div>
        <div className="w-full flex items-start justify-center sm:justify-end order-1 sm:order-2">
          <div className="relative w-full aspect-[1/1] rounded-full max-w-2/3 sm:max-w-[300px] overflow-hidden sm:border-5 border-3 border-primary/80 dark:border-foreground">
            <Image
              src="/portret.jpg"
              alt="Luuk de Graaf"
              fill
              sizes="(max-width: 640px) 66vw, 300px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
