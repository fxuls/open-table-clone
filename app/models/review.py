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

    user = db.relationship("User", back_populates="reviews")
    restaurant = db.relationship("Restaurant", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'overall_rating': self.overall_rating,
            'food_rating': self.food_rating,
            'service_rating': self.service_rating,
            'ambience_rating': self.ambience_rating,
            'value_rating': self.value_rating,
            'review_text': self.review_text,
            'user': {
                'id': self.user.id,
                'first_name': self.user.first_name,
                'last_name': self.user.last_name,
                'location': {
                    'city': self.user.location.city,
                    'state': self.user.location.state,
                    'timezone': self.user.location.timezone
                }
            },
            'restaurant': {
                'id': self.restaurant.id,
                'name': self.restaurant.name,
                'url': self.restaurant.url,
                'cuisine_type': self.restaurant.cuisine_type.type,
                'location': {
                    'city': self.restaurant.location.city,
                    'state': self.restaurant.location.state,
                    'timezone': self.restaurant.location.timezone
                }
            },
        }
