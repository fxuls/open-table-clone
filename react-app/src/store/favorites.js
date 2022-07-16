export const ADD_FAVORITE = 'favorites/ADD_FAVORITE';

// selectors
export const favoriteSelector = (userId) => (state) => state.favorites.userId
