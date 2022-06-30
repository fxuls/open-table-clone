from app.models import db, Favorite


# Adds favorites for our demo user
def seed_favorites():
    nyc = Favorite(
        user_id=1, restaurant_id=1)
    la = Favorite(
        user_id=1, restaurant_id=5)
    chi = Favorite(
        user_id=1, restaurant_id=10)
    hou = Favorite(
        user_id=1, restaurant_id=15)
    phx = Favorite(
        user_id=1, restaurant_id=20)
    san = Favorite(
        user_id=1, restaurant_id=25)
    phl = Favorite(
        user_id=1, restaurant_id=30)


    db.session.add_all([nyc, la, chi, hou, phx, san, phl])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the favorites table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_favorites():
    db.session.execute('TRUNCATE favorites RESTART IDENTITY CASCADE;')
    db.session.commit()