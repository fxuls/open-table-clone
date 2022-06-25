from .db import db

class Timeslot(db.Model):
    __tablename__ = 'timeslots'

    id = db.Column(db.Integer, primary_key=True)
    timeslot = db.Column(db.DateTime, nullable=False, unique=True)
