import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../store/restaurants"


function RestaurantCardsList() {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);



  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurants());
    setUpdated(true)
  }, [dispatch, updated]);

  const restaurants = useSelector(restaurantActions.allRestaurantsSelector)
  let restaurantComponents = [];
  for (const restaurant in restaurants) {
    restaurantComponents.push(
      <li key={restaurants[restaurant].id} className="restCard">
      <NavLink to={`/restaurants/${restaurants[restaurant].url}`}>
        <img src={`${restaurants[restaurant].preview_image_url}`} alt="Restaurant Thumbnail" className="restThumb" />
        {restaurants[restaurant].name}
        { restaurants[restaurant].rating ?
        <p>Rating: {restaurants[restaurant].rating.toFixed(2)}/5</p>
        : null}
        <p>{restaurants[restaurant].cuisine_type} • {"$".repeat(restaurants[restaurant].price)} • {restaurants[restaurant].location.city}</p>
        </NavLink>
      </li>)
  };

    return (
      <>
        <ul>{restaurantComponents}</ul>
      </>
    );
  }

  export default RestaurantCardsList;