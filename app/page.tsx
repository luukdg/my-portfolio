import { NavBar } from "@/components/sections/navbar";
import { Welcome } from "@/components/sections/welcome";
import { AboutMe } from "@/components/sections/aboutme";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import Chatbot from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center dark:bg-black">
      <NavBar className="w-full flex flex-1 flex-row justify-between max-w-7xl py-3 px-5 sm:px-16" />
      <main className="gap-10 flex flex-1 w-full max-w-7xl flex-col items-center py-32 px-5 sm:px-16 bg-white dark:bg-black sm:items-start">
        <Chatbot />
        <Welcome />
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
