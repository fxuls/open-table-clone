from flask import Blueprint, jsonify
from app.models import User


user_routes = Blueprint('users', __name__)


@user_routes.route('/<int:user_id>', methods=["GET"])
def user(user_id):
    """
    Gets details of a user by user_id
    """
    user = User.query.get(user_id)
    # Error message for no user with that id
    if user is None:
        return jsonify({
            "message": "User couldn't be found",
            "status_code": 404,
        }), 404
    return user.to_dict()
