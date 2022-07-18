import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as emptyStar,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";

const maximumRating = 5;

const StarRating = ({ rating }) => {
  // key required by react for listed elements
  let key = 0;

  const numStars = parseInt(rating);
  const stars = [];
  for (let i = 0; i < parseInt(rating); i++)
    stars.push(<FontAwesomeIcon key={key++} icon={solidStar} />);

  const numHalfStars = rating - numStars >= 0.5 ? 1 : 0;
  const halfStars = [];
  for (let i = 0; i < numHalfStars; i++)
    stars.push(<FontAwesomeIcon key={++key} icon={faStarHalfStroke} />);

  const numEmptyStars = maximumRating - numHalfStars - numStars;
  const emptyStars = [];
  for (let i = 0; i < numEmptyStars; i++)
    stars.push(<FontAwesomeIcon key={++key} icon={emptyStar} />);

  return (
    <span className="star-rating">
      <span className="full-stars">{stars}</span>
      <span className="half-stars">{halfStars}</span>
      <span className="empty-stars">{emptyStars}</span>
    </span>
  );
};

export default StarRating;
