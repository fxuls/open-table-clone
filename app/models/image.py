from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(200), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id"), nullable=False)

    db.relationship("Restaurant", back_populates="images")

    def to_dict(self):
        return {
            'id': self.id,
            'url': self.url,
            'restaurant_id': self.url,
        }
