import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { useScrollToTop } from "../helpers/useScrollToTop";

function Experience() {
  useScrollToTop();
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Gyan Ganga Educational Academy, Raipur, Chhattisgarh
          </h3>
          <p> CBSE Secondary School Certificate, Percentage: 72% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Gyan Ganga Educational Academy, Raipur, Chhattisgarh
          </h3>

          <p> CBSE Higher Secondary Certificate, Percentage: 67% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chhattisgarh Swami Vivekanand Technical University , Bhilai, Chhattisgarh
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science & Engineering, Percentage: 77% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Devloper Training (JSpiders)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, Karnataka
          </h4>
          <p>
            • Implemented various projects and exercises as part of the Full Stack Developer training program.<br />
            • Developed skills in front-end technologies like HTML, CSS, JavaScript, and frameworks like React.js.<br />
            • Gained proficiency in back-end development using Spring Boot, Hibernate, Node.js, Express.js, and SQL.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            7 Eleven Global Solution Center INTERNSHIP
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, Karnataka
          </h4>
          <p>
            • Contributed on 7Dashboard and User-Config management repositories by developing & testing components.<br />
            • Data Management, Designing Schemas, and Performing CRUD operations in NoSQL and SQL Databases.<br />
            • Developed and maintained frontend & backend components of web applications using React, Node and APIs.<br />
            • Integrated RESTful APIs to facilitate communication between frontend and backend systems.
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Twitch
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
