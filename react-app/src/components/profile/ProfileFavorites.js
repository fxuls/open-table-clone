import { useSelector } from "react-redux";
import { favoritesSelector } from "../../store/favorites";
import Spinner from "../Spinner";

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
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ProfileFavorites;
