import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import UserProfilePage from "./components/profile/UserProfilePage";
import RestaurantCardsList from './components/RestaurantCardList';
import RestaurantDetail from './components/RestaurantDetail';
import { authenticate } from "./store/session";
import { modalSelector } from "./store/ui";
import { fetchRestaurants } from "./store/restaurants";
import { fetchFavorites } from "./store/favorites";
import Modal from "./components/modals/Modal";



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const modal = useSelector(modalSelector);

  useEffect(() => {
    if (!loaded) {
      (async () => {
        await dispatch(fetchRestaurants());
        await dispatch(fetchFavorites());
        try {
          await dispatch(authenticate());
        } finally {
          setLoaded(true);
        }
      })();
    }
  }, [dispatch, modal]);

  if (!loaded) {
    return null;
  }

  return (

    <div>
      {modal && <Modal />}
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path="/" exact={true}>
            <h1>Main header</h1>
            <RestaurantCardsList />
          </Route>

          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>

          <Route path="/sign-up" exact={true}>
            <SignupPage />
          </Route>

          <Route path='/restaurants/:url' exact={true}>
            <RestaurantDetail />
          </Route>

          <ProtectedRoute path="/profile">
            <UserProfilePage />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
