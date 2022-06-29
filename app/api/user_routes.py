from flask import Blueprint
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/<int:user_id>')
def user(user_id):
    """
    Gets details of a user by user_id
    """
    user = User.query.get(user_id)
    return user.to_dict()
