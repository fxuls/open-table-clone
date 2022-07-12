export const SET_RESTAURANT = 'restaurants/SET_RESTAURANT';
export const SET_RESTAURANTS = 'restaurants/SET_RESTAURANTS';
export const REMOVE_RESTAURANT = 'restaurants/REMOVE_RESTAURANT';

export const restaurantSelector = (restaurantId) => (state) => state.restaurants[restaurantId];
export const allRestaurantsSelector = (state) => state.restaurants;
