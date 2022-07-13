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
  for (const restaurant in  restaurants) {
    restaurantComponents.push(<li key={restaurants[restaurant].id}>
    <NavLink to={`/restaurants/${restaurants[restaurant].url}`}>{restaurants[restaurant].name}</NavLink>
  </li>)
  };

    return (
      <>
        <ul>{restaurantComponents}</ul>
      </>
    );
  }

  export default RestaurantCardsList;