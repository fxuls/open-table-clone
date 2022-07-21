import { useSelector } from "react-redux";
import { userReviewsSelector } from "../../store/reviews";
import Spinner from "../Spinner";
import ReviewCard from "./ReviewCard";

const ProfileReviews = ({ loaded }) => {
  // pull data from store
  const reviews = useSelector(userReviewsSelector);

  return (
    <div className="profile-content">
      <div className="profile-content-header card-background">Reviews</div>

      <div className="reviews card-background">
        {loaded ? (
          Object.values(reviews).length ? (
            <div className="reviews-list">
              {Object.values(reviews).map((review) => {
                return <ReviewCard key={review.id} review={review} />;
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
