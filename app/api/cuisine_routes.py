from flask import Blueprint, jsonify

from app import models
from ..models import db, CuisineType

cuisine_routes = Blueprint('cuisines', __name__)

@cuisine_routes.route('/', methods=['GET'])
def get_cuisines():
    """
    Get a list of all the cuisines and their ids
    """
    cuisines = CuisineType.query.all()
    cuisines = [cuisine.to_dict() for cuisine in cuisines]
    return jsonify({ "cuisines": cuisines }), 200
