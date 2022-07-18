import { useSelector } from "react-redux";
import { allRestaurantsSelector } from '../store/restaurants';
import RestaurantCard from './RestaurantCard';
import "../styles/restaurantCard.css";


function RestaurantCardsList() {
  const restaurants = useSelector(allRestaurantsSelector);
  const restaurantComponents = Object.values(restaurants).map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>);

    return (
      <div className="restCardDiv">
        <h1>Discover restaurants</h1>
        <ul className="restCardUL">{restaurantComponents}</ul>
      </div>
    );
  }

export default RestaurantCardsList;
