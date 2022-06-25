from .db import db

class Location(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    timezone = db.Column(db.String(10), nullable=False)

    users = db.relationship("Users", back_populates="location")
