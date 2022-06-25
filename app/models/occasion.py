from .db import db

class Occasion(db.Model):
    __tablename__ = 'occasions'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100), nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
        }
