export function Welcome() {
  return (
    <div className="flex flex-row pt-10">
      <div className="flex flex-col items-center gap-3text-center sm:items-start sm:text-left w-full">
        <h1 className="max-w-xs text-5xl font-bold leading-12 tracking-tight text-black dark:text-zinc-50">
          Hi, I'm Luuk de Graaf
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          An enthusiastic front-end developer with a creative background.
        </p>
      </div>
    </div>
  );
}
