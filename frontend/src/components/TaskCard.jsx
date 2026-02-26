const TaskCard = ({task}) => {
  return (
    <div className="task-card">
        <div className="title">Préparer le cahier des charges</div>
        <div className="details">
            <p className="status">Ongoing</p>
            <div className="members">
                <p className="member">NG</p>
                <p className="member">MM</p>
            </div>
        </div>
    </div>
  )
}

export default TaskCard