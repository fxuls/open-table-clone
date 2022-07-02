from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"))

    location = db.relationship("Location")

    reservations = db.relationship("Reservation", back_populates="user", cascade="all, delete-orphan")

    favorites = db.relationship("Favorite", cascade="all, delete-orphan")
    restaurants = db.relationship("Restaurant", back_populates="owner")
    reviews = db.relationship("Review", cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        values = {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
        }

        if self.location is not None: values['location'] = self.location.to_dict()

        return values
