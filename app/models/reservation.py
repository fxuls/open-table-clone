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

    user = db.relationship("User", back_populates="reservations")
    restaurant = db.relationship("Restaurant")
    timeslot = db.relationship("Timeslot")
    occasion = db.relationship("Occasion")

    def to_dict(self):
        values = {
            'id': self.id,
            'user_id': self.user_id,
            'restaurant': self.restaurant.to_dict(),
            'day': self.day.strftime("%Y-%m-%d"),
            'timeslot': self.timeslot.strf(),
            'party_size': self.party_size,
            'special_request': self.special_request,
        }

        if self.user is not None: values['user'] = self.user.to_dict()
        if self.occasion is not None: values['occasion'] = self.occasion.to_dict()

        return values
