import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { modalSelector, hideModal } from "../../store/ui";

const Modal = () => {
  const dispatch = useDispatch();

  const modal = useSelector(modalSelector);

  // close modal when clicked outside it
  const closeModal = (e) => dispatch(hideModal());
  // stop propagation when click inside modal
  const onModalClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={onModalClick}>
        <div className="modal-close" onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} size="xl" className="icon" />
        </div>
        T
      </div>
    </div>
  );
};

export default Modal;
