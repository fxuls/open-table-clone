import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { userSelector } from "../../store/session";

const NavBar = () => {

  const sessionUser = useSelector(userSelector);
  
  return (
    <nav className="nav-header">
      <div className="flex-row">
        <a href="/" className="homepage-link">
          <img
            className="masthead"
            src="//cdn.otstatic.com/cfe/9/images/opentable-logo-153e80.svg"
          />
        </a>

        <div className="nav-location">
          <nav>
            <FontAwesomeIcon icon={faCompass} size="lg" className="icon"/>
          </nav>
        </div>
      </div>

      <div className="flex-row nav-links">
        <Link to="/login">
          <button className="nav-button hover-effect login-button">
            Log in
          </button>
        </Link>

        <Link to="/sign-up">
          <button className="nav-button hover-effect sign-up-button">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
