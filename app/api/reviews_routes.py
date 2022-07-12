from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from app import models
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import ReviewForm
from app.models import db, Reservation, ReviewLink, Review, User

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
    Get the details for a review based on id
    """
    review = Review.query.filter(Review.id == reviewId).first()

    if review is None:
        return jsonify({ "message": "Review couldn't be found", "status_code": 404}), 404

    return review.to_dict(), 200


@reviews_routes.route('/new', methods=['POST'])
def get_review_form():
    """
    Checks the database for the review link, and returns the review form if valid
    """
    body = request.get_json()

    review_link = ReviewLink.query.filter(ReviewLink.url == body['url']).first()

    if review_link is None:
        return jsonify({ "message": "Reservation couldn't be found", "status_code": 404}), 404

    reservation = Reservation.query.filter(Reservation.id == review_link.reservation_id).first()
    user = reservation.user.to_dict()
    restaurant = reservation.restaurant.to_dict()
    return { "user": user, "restaurant": restaurant}, 200