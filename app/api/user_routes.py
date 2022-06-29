from flask import Blueprint
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/<int:userId>')
def user(userId):
    """
    Gets details of a user by userId
    """
    user = User.query.get(userId)
    return user.to_dict()
