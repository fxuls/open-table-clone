from app.models import db, Occasion

# Adds all occasion types to the database
def seed_occasions():
    bday = Occasion(
        type='Birthday')
    ann = Occasion(
        type='Anniversary')
    date = Occasion(
        type='Date Night')
    work = Occasion(
        type='Business Meal')
    party = Occasion(
        type='Celebration')

    db.session.add_all([bday, ann, date, work, party])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the occasions table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_occasions():
    db.session.execute('TRUNCATE occasions RESTART IDENTITY CASCADE;')
    db.session.commit()