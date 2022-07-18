import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { favoritesSelector, addFavorite, removeFavorite } from "../store/favorites";
import { showModal } from "../store/ui";
import { userSelector } from "../store/session";
import { LOGIN_MODAL } from "./modals/LoginModal";

const FavoriteButton = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  // get favorites
  const favorites = useSelector(favoritesSelector);
  const getIsFav = () => favorites && favorites.includes(restaurantId);
  const [isFav, setIsFav] = useState(getIsFav());

  useEffect(() => {
    setIsFav(getIsFav());
  }, [favorites]);

  const onFav = (e) => {
    e.stopPropagation();

    // if not logged in show login modal
    if (!user) return dispatch(showModal(LOGIN_MODAL));

    if (isFav) dispatch(removeFavorite(restaurantId));
    else dispatch(addFavorite(restaurantId));

    setIsFav(!isFav);
  };

  return (
    <button className="favorite-button hover-effect" onClick={onFav}>
      <FontAwesomeIcon icon={isFav ? solidHeart : regularHeart} />
      {/* {isFav ? "Unfavorite" : "Favorite"} */}
    </button>
  );
};

export default FavoriteButton;
