export const SET_REVIEW = 'reviews/SET_REVIEW';
export const SET_USER_REVIEWS = 'reviews/SET_USER_REVIEWS';
export const SET_RESTAURANT_REVIEWS = 'reviews/SET_RESTAURANT_REVIEWS';
export const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
export const DELETE_REVIEW = 'reviews/DELETE_REVIEW';


// selectors
export const restaurantReviewsSelector = (state) => state.reviews.restaurant
export const userReviewsSelector = (state) => state.reviews.user;
export const reviewSelector = (state) => state.reviews.detail

// SET_REVIEW action creator
export function setReviewAction(review) {
    return {
        type: SET_REVIEW,
        review,
    };
}

// SET_USER_REVIEWS action creator
export function setUserReviewsAction(reviews) {
    return {
        type: SET_USER_REVIEWS,
        reviews,
    }
}

// SET_RESTAURANT_REVIEWS action creator
export function setRestaurantReviewsAction(reviews) {
    return {
        type: SET_RESTAURANT_REVIEWS,
        reviews,
    }
}

// EDIT_REVIEW action creator
export function editReviewAction(review) {
    return {
        type: EDIT_REVIEW,
        review,
    }
}

// DELETE_REVIEW action creator
export function deleteReviewAction(restaurantId) {
    return {
        type: REMOVE_RESTAURANT,
        restaurantId,
    }
}

// fetch all user reviews thunk
export const fetchUserReviews = () => async (dispatch) => {
    const res = await fetch("/api/reviews/user");
    const data = await res.json();

    dispatch(setUserReviewsAction(data.reviews));
    return res;
}

// fetch all restaurant reviews thunk
export const fetchRestaurantReviews = (restaurantUrl) => async (dispatch) => {
    const res = await fetch(`restaurants/${restaurantUrl}/reviews`);
    const data = await res.json();

    dispatch(setRestaurantReviewsAction(data.reviews));
    return res;
}

// fetch a review by its id thunk
export const fetchRestaurant = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(setReviewAction(data));
    }
}

// edit a review

export default function restaurantsReducer(state = {}, action) {
    const newState = { ...state };

    switch (action.type) {
        case SET_RESTAURANTS:
            return action.restaurants.reduce((obj, restaurant) => {
                obj[restaurant.id] = restaurant;
                return obj;
            }, {});

        case SET_RESTAURANT:
            console.log(newState)
            newState["detail"] = action.restaurant;
            break;

        case REMOVE_RESTAURANT:
            delete newState[action.restaurantId];
            break;

        default:
            break;
    }

    return newState;
}
