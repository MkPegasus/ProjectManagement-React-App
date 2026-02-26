import { tasks } from "../data/data";
/* function to get all user's tasks */
export function getTasks(userId){
    return tasks.filter(task => task.assignedTo === userId)
}