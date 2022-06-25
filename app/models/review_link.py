from .db import db

class ReviewLink(db.Model):
    __tablename__ = 'review_links'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(120), nullable=False, unique=True)
    reservation_id = db.Column(db.Integer, db.ForeignKey("reservations.id"))

    reservation = db.relationship("Reservation")

    def to_dict(self):
        return {
            'id': self.id,
            'url': self.url,
            'reservation': self.reservation,
        }
