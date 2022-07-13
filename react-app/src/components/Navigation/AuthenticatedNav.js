import { useDispatch } from "react-redux";
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
        Log out
      </button>
    </div>
  );
};

export default AuthenticatedNav;
