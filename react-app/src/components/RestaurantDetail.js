import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from "../store/restaurants"
import { fetchRestaurantReviews } from '../store/reviews';
import { RESERVATION_MODAL } from './modals/ReservationModal';
import { showModal } from '../store/ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import "../styles/restaurantDetail.css"


function RestaurantDetail() {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);
  const match = useRouteMatch({
    path: "/restaurants/:url",
    exact: true
  })
const url = match.params.url

  useEffect(() => {
    if (!updated && (url !== undefined)) {
        dispatch(restaurantActions.fetchRestaurant(url));
        dispatch(fetchRestaurantReviews(url));
        setUpdated(true);
    }

  }, [dispatch, updated, url]);

  const restaurant = useSelector(restaurantActions.restaurantUrlSelector(url));

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

  const openReservationModal = (e) => dispatch(showModal(RESERVATION_MODAL));

  return (
      <div className="restDetail">
        <img src={`${restaurant?.preview_image_url}`} alt="Restaurant Header" className="restHeaderImg" crossOrigin=""/>
        <div className="restProfile">
            <h1 className="restName">{restaurant?.name}</h1>
            <div className="restOverview">
                { restaurant?.rating ?
                <p className="restRating">Rating: {restaurant?.rating.toFixed(2)}/5</p>
                : null}
            <p className="restInfo">{restaurant?.cuisine_type} • {"$".repeat(restaurant?.price)} • {restaurant?.location.city}</p>
            </div>
            { restaurant ?
            <button className="nav-button hover-effect sign-up-button reservation-button" onClick={openReservationModal}>
            <span>Make A Reservation</span>
            <FontAwesomeIcon icon={faClipboard} className="icon" />
            </button>  : null}
            {restaurant ?
            <div className="restDetails">
                <h4 className='rest-detail-header'>Additional Info</h4>
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
            <div className="restaurant-gallery">
                <h4>Photo Gallery</h4>
                <ul>
                    {restaurant?.images.map(img => {
                        return (
                            <li key={img}>
                                <img src={img} alt="restaurant gallery" className="rest-image-gallery" crossOrigin=""/>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="restaurant-reviews">
              <h4>Reviews</h4>
            </div>
        </div>
      </div>
    );
  }

  export default RestaurantDetail;
