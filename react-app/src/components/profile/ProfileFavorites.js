import { useSelector } from "react-redux";
import { favoritesSelector } from "../../store/favorites";
import { restaurantsByIdsSelector } from "../../store/restaurants";
import Spinner from "../Spinner";
import RestaurantCard from "../RestaurantCard";

const ProfileFavorites = ({ loaded }) => {

  // pull data from store
  const favorites = useSelector(favoritesSelector);
  const restaurants = useSelector(restaurantsByIdsSelector(favorites));

  return (
    <div className="profile-content">
      <h1 className="profile-content-header card-background">Favorites</h1>
      <div className="favorites card-background">
        {loaded ? (
          <div className="restaurant-cards-container">{
            restaurants.length ?
            restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>) :
            <div>Whoops! You haven't saved any restaurants yet.</div>
          }</div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ProfileFavorites;
