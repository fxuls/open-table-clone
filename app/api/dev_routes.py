# Routes for testing
import os

from curses import wrapper
from flask import Blueprint

dev_routes = Blueprint('dev', __name__)

@dev_routes.route("/ping")
def ping():
    """
    Basic response to show api is working
    """
    return "Pong!"
