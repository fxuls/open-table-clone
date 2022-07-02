from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from app import models
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import ReviewForm
from app.models import db, Reservation, ReviewLink

reviews_routes = Blueprint('reviews', __name__)


