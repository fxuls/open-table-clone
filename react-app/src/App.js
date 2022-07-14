import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { modalSelector, showModal } from "./store/ui";
import { fetchRestaurants } from "./store/restaurants";
import Modal from "./components/modals/Modal";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const modal = useSelector(modalSelector);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(fetchRestaurants());

      setLoaded(true);
    })();
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
            <h1>My Home Page</h1>
            <button onClick={(e) => dispatch(showModal("login"))}>Show modal</button>
          </Route>

          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>

          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>

          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>

          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
