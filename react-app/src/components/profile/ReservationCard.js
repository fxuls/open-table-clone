import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMyReservation } from "../../store/reservations";

const ReservationCard = ({ reservation, upcoming }) => {
  const dispatch = useDispatch();
  const { restaurant } = reservation;
  const date = reservation.day;
  const formattedDate = date.replaceAll("-", "/");

  const fixTimes = (timeString) => {
    const stringArr = timeString?.split(":");
    const intArr = [];
    stringArr?.forEach((element) => {
      intArr.push(parseInt(element));
    });
    let amPm = "AM";
    if (intArr[0] >= 12) {
      if (intArr[0] > 12) {
        intArr[0] -= 12;
      }
      amPm = "PM";
    }
    if (intArr[0] === 0) {
      intArr[0] = 12;
    }
    return `${intArr[0]}:${stringArr[1]} ${amPm}`;
  };

  const time = fixTimes(reservation.timeslot);

  const handleCancelClick = (e) => {
    e.stopPropagation();
    dispatch(deleteMyReservation(reservation.id))
    window.alert(`Your reservation to ${restaurant.name} has been successfully deleted`)
  }

  return (
    <div className="reservation-card">
      <div className="reservation-card-left">
        <Link to={`/restaurants/${restaurant.url}`}>{restaurant.name}</Link>
        <div className="reservation-details">
          Party of {reservation.party_size}, at {time} on {formattedDate}
        </div>
      </div>
      <div className="reservation-card-right">
        {upcoming ?
        <button className="nav-button hover-effect sign-up-button reservation-button" onClick={handleCancelClick}>
        <span>Cancel Reservation</span>
        </button>
        : <button className="nav-button hover-effect sign-up-button reservation-button" >
        <span>Leave a Review</span>
        </button>
        }
      </div>
    </div>
  );
};

export default ReservationCard;
