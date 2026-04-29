"use client";
import { useState } from "react";
import { NavBar } from "@/components/sections/navbar";
import { Welcome } from "@/components/sections/welcome";
import { AboutMe } from "@/components/sections/aboutme";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import Chatbot from "@/components/ui/Chatbot";

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center pb-16 sm:pb-20">
      <NavBar className="w-full flex flex-row justify-between max-w-7xl py-3 px-5 pt-5 sm:px-16" />
      <main className="gap-20 flex flex-1 w-full max-w-7xl flex-col items-center px-5 sm:px-16 pt-10 sm:items-start">
        <Welcome isOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen} />
        <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
