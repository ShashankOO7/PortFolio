import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shashank</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, XML, CSS, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Java Spring Framework, Spring-Boot, Hibernate,
              MySQL, MongoDB, ExpressJS, NodeJS, J2EE, JDBC, Servlets, Core Java, RestAPI
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java (Primary), Python, JavaScript, C#, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
