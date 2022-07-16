export const SET_RESTAURANT = 'restaurants/SET_RESTAURANT';
export const SET_RESTAURANTS = 'restaurants/SET_RESTAURANTS';
export const REMOVE_RESTAURANT = 'restaurants/REMOVE_RESTAURANT';

// selectors
export const allRestaurantsSelector = (state) => state.restaurants.restaurants;
export const restaurantIdSelector = (restaurantId) => (state) => state.restaurants.restaurants[restaurantId];
export const restaurantUrlSelector = (restaurantUrl) => (state) => state.restaurants.restaurants[state.restaurants.urls[restaurantUrl]];

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
    const res = await fetch("/api/restaurants/");
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

export default function restaurantsReducer(state = { restaurants: {}, urls: {} }, action) {
    const newState = { ...state };

    switch (action.type) {
        case SET_RESTAURANTS:
            action.restaurants.forEach((restaurant) => {
                newState.restaurants[restaurant.id] = restaurant;
                newState.urls[restaurant.url] = restaurant.id;
            });
            break;

        case SET_RESTAURANT:
            newState.restaurants[action.restaurant.id] = action.restaurant;
            newState.urls[action.restaurant.url] = action.restaurant.id;
            break;

        case REMOVE_RESTAURANT:
            delete newState.restaurants[action.restaurantId];
            // remove index from urls
            for (let url in newState.urls)
                if (newState.urls[url] === action.restaurantId)
                    delete newState.urls[url];
            break;

        default:
            break;
    }

    return newState;
}
