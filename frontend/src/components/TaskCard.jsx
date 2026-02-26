import { getMember } from "../utils/getMember";
import { getProject } from "../utils/getProject";
/* idTask: "T008",
    projectId: "P006",
    name: "Tests Fonctionnels",
    description: "Tests des principales fonctionnalités",
    dateCreation: "2026-03-20",
    dueDate: "2026-04-05",
    status: "À faire",
    priority: "Moyenne",
    assignedTo: "M002",
    estimatedDuration: 10,
    actualDuration: 0,
    progress: 0 */
const TaskCard = ({ task }) => {
  const member = getMember(task.assignedTo);
  return (
    <div className="task-card">
      <div className="title">
        {task.name}
        <p className="description">{task.description}</p>
      </div>
      <p className="project-name">
        {getProject(task.projectId).title}
      </p>
      <div className="priority-member">
        <p
          className={`priority ${
            task.priority === "Haute"
              ? "urgent"
              : task.priority === "Moyenne"
                ? "average"
                : "low"
          } `}
        >
          {task.priority}
        </p>
        <p className="dates">{`${task.dateCreation} - ${task.dueDate}`}</p>
        <div className="members">
          <p className="member">
            {member.prenom.charAt(0) + member.nom.charAt(0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
