from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from app import models
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import ReviewForm
from app.models import db, Reservation, ReviewLink, Review

reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route('/user', methods=['GET'])
@login_required
def my_reviews():
    """
    Gets a list of all the reviews belonging to the
    currently authenticated user
    """
    reviews = [rev.to_dict() for rev in current_user.reviews]
    return jsonify({ "reviews": reviews }), 200



@reviews_routes.route('/<int:reviewId>', methods=['GET'])
def get_review_details(reviewId):
    """
    Gets a list of all the reviews belonging to the
    currently authenticated user
    """
    review = Review.query.filter(Review.id == reviewId).first()

    if review is None:
        return jsonify({ "message": "Review couldn't be found", "status_code": 404}), 404

    return review.to_dict(), 200