from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from app import models
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import ReservationForm
from app.models import db, Reservation, Restaurant, Timeslot

reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('/reservations/user', methods=['GET'])
@login_required
def get_user_reservations():
    """
    Gets a list of all the reservations belonging to the
    currently authenticated user
    """
    reservations = [res.to_dict() for res in current_user.reservations]
    return jsonify({ "reservations": reservations }), 200


@reservation_routes.route('/reservations', methods=['POST'])
def create_reservation():
    """
    Create a new reservation

    Can be created with or without authentication
    Required fields passed through body:
        restaurant_id: must point to valid restaurant
        party_size: number of people in party
        timeslot: hours and minutes formatted as HH:MM:SS
        day: date formatted as yyyy-mm-dd
    Optional fields passed in through body:
        special_request
        occasion_id: must point to valid occasion
    """
    form = ReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # sum how many spots have already been filled for matching
        # restaurant, day, and timeslot
        restaurant = Restaurant.query.get(form.data['restaurant_id'])
        timeslot = Timeslot.query.filter_by(timeslot=form.data['timeslot']).first()
        other_reservations_sizes = Reservation.query.with_entities(Reservation.party_size).filter_by(
            restaurant_id = form.data['restaurant_id'],
            day = form.data['day'],
            timeslot = timeslot,
        ).all()
        taken_slots_total = sum([res[0] for res in other_reservations_sizes])

        if (form.data['party_size'] + taken_slots_total > restaurant.capacity):
            return jsonify({
                "message": "Restaurant cannot accommodate the request party size at the specified time",
                "status_code": 409
            }), 409

        # create reservation
        reservation = Reservation(
            restaurant_id = form.data['restaurant_id'],
            party_size = form.data['party_size'],
            timeslot = timeslot,
            day = form.data['day'],
            special_request = form.data['special_request'],
            occasion_id = form.data['occasion_id'],
        )

        # if user is logged in add user_id
        if current_user is not None:
            reservation.user_id = current_user.id

        db.session.add(reservation)
        db.session.commit()

        return reservation.to_dict(), 201
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400
