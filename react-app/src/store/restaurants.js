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

export default function restaurantsReducer(state = {}, action) {
    const newState = { ...state };

    switch (action.type) {
        case SET_RESTAURANTS:
            newState = action.restaurants.reduce((obj, restaurant) => {
                obj[restaurant.id] = restaurant;
                return obj;
            }, {});

        case SET_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            break;

        case REMOVE_RESTAURANT:
            delete newState[action.restaurantId];
            break;
    }

    return newState;
}
