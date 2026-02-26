import KanbanNode from "../../components/KanbanNode";
import dashBoard from "../../assets/dashboard.png";
import boussole from "../../assets/boussole.svg";
import book from "../../assets/book.svg";
import { getMember } from "../../utils/getMember";
import { getProjects } from "../../utils/getProjects";
import { getTasks } from "../../utils/getTasks";

const DashBoard = ({ userId }) => {
  /* Project in which you are either owner or member */
  const participatingProjects = getProjects(userId);
  const allTasks = getTasks(userId);
  const member = getMember(userId);
  return (
    <div className="page-content">
      <header className="page-header">
        <div className="page-heading">
          <h1 className="title">
            Welcome Back {`${member.nom} ${member.prenom}`} !!
          </h1>
          <p className="description">Follow the progress of your projects</p>
        </div>
        <div className="img">
          <img src={dashBoard} alt="dashboard header" />
        </div>
      </header>

      <div className="project-task-grid">
        <div className="grid-card">
          <div className="number">{participatingProjects.filter((project)=>project.status === "Planifié").length}</div>
          <div className="card-detail">Project planified</div>
          <div className="icon"></div>
        </div>
        <div className="grid-card">
          <div className="number">{participatingProjects.filter((project)=>project.status === "En cours").length}</div>
          <div className="card-detail">Project ongoing</div>
          <img src={boussole} alt="" className="icon" />
        </div>
        <div className="grid-card">
          <div className="number">{allTasks.length}</div>
          <div className="card-detail">Total Tasks</div>
          <img src={book} alt="" className="icon" />
        </div>
        <div className="grid-card">
          <div className="number">{participatingProjects.reduce((sum, project)=> sum + project.budget
            , 0 )}</div>
          <div className="card-detail">Total Budget</div>
          <span className="icon">$</span>
        </div>
      </div>

      <div className="section project">
        <h1>Actual Projects</h1>
        <div className="project-grid">
          {participatingProjects.map((project) => {
            return (
              <div className="project">
                <p className="project-title">{project.title}</p>
                <p
                  className={`status ${
                    project.status === "En cours"
                      ? "pending"
                      : project.status === "Planifié"
                        ? "blocked"
                        : "completed"
                  }`}
                >
                  {project.status}
                </p>
                <div className="progress">
                  <p className="percentage">{project.progress}%</p>
                  <div className="progress-bar">
                    <div
                      className="progress-level"
                      style={{
                        width: `${project.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="section kanban">
        <h1>Follow your tasks</h1>
        <div className="grid">
          <KanbanNode title="To do" tasks={allTasks.filter(task => task.status === "À faire")} />
          <KanbanNode title="Ongoing" tasks={allTasks.filter(task => task.status === "En cours")}/>
          <KanbanNode title="Completed" tasks={allTasks.filter(task => task.status === "Terminé")}/>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
