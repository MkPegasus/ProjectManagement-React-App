import { projects } from "../data/data";
/* Function used to determine the project in which a given user is a member */
export function getProjects(userId) {
  return projects.filter(
    (project) =>
      project.projectManager === userId ||
      project.members.some((m) => m.idMembre === userId),
  );
}
