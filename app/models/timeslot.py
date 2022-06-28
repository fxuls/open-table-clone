from sqlalchemy import TIME, TIMESTAMP
from .db import db

class Timeslot(db.Model):
    __tablename__ = 'timeslots'

    id = db.Column(db.Integer, primary_key=True)
    timeslot = db.Column(db.Time, nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'timeslot': self.timeslot,
        }
