"use client";

import { useRouter } from "next/navigation";
import Button from "./components/Button";
import { Project } from "./types/Project";
import { useEffect, useState } from "react";
import ProjectsCard from "./components/ProjectsCard";
import {
  LOCAL_STORAGE_PROJECT_KEY,
  getProjects,
} from "../../utils/getProjects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const router = useRouter();

  const projects: Project[] = getProjects();

  useEffect(() => {
    if (!projects.length) {
      router.push("/create-project");
    }
  }, [projects.length, router]);

  const handleDeleteProject = (projectName: string) => {
    if (projects.length <= 1) {
      localStorage.removeItem(LOCAL_STORAGE_PROJECT_KEY);
      setSelectedProject(null);
      return;
    }
    localStorage.setItem(
      LOCAL_STORAGE_PROJECT_KEY,
      JSON.stringify(projects.filter(({ name }) => name !== projectName))
    );
    setSelectedProject(null);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 flex items-center justify-between shadow-[0px_1px_0px_#2D3232]">
        <div className="font-medium">Projects</div>
        <Button onClick={() => router.push("/create-project")}>
          Create project
        </Button>
      </div>
      <div className="h-full flex">
        <div className="flex flex-col gap-3 p-4 min-w-[128px] max-w-[256px] shadow-[1px_0px_0px_#2D3232] flex-shrink-0">
          {projects.map((proj, idx) => (
            <div
              className={`text-center cursor-pointer ${
                selectedProject?.name === proj.name &&
                "text-primary font-medium"
              }`}
              key={idx}
              onClick={() => setSelectedProject(proj)}
            >
              {proj.name}
            </div>
          ))}
        </div>
        <div className="p-4 flex w-full justify-center">
          {selectedProject ? (
            <ProjectsCard
              project={selectedProject}
              handleDelete={handleDeleteProject}
            />
          ) : (
            <div>Select project</div>
          )}
        </div>
      </div>
    </div>
  );
}
