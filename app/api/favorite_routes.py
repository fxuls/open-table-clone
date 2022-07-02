from audioop import add
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
import json

from psycopg2 import IntegrityError

from app import models
from ..models import Favorite, Restaurant, db

favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/', methods=['GET'])
@login_required
def get_user_favorites():
    """
    Gets a list of all user's favorited restaurants
    """

    query = Favorite.query.filter(Favorite.user_id == current_user.id)

    faves = [fav.to_dict() for fav in query.all()]
    filtered_faves = []
    extra_keys = ['opening_time', 'closing_time', 'images', 'address_line_1', 'address_line_2', 'capacity', 'owner_id', 'reservation_notes', 'zip_code']
    for fave in faves:
        for unwanted_key in extra_keys:
            del fave['restaurant'][unwanted_key]
        filtered_faves.append(fave['restaurant'])
    return jsonify({ "restaurants": filtered_faves }), 200


@favorite_routes.route('/', methods=['POST'])
@login_required
def add_favorite():
    body = request.get_json()
    query = Favorite.query.filter(Favorite.user_id == current_user.id)

    faves = [fav.to_dict() for fav in query.all()]

    for fave in faves:
        if fave['restaurant']['id'] == body['restaurant_id']:
            return "Already added", 200
    try:
        add_fave = Favorite(user_id=current_user.id, restaurant_id=body['restaurant_id'])
        db.session.add(add_fave)
        db.session.commit()
        return jsonify({ "id": add_fave.id, "user_id": add_fave.user_id, "restaurant_id": add_fave.restaurant_id }), 200
    except:
        return jsonify({ "message": "Restaurant couldn't be found", "status_code": 404 }), 404




@favorite_routes.route('/:restaurant_id', methods=['DELETE'])
@login_required
def delete_favorite(restaurant_id):
    pass
