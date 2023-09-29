import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/Contact.css";

function Contact() {
  // Set initial state for name, email, message, and form errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  // Handle name input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  // Handle email input changes and validate email format
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setEmailError(false);

    // Validate email format using regex
    if (!/\S+@\S+\.\S+/.test(enteredEmail)) {
      setEmailError(true);
    }
  };

  // Handle message input changes
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  // Handle onBlur event for input fields
  const handleBlur = (fieldName) => {
    if (fieldName === "name" && name.length <= 5) {
      setNameError(true);
    }
    if (fieldName === "email" && !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    }
    if (fieldName === "message" && message.length < 150) {
      setMessageError(true);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate input fields and set errors if necessary
    if (name.length <= 5) {
      setNameError(true);
      valid = false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      valid = false;
    }
    if (message.length < 150) {
      setMessageError(true);
      valid = false;
    }

    // If all fields are valid, log form data and reset inputs
    if (valid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(true);
    }
  };

  // Render the contact form
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="contact-header">Contact Me</h2>
            {messageSent && (
              <div className="alert alert-success" role="alert">
                Your message has been sent successfully!
              </div>
            )}
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group>
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  type="text"
                  className={nameError ? "is-invalid" : ""}
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={() => handleBlur("name")} // Handle onBlur event
                  required
                />
                {nameError && (
                  <div className="invalid-feedback">
                    Name must be more than 5 characters
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  className={emailError ? "is-invalid" : ""}
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => handleBlur("email")} // Handle onBlur event
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">
                    A valid email is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  className={messageError ? "is-invalid" : ""}
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={handleMsgChange}
                  onBlur={() => handleBlur("message")} // Handle onBlur event
                />
                {messageError && (
                  <div className="invalid-feedback">
                    Message must be at least 150 characters
                  </div>
                )}
              </Form.Group>
              <Button type="submit" className="custom-send-message-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Contact
export default Contact;
