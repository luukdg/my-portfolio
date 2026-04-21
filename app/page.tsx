"use client";

import { NavBar } from "@/components/sections/navbar";
import { Welcome } from "@/components/sections/welcome";
import { AboutMe } from "@/components/sections/aboutme";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/creative";
import { Contact } from "@/components/sections/contact";
import Chatbot from "@/components/ui/Chatbot";
import { useState } from "react";

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center dark:bg-black pb-16 sm:pb-20">
      <NavBar className="w-full flex flex-row justify-between max-w-7xl py-3 px-5 sm:px-16" />
      <main className="gap-10 flex flex-1 w-full max-w-7xl flex-col items-center px-5 sm:px-16 bg-white dark:bg-black sm:items-start">
        <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
        <Welcome isOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen} />
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
