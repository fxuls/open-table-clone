import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as emptyStar,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";

const maximumRating = 5;

const StarRating = ({ rating }) => {
  const numStars = parseInt(rating);
  const stars = new Array(numStars).fill(<FontAwesomeIcon icon={solidStar} />);

  const numHalfStars = rating - numStars >= 0.5 ? 1 : 0;
  const halfStars = new Array(numHalfStars).fill(
    <FontAwesomeIcon icon={faStarHalfStroke} />
  );

  const numEmptyStars = maximumRating - numHalfStars - numStars;
  const emptyStars = new Array(numEmptyStars).fill(
    <FontAwesomeIcon icon={emptyStar} />
  );

  return (
    <span className="star-rating">
      <span className="full-stars">{stars}</span>
      <span className="half-stars">{halfStars}</span>
      <span className="empty-stars">{emptyStars}</span>
    </span>
  );
};

export default StarRating;
