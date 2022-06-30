from flask import Blueprint, jsonify, request

from app import models
from ..models import Restaurant

restaurant_routes = Blueprint('restaurants', __name__)

@restaurant_routes.route('/', methods=['GET'])
def get_retaurants():
    """
    Gets a list of all restaurants

    Results are filtered according to location_id and cuisine_id
    passed in through body
    """
    body = request.get_json()

    query = Restaurant.query
    if 'cuisine_id' in body:
        query = query.filter(Restaurant.cuisine_id == body['cuisine_id'])
    if 'location_id' in body:
        query = query.filter(Restaurant.location_id == body['location_id'])

    restaurants = [rest.to_dict() for rest in query.all()]
    return jsonify({ "restaurants": restaurants }), 200


@restaurant_routes.route('/<path:restaurant_url>')
def get_restaurant_details(restaurant_url):
    """
    Get details of a restaurant by its url
    """
    restaurant = Restaurant.query.filter(Restaurant.url == restaurant_url).first()

    if restaurant is None:
        return jsonify({ "message": "Restaurant couldn't be found", "status_code": 404}), 404

    return restaurant.to_dict(), 200