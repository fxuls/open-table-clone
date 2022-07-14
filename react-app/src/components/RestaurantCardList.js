import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../store/restaurants"
import "../styles/restaurantCard.css"


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
        <img src={`${restaurants[restaurant].preview_image_url}`} alt="Restaurant Thumbnail" className="restThumb" crossOrigin="" />
        <div className="restCardLower">
          <h4 className="restName">{restaurants[restaurant].name}</h4>
          { restaurants[restaurant].rating ?
          <p className="restRating">Rating: {restaurants[restaurant].rating.toFixed(2)}/5</p>
          : null}
          <p className="restInfo">{restaurants[restaurant].cuisine_type} • {"$".repeat(restaurants[restaurant].price)} • {restaurants[restaurant].location.city}</p>
        </div>
        </NavLink>
      </li>)
  };

    return (
      <div className="restCardDiv">
        <h3>Discover restaurants</h3>
        <ul className="restCardUL">{restaurantComponents}</ul>
      </div>
    );
  }

  export default RestaurantCardsList;