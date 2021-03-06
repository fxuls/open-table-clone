import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { modalSelector, hideModal } from "../../store/ui";
import LoginModal, { LOGIN_MODAL } from "./LoginModal";
import SignupModal, { SIGNUP_MODAL } from "./SignupModal";
import ReservationModal, { RESERVATION_MODAL } from "./ReservationModal";
import ReviewModal, { REVIEW_MODAL } from "./ReviewModal";
import EditModal, { EDIT_MODAL } from "./EditReviewModal";

const Modal = () => {
  const dispatch = useDispatch();

  // close modal when clicked outside it
  const closeModal = (e) => dispatch(hideModal());
  // stop propagation when click inside modal
  const onModalClick = (e) => e.stopPropagation();

  const modalId = useSelector(modalSelector);

  let modalToRender;
  switch (modalId) {
    case LOGIN_MODAL:
      modalToRender = <LoginModal />;
      break;
    case SIGNUP_MODAL:
      modalToRender = <SignupModal />;
      break;
    case RESERVATION_MODAL:
      modalToRender = <ReservationModal />;
      break;
    case REVIEW_MODAL:
      modalToRender = <ReviewModal />;
      break;
    case EDIT_MODAL:
      modalToRender = <EditModal />;
      break;
    default:
      closeModal();
      return null;
  }

  return (
    <div className="modal-overlay" onMouseDown={closeModal}>
      <div className="modal" onMouseDown={onModalClick}>
        <div className="modal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} size="xl" className="icon" />
        </div>

        {modalToRender}
      </div>
    </div>
  );
};

export default Modal;
