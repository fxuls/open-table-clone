export const SET_RESTAURANT = 'restaurants/SET_RESTAURANT';
export const SET_RESTAURANTS = 'restaurants/SET_RESTAURANTS';
export const REMOVE_RESTAURANT = 'restaurants/REMOVE_RESTAURANT';

// selectors
export const restaurantSelector = (restaurantId) => (state) => state.restaurants[restaurantId];
export const allRestaurantsSelector = (state) => state.restaurants;

// SET_RESTAURANTS action creator
export function setResaurants(restaurants) {
    return {
        type: SET_RESTAURANTS,
        restaurants,
    };
}

// SET_RESTAURANT action creator
export function setRestaurant(restaurant) {
    return {
        type: SET_RESTAURANT,
        restaurant,
    }
}

// REMOVE_RESTAURANT action creator
export function removeRestaurant(restaurantId) {
    return {
        type: REMOVE_RESTAURANT,
        restaurantId,
    }
}
