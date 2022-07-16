import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userSelector } from "../store/session";

const UserProfilePage = () => {
  const user = useSelector(userSelector);

  // if not logged in redirect to login
  // this should not happen since it is a protected route
  if (!user) return <Redirect to="/login" />;

  return <div>User profile</div>;
};

export default UserProfilePage;
