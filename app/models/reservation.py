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

    user = db.relationship("User",cascade="all")
    restaurant = db.relationship("Restaurant", cascade="all")
    timeslot = db.relationship("Timeslot")
    occasion = db.relationship("Occasion")
    review_link = db.relationship("ReviewLink", back_populates="reservation", cascade="all, delete-orphan")

    def to_dict(self):
        values = {
            'id': self.id,
            'user_id': self.user_id,
            'restaurant_id': self.restaurant_id,
            'day': self.day.strftime("%Y-%m-%d"),
            'timeslot': self.timeslot.strf(),
            'party_size': self.party_size,
            'special_request': self.special_request,
        }

        if self.occasion is not None: values['occasion'] = self.occasion.type

        return values
