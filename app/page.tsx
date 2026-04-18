import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full flex flex-row justify-between max-w-3xl">
        <div>Logo or name</div>
        <div className="flex flex-row gap-3">
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
        </div>
      </div>
      <main className="gap-6 flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-row">
          <div className="flex flex-col items-center gap-3text-center sm:items-start sm:text-left w-full">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hi, I'm Luuk de Graaf
            </h1>
            <p className=" text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              An enthusiastic front-end developer with a creative background.
            </p>
          </div>
        </div>
        <div className="w-full flex row">
          <div>
            <p className=" text-sm text-zinc-600 dark:text-zinc-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Image
            src="/portret.jpg"
            alt="Luuk de Graaf"
            width={192}
            height={240}
            className="object-cover"
          />
        </div>

        <div className="w-full flex row">
          <div>
            <h1>Projects</h1>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-32 bg-red-400"></div>
              <div className="h-32 w-32 bg-blue-400"></div>
              <div className="h-32 bg-green-400"></div>
              <div className="h-32 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
