import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/session";
import { showModal, hideModal } from "../../store/ui";
import { SIGNUP_MODAL } from "./SignupModal";
import * as reservationActions from "../../store/reservations";
import { useRouteMatch } from "react-router-dom";
import { restaurantUrlSelector } from "../../store/restaurants";

export const RESERVATION_MODAL = "ui/modals/reservation";

const ReservationModal = () => {
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

  // GET the restuarant ID for use in the reservation form

  const url = window.location.href;
  const urlArr = url.split("/");
  const restUrl = urlArr[urlArr.length - 1];
  const restaurant = useSelector(restaurantUrlSelector(restUrl));
  const restaurantId = restaurant.id;

  const getPartySizeError = () => {
    if (party_size < 1) return "Party Size must be greater than 0";
    return "";
  };

  const getTimeError = () => {
    let now = Date.now();
    const dateTimeString = `${day} ${timeslot}`;
    let resTime = Date.parse(dateTimeString);
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
      occasion_id
        ? dispatch(
            reservationActions.createAReservation({
              restaurant_id: parseInt(restaurantId),
              party_size: parseInt(party_size),
              timeslot,
              day,
              special_request,
              occasion_id: parseInt(occasion_id),
            })
          )
        : dispatch(
            reservationActions.createAReservation({
              restaurant_id: parseInt(restaurantId),
              party_size: parseInt(party_size),
              timeslot,
              day,
              special_request,
            })
          );

      console.log({
        restaurantId,
        party_size,
        timeslot,
        day,
        special_request,
        occasion_id,
      });
      // return data
    }
  };

  const timeslotOptions = () => {
    let res = [];
    const openingTime = restaurant.opening_time;
    const closingTime = restaurant.closing_time;
    for (let h = 0; h < 24; h++) {
      for (let min = 0; min < 46; min += 15) {
        let minStr;
        if (min === 0) {
          minStr = "00";
        } else {
          minStr = `${min}`;
        }
        let amPm = "AM";
        let adjustedHour = h;
        if (h >= 12) {
          if (h > 12) {
            adjustedHour = h - 12;
          }
          amPm = "PM";
        }
        if (h === 0) {
          adjustedHour = 12;
        }
        if (h < 10) {
          h = `0${h}`
        }
        const timeString = `${h}:${minStr}:00`;
        // only push times that the restaurant is open
        if (timeString >= openingTime && timeString < closingTime) {
          res.push({
            text: `${adjustedHour}:${minStr} ${amPm}`,
            value: timeString,
          });
        }
      }
    }
    return res;
  };

  const times = timeslotOptions();
  const occasions = [
    { text: "Birthday", value: 1 },
    { text: "Anniversary", value: 2 },
    { text: "Date Night", value: 3 },
    { text: "Business Meal", value: 4 },
    { text: "Celebration", value: 5 },
  ];

  return (
    <div className="reservation-modal">
      <h1 className="form-header">New Reservation</h1>

      <form onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="party_size">Party Size</label>
          <input
            name="party_size"
            type="number"
            required
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
          <label htmlFor="day">Day</label>
          <input
            name="day"
            type="date"
            min="2022-01-01"
            required
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="timeslot">Time</label>
          <select
            name="timeslot"
            required
            value={timeslot}
            onChange={(e) => setTimeslot(e.target.value)}
          >
            {times.map((time) => {
              return (
                <option key={time.text} value={time.value}>
                  {time.text}
                </option>
              );
            })}
          </select>
          <label htmlFor="timeslot" className="field-error">
            {timeError}
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="special_request">Special Requests?</label>
          <input
            name="special_request"
            type="text"
            maxLength="600"
            value={special_request}
            onChange={(e) => setSpecialRequest(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="occasion_id">Occasion</label>
          <select
            name="occasion_id"
            value={occasion_id}
            onChange={(e) => setOccasionId(e.target.value)}
          >
            <option value={null}> -- select an option -- </option>
            {occasions.map((occ) => {
              return (
                <option key={occ.text} value={occ.value}>
                  {occ.text}
                </option>
              );
            })}
          </select>
          <label htmlFor="timeslot" className="field-error">
            {timeError}
          </label>
        </div>

        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>

      <div className="modal-footer">
        <p>
          Don't have an account yet?{" "}
          <a
            className="text-link"
            onClick={() => dispatch(showModal(SIGNUP_MODAL))}
          >
            Sign up.
          </a>
        </p>
        {/* <p>Just looking around? <a className="text-link" onClick={populateDemoUserFields}>Log in as a demo user.</a></p> */}
      </div>
    </div>
  );
};

export default ReservationModal;
