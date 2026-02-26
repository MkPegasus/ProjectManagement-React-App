import TaskCard from "./TaskCard";
const KanbanNode = ({ title, tasks }) => {
  return (
    <div className="Kanban-node">
      <div
        className={`kb-header ${title === "Ongoing" ? "pending" : title === "To do" ? "todo" : "completed"}`}
      >
        {title}
      </div>
      <div className="kb-body">
        <TaskCard />
      </div>
    </div>
  );
};

export default KanbanNode;
