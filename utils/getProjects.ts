export const LOCAL_STORAGE_PROJECT_KEY = "projects";

export const getProjects = () => {
  if (typeof window !== "undefined") {
    const storedProjects = localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY);
    const projects = storedProjects ? JSON.parse(storedProjects) : [];
    return projects;
  }
  return [];
};
