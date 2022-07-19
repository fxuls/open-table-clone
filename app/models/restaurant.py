from .db import db

class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(70), nullable=False)
    url = db.Column(db.String(120), nullable=False, unique=True)
    price = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Float(precision=2))
    capacity = db.Column(db.Integer)
    address_line_1 = db.Column(db.String(85), nullable=False)
    address_line_2 = db.Column(db.String(85))
    zip_code = db.Column(db.Integer, nullable=False)
    reservation_notes = db.Column(db.String(255))
    preview_image_url = db.Column(db.String(200))

    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    cuisine_id = db.Column(db.Integer, db.ForeignKey("cuisine_types.id"))
    opening_time_id = db.Column(db.Integer, db.ForeignKey("timeslots.id"), nullable=False)
    closing_time_id = db.Column(db.Integer, db.ForeignKey("timeslots.id"), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"), nullable=False)

    owner = db.relationship("User", lazy="joined")
    cuisine_type = db.relationship("CuisineType", lazy="joined")
    opening_time = db.relationship("Timeslot", foreign_keys=[opening_time_id], lazy="joined")
    closing_time = db.relationship("Timeslot", foreign_keys=[closing_time_id], lazy="joined")
    location = db.relationship("Location", lazy="joined")

    images = db.relationship("Image", cascade="all, delete-orphan", lazy="joined")
    favorites = db.relationship("Favorite", back_populates="restaurant", cascade="all, delete-orphan", lazy="joined")
    reviews = db.relationship("Review", cascade="all, delete-orphan", lazy="joined")
    reservations = db.relationship("Reservation", back_populates="restaurant", cascade="all, delete-orphan", lazy="joined")

    def get_rating(self):
        if len(self.reviews):
            return sum([review.overall_rating for review in self.reviews]) / len(self.reviews)
        return 0

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'url': self.url,
            'price': self.price,
            'rating': self.get_rating(),
            'capacity': self.capacity,
            'address_line_1': self.address_line_1,
            'address_line_2': self.address_line_2,
            'zip_code': self.zip_code,
            'reservation_notes': self.reservation_notes,
            'preview_image_url': self.preview_image_url,
            'owner_id': self.owner_id,
            'cuisine_type': self.cuisine_type.type,
            'opening_time': self.opening_time.strf(),
            'closing_time': self.closing_time.strf(),
            'location': self.location.to_dict(),
            'images': [image.url for image in self.images],
        }
