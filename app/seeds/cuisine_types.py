from app.models import db, CuisineType

# Adds 30 popular cuisine types to seed the database
def seed_cuisine_types():
    amer = CuisineType(
        type='American')
    ital = CuisineType(
        type='Italian')
    stea = CuisineType(
        type='Steakhouse')
    seaf = CuisineType(
        type='Seafood')
    fren = CuisineType(
        type='French')
    indi = CuisineType(
        type='Indian')
    mexi = CuisineType(
        type='Mexican')
    japa = CuisineType(
        type='Japanese')
    brit = CuisineType(
        type='British')
    chin = CuisineType(
        type='Chinese')
    span = CuisineType(
        type='Spanish')
    pizz = CuisineType(
        type='Pizzeria')
    fusi = CuisineType(
        type='Fusion / Eclectic')
    barb = CuisineType(
        type='Barbecue')
    gree = CuisineType(
        type='Greek')
    tapa = CuisineType(
        type='Tapas / Small Plates')
    gril = CuisineType(
        type='Grill')
    comf = CuisineType(
        type='Comfort Food')
    burg = CuisineType(
        type='Burgers')
    iris = CuisineType(
        type='Irish')
    medi = CuisineType(
        type='Mediterranean')
    thai = CuisineType(
        type='Thai')
    asia = CuisineType(
        type='Asian')
    texm = CuisineType(
        type='Tex-Mex')
    midd = CuisineType(
        type='Middle Eastern')
    rama = CuisineType(
        type='Ramen')
    sush = CuisineType(
        type='Sushi')
    hala = CuisineType(
        type='Halal')
    brea = CuisineType(
        type='Breakfast')
    unsp = CuisineType(
        type='Unspecified')

    db.session.add_all([amer, ital, stea, seaf, fren, indi, mexi, japa, brit, chin])
    db.session.add_all([span, pizz, fusi, barb, gree, tapa, gril, comf, burg, iris])
    db.session.add_all([medi, thai, asia, texm, midd, rama, sush, hala, brea, unsp])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cuisine_types():
    db.session.execute('TRUNCATE cuisine_types RESTART IDENTITY CASCADE;')
    db.session.commit()