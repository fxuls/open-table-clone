import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const UnauthenticatedNav = () => {
  return (
    <div className="flex-row nav-links">
      <Link to="/login">
        <button className="nav-button hover-effect login-button">
          Log in
          <FontAwesomeIcon icon={faArrowRightToBracket} className="icon"/>
        </button>
      </Link>

      <Link to="/sign-up">
        <button className="nav-button hover-effect sign-up-button">
          <span>Sign up</span>
          <FontAwesomeIcon icon={faUserPlus} className="icon"/>
        </button>
      </Link>
    </div>
  );
};

export default UnauthenticatedNav;
