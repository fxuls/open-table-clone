import { useDispatch } from "react-redux";
import { showModal } from "../../store/ui";
import { LOGIN_MODAL } from "./LoginModal";

export const SIGNUP_MODAL = "ui/modals/SIGNUP";

const SignupModal = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {};

  return (
    <div className="signup-modal">
      <h1 className="form-header">Sign up</h1>

      <form onSubmit={onSubmit}></form>

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
