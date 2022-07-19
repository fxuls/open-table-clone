import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";
import { showModal } from "../../store/ui";
import { REVIEW_MODAL } from "../modals/ReviewModal";

import "../../styles/reviewCard.css"

const ReviewCard = ({review}) => {
    const dispatch = useDispatch();

    const handleDelete = e => {
        e.stopPropagation();
        dispatch(deleteReview(review.id));
        window.alert("Your review has been successfully deleted")
    }

    const handleEdit = e => {
      e.stopPropagation();
      dispatch(showModal(REVIEW_MODAL))
    }

    return (
        <div key={review.id} className="review-card">
          <Link
            to={`/restaurants/${review.restaurant.url}`}
            className="main-color-hover"
          >
            {review.restaurant.name}
          </Link>
          <div className="review-ratings">
            <span className="rating-span">
              <b>Overall </b>
              <span className="rating-score">
                {review.overall_rating}
              </span>
            </span>{" "}
            •
            <span className="rating-span">
              <b>Food </b>
              <span className="rating-score">
                {review.food_rating}
              </span>
            </span>{" "}
            •
            <span className="rating-span">
              <b>Service </b>
              <span className="rating-score">
                {review.service_rating}
              </span>
            </span>{" "}
            •
            <span className="rating-span">
              <b>Ambience </b>
              <span className="rating-score">
                {review.ambience_rating}
              </span>
            </span>{" "}
            •
            <span className="rating-span">
              <b>Value </b>
              <span className="rating-score">
                {review.value_rating}
              </span>
            </span>
          </div>
          <p className="review-text">{review.review_text}</p>
          <div className="review-action-buttons">
          <button
            className="nav-button hover-effect sign-up-button review-button"
            onClick={handleEdit}
          >
            <span>Edit Review</span>
          </button>
          <button
            className="nav-button hover-effect sign-up-button review-button"
            onClick={handleDelete}
          >
            <span>Delete Review</span>
          </button>
          </div>
        </div>
      );
};

export default ReviewCard