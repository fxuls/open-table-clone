import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMyReservation } from "../../store/reservations";
import { checkReviewLink } from "../../store/reviews";
import { showModal } from "../../store/ui";
import { REVIEW_MODAL } from "../modals/ReviewModal";

const ReservationCard = ({ reservation, upcoming }) => {
  const dispatch = useDispatch();
  const { restaurant, day, timeslot, id } = reservation;
  const formattedDate = day.replaceAll("-", "/");

  const fixTime = (timeString) => {
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

  const time = fixTime(timeslot);

  const handleCancelClick = (e) => {
    e.stopPropagation();

    dispatch(deleteMyReservation(id));
    window.alert(
      `Your reservation to ${restaurant.name} has been successfully deleted`
    );
  };

  const handleReviewClick = e => {
    e.stopPropagation();
    dispatch(checkReviewLink(reservation.review_link.url));
    dispatch(showModal(REVIEW_MODAL))
  }

  return (
    <div className="reservation-card">
      <div className="card-thumbnail">
        <Link to={`/restaurants/${restaurant.url}`}>
          <img
            src={restaurant.preview_image_url}
            alt={`Preview image for ${restaurant.name}`}
          />
        </Link>
      </div>

      <div className="card-info">
        <Link
          to={`/restaurants/${restaurant.url}`}
          className="main-color-hover"
        >
          {restaurant.name}
        </Link>

        <div className="reservation-details">
          Party of {reservation.party_size}, at {time} on {formattedDate}
        </div>
      </div>
      
      <div className="reservation-card-buttons">
        {upcoming ? (
          <button
            className="nav-button hover-effect sign-up-button reservation-button"
            onClick={handleCancelClick}
          >
            <span>Cancel Reservation</span>
          </button>
        ) : (
          <button
            className="nav-button hover-effect sign-up-button reservation-button"
            onClick={handleReviewClick}
          >
            <span>Leave a Review</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ReservationCard;
