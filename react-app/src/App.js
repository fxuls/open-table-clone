import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import UserProfilePage from "./components/profile/UserProfilePage";
import RestaurantCardsList from "./components/RestaurantCardList";
import RestaurantDetail from "./components/RestaurantDetail";
import { authenticate } from "./store/session";
import { modalSelector } from "./store/ui";
import { fetchRestaurants } from "./store/restaurants";
import { fetchFavorites } from "./store/favorites";
import Modal from "./components/modals/Modal";
import Spinner from "./components/Spinner";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const modal = useSelector(modalSelector);

  useEffect(() => {
    if (!loaded) {
      (async () => {
        try {
          await dispatch(authenticate());
          await dispatch(fetchRestaurants());
          await dispatch(fetchFavorites());
        } finally {
          setLoaded(true);
        }
      })();
    }
  }, [dispatch, modal, loaded]);

  return (
    <div>
      {modal && <Modal />}
      <BrowserRouter>
        <NavBar />

        {loaded ? (
          <Switch>
            <Route path="/" exact={true}>
              <RestaurantCardsList />
            </Route>

            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>

            <Route path="/sign-up" exact={true}>
              <SignupPage />
            </Route>

            <Route path="/restaurants/:url" exact={true}>
              <RestaurantDetail />
            </Route>

            <ProtectedRoute path="/profile">
              <UserProfilePage />
            </ProtectedRoute>

            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        ) : (
          <div className="fill-screen center-content">
            <Spinner />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
