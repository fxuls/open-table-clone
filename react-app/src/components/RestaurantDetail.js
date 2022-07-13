import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../store/restaurants"
import "../styles/restaurantCard.css"


function RestaurantDetail() {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);
  const { url } = useParams();


  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurant(url));
    setUpdated(true)
  }, [dispatch, updated, url]);

  const restaurant = useSelector(restaurantActions.restaurantSelector)

    return (
      <div className="restDetail">
        <img src={`${restaurant?.preview_image_url}`} alt="Restaurant Header" className="restHeaderImg"/>
        <h1>{restaurant?.name}</h1>
      </div>
    );
  }

  export default RestaurantDetail;