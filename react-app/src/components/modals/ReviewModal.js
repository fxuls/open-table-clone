import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../../store/ui";
import { newReviewSelector, createReview } from "../../store/reviews";

export const REVIEW_MODAL = "ui/modals/review";

const ReviewModal = () => {
  const [errors, setErrors] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [ambienceRating, setAmbienceRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch();

const reservationInfo = useSelector(newReviewSelector)
console.log("RESERVATION INFO: ", reservationInfo)

  // GET the restuarant ID for use in the review form
  const restaurantId = reservationInfo?.restaurant.id;

  const onSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    // try to create the review
    let review = {
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
    return dispatch(createReview(review)).then((res) => {
      if (res.ok) {
        dispatch(hideModal());
      }
    });
  };

  return (
    <div className="review-modal">
      <h1 className="form-header">New Review</h1>

      <form onSubmit={onSubmit}>
      <div className="form-row">
          <p>Overall Rating</p>
          <div className="radio-row">
            <input type="radio" name="overall_rating" id="amb1" value={1} checked={overallRating === 1} onChange={() => setOverallRating(1)}/>
            <label htmlFor="amb1">1</label>
            <input type="radio" name="overall_rating" id="amb2" value={2} checked={overallRating === 2} onChange={() =>setOverallRating(2)}/>
            <label htmlFor="amb2">2</label>
            <input type="radio" name="overall_rating" id="amb3" value={3} checked={overallRating === 3} onChange={() =>setOverallRating(3)}/>
            <label htmlFor="amb3">3</label>
            <input type="radio" name="overall_rating" id="amb4" value={4} checked={overallRating === 4} onChange={() =>setOverallRating(4)}/>
            <label htmlFor="amb4">4</label>
            <input type="radio" name="overall_rating" id="amb5" value={5} checked={overallRating === 5} onChange={() =>setOverallRating(5)}/>
            <label htmlFor="amb5">5</label>
          </div>
        </div>


        <div className="form-row">
          <p>Food Rating</p>
          <div className="radio-row">
            <input type="radio" name="food_rating" id="food1" value={1} checked={foodRating === 1} onChange={() => setFoodRating(1)}/>
            <label htmlFor="food1">1</label>
            <input type="radio" name="food_rating" id="food2" value={2} checked={foodRating === 2} onChange={() =>setFoodRating(2)}/>
            <label htmlFor="food2">2</label>
            <input type="radio" name="food_rating" id="food3" value={3} checked={foodRating === 3} onChange={() =>setFoodRating(3)}/>
            <label htmlFor="food3">3</label>
            <input type="radio" name="food_rating" id="food4" value={4} checked={foodRating === 4} onChange={() =>setFoodRating(4)}/>
            <label htmlFor="food4">4</label>
            <input type="radio" name="food_rating" id="food5" value={5} checked={foodRating === 5} onChange={() =>setFoodRating(5)}/>
            <label htmlFor="food5">5</label>
          </div>
        </div>

        <div className="form-row">
          <p>Service Rating</p>
          <div className="radio-row">
            <input type="radio" name="service_rating" id="amb1" value={1} checked={serviceRating === 1} onChange={() => setServiceRating(1)}/>
            <label htmlFor="amb1">1</label>
            <input type="radio" name="service_rating" id="amb2" value={2} checked={serviceRating === 2} onChange={() =>setServiceRating(2)}/>
            <label htmlFor="amb2">2</label>
            <input type="radio" name="service_rating" id="amb3" value={3} checked={serviceRating === 3} onChange={() =>setServiceRating(3)}/>
            <label htmlFor="amb3">3</label>
            <input type="radio" name="service_rating" id="amb4" value={4} checked={serviceRating === 4} onChange={() =>setServiceRating(4)}/>
            <label htmlFor="amb4">4</label>
            <input type="radio" name="service_rating" id="amb5" value={5} checked={serviceRating === 5} onChange={() =>setServiceRating(5)}/>
            <label htmlFor="amb5">5</label>
          </div>
        </div>

        <div className="form-row">
          <p>Ambience Rating</p>
          <div className="radio-row">
            <input type="radio" name="ambience_rating" id="amb1" value={1} checked={ambienceRating === 1} onChange={() => setAmbienceRating(1)}/>
            <label htmlFor="amb1">1</label>
            <input type="radio" name="ambience_rating" id="amb2" value={2} checked={ambienceRating === 2} onChange={() =>setAmbienceRating(2)}/>
            <label htmlFor="amb2">2</label>
            <input type="radio" name="ambience_rating" id="amb3" value={3} checked={ambienceRating === 3} onChange={() =>setAmbienceRating(3)}/>
            <label htmlFor="amb3">3</label>
            <input type="radio" name="ambience_rating" id="amb4" value={4} checked={ambienceRating === 4} onChange={() =>setAmbienceRating(4)}/>
            <label htmlFor="amb4">4</label>
            <input type="radio" name="ambience_rating" id="amb5" value={5} checked={ambienceRating === 5} onChange={() =>setAmbienceRating(5)}/>
            <label htmlFor="amb5">5</label>
          </div>
        </div>

        <div className="form-row">
          <p>Value Rating</p>
          <div className="radio-row">
            <input type="radio" name="value_rating" id="val1" value={1} checked={valueRating === 1} onChange={() => setValueRating(1)}/>
            <label htmlFor="val1">1</label>
            <input type="radio" name="value_rating" id="val2" value={2} checked={valueRating === 2} onChange={() =>setValueRating(2)}/>
            <label htmlFor="val2">2</label>
            <input type="radio" name="value_rating" id="val3" value={3} checked={valueRating === 3} onChange={() =>setValueRating(3)}/>
            <label htmlFor="val3">3</label>
            <input type="radio" name="value_rating" id="val4" value={4} checked={valueRating === 4} onChange={() =>setValueRating(4)}/>
            <label htmlFor="val4">4</label>
            <input type="radio" name="value_rating" id="val5" value={5} checked={valueRating === 5} onChange={() =>setValueRating(5)}/>
            <label htmlFor="val5">5</label>
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

export default ReviewModal;
