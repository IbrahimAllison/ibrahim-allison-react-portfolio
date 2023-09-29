import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

// Developer's Github, LinkedIn, and YouTube name, url, icon, and color.
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/IbrahimAllison",
    icon: faGithub,
    color: "#ffd700",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@ibrahimallison5665",
    icon: faYoutube,
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ibrahimallison/",
    icon: faLinkedin,
    color: "#2EACE8",
  },
 
  {
    name: "Twitter",
    url: "https://twitter.com/ibrola",
    icon: faTwitter,
    color: "#000000",
  },

];

// Footer component
const Footer = () => {
  return (
    <footer className="footer bg-goldenbrown text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
        <h5 className="designer-text">Designed by Ibrahim Allison</h5>
          <p>
          <h6 className="copyright-text">&copy; {new Date().getFullYear()}</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};
// Export Footer
export default Footer;