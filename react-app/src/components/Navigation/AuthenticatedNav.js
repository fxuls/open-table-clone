import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../store/session";


const AuthenticatedNav = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => await dispatch(logout());

  return (
    <div className="flex-row nav-links">
      <button
        className="nav-button hover-effect logout-button"
        onClick={onLogout}
      >
        <span>Log out</span>
        <FontAwesomeIcon icon={faArrowRightToBracket} className="icon" />
      </button>
    </div>
  );
};

export default AuthenticatedNav;
