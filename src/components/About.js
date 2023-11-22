import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Portfolio/profilePhoto.jpeg";
import "../style/About.css";

function About() {
  return (
    // The About section on the landing page
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                About Ibrahim Allison
                </Card.Title>
                <Card.Text>
                Ibrahim Allison is a Full-Stack Web Developer and a Senior QA Tester with a passion for delivering quality software.
                He is an experienced Software Tester with 13 years of experience in manual and automated testing,
                including roles as a test lead on several projects. 
                
                Ibrahim brings a wealth of expertise to the development process. He is also a certified SAFE 5 Scrum Master.
                Ibrahim's skill set extends to both Hardware and Software Testing, allowing him to provide
                comprehensive quality assurance for web applications.
                His proven ability to drive quality and value through technical expertise and soft skills makes him 
                a valuable asset to any development team.
                </Card.Text>
                <Card.Text>
                Ibrahim is a born leader and a self motivated professional. He had won several leadership awards 
                including featuring on Florida State University's Website as a student star during his undergraduate
                time at the Florida State University.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
