from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TimeField, DateField
from wtforms.validators import DataRequired, ValidationError, NumberRange
from app.models import Restaurant

def restaurant_exists(form, field):
    # check if restaurant exists
    restaurant_id = field.data
    restaurant = Restaurant.query.get(restaurant_id)
    if restaurant is None:
        raise ValidationError("Restaurant couldn't be found")

class ReservationForm(FlaskForm):
    restaurant_id = IntegerField('restaurant_id', validators=[DataRequired(), restaurant_exists])
    party_size = IntegerField('party_size', validators=[DataRequired(), NumberRange(min=1, message="Party size must be 1 or greater")])
    timeslot = TimeField('timeslot', validators=[DataRequired()])
    day = DateField('day', validators=[DataRequired()])
    special_request = StringField('special_request')
    occasion_id = IntegerField('occasion_id')
