import datetime

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TimeField, DateField
from wtforms.validators import DataRequired, ValidationError, NumberRange, Length
from app.models import Restaurant, Timeslot, Occasion

def restaurant_exists(form, field):
    """
    Validate that restaurant with reaturant_id exists in restaurants
    """
    restaurant_id = field.data
    restaurant = Restaurant.query.get(restaurant_id)
    if restaurant is None:
        raise ValidationError("Restaurant couldn't be found")

def validate_timeslot(form, field):
    """
    Validate that timeslot is a valid entry that exists in timeslots
    """
    timeslot = Timeslot.query.filter_by(timeslot=field.data).first()
    if timeslot is None:
        raise ValidationError("Timeslot is invalid")

def validate_day_is_not_in_past(form, field):
    """
    Validate that day is either today or in future
    """
    if field.data < datetime.date.today():
        raise ValidationError("Day cannot be in the past")

def validate_occasion(form, field):
    """
    Validate that occasion_id points to a valid occasions entry
    """
    occasion = Occasion.query.get(field.data)
    if occasion is None:
        raise ValidationError("occasion_id must point to a valid occasion")

class ReservationForm(FlaskForm):
    restaurant_id = IntegerField('restaurant_id', validators=[DataRequired(), restaurant_exists])
    party_size = IntegerField('party_size', validators=[DataRequired(), NumberRange(min=1, message="party_size must be 1 or greater")])
    timeslot = TimeField('timeslot', format='%H:%M:%S', validators=[DataRequired(message="timeslot is required in format hh:mm:ss"), validate_timeslot])
    day = DateField('day', format='%Y-%m-%d', validators=[DataRequired(message="day is required in format yyyy-mm-dd"), validate_day_is_not_in_past])
    special_request = StringField('special_request', validators=[Length(max=600, message="special_request must be 600 characters or fewer")])
    occasion_id = IntegerField('occasion_id', validators=[validate_occasion])
