export const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
export const DELETE_RESERVATION = 'reservations/REMOVE_RESERVATION';
export const CREATE_RESERVATION = 'reservations/CREATE_RESERVATION';

// selectors
export const allReservationsSelector = (state) => state.reservations;

// GET_RESERVATIONS action creator
export function getReservations(reservations) {
    return {
        type: GET_RESERVATIONS,
        reservations,
    };
}

// DELETE_RESERVATION action creator
export function deleteReservation() {
    return {
        type: REMOVE_RESTAURANT,
    }
}

// CREATE_RESERVATION action creator
export function createReservation(reservation) {
    return {
        type: REMOVE_RESTAURANT,
        reservation
    }
}


// fetch all of the current user's reservations thunk
export const fetchReservations = () => async (dispatch) => {
    const res = await fetch("/api/reservations/user");
    const data = await res.json();

    dispatch(getReservations(data.reservations));
    return res;
}

// delete a reservation thunk
export const deleteMyReservation = (reservationId) => async (dispatch) => {
    const res = await fetch(`/api/reservations/${reservationId}`, {
        method: "DELETE",
    });
    await res.json();
    dispatch(deleteReservation());
    return res;
}

