export const SET_USER_REVIEWS = 'reviews/SET_USER_REVIEWS';
export const SET_RESTAURANT_REVIEWS = 'reviews/SET_RESTAURANT_REVIEWS';
export const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
export const DELETE_REVIEW = 'reviews/DELETE_REVIEW';
export const NEW_REVIEW = 'reviews/NEW_REVIEW'


// selectors
export const restaurantReviewsSelector = (state) => state.reviews.restaurant
export const userReviewsSelector = (state) => state.reviews.user;
export const userReviewIdSelector = (id) => (state) => state.reviews.user[id]
export const newReviewSelector = (state) => state.reviews.new


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
export function deleteReviewAction(reviewId) {
    return {
        type: DELETE_REVIEW,
        reviewId,
    }
}

// NEW_REVIEW action creator
export function newReviewAction(reviewData) {
    return {
        type: NEW_REVIEW,
        reviewData
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
export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(setReviewAction(data));
    }
}

// create a review
export const createReview = (review) => async (dispatch) => {
    const {restaurant_id, overall_rating, food_rating, service_rating, ambience_rating, value_rating, review_text } = review
    const res = await fetch(`/api/reviews/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      restaurant_id,
      overall_rating,
      food_rating,
      service_rating,
      ambience_rating,
      value_rating,
      review_text,
    })
})
const data = await res.json();
dispatch(setReviewAction(data));
return res;

}

// edit a review
export const editReview = (review) => async (dispatch) => {
    const {reviewId, restaurant_id, overall_rating, food_rating, service_rating, ambience_rating, value_rating, review_text } = review
    const res = await fetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      restaurant_id,
      overall_rating,
      food_rating,
      service_rating,
      ambience_rating,
      value_rating,
      review_text,
    })
})
const data = await res.json();
dispatch(editReviewAction(data));
return res;

}

// delete a review
export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    });
    await res.json();
    dispatch(deleteReviewAction(reviewId));
    return res;
}

// retrieve reservation details via Review Link
export const checkReviewLink = (reviewLink) => async (dispatch) => {
    const res = await fetch(`/api/reviews/new`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            url: reviewLink,
          })
    })
    const data = res.json();
    dispatch(newReviewAction(data));
    return res;
}

export default function reviewsReducer(state = {}, action) {
    const newState = { ...state };

    switch (action.type) {

        case SET_USER_REVIEWS:
            const reviews = {};
            action.reviews.forEach(review => {
                reviews[review.id] = reviews
            })
            newState.user = reviews
            break;

        case SET_RESTAURANT_REVIEWS:
            const resReviews = {};
            action.reviews.forEach(review => {
                reviews[review.id] = resReviews
            })
            newState.restaurant = reviews
            break;

        case EDIT_REVIEW:
            newState.user[action.review] = action.review;
            newState.restaurant[action.review] = action.review;
            break;

        case DELETE_REVIEW:
            delete newState.user[action.reviewId];
            delete newState.restaurant[action.review];
            break;

        case NEW_REVIEW:
            newState.new = action.reviewData

        default:
            break;
    }

    return newState;
}