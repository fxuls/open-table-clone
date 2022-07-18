import { useSelector } from "react-redux";
import { userReviewsSelector, userReviewIdSelector } from "../../store/reviews";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const ProfileReviews = ({ loaded }) => {
  // pull data from store
  const reviews = useSelector(userReviewsSelector);

  return (
    <div className="profile-content">
      <div className="profile-content-header card-background">Reviews</div>

      <div className="reviews card-background">
        {loaded ? (
          reviews ? (
            <div className="reviews-list">
              {Object.values(reviews).map((review) => {
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
                    
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Nothing to show!</p>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ProfileReviews;
