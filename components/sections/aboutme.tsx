import Image from "next/image";

export function AboutMe() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">About Me</h1>
      </div>
      <div className="flex flex-row">
        <div>
          <p className=" text-sm text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
    </div>
  );
}
