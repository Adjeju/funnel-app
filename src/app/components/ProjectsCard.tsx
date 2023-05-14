import { Project } from "../types/Project";
import Button from "./Button";

type Props = {
  project: Project;
  handleDelete: (projectName: string) => void;
};

const ProjectsCard = ({ project, handleDelete }: Props) => {
  const { name, category, email, goal, launch, numberOfWorkers, url } = project;

  return (
    <div className="flex flex-col gap-2">
      <div className="text-center font-medium">{name}</div>
      <div>Category: {category}</div>
      <div>Email: {email}</div>
      <div>Goal: {goal}</div>
      <div>Launch: {launch}</div>
      <div>Number of workers: {numberOfWorkers}</div>
      <div>Url: {url}</div>
      <Button color="error" onClick={() => handleDelete(name)}>
        Delete project
      </Button>
    </div>
  );
};

export default ProjectsCard;
