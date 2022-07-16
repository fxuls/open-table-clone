import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/session";
import { showModal, hideModal } from "../../store/ui";
import { LOGIN_MODAL } from "./LoginModal";

export const SIGNUP_MODAL = "ui/modals/SIGNUP";

const SignupModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // if user is logged in hide modal
  if (user) {
    dispatch(hideModal());
    return null;
  }

  const onSubmit = () => {};

  return (
    <div className="signup-modal">
      <h1 className="form-header">Sign up</h1>

      <form onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="firstName">First name</label>
          <input
            name="firstName"
            type="text"
            placeholder="Jason"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName" className="field-error">
            {firstNameError}
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="lastName">Last name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Smith"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lastName" className="field-error">
            {lastNameError}
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="jason.smith@example.co"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="field-error">
            {emailError}
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="field-error">
            {passwordError}
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword" className="field-error">
            {confirmPasswordError}
          </label>
        </div>
      </form>

      <div className="modal-footer">
        <p>
          Already have an account?{" "}
          <a
            className="text-link"
            onClick={() => dispatch(showModal(LOGIN_MODAL))}
          >
            Log in.
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
