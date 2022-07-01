from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
import json

from app import models
from ..models import Favorite, Restaurant

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
        del fave['user']
        del fave['id']
        for unwanted_key in extra_keys:
            del fave['restaurant'][unwanted_key]
        filtered_faves.append(fave['restaurant'])
    return jsonify({ "restaurants": filtered_faves }), 200


@favorite_routes.route('/', methods=['POST'])
@login_required
def add_favorite():
    pass


@favorite_routes.route('/:restaurant_id', methods=['DELETE'])
@login_required
def delete_favorite(restaurant_id):
    pass
