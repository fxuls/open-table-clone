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

// fetch all restaurants thunk
export const fetchRestaurants = () => async (dispatch) => {
    const res = await fetch("/api/restaurants");
    const data = await res.json();

    dispatch(setResaurants(data.restaurants));
    return res;
}

// fetch a restaurant by its url thunk
export const fetchRestaurant = (url) => async (dispatch) => {
    const res = await fetch(`/api/restaurants/${url}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(setRestaurant(data));
    }
}

export default function restaurantsReducer(state = {}, action) {
    const newState = { ...state };

    switch (action.type) {
        case SET_RESTAURANTS:
            return action.restaurants.reduce((obj, restaurant) => {
                obj[restaurant.id] = restaurant;
                return obj;
            }, {});

        case SET_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            break;

        case REMOVE_RESTAURANT:
            delete newState[action.restaurantId];
            break;

        default:
            break;
    }

    return newState;
}
