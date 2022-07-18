import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../store/restaurants";
import RestaurantCard from './RestaurantCard';
import "../styles/restaurantCard.css"


function RestaurantCardsList() {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);



  useEffect(() => {
    if (!updated) {
      dispatch(restaurantActions.fetchRestaurants());
      setUpdated(true)
    }

  }, [dispatch, updated]);

  const restaurants = useSelector(restaurantActions.allRestaurantsSelector)
  const restaurantComponents = Object.values(restaurants).map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>);

    return (
      <div className="restCardDiv">
        <h3>Discover restaurants</h3>
        <ul className="restCardUL">{restaurantComponents}</ul>
      </div>
    );
  }

  export default RestaurantCardsList;
