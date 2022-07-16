import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, signUp } from "../../store/session";
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
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateFirstName = () => {
    let errorMessage = firstName ? "" : "First name is required";
    setFirstNameError(errorMessage);
    return errorMessage === "";
  };

  const validateLastName = () => {
    let errorMessage = lastName ? "" : "Last name is required";
    setLastNameError(errorMessage);
    return errorMessage === "";
  };

  const validateEmail = () => {
    let errorMessage = "";
    if (!email) errorMessage = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errorMessage = "Please enter a valid email";
    setEmailError(errorMessage);
    return errorMessage === "";
  };

  const validatePassword = () => {
    let errorMessage = password ? "" : "Password is required";
    setPasswordError(errorMessage);
    return errorMessage === "";
  };

  const validateConfirmPassword = () => {
    let errorMessage = "";
    if (!confirmPassword) errorMessage = "Please re-enter your password";
    else if (confirmPassword != password) errorMessage = "Passwords do not match";
    setConfirmPasswordError(errorMessage);
    return errorMessage === "";
  }

  // if user is logged in hide modal
  if (user) {
    dispatch(hideModal());
    return null;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    // front end validations
    const validations = [validateFirstName(), validateLastName(), validateEmail(), validatePassword(), validateConfirmPassword()];

    // if there are no errors make request
    if (!validations.includes(false)) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) setErrors(data);
    }
  };

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
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword" className="field-error">
            {confirmPasswordError}
          </label>
        </div>

        <button type="submit" className="form-submit-button">
          Submit
        </button>
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
