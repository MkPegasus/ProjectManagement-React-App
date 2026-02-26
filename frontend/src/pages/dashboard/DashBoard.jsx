import KanbanNode from "../../components/KanbanNode";
import dashBoard from "../../assets/dashBoard.png";
import boussole from "../../assets/boussole.svg";
import book from "../../assets/book.svg";
import { getMember } from "../../utils/getMember";

const DashBoard = ({ userId }) => {
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
          <div className="number">4</div>
          <div className="card-detail">Project planified</div>
          <div className="icon"></div>
        </div>
        <div className="grid-card">
          <div className="number">9</div>
          <div className="card-detail">Project ongoing</div>
          <img src={boussole} alt="" className="icon" />
        </div>
        <div className="grid-card">
          <div className="number">9</div>
          <div className="card-detail">Total Tasks</div>
          <img src={book} alt="" className="icon" />
        </div>
        <div className="grid-card">
          <div className="number">9</div>
          <div className="card-detail">Total Budget</div>
          <span className="icon">$</span>
        </div>
      </div>

      <div className="section project">
        <h1>Actual Projects</h1>
        <div className="project-grid">
          <div className="project">
            <p className="project-title">Refonte du site de studies learning</p>
            <p className="status pending">Pending</p>
            <div className="progress">
              <p className="percentage">45%</p>
              <div className="progress-bar">
                <div
                  className="progress-level"
                  style={{
                    width: `45%`,
                  }}
                ></div>
              </div>
            </div>
            <p className="date pending">31 jan 2026 - 21 fev 2026</p>
          </div>
          <div className="project">
            <p className="project-title">Application de gestion de projet</p>
            <p className="status completed">Completed</p>
            <div className="progress">
              <p className="percentage">100%</p>
              <div className="progress-bar">
                <div
                  className="progress-level"
                  style={{
                    width: `100%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="project">
            <p className="project-title">Application de gestion de depenses</p>
            <p className="status blocked">Blocked</p>
            <div className="progress">
              <p className="percentage">15%</p>
              <div className="progress-bar">
                <div
                  className="progress-level"
                  style={{
                    width: `15%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section kanban">
        <h1>Follow your tasks</h1>
        <div className="grid">
          <KanbanNode title="To do" />
          <KanbanNode title="Ongoing" />
          <KanbanNode title="Completed" />
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
