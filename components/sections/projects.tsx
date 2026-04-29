import { projects } from "@/data/projects";
import { creative } from "@/data/creative";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectLayout } from "@/components/ui/projectLayout";

export function Projects() {
  return (
    <div className="w-full flex-col flex gap-6">
      <Tabs defaultValue="development" className="w-full">
        <h2>Projects</h2>
        <TabsList className="mb-2" variant="line">
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="creative">Creative</TabsTrigger>
        </TabsList>

        <TabsContent value="development">
          <ProjectLayout projects={projects} />
        </TabsContent>
        <TabsContent value="creative">
          <ProjectLayout projects={creative} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
