import TaskCard from "./TaskCard";
const KanbanNode = ({ title, tasks }) => {
  return (
    <div className="Kanban-node">
      <div
        className={`kb-header ${title === "Ongoing" ? "pending" : title === "To do" ? "todo" : "completed"}`}
      >
        <p className="icon"></p>
        <p className="title">{title}</p>
        <p className="count">{tasks.length}</p>
      </div>
      <div className="kb-body">

        {tasks.map(task => <TaskCard task={task} /> )}
      </div>
    </div>
  );
};

export default KanbanNode;
