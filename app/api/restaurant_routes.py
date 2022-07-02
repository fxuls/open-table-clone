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
    cuisine = request.args.get('cuisine_id')
    location = request.args.get('location_id')

    query = Restaurant.query
    if cuisine:
        query = query.filter(Restaurant.cuisine_id == cuisine)
    if location:
        query = query.filter(Restaurant.location_id == location)

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
