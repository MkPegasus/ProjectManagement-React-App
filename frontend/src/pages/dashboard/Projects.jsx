import { useMemo, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { projects, listFilter } from "../../data/data";
import ProjectCard from "../../components/ProjectCard";

const Projects = ({ userId }) => {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("dateCreation");
  /* Sort Function */
  
  /* Ensures that the displayed projects are project related to the actual member (as ProjectManager or SimpleMember) */
  const projectList = useMemo(() => {
    return projects
      .filter(
        (project) =>
          project.projectManager === userId || project.members.some(m => m.idMembre === userId),
      )
      .filter((project) =>
        filter === "All" ? true : project.status === filter,
      )
      .sort((a, b) => {
        if (sortBy === "dateCreation") {
          return new Date(a.dateCreation) - new Date(b.dateCreation);
        }

        return b.budget - a.budget;
      });
  }, [filter, sortBy, projects, userId]);
  console.log(sortBy)
  /* Function to manage the project list filtering */
  const handleFilter = (status) => {
    /* Logic to create the filtered list */
    setFilter(status);
  };
  return (
    <div className="page-content">
      <header className="page-header">
        <div className="page-heading">
          <h1 className="title">Your Projects</h1>
          <p className="description">
            Follow and Manage yours projects in one place
          </p>
        </div>
        <div className="add-btn">
          <button>+ New Project</button>
        </div>
      </header>
      <div className="filters">
        <div className="criteria-status">
          {listFilter.map((status) => (
            <button
              key={status}
              className={status === filter ? "active-filter" : ""}
              onClick={() => handleFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="order-by">
          <select name="order-by" className="select-order" onChange={(e)=>setSortBy(e.target.value)}>
            <option value="dateCreation">Date of creation</option>
            <option value="budget">Budget</option>
          </select>

          <button>
            <img src={searchIcon} alt="searchIcon" className="search-btn" />
          </button>
        </div>
      </div>
      <div className="project-cards">
        {projectList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
