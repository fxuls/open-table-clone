from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from app import models
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import ReviewForm
from app.models import db, Reservation, ReviewLink, Review, Restaurant

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
def get_reservation_data():
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


@reviews_routes.route('', methods=['POST'])
@login_required
def create_review():
    """
    Create a new review
    Can be created with or without authentication
    Required fields passed through body:
        restaurant_id: must point to valid restaurant
        overall_rating
        food_rating
        service_rating
        ambience_rating
        value_rating
    Optional fields passed in through body:
        user_id
        review_text
    Upon successful submission, delete the review_link in the database
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # create review
        review = Review(
            restaurant_id = form.data['restaurant_id'],
            overall_rating = form.data['overall_rating'],
            food_rating = form.data['food_rating'],
            service_rating = form.data['service_rating'],
            ambience_rating = form.data['ambience_rating'],
            value_rating = form.data['value_rating'],
            review_text = form.data['review_text'],
        )

        # add user_id from the logged in user
        if current_user is not None:
            review.user_id = current_user.id

        db.session.add(review)
        db.session.commit()

        # update restaurant's overall rating to account for new review
        restaurant_reviews = Review.query.filter(Review.restaurant_id == form.data['restaurant_id']).all()
        ratings = [rev.overall_rating for rev in restaurant_reviews]
        restaurant = Restaurant.query.filter(Restaurant.id == form.data['restaurant_id']).first()
        restaurant.rating = sum(ratings)/len(ratings)

        db.session.commit()

        return review.to_dict(), 201
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400


@reviews_routes.route('/<int:review_id>', methods=['DELETE'])
@login_required
def delete_review(review_id):
    """
    Delete a review by review_id
    The review must belong to the currently logged in user
    """
    review = Review.query.get(review_id)

    # check if review exists
    if review is None:
        return jsonify({
            "message": "Review does not exist",
            "status_code": 404,
        }), 404

    # check review belongs to user
    if review.user_id != current_user.id:
        return jsonify({
            "message": "No permission to delete this review",
            "status_code": 401,
        }), 401

    # delete review
    db.session.delete(review)
    db.session.commit()

    return jsonify({
        "message": "Successfully deleted reservation",
        "status_code": 200,
    }), 200


@reviews_routes.route('/<int:review_id>', methods=['PUT'])
@login_required
def update_review(review_id):
    """
    Update a review by review_id
    The review must belong to the currently logged in user
    """
    review = Review.query.get(review_id)

    # check if review exists
    if review is None:
        return jsonify({
            "message": "Review does not exist",
            "status_code": 404,
        }), 404

    # check review belongs to user
    if review.user_id != current_user.id:
        return jsonify({
            "message": "No permission to delete this review",
            "status_code": 401,
        }), 401

    # update review
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review.overall_rating = form.data['overall_rating'],
        review.food_rating = form.data['food_rating'],
        review.service_rating = form.data['service_rating'],
        review.ambience_rating = form.data['ambience_rating'],
        review.value_rating = form.data['value_rating'],
        review.review_text = form.data['review_text'],

        # update restaurant's overall rating to account for new rating of this review
        restaurant_reviews = Review.query.filter(Review.restaurant_id == form.data['restaurant_id']).all()
        ratings = [rev.overall_rating for rev in restaurant_reviews]
        restaurant = Restaurant.query.filter(Restaurant.id == form.data['restaurant_id']).first()
        restaurant.rating = sum(ratings)/len(ratings)

        db.session.commit()

        db.session.commit()

        return review.to_dict(), 201
    return {"errors": validation_errors_to_error_messages(form.errors)}, 40
