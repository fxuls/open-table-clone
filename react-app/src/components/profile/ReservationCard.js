import { Link } from "react-router-dom";

const ReservationCard = ({ reservation }) => {
    const { restaurant } = reservation;

    return (<div className="reservation-card">
        <Link to={`/restaurants/${restaurant.url}`} className="main-color-hover">
            {restaurant.name}
        </Link>
    </div>);
}

export default ReservationCard;
