from flask import Blueprint, jsonify

from app import models
from ..models import Occasion

occasion_routes = Blueprint('occasions', __name__)

@occasion_routes.route('/', methods=['GET'])
def get_occasions():
    """
    Gets a list of occasions and their ids
    """
    results = Occasion.query.all()
    occasions = [occasion.to_dict() for occasion in results]

    return jsonify({ "occasions": occasions }), 200
