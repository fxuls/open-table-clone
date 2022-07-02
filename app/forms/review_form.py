from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError, NumberRange, Length
from app.models import Restaurant

def restaurant_exists(form, field):
    """
    Validate that restaurant with reaturant_id exists in restaurants
    """
    restaurant_id = field.data
    restaurant = Restaurant.query.get(restaurant_id)
    if restaurant is None:
        raise ValidationError("Restaurant couldn't be found")

class ReviewForm(FlaskForm):
    restaurant_id = IntegerField("restaurant_id", validators=[DataRequired(), restaurant_exists])
    overall_rating = IntegerField("overall_rating", validators=[DataRequired(), NumberRange(min=1, max=5)])
    food_rating = IntegerField("food_rating", validators=[DataRequired(), NumberRange(min=1, max=5)])
    service_rating = IntegerField("service_rating", validators=[DataRequired(), NumberRange(min=1, max=5)])
    ambience_rating = IntegerField("ambience_rating", validators=[DataRequired(), NumberRange(min=1, max=5)])
    value_rating = IntegerField("value_rating", validators=[DataRequired(), NumberRange(min=1, max=5)])
    review_text = TextAreaField("review_text", validators=[Length(max=600)])