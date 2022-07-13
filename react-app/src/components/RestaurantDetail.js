import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../store/restaurants"
import "../styles/restaurantDetail.css"


function RestaurantDetail() {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);
  const { url } = useParams();


  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurant(url));
    setUpdated(true)
  }, [dispatch, updated, url]);

  const restaurant = useSelector(restaurantActions.restaurantSelector)

  const fixTimes = (timeString) => {
    const stringArr = timeString?.split(":");
    const intArr = [];
    stringArr?.forEach(element => {
        intArr.push(parseInt(element))
    });
    let amPm = "AM";
    if (intArr[0] > 12) {
        intArr[0] -= 12;
        amPm = "PM";
    }
  return `${intArr[0]}:${stringArr[1]} ${amPm}`
  };

  return (
      <div className="restDetail">
        <img src={`${restaurant?.preview_image_url}`} alt="Restaurant Header" className="restHeaderImg"/>
        <div className="restProfile">
            <h1 className="restName">{restaurant?.name}</h1>
            <div className="restOverview">
                { restaurant?.rating ?
                <p className="restRating">Rating: {restaurant?.rating.toFixed(2)}/5</p>
                : null}
            <p className="restInfo">{restaurant?.cuisine_type} • {"$".repeat(restaurant?.price)} • {restaurant?.location.city}</p>
            </div>
            {restaurant ?
            <div className="restDetails">
                <h4>Additional Info</h4>
                <h6 className="rest-detail-title">Opening Time</h6>
                <p className="rest-detail-info">{fixTimes(restaurant.opening_time)}</p>
                <h6 className="rest-detail-title">Closing Time</h6>
                <p className="rest-detail-info">{fixTimes(restaurant.closing_time)}</p>
                <h6 className="rest-detail-title">Location</h6>
                <p className="rest-detail-info">{restaurant.address_line_1}</p>
                <p className="rest-detail-info">{restaurant.address_line_2}</p>
                <p className="rest-detail-info">{`${restaurant.location?.city}, ${restaurant.location?.state}`}</p>
            </div>
            : null }
            <div className="restGallery"></div>
        </div>
      </div>
    );
  }

  export default RestaurantDetail;