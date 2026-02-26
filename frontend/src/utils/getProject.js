import { projects } from "../data/data";

/* find the project corresponding to ID */
export function getProject(idProject){
    return projects.find((project) => project.idProject === idProject)
}