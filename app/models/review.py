from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    overall_rating = db.Column(db.Integer, nullable=False)
    food_rating = db.Column(db.Integer, nullable=False)
    service_rating = db.Column(db.Integer, nullable=False)
    ambience_rating = db.Column(db.Integer, nullable=False)
    value_rating = db.Column(db.Integer, nullable=False)
    review_text = db.Column(db.String(600))

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)

    user = db.relationship("User")
    restaurant = db.relationship("Restaurant")

    def to_dict(self):
        return {
            'id': self.id,
            'overall_rating': self.overall_rating,
            'food_rating': self.food_rating,
            'service_rating': self.service_rating,
            'ambience_rating': self.ambience_rating,
            'value_rating': self.value_rating,
            'review_text': self.review_text,
            'user': self.user.to_dict(),
            'restaurant': self.restaurant.to_dict(),
        }
