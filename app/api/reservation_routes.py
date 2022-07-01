from flask import Blueprint, jsonify
from flask_login import current_user, login_required

from app import models
from ..models import Reservation

reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('/reservations/user', methods=['GET'])
@login_required
def get_user_reservations():
    reservations = [res.to_dict() for res in current_user.reservations]
    return jsonify({ "reservations": reservations }), 200
