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
        type: DELETE_RESERVATION,
    }
}

// CREATE_RESERVATION action creator
export function createReservation(reservation) {
    return {
        type: CREATE_RESERVATION,
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

// create a reservation thunk
export const createAReservation = (reservation) => async (dispatch) => {
   const { restaurant_id, party_size, timeslot, day, special_request, occasion_id } = reservation;
   const response = await fetch('/api/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      restaurant_id,
      party_size,
      timeslot,
      day,
      special_request,
      occasion_id
    })
  });
  const data = await response.json();
  dispatch(createReservation(data));
  return response
}