import { Link } from "react-router-dom";

const ReservationCard = ({ reservation }) => {
  const { restaurant } = reservation;

  return (
    <div className="reservation-card">
      <div className="card-thumbnail">
        <img
          src={restaurant.preview_image_url}
          alt={`Preview image for ${restaurant.name}`}
        />
      </div>
      
      <Link to={`/restaurants/${restaurant.url}`} className="main-color-hover">
        {restaurant.name}
      </Link>
    </div>
  );
};

export default ReservationCard;
