import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/ShashankOO7"><GitHubIcon /></a>
        <MailIcon onClick={() => window.location = 'mailto:shashankchourasia7@gmail.com'}/>
        <a href="https://www.linkedin.com/in/shashank-chaurasia-7b39431a4/"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Shashank Portfolio</p>
    </div>
  );
}

export default Footer;
