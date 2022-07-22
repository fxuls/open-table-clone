import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTurnUp,
  faLink,
  faCodeBranch,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-header">
          <img
            className="footer-logo"
            src="//cdn.otstatic.com/cfe/9/images/opentable-logo-153e80.svg"
            alt="website logo"
          />

          <p className="to-top-button" onClick={scrollToTop}>
            Return to Top <FontAwesomeIcon icon={faArrowTurnUp} />
          </p>
        </div>

        <ul className="footer-list">
          <li>
            <h1>About</h1>
            <div className="footer-links">
              <a href="https://opentable.com" target="_blank">
                Original site
                <FontAwesomeIcon icon={faLink} />
              </a>
              <a
                href="https://github.com/fxuls/open-table-clone"
                target="_blank"
              >
                Source code
                <FontAwesomeIcon icon={faCodeBranch} />
              </a>
              <a
                href="https://github.com/fxuls/open-table-clone/wiki"
                target="_blank"
              >
                Project documentation
                <FontAwesomeIcon icon={faBook} />
              </a>
            </div>
          </li>

          <li>
            <h1>Austin Schmigel</h1>
            <div className="footer-links">
              <a href="https://github.com/fxuls" target="_blank">
                Github
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/austin-schmigel-420a8a12b"
                target="_blank"
              >
                LinkedIn
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </li>

          <li>
            <h1>Greg Isales</h1>
            <div className="footer-links">
              <a href="https://github.com/gisales92" target="_blank">
                Github
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/greg-isales-89a672171/"
                target="_blank"
              >
                LinkedIn
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
