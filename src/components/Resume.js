// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/Ibrahim Allison_Resume-September 2023.pdf";

// Resume component
function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Technical Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li className="list-inline-item">
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
                Material UI
              </li>
              <li className="list-inline-item">
                <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL
              </li>
              <li className="list-inline-item">
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku, and AWS.
                
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Master of Science in Information Systems</h4>
              <h5>Florida State University, 2009-2011</h5>
              <p>
              Strong Concentrations in: Information Systems Management, Information Security, Project Management,
              Information Technologies, Marketing, Open-Source Software, Leadership, Management, 
              Health Information Sources, and Information Policy.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Software Development Partner, Austin, TX</h4>
              <h5>The Human Experience, April 2023-Present</h5>
              <p>
              Cross-fertilize ideas with the CEO as a CTO on contents creation, product vision, accounting, 
              and marketing as well as effective in transforming these ideas into Epics, User Stories, and 
              Acceptance Criteria.
              </p>
            </div>
            <div className="resume-item">
              <h4>Professional Development, Austin, TX</h4>
              <h5>GCTA and University of Texas at Austin, September 2022-October 2023</h5>
              <p>
              Excelled in a hybrid (face-to-face and online) Python programming training program
              at the Goodwill Career and Technical Academy in Austin, TX, sharpening technical abilities
              and contributing to the development of innovative projects. 
              Successfully started the highly competitive Coding Boot Camp at the University of Texas 
              Austin, showcasing my commitment to ongoing professional development. 

              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Proficiencies</h3>
            <ul>
              <li>HTML and CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="teal-color">M</span>
                ongoDB
              </li>
              <li>
                <span className="teal-color">E</span>xpress
              </li>
              <li>
                <span className="teal-color">R</span>eact
              </li>
              <li>
                <span className="teal-color">N</span>ode.js
              </li>
              <li>SQL</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Resume
export default Resume;