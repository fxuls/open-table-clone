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

  const timeslotOptions = () => {
    let res = [];
    for (let h = 0; h < 24; h++) {
        for (let min = 0; min < 46; min += 15) {
            let minStr;
            if (min === 0) {
                minStr = "00"
            } else {
                minStr = `${min}`
            }
            let amPm = "AM";
            let adjustedHour = h
            if (h > 12) {
                adjustedHour = h - 12;
                amPm = "PM";
            }
            if (h === 0) {
                adjustedHour = 12;
            }
            res.push({
                text: `${adjustedHour}:${minStr} ${amPm}`,
                value: `${h}:${minStr}:00`
            })
        }
    }
    return res
  };

  const times = timeslotOptions()

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

        <div className="form-row">
          <label htmlFor="timeslot">Time</label>
          <select
            name="timeslot"
            value={timeslot}
            onChange={(e) => setTimeslot(e.target.value)}
          >
            {times.map(time => {
                return <option key={time.text} value={time.value}>{time.text}</option>
            })}
          </select>
          </div>

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
