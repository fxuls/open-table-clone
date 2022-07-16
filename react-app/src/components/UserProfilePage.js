import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { userSelector } from "../store/session";
import { fetchFavorites, addFavorite, removeFavorite } from "../store/favorites";

const UserProfilePage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  // fetch favorites once on first render
  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  // if not logged in redirect to login
  // this should not happen since it is a protected route
  if (!user) return <Redirect to="/login" />;

  return (<div className="profile-page">
    <div className="header">
      <h1>{user.first_name + " " + user.last_name}</h1>
    </div>
    <ul>
        <li><Link to="/profile/favorites">Favorites</Link></li>
        <li><Link to="/profile/reservations">Reservations</Link></li>
    </ul>
    <Switch>
        <Route path="/profile/favorites">
            Favorites
        </Route>

        <Route path="/profile/reservations">
            Reservations
        </Route>
    </Switch>
  </div>);
};

export default UserProfilePage;
