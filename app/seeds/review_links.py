from app.models import db, ReviewLink


# Adds test review links to the database for the seeded reservations
def seed_review_links():
    nyc = ReviewLink(
        url="tester1", reservation_id=1)
    la = ReviewLink(
        url="tester2", reservation_id=2)
    chi = ReviewLink(
        url="tester3", reservation_id=3)
    hou = ReviewLink(
        url="tester4", reservation_id=4)
    phx = ReviewLink(
        url="tester5", reservation_id=5)
    san = ReviewLink(
        url="tester6", reservation_id=6)
    phl = ReviewLink(
        url="tester7", reservation_id=7)
    a = ReviewLink(
        url="tester8", reservation_id=8)


    db.session.add_all([nyc, la, chi, hou, phx, san, phl, a])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the review_links table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_review_links():
    db.session.execute('TRUNCATE review_links RESTART IDENTITY CASCADE;')
    db.session.commit()