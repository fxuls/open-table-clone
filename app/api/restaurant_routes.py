from flask import Blueprint, jsonify, request

from app import models
from ..models import db, Restaurant

restaurant_routes = Blueprint('restaurants', __name__)

@restaurant_routes.route('/', methods=['GET'])
def get_retaurants():
    """
    Gets a list of all restaurants

    Results are filtered according to location_id and cuisine_id
    passed in through body
    """
    body = request.get_json()

    query = db.session.query(Restaurant)
    if 'cuisine_id' in body:
        query = query.filter(Restaurant.cuisine_id == body['cuisine_id'])
    if 'location_id' in body:
        query = query.filter(Restaurant.location_id == body['location_id'])

    restaurants = [rest.to_dict() for rest in query.all()]
    return jsonify({ "restaurants": restaurants })
