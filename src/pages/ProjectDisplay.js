import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import { useScrollToTop } from "../helpers/useScrollToTop";

function ProjectDisplay() {
  useScrollToTop();
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project?.name}</h1>
      <img src={project?.image} alt="img" />
      <p>
        <b>Skills:</b> {project?.skills}
      </p>
      <Link to={project?.url}><GitHubIcon /></Link>
      {
        project?.live && <Link to={project?.live} style={{ padding: "5px", backgroundColor: "white", borderRadius: "25%" }}>LIVE</Link>
      }
    </div>
  );
}

export default ProjectDisplay;
