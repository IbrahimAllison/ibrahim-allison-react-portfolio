import React from "react";
import Project from "./Project";
import workDayScheduler from "../images/workDayScheduler.png";
import noteTaker from "../images/noteTaker.png";
import weatherDashboard from "../images/weatherDashboard.PNG";
import passwordGenerator from "../images/passwordGenerator.PNG";
import myQuoteGenerator from "../images/myQuoteGenerator.PNG";
import codeRefactor from "../images/codeRefactor.PNG";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio components
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Password Generator Challenge",
              description: "An application that an employee can use to generate a random password.",
              imgSrc: passwordGenerator,
              deployedLink:
                "https://ibrahimallison.github.io/password-generator-challenge/",
              githubLink:
                "https://github.com/IbrahimAllison/password-generator-challenge",
            },
            {
              title: "My Quote Generator",
              description: "A generate button that displays a random image from the Museum of Arts API database.",
              imgSrc: myQuoteGenerator,
              deployedLink:
                "https://rossinitherat.github.io/Group-5-whatup/",
              githubLink:
                "https://github.com/RossiniTheRat/Group-5-whatup",
            },
            {
              title: "Workday Scheduler Challenge",
              description: "A calendar application which allows a user to enter and save an hourly work day events.",
              imgSrc: workDayScheduler,
              deployedLink:
                "https://ibrahimallison.github.io/work-day-scheduler-challenge/",
              githubLink:
                "https://github.com/IbrahimAllison/work-day-scheduler-challenge",
            },
            {
              title: "Note Taker ExpressJS",
              description: "A Note Taker application that can be used to write and save notes.",
              imgSrc: noteTaker,
              deployedLink:
                "https://still-plateau-73080-593792a18d0c.herokuapp.com/",
              githubLink:
                "https://github.com/IbrahimAllison/note-taker-express.js",
            },
            {
              title: "Code Refactor Assignment",
              description: "A marketing agency has hired a developer to refactor an existing site to make it more accessible.",
              imgSrc: codeRefactor,
              deployedLink:
                "https://ibrahimallison.github.io/Code-Refactor-Assignment/#search-engine-optimization",
              githubLink:
                "https://github.com/IbrahimAllison/Code-Refactor-Assignment",
            },
            {
              title: "Server Side APIs Project Weather Dashboard",
              description: "Building a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
              imgSrc: weatherDashboard,
              deployedLink:
                "https://ibrahimallison.github.io/server_side_apis_project_weather_dashboard/#",
              githubLink:
                "https://github.com/IbrahimAllison/server_side_apis_project_weather_dashboard",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;