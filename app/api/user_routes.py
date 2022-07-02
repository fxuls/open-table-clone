from flask import Blueprint
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/<int:user_id>', methods=["GET"])
def user(user_id):
    """
    Gets details of a user by user_id
    """
    user = User.query.get(user_id)
    return user.to_dict()


@user_routes.route('/<int:user_id>', methods=["DELETE"])
def delete_user(user_id):
    """
    Gets details of a user by user_id
    """
    user = User.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return "Deleted user"