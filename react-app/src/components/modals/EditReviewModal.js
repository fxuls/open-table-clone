import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../../store/ui";
import { editReviewSelector, editReview } from "../../store/reviews";
import "../../styles/reviewForm.css";

export const EDIT_MODAL = "ui/modals/edit";

const EditModal = () => {
  const reviewInfo = useSelector(editReviewSelector);
  const [errors, setErrors] = useState([]);
  const [overallRating, setOverallRating] = useState(reviewInfo.overall_rating);
  const [foodRating, setFoodRating] = useState(reviewInfo.food_rating);
  const [serviceRating, setServiceRating] = useState(reviewInfo.service_rating);
  const [ambienceRating, setAmbienceRating] = useState(reviewInfo.ambience_rating);
  const [valueRating, setValueRating] = useState(reviewInfo.value_rating);
  const [reviewText, setReviewText] = useState(reviewInfo.review_text);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch();


  // GET the restaurant ID for use in the review form
  const restaurantId = reviewInfo?.restaurant.id;
  const reviewId = reviewInfo?.id

  const onSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    // try to edit the review
    let review = {
      reviewId: reviewId,
      restaurant_id: restaurantId,
      overall_rating: overallRating,
      food_rating: foodRating,
      service_rating: serviceRating,
      ambience_rating: ambienceRating,
      value_rating: valueRating,
    };
    if (reviewText) {
      review.review_text = reviewText;
    }
    setErrors([]);
    return dispatch(editReview(review)).then((res) => {
      if (res.ok) {
        dispatch(hideModal());
        window.alert("Your review has been updated!")
      }
    });
  };


  return (
    <div className="review-modal">
      <h1 className="form-header">Edit Review</h1>
      <h3 className="form-header">{reviewInfo?.restaurant.name}</h3>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <p>Overall Rating</p>
          <div className="radio-row">
            <div>
              <input
                type="radio"
                name="overall_rating"
                id="amb1"
                value={1}
                checked={overallRating === 1}
                onChange={() => setOverallRating(1)}
              />
              <label htmlFor="amb1">1</label>
            </div>
            <div>
              <input
                type="radio"
                name="overall_rating"
                id="amb2"
                value={2}
                checked={overallRating === 2}
                onChange={() => setOverallRating(2)}
              />
              <label htmlFor="amb2">2</label>
            </div>
            <div>
              <input
                type="radio"
                name="overall_rating"
                id="amb3"
                value={3}
                checked={overallRating === 3}
                onChange={() => setOverallRating(3)}
              />
              <label htmlFor="amb3">3</label>
            </div>
            <div>
              <input
                type="radio"
                name="overall_rating"
                id="amb4"
                value={4}
                checked={overallRating === 4}
                onChange={() => setOverallRating(4)}
              />
              <label htmlFor="amb4">4</label>
            </div>
            <div>
              <input
                type="radio"
                name="overall_rating"
                id="amb5"
                value={5}
                checked={overallRating === 5}
                onChange={() => setOverallRating(5)}
              />
              <label htmlFor="amb5">5</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <p>Food Rating</p>
          <div className="radio-row">
            <div>
              <input
                type="radio"
                name="food_rating"
                id="food1"
                value={1}
                checked={foodRating === 1}
                onChange={() => setFoodRating(1)}
              />
              <label htmlFor="food1">1</label>
            </div>
            <div>
              <input
                type="radio"
                name="food_rating"
                id="food2"
                value={2}
                checked={foodRating === 2}
                onChange={() => setFoodRating(2)}
              />
              <label htmlFor="food2">2</label>
            </div>
            <div>
              <input
                type="radio"
                name="food_rating"
                id="food3"
                value={3}
                checked={foodRating === 3}
                onChange={() => setFoodRating(3)}
              />
              <label htmlFor="food3">3</label>
            </div>
            <div>
              <input
                type="radio"
                name="food_rating"
                id="food4"
                value={4}
                checked={foodRating === 4}
                onChange={() => setFoodRating(4)}
              />
              <label htmlFor="food4">4</label>
            </div>
            <div>
              <input
                type="radio"
                name="food_rating"
                id="food5"
                value={5}
                checked={foodRating === 5}
                onChange={() => setFoodRating(5)}
              />
              <label htmlFor="food5">5</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <p>Service Rating</p>
          <div className="radio-row">
            <div>
              <input
                type="radio"
                name="service_rating"
                id="amb1"
                value={1}
                checked={serviceRating === 1}
                onChange={() => setServiceRating(1)}
              />
              <label htmlFor="amb1">1</label>
            </div>
            <div>
              <input
                type="radio"
                name="service_rating"
                id="amb2"
                value={2}
                checked={serviceRating === 2}
                onChange={() => setServiceRating(2)}
              />
              <label htmlFor="amb2">2</label>
            </div>
            <div>
              <input
                type="radio"
                name="service_rating"
                id="amb3"
                value={3}
                checked={serviceRating === 3}
                onChange={() => setServiceRating(3)}
              />
              <label htmlFor="amb3">3</label>
            </div>
            <div>
              <input
                type="radio"
                name="service_rating"
                id="amb4"
                value={4}
                checked={serviceRating === 4}
                onChange={() => setServiceRating(4)}
              />
              <label htmlFor="amb4">4</label>
            </div>
            <div>
              <input
                type="radio"
                name="service_rating"
                id="amb5"
                value={5}
                checked={serviceRating === 5}
                onChange={() => setServiceRating(5)}
              />
              <label htmlFor="amb5">5</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <p>Ambience Rating</p>
          <div className="radio-row">
            <div>
              <input
                type="radio"
                name="ambience_rating"
                id="amb1"
                value={1}
                checked={ambienceRating === 1}
                onChange={() => setAmbienceRating(1)}
              />
              <label htmlFor="amb1">1</label>
            </div>
            <div>
              <input
                type="radio"
                name="ambience_rating"
                id="amb2"
                value={2}
                checked={ambienceRating === 2}
                onChange={() => setAmbienceRating(2)}
              />
              <label htmlFor="amb2">2</label>
            </div>
            <div>
              <input
                type="radio"
                name="ambience_rating"
                id="amb3"
                value={3}
                checked={ambienceRating === 3}
                onChange={() => setAmbienceRating(3)}
              />
              <label htmlFor="amb3">3</label>
            </div>
            <div>
              <input
                type="radio"
                name="ambience_rating"
                id="amb4"
                value={4}
                checked={ambienceRating === 4}
                onChange={() => setAmbienceRating(4)}
              />
              <label htmlFor="amb4">4</label>
            </div>
            <div>
              <input
                type="radio"
                name="ambience_rating"
                id="amb5"
                value={5}
                checked={ambienceRating === 5}
                onChange={() => setAmbienceRating(5)}
              />
              <label htmlFor="amb5">5</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <p>Value Rating</p>
          <div className="radio-row">
            <div>
              <input
                type="radio"
                name="value_rating"
                id="val1"
                value={1}
                checked={valueRating === 1}
                onChange={() => setValueRating(1)}
              />
              <label htmlFor="val1">1</label>
            </div>
            <div>
              <input
                type="radio"
                name="value_rating"
                id="val2"
                value={2}
                checked={valueRating === 2}
                onChange={() => setValueRating(2)}
              />
              <label htmlFor="val2">2</label>
            </div>
            <div>
              <input
                type="radio"
                name="value_rating"
                id="val3"
                value={3}
                checked={valueRating === 3}
                onChange={() => setValueRating(3)}
              />
              <label htmlFor="val3">3</label>
            </div>
            <div>
              <input
                type="radio"
                name="value_rating"
                id="val4"
                value={4}
                checked={valueRating === 4}
                onChange={() => setValueRating(4)}
              />
              <label htmlFor="val4">4</label>
            </div>
            <div>
              <input
                type="radio"
                name="value_rating"
                id="val5"
                value={5}
                checked={valueRating === 5}
                onChange={() => setValueRating(5)}
              />
              <label htmlFor="val5">5</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="review_text">Write a review</label>
          <textarea
            name="review_text"
            rows={4}
            maxLength="600"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>

      <div className="modal-footer"></div>
    </div>
  );
};

export default EditModal;
