from .db import db

class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    party_size = db.Column(db.Integer, nullable=False)
    day = db.Column(db.Date(), nullable=False)
    special_request = db.Column(db.String(600))

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)
    timeslot_id = db.Column(db.Integer, db.ForeignKey("timeslots.id"), nullable=False)
    occasion_id = db.Column(db.Integer, db.ForeignKey("occasions.id"))

    user = db.relationship("User")
    restaurant = db.relationship("Restaurant")
    timeslot = db.relationship("Timeslot")
    occasion = db.relationship("Occasion")

    def to_dict(self):
        return {
            'id': self.id,
            'party_size': self.party_size,
            'day': self.day,
            'special_request': self.special_request,
            'user': self.user.to_dict(),
            'restaurant': self.restaurant.to_dict(),
            'timeslot': self.timeslot.timeslot,
            'occasion': self.occasion.type,
        }
