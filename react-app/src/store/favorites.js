export const SET_FAVORITES = "favorites/SET_FAVORITES";
export const ADD_FAVORITE = "favorites/ADD_FAVORITE";
export const REMOVE_FAVORITE = "favorites/REMOVE_FAVORITE";

// selectors
export const favoritesSelector = (state) => {
  // if not authenticated
  if (!state.session.user) return null;

  return state.favorites[state.session.user.id];
};

// SET_FAVORITES action creator
export function setFavoritesAction(userId, restaurantIds) {
  return {
    type: SET_FAVORITES,
    userId,
    restaurantIds,
  };
}

// ADD_FAVORITE action creator
export function addFavoriteAction(userId, restaurantId) {
  return {
    type: ADD_FAVORITE,
    userId,
    restaurantId,
  };
}

// REMOVE_FAVORITE action creator
export function removeFavoriteAction(userId, restaurantId) {
  return {
    type: REMOVE_FAVORITE,
    userId,
    restaurantId,
  };
}

// add favorite thunk
export const addFavorite = (restaurantId) => async (dispatch, getState) => {
  const state = getState();

  // not logged in
  if (!state.session.user) return;

  // already favorited
  if (state.favorites[state.session.user.id]?.includes(restaurantId)) return;

  const res = await fetch("/api/my/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      restaurant_id: restaurantId,
    }),
  });

  if (res.ok) {
    dispatch(addFavoriteAction(getState().session.user.id, restaurantId));
  }
};

// remove favorite thunk
export const removeFavorite = (restaurantId) => async (dispatch, getState) => {
  const state = getState();

  // not logged in
  if (!state.session.user) return;

  // if restaurantId does not exist in favorites do not try to delete from server
  if (!state.favorites[state.session.user.id].includes(restaurantId)) return;

  const res = await fetch(`/api/my/favorites/${restaurantId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeFavoriteAction(getState().session.user.id, restaurantId));
  }
};

export const fetchFavorites = () => async (dispatch, getState) => {
  const user = getState().session.user;

  // if user is not logged in return
  if (!user) return;

  const res = await fetch("/api/my/favorites");

  if (res.ok) {
    const data = await res.json();
    dispatch(setFavoritesAction(data.user_id, data.restaurant_ids));
  }
};

export default function favoritesReducer(state = {}, action) {
  const newState = { ...state };
  const { restaurantId, restaurantIds, userId } = action;

  switch (action.type) {
    case SET_FAVORITES:
      newState[userId] = restaurantIds;
      break;

    case ADD_FAVORITE:
      if (newState[userId] && !newState[userId].includes(restaurantId))
        newState[userId] = [ ...newState[userId], restaurantId];
      break;

    case REMOVE_FAVORITE:
      if (newState[userId] && newState[action.userId].includes(restaurantId))
        newState[action.userId].splice(
          newState[action.userId].indexOf(restaurantId),
          1
        );
      break;

    default:
      break;
  }

  return newState;
}
