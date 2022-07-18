import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PriceRating from "./PriceRating";
import StarRating from "./StarRating";

const RestaurantCard = ({ restaurant }) => {
  // if restaurantId does not exist in store
  if (!restaurant)
    return <div className="restaurant-card">Restaurant info not loaded</div>;

  return (
    <Link to={`/restaurants/${restaurant.url}`}>
      <div className="restaurant-card">
        <div className="card-thumbnail">
          <img
            src={restaurant.preview_image_url}
            alt={`Thumbnail for ${restaurant.name}`}
            crossOrigin=""
          />
        </div>

        <div className="card-info">
          <p className="name">{restaurant.name}</p>
          <StarRating rating={restaurant.rating} />
          <div>
            <FontAwesomeIcon icon={faUtensils} className="icon"/>
            {restaurant.cuisine_type + " • "}
            <PriceRating priceRating={restaurant.price} />
          </div>

        <div>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
        {restaurant.location.city + ", " + restaurant.location.state}
        </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
