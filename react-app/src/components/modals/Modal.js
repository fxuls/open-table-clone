import { useDispatch, useSelector } from "react-redux";
import { modalSelector, hideModal } from "../../store/ui";

const Modal = () => {
    const dispatch = useDispatch();

    const modal = useSelector(modalSelector);

    // close modal when clicked outside it
    const onOutsideModalClick = (e) => dispatch(hideModal());
    // stop propagation when click inside modal
    const onModalClick = (e) => e.stopPropagation();

    return (<div className="modal-overlay" onClick={onOutsideModalClick}>
        <div className="modal" onClick={onModalClick}>
            This is the modal contents
        </div>
    </div>);
}

export default Modal;
