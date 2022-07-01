from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from app import models
from ..models import Favorite, Restaurant

favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/', methods=['GET'])
@login_required
def get_user_favorites():
    """
    Gets a list of all user's favorited restaurants
    """

    favs = Favorite.query.filter(Favorite.user_id == current_user.to_dict().id)

    # restaurants = [rest.to_dict() for rest in query.all()]
    return jsonify({ "restaurants": favs }), 200


@favorite_routes.route('/<path:restaurant_url>')
def get_restaurant_details(restaurant_url):
    """
    Get details of a restaurant by its url
    """
    restaurant = Restaurant.query.filter(Restaurant.url == restaurant_url).first()

    if restaurant is None:
        return jsonify({ "message": "Restaurant couldn't be found", "status_code": 404}), 404

    return restaurant.to_dict(), 200