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
    preview_image_url = db.Column(db.String(120))

    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    cuisine_id = db.Column(db.Integer, db.ForeignKey("cuisine_types.id"))
    opening_time_id = db.Column(db.Integer, db.ForeignKey("timeslots.id"), nullable=False)
    closing_time_id = db.Column(db.Integer, db.ForeignKey("timeslots.id"), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"), nullable=False)

    owner = db.relationship("User")
    cuisine_type = db.relationship("CuisineType")
    opening_time = db.relationship("Timeslot", foreign_keys=[opening_time_id])
    closing_time = db.relationship("Timeslot", foreign_keys=[closing_time_id])
    location = db.relationship("Location")

    images = db.relationship("Image")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'url': self.url,
            'price': self.price,
            'rating': self.rating,
            'capacity': self.capacity,
            'address_line_1': self.address_line_1,
            'address_line_2': self.address_line_2,
            'zip_code': self.zip_code,
            'reservation_notes': self.reservation_notes,
            'preview_image_url': self.preview_image_url,
            'owner': self.owner.to_dict(),
            'cuisine_type': self.cuisine_type.type,
            'opening_time': self.opening_time.timeslot,
            'closing_time': self.closing_time.timeslot,
            'location': self.location.to_dict(),
            'images': [image.url for image in self.images],
        }
