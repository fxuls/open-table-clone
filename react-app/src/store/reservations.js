export const GET_RESERVATION = 'restaurants/GET_RESERVATION';
export const GET_RESERVATIONS = 'restaurants/GET_RESERVATIONS';
export const EDIT_RESERVATION = 'restaurants/EDIT_RESERVATION';
export const DELETE_RESERVATION = 'restaurants/REMOVE_RESERVATION';

// selectors
export const reservationSelector = (state) => state.reservations.detail;
export const allReservationsSelector = (state) => state.reservations;

// GET_RESERVATIONS action creator
export function getReservations(reservations) {
    return {
        type: GET_RESERVATIONS,
        reservations,
    };
}

// GET_RESERVATION action creator
export function getReservation(reservation) {
    return {
        type: GET_RESERVATION,
        reservation,
    }
}

// DELETE_RESERVATION action creator
export function deleteReservation() {
    return {
        type: REMOVE_RESTAURANT,
    }
}

// EDIT_RESERVATION action creator
export function editReservation(reservation) {
    return {
        type: EDIT_RESERVATION,
        reservation
    }
}

