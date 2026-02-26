import defaultImg from "../assets/default.svg";
import { getMember } from "../utils/getMember";
const ProjectCard = ({ project }) => {
  function showDetails(){
    
  }
  const projectOwner = getMember(project.projectManager);
  return (
    <div className="card" onClick={showDetails}>
      <div className="image">
        <img src={defaultImg} alt="project image" />
      </div>
      <div className="body">
        <h2>{project.title}</h2>
        <div className="progress-bar">
            <p className="status">{project.status}</p>
          <div
            className="progress-level"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <div className="project-duration">
          <p className="percentage">{project.progress}%</p>
          <p className="duration">{`${project.startingDate} - ${project.endingDate}`}</p>
        </div>
        <div className="creation">
          <p className="author">
            Owner :{" "}
            <span className="date-creation">{projectOwner.nom + " " + projectOwner.prenom}</span>
          </p>
          <p className="date">
            Created on the :{" "}
            <span className="date-creation">{project.dateCreation}</span>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-price">{project.budget}FCFA</div>
        <div className="members">121212</div>
      </div>
    </div>
  );
};

export default ProjectCard;
