import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import GithubIcon from "@/components/icons/githubIcon";

export function Projects() {
  return (
    <div className="w-full flex-col flex gap-6">
      <div>
        <h1 className="text-2xl font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">
              <h1>Title of project</h1>
              <GithubIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Next.js
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              TypeScript
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Tailwind
            </span>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">
              <h1>Title of project</h1>
              <GithubIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Next.js
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              TypeScript
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Tailwind
            </span>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">
              <h1>Title of project</h1>
              <GithubIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Next.js
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              TypeScript
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Tailwind
            </span>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">
              <h1>Title of project</h1>
              <GithubIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Next.js
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              TypeScript
            </span>
            <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
              Tailwind
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
