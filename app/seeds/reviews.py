from app.models import db, Review

# Adds restaurants of each cuisine type and location to seed the database
def seed_reviews():
    amer = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=4,
        value_rating=5, review_text="One of my all-time favorite restaurants! My family and I go here once a month!",
        user_id=2, restaurant_id=1)
    ital = Review(
        overall_rating=4, food_rating=5, service_rating=3, ambience_rating=4,
        value_rating=5, review_text="Food was great, service was OK.",
        user_id=3, restaurant_id=1)
    stea = Review(
        overall_rating=1, food_rating=1, service_rating=1, ambience_rating=1,
        value_rating=1, review_text="One of the absolute worst experiences of my life. I asked for some really simple substitutions to my entree, I just wanted to change the type of side, protein, and sauce on the dish, and my waiter said they were unable to do it. Unacceptable. I've never experienced such a thing! The customer is always right, right?",
        user_id=4, restaurant_id=1)
    seaf = Review(
        overall_rating=3, food_rating=3, service_rating=5, ambience_rating=4,
        value_rating=3, review_text="My salmon was prepared really well, but the salad did not taste fresh. Our server, Tom, was really nice and friendly though",
        user_id=5, restaurant_id=1)
    fren = Review(
        overall_rating=2, food_rating=2, service_rating=5, ambience_rating=4,
        value_rating=4, review_text="I like my pasta al dente, with a little bite, not overcooked mush. Large portions and good service did not make up for the disappointing pasta.",
        user_id=6, restaurant_id=1)
    indi = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=5,
        value_rating=3, review_text="They had a full bar, so I was content.",
        user_id=7, restaurant_id=1)
    mexi = Review(
        overall_rating=4, food_rating=4, service_rating=2, ambience_rating=2,
        value_rating=2, review_text="The chef did a good job of balancing flavors, but the food is a little expensive for the portion sizes. Ambience and service could use some improvement.",
        user_id=8, restaurant_id=1)
    japa = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=4,
        value_rating=5, review_text="One of my all-time favorite restaurants! My family and I go here once a month!",
        user_id=2, restaurant_id=2)
    brit = Review(
        overall_rating=4, food_rating=5, service_rating=3, ambience_rating=4,
        value_rating=5, review_text="Food was great, service was OK.",
        user_id=3, restaurant_id=2)
    chin = Review(
        overall_rating=1, food_rating=1, service_rating=1, ambience_rating=1,
        value_rating=1, review_text="One of the absolute worst experiences of my life. I asked for some really simple substitutions to my entree, I just wanted to change the type of side, protein, and sauce on the dish, and my waiter said they were unable to do it. Unacceptable. I've never experienced such a thing! The customer is always right, right?",
        user_id=4, restaurant_id=2)
    span = Review(
        overall_rating=3, food_rating=3, service_rating=5, ambience_rating=4,
        value_rating=3, review_text="My salmon was prepared really well, but the salad did not taste fresh. Our server, Tom, was really nice and friendly though",
        user_id=5, restaurant_id=3)
    pizz = Review(
        overall_rating=2, food_rating=2, service_rating=5, ambience_rating=4,
        value_rating=4, review_text="I like my pasta al dente, with a little bite, not overcooked mush. Large portions and good service did not make up for the disappointing pasta.",
        user_id=6, restaurant_id=3)
    fusi = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=5,
        value_rating=3, review_text="They had a full bar, so I was content.",
        user_id=7, restaurant_id=4)
    barb = Review(
        overall_rating=4, food_rating=4, service_rating=2, ambience_rating=2,
        value_rating=2, review_text="The chef did a good job of balancing flavors, but the food is a little expensive for the portion sizes. Ambience and service could use some improvement.",
        user_id=8, restaurant_id=4)
    gree = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=4,
        value_rating=5, review_text="One of my all-time favorite restaurants! My family and I go here once a month!",
        user_id=2, restaurant_id=4)
    tapa = Review(
        overall_rating=4, food_rating=5, service_rating=3, ambience_rating=4,
        value_rating=5, review_text="Food was great, service was OK.",
        user_id=3, restaurant_id=4)
    gril = Review(
        overall_rating=1, food_rating=1, service_rating=1, ambience_rating=1,
        value_rating=1, review_text="One of the absolute worst experiences of my life. I asked for some really simple substitutions to my entree, I just wanted to change the type of side, protein, and sauce on the dish, and my waiter said they were unable to do it. Unacceptable. I've never experienced such a thing! The customer is always right, right?",
        user_id=4, restaurant_id=5)
    comf = Review(
        overall_rating=3, food_rating=3, service_rating=5, ambience_rating=4,
        value_rating=3, review_text="My salmon was prepared really well, but the salad did not taste fresh. Our server, Tom, was really nice and friendly though",
        user_id=5, restaurant_id=5)
    burg = Review(
        overall_rating=2, food_rating=2, service_rating=5, ambience_rating=4,
        value_rating=4, review_text="I like my pasta al dente, with a little bite, not overcooked mush. Large portions and good service did not make up for the disappointing pasta.",
        user_id=6, restaurant_id=5)
    iris = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=5,
        value_rating=3, review_text="They had a full bar, so I was content.",
        user_id=7, restaurant_id=6)
    medi = Review(
        overall_rating=4, food_rating=4, service_rating=2, ambience_rating=2,
        value_rating=2, review_text="The chef did a good job of balancing flavors, but the food is a little expensive for the portion sizes. Ambience and service could use some improvement.",
        user_id=8, restaurant_id=6)
    thai = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=4,
        value_rating=5, review_text="One of my all-time favorite restaurants! My family and I go here once a month!",
        user_id=2, restaurant_id=7)
    asia = Review(
        overall_rating=4, food_rating=5, service_rating=3, ambience_rating=4,
        value_rating=5, review_text="Food was great, service was OK.",
        user_id=3, restaurant_id=7)
    texm = Review(
        overall_rating=1, food_rating=1, service_rating=1, ambience_rating=1,
        value_rating=1, review_text="One of the absolute worst experiences of my life. I asked for some really simple substitutions to my entree, I just wanted to change the type of side, protein, and sauce on the dish, and my waiter said they were unable to do it. Unacceptable. I've never experienced such a thing! The customer is always right, right?",
        user_id=4, restaurant_id=7)
    midd = Review(
        overall_rating=3, food_rating=3, service_rating=5, ambience_rating=4,
        value_rating=3, review_text="My salmon was prepared really well, but the salad did not taste fresh. Our server, Tom, was really nice and friendly though",
        user_id=5, restaurant_id=7)
    rama = Review(
        overall_rating=2, food_rating=2, service_rating=5, ambience_rating=4,
        value_rating=4, review_text="I like my pasta al dente, with a little bite, not overcooked mush. Large portions and good service did not make up for the disappointing pasta.",
        user_id=6, restaurant_id=8)
    sush = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=5,
        value_rating=3, review_text="They had a full bar, so I was content.",
        user_id=7, restaurant_id=8)
    hala = Review(
        overall_rating=4, food_rating=4, service_rating=2, ambience_rating=2,
        value_rating=2, review_text="The chef did a good job of balancing flavors, but the food is a little expensive for the portion sizes. Ambience and service could use some improvement.",
        user_id=8, restaurant_id=8)
    brea = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=4,
        value_rating=5, review_text="One of my all-time favorite restaurants! My family and I go here once a month!",
        user_id=2, restaurant_id=9)
    unsp = Review(
        overall_rating=4, food_rating=5, service_rating=3, ambience_rating=4,
        value_rating=5, review_text="Food was great, service was OK.",
        user_id=3, restaurant_id=9)
    a = Review(
        overall_rating=1, food_rating=1, service_rating=1, ambience_rating=1,
        value_rating=1, review_text="One of the absolute worst experiences of my life. I asked for some really simple substitutions to my entree, I just wanted to change the type of side, protein, and sauce on the dish, and my waiter said they were unable to do it. Unacceptable. I've never experienced such a thing! The customer is always right, right?",
        user_id=4, restaurant_id=10)
    b = Review(
        overall_rating=3, food_rating=3, service_rating=5, ambience_rating=4,
        value_rating=3, review_text="My salmon was prepared really well, but the salad did not taste fresh. Our server, Tom, was really nice and friendly though",
        user_id=5, restaurant_id=10)
    c = Review(
        overall_rating=2, food_rating=2, service_rating=5, ambience_rating=4,
        value_rating=4, review_text="I like my pasta al dente, with a little bite, not overcooked mush. Large portions and good service did not make up for the disappointing pasta.",
        user_id=6, restaurant_id=10)
    d = Review(
        overall_rating=5, food_rating=5, service_rating=5, ambience_rating=5,
        value_rating=3, review_text="They had a full bar, so I was content.",
        user_id=7, restaurant_id=10)

    db.session.add_all([amer, ital, stea, seaf, fren, indi, mexi, japa, brit, chin])
    db.session.add_all([span, pizz, fusi, barb, gree, tapa, gril, comf, burg, iris])
    db.session.add_all([medi, thai, asia, texm, midd, rama, sush, hala, brea, unsp])
    db.session.add_all([a, b, c, d])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the reviews table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()