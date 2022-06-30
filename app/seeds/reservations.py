from app.models import db, Reservation
from datetime import date

# Adds reservations for the demo user
def seed_reservations():
    ital = Reservation(
        party_size=4, day=date(year=2022, month=4, day=20), special_request="Outside seating",
        user_id=1, restaurant_id=6, timeslot_id=66, occasion_id=5)
    amer = Reservation(
        party_size=5, day=date(year=2022, month=6, day=20),
        user_id=1, restaurant_id=1, timeslot_id=60)
    stea = Reservation(
        party_size=2, day=date(year=2022, month=7, day=10),
        user_id=1, restaurant_id=11, timeslot_id=77, occasion_id=3)
    seaf = Reservation(
        party_size=4, day=date(year=2022, month=8, day=31), special_request="Outside seating",
        user_id=1, restaurant_id=16, timeslot_id=75, occasion_id=1)
    fren = Reservation(
        party_size=5, day=date(year=2022, month=9, day=13),
        user_id=1, restaurant_id=21, timeslot_id=71)
    indi = Reservation(
        party_size=3, day=date(year=2022, month=10, day=8),
        user_id=1, restaurant_id=26, timeslot_id=77, occasion_id=2)
    mexi = Reservation(
       party_size=8, day=date(year=2022, month=11, day=26), special_request="Outside seating",
        user_id=1, restaurant_id=3, timeslot_id=75, occasion_id=2)
    japa = Reservation(
        party_size=2, day=date(year=2022, month=12, day=30),
        user_id=1, restaurant_id=8, timeslot_id=81, occasion_id=1)


    db.session.add_all([ ital, amer, stea, seaf, fren, indi, mexi, japa])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the reservations table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()