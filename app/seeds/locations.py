from app.models import db, Location


# Adds 25 most populated cities with timezones, plus some extras
def seed_locations():
    nyc = Location(
        city='New York City', state='New York', timezone='GMT-4')
    la = Location(
        city='Los Angeles', state='California', timezone='GMT-7')
    chi = Location(
        city='Chicago', state='Illinois', timezone='GMT-5')
    hou = Location(
        city='Houston', state='Texas', timezone='GMT-5')
    phx = Location(
        city='Phoenix', state='Arizona', timezone='GMT-7')
    san = Location(
        city='San Antonio', state='Texas', timezone='GMT-5')
    phl = Location(
        city='Philadelphia', state='Pennsylvania', timezone='GMT-4')
    sd = Location(
        city='San Diego', state='California', timezone='GMT-7')
    dal = Location(
        city='Dallas', state='Texas', timezone='GMT-5')
    aus = Location(
        city='Austin', state='Texas', timezone='GMT-5')
    sja = Location(
        city='San Jose', state='California', timezone='GMT-7')
    fwt = Location(
        city='Fort Worth', state='Texas', timezone='GMT-5')
    jax = Location(
        city='Jacksonville', state='Florida', timezone='GMT-4')
    clt = Location(
        city='Charlotte', state='North Carolina', timezone='GMT-4')
    col = Location(
        city='Columbus', state='Ohio', timezone='GMT-4')
    ind = Location(
        city='Indianapolis', state='Indiana', timezone='GMT-4')
    sf = Location(
        city='San Francisco', state='California', timezone='GMT-7')
    sea = Location(
        city='Seattle', state='Washington', timezone='GMT-7')
    den = Location(
        city='Denver', state='Colorado', timezone='GMT-6')
    was = Location(
        city='Washington', state='DC', timezone='GMT-4')
    bos = Location(
        city='Boston', state='Massachusetts', timezone='GMT-4')
    bal = Location(
        city='Baltimore', state='Maryland', timezone='GMT-4')
    tuc = Location(
        city='Tucson', state='Arizona', timezone='GMT-7')
    pit = Location(
        city='Pittsburgh', state='Pennsylvania', timezone='GMT-4')
    cor = Location(
        city='Corona', state='California', timezone='GMT-7')
    ept = Location(
        city='El Paso', state='Texas', timezone='GMT-6')
    nas = Location(
        city='Nashville', state='Tennessee', timezone='GMT-5')
    okc = Location(
        city='Oklahoma City', state='Oklahoma', timezone='GMT-5')
    lv = Location(
        city='Las Vegas', state='Nevada', timezone='GMT-7')
    mia = Location(
        city='Miami', state='Florida', timezone='GMT-4')

    db.session.add_all([nyc, la, chi, hou, phx, san, phl, sd, dal, okc])
    db.session.add_all([aus, sja, fwt, jax, clt, col, ind, sf, sea, lv])
    db.session.add_all([den, was, bos, bal, tuc, pit, cor, ept, nas, mia])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_locations():
    db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE;')
    db.session.commit()