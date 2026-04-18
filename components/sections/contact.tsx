import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Contact</h1>

      <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Interested in working together or have a question? Feel free to reach
          out.
        </p>

        <a
          href="mailto:yourname@email.com"
          className="text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4"
        >
          yourname@email.com
        </a>

        <div className="flex gap-3 pt-2">
          <Button asChild variant="outline">
            <a href="https://github.com/yourname" target="_blank">
              GitHub
            </a>
          </Button>

          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/yourname" target="_blank">
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
