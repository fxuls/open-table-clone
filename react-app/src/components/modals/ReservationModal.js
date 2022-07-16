import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector} from "../../store/session";
import { createAReservation } from "../../store/reservations";
import { showModal, hideModal } from "../../store/ui";
import { SIGNUP_MODAL } from "./SignupModal";

export const RESERVATION_MODAL = "ui/modals/reservation";

const ReservationModal = (restaurantId) => {
  const [errors, setErrors] = useState([]);
  const [party_size, setPartySize] = useState(0);
  const [timeslot, setTimeslot] = useState("");
  const [day, setDay] = useState("");
  const [special_request, setSpecialRequest] = useState("");
  const [occasion_id, setOccasionId] = useState("");
  const [partySizeError, setPartySizeError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const getPartySizeError = () => {
    if (party_size < 1) return "Party Size must be greater than 0";
    return "";
  };

  const getTimeError = () => {
    let now = Date.now();
    const dateTimeString = `${day} ${timeslot}`
    let resTime = Date.parse(dateTimeString)
    if (now > resTime) return "Reservation must be a future date";
    return "";
};

  useEffect(() => {
    if (hasSubmitted) {
      setPartySizeError(getPartySizeError());
      setTimeError(getTimeError());
    }
  }, [party_size, day, timeslot]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    // front end validations
    const timeValidationError = getTimeError();
    const partySizeValidationError = getPartySizeError();

    setPartySizeError(partySizeValidationError);
    setTimeError(timeValidationError);

    // if there are errors dont make request
    if (!timeValidationError && !partySizeValidationError) {
      // try to create the reservation
      const data = await dispatch(createAReservation({restaurantId, party_size, timeslot, day, special_request, occasion_id }));
      }
  };

  const fixTimes = (timeString) => {
    const stringArr = timeString?.split(":");
    const intArr = [];
    stringArr?.forEach(element => {
        intArr.push(parseInt(element))
    });
    let amPm = "AM";
    if (intArr[0] > 12) {
        intArr[0] -= 12;
        amPm = "PM";
    }
  return `${intArr[0]}:${stringArr[1]} ${amPm}`
  };

  return (
    <div className="reservation-modal">
      <h1 className="form-header">New Reservation</h1>

      <form onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="party_size">Party Size</label>
          <input
            name="party_size"
            type="number"
            min="1"
            max="100"
            value={party_size}
            onChange={(e) => setPartySize(e.target.value)}
          />
          <label htmlFor="party_size" className="field-error">
            {partySizeError}
          </label>
        </div>

        {/* <div className="form-row">
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
        </div> */}

        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>

    <div className="modal-footer">

      <p>Don't have an account yet? <a className="text-link" onClick={() => dispatch(showModal(SIGNUP_MODAL))}>Sign up.</a></p>
      {/* <p>Just looking around? <a className="text-link" onClick={populateDemoUserFields}>Log in as a demo user.</a></p> */}
      </div>
    </div>
  );
};

export default ReservationModal;
