import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { favoritesSelector } from "../../store/favorites";

const ProfileFavorites = ({ loaded }) => {
  const favorites = useSelector(favoritesSelector);
  console.log(favorites);

  return (
    <div className="profile-content">
      <h1 className="profile-content-header card-background">Favorites</h1>
      <div className="favorites card-background">
        {loaded ? (
          <div className="restaurant-cards">Favorites will be here</div>
        ) : (
          <div className="spinner">
            <FontAwesomeIcon className="spinner" icon={faCircleNotch} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileFavorites;
