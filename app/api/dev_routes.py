# Routes for testing
from datetime import datetime
import os

from curses import wrapper
from flask import Blueprint, jsonify

from app import models
from ..models import db, User, Timeslot, Restaurant

dev_routes = Blueprint('dev', __name__)

@dev_routes.route("/ping")
def ping():
    """
    Basic response to show api is working
    """
    return "Pong!"

@dev_routes.route("/restaurants")
def test_route():
    models = db.session.query(Restaurant).all()
    reformat = [model.to_dict() for model in models]
    print(reformat)
    return "OK"


@dev_routes.route("/timeslot")
def timeslot_route():
    timeslot = Timeslot()
    timeslot.timeslot = datetime.now()
    db.session.add(timeslot)
    db.session.commit()
    return "OK"
