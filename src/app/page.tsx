import { Progress } from "@/components/ui/progress";

export default function RootPage() {
  return (
    <main>
      <ProjectList
        projects={[
          {
            name: "Project Name",
            description: "Empty the compartment of your pantaloons at once.",
            hours_spent: 2,
          },
          {
            name: "Project Name",
            description: "Empty the compartment of your pantaloons at once.",
            hours_spent: 2,
          },
          {
            name: "Project Name",
            description: "Empty the compartment of your pantaloons at once.",
            hours_spent: 2,
          },
        ]}
      />
    </main>
  );
}

interface Project {
  name: string;
  description: string;
  hours_spent: number;
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-4 m-4">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl bg-slate-800 text-foreground p-4 flex flex-col gap-2">
      <header>
        <h1 className="text-xl font-semibold">{project.name}</h1>
        <p className="tracking-wide">{project.description}</p>
      </header>
      <div className="mt-2">
        <div className="p-4 bg-slate-600 text-foreground rounded-xl w-fit ">
          {project.hours_spent} hours spent
        </div>
      </div>
      <hr className="border-slate-600 my-2" />
      <div className="w-full flex flex-row gap-2 justify-center items-center">
        0%
        <Progress className="bg-slate-600" value={50} />
        100%
      </div>
    </div>
  );
}
