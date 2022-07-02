from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', email='demo@aa.io', location_id=1, password='password')
    john = User(
        first_name='John', last_name='Doe', email='john.doe@aol.net', location_id=9, password='password')
    bobbie = User(
        first_name='Bobby', last_name='Bigbux', email='bobbie@aa.io', location_id=17, password='password')
    karen = User(
        first_name='Karen', last_name='McKaren', email='kare@comcast.net', location_id=3, password='password')
    alfredo = User(
        first_name='Alfredo', last_name='Dark', email='light@wow.com', location_id=6, password='password')
    al = User(
        first_name='Al', last_name='Dente', email='pastaboy@pasta.com', location_id=12, password='password')
    zoro = User(
        first_name='Roronoa', last_name='Zoro', email='best@shpirates.com', location_id=15, password='password')
    sanji = User(
        first_name='Sanji', last_name='Vinsmoke', email='bestcook@shpirates.com', location_id=21, password='password')

    db.session.add(demo)
    db.session.add(john)
    db.session.add(bobbie)
    db.session.add(karen)
    db.session.add(alfredo)
    db.session.add(al)
    db.session.add(zoro)
    db.session.add(sanji)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
