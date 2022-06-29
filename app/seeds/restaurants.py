from app.models import db, Restaurant

# Adds 30 popular cuisine types to seed the database
def seed_restaurants():
    amer = Restaurant(
        name='BJ\'s Restaurant & Brewhouse', url='bjs-restaurant-and-brewhouse-corona',
        price=2, rating=0, capacity=10, address_line_1='2520 Tuscany Street',
        zip_code=92881, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656473190/25319500_th8py8.jpg',
        cuisine_id=1, opening_time_id=45, closing_time_id=96, location_id=27)
    ital = Restaurant(
        name='Marino Ristorante', url='marino-ristorante-la',
        price=3, rating=0, capacity=10, address_line_1='6001 Melrose Avenue',
        zip_code=90038, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656473865/47431254_vlscdv.jpg',
        cuisine_id=2, opening_time_id=47, closing_time_id=89, location_id=2)
    stea = Restaurant(
        name='STK - NYC - Midtown', url='stk-nyc-midtown-new-york',
        price=3, rating=0, capacity=10, address_line_1='1114 Avenue of the Americas',
        zip_code=10036, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656474071/23692732_qgwron.jpg',
        cuisine_id=3, opening_time_id=45, closing_time_id=93, location_id=1)
    seaf = Restaurant(
        name='King Crab House', url='king-crab-house-chicago',
        price=2, rating=0, capacity=10, address_line_1='1816 N. Halsted Street',
        zip_code=60614, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656474328/24939767_pav17i.jpg',
        cuisine_id=4, opening_time_id=61, closing_time_id=89, location_id=3)
    fren = Restaurant(
        name='Toulouse - Houston', url='toulouse-houston',
        price=3, rating=0, capacity=10, address_line_1='4720 E. Cactus Road', address_line_2='Suite E',
        zip_code=77027, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656474597/24425207_uxozmq.jpg',
        cuisine_id=5, opening_time_id=45, closing_time_id=89, location_id=4)
    indi = Restaurant(
        name='Marigold Maison', url='marigold-maison',
        price=2, rating=0, capacity=10, address_line_1='4444 Westheimer Road', address_line_2='Suite D118',
        zip_code=85032, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656474857/23674857_ihj1px.jpg',
        cuisine_id=6, opening_time_id=45, closing_time_id=89, location_id=5)
    mexi = Restaurant(
        name='Paloma Blanca Mexican Cuisine', url='paloma-blanca-mexican-cuisine',
        price=2, rating=0, capacity=10, address_line_1='5800 Broadway', address_line_2='Suite 300',
        zip_code=78209, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656475141/30570996_tnfszg.jpg',
        cuisine_id=7, opening_time_id=45, closing_time_id=89, location_id=6)
    japa = Restaurant(
        name='Yakitori Boy Japas - Philadelphia', url='yakitori-boy-japas-philadelphia',
        price=2, rating=0, capacity=10, address_line_1='211 N. 11th Street',
        zip_code=19107, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656475328/47644525_vnwmpw.jpg',
        cuisine_id=8, opening_time_id=45, closing_time_id=89, location_id=7)
    brit = Restaurant(
        name='Del Mar Rendezvous', url='del-mar-rendezvous-san-diego',
        price=2, rating=0, capacity=5, address_line_1='1555 Camino Del Mar', address_line_2='Suite 102',
        zip_code=92014, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656475699/23691513_rnfw8y.jpg',
        cuisine_id=9, opening_time_id=49, closing_time_id=81, location_id=8)
    chin = Restaurant(
        name='Jia Modern Chinese & Asian Lounge', url='jia-modern-chinese-and-asian-lounge-dallas',
        price=2, rating=0, capacity=10, address_line_1='8411 Preston Road', address_line_2='Suite 132',
        zip_code=75225, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656475328/47644525_vnwmpw.jpg',
        cuisine_id=10, opening_time_id=45, closing_time_id=89, location_id=9)
    span = Restaurant(
        name='Barcelona Bites', url='barcelona-bites-oklahoma-city',
        price=4, rating=0, capacity=10, address_line_1='211 N. 11th Street',
        zip_code=19107, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656476147/42434778_e2btt7.jpg',
        cuisine_id=11, opening_time_id=45, closing_time_id=89, location_id=10)
    pizz = Restaurant(
        name='Swift Pizza Co', url='swift-pizza-co-austin',
        price=2, rating=0, capacity=10, address_line_1='2520 Tuscany Street',
        zip_code=92881, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656476317/41843536_u9eshp.jpg',
        cuisine_id=12, opening_time_id=45, closing_time_id=96, location_id=11)
    fusi = Restaurant(
        name='Cold Fusion', url='cold-fusion-san-jose',
        price=3, rating=0, capacity=10, address_line_1='6001 Melrose Avenue',
        zip_code=90038, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656476485/42911061_v1rvji.jpg',
        cuisine_id=13, opening_time_id=47, closing_time_id=89, location_id=12)
    barb = Restaurant(
        name='Barbecue Joint', url='barbecue-joint-fort-worth',
        price=1, rating=0, capacity=10, address_line_1='1114 Avenue of the Americas',
        zip_code=10036, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656476618/48519200_qt3day.jpg',
        cuisine_id=14, opening_time_id=45, closing_time_id=93, location_id=13)
    gree = Restaurant(
        name='Gyros Bros', url='gyros-bros-jacksonville',
        price=1, rating=0, capacity=10, address_line_1='1816 N. Halsted Street',
        zip_code=60614, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656476774/2019_Marin_Greek_Festival_-_Sarah_Stierch_12_esnbsk.jpg',
        cuisine_id=15, opening_time_id=61, closing_time_id=89, location_id=14)
    tapa = Restaurant(
        name='Bacari Adams', url='bacari-adams-charlotte',
        price=3, rating=0, capacity=10, address_line_1='4720 E. Cactus Road', address_line_2='Suite E',
        zip_code=77027, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656476988/Tapas__2_aure29.jpg',
        cuisine_id=16, opening_time_id=45, closing_time_id=89, location_id=15)
    gril = Restaurant(
        name='Buffalo Grill', url='buffalo-grill-columbus',
        price=1, rating=0, capacity=10, address_line_1='4444 Westheimer Road', address_line_2='Suite D118',
        zip_code=85032, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656477130/Buffalo_Grill_Bar-le-Duc_rlm00g.jpg',
        cuisine_id=17, opening_time_id=45, closing_time_id=89, location_id=16)
    comf = Restaurant(
        name='Southern Comfort', url='southern-comfort-indianapolis',
        price=2, rating=0, capacity=10, address_line_1='5800 Broadway', address_line_2='Suite 300',
        zip_code=78209, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656477302/The_Greyhound__25863613813_pzuos0.jpg',
        cuisine_id=18, opening_time_id=45, closing_time_id=89, location_id=17)
    burg = Restaurant(
        name='Big Boy Burgers', url='big-boy-burgers-san-francisco',
        price=2, rating=0, capacity=10, address_line_1='211 N. 11th Street',
        zip_code=19107, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656477456/Hamburger_20220502_002_xj1vfh.jpg',
        cuisine_id=19, opening_time_id=45, closing_time_id=89, location_id=18)
    iris = Restaurant(
        name='O\'Malley\'s', url='omallys-seattle',
        price=2, rating=0, capacity=15, address_line_1='1555 Camino Del Mar', address_line_2='Suite 102',
        zip_code=92014, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656474328/24939767_pav17i.jpg',
        cuisine_id=20, opening_time_id=49, closing_time_id=95, location_id=19)
    medi = Restaurant(
        name='Modern Med', url='modern-med-las-vegas',
        price=4, rating=0, capacity=10, address_line_1='8411 Preston Road', address_line_2='Suite 132',
        zip_code=75225, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656477788/800px-Restaurante_Tlamanalli__24059690031_vmwgjf.jpg',
        cuisine_id=21, opening_time_id=45, closing_time_id=89, location_id=20)
    thai = Restaurant(
         name='King\'s Thai', url='kings-thai-denver',
        price=2, rating=0, capacity=10, address_line_1='211 N. 11th Street',
        zip_code=19107, preview_image_url='https://res.cloudinary.com/djsh50cka/image/upload/v1656477917/Thai_food_in_Las_Vegas_dvxrcl.jpg',
        cuisine_id=22, opening_time_id=45, closing_time_id=89, location_id=21)
    asia = Restaurant(
        type='Asian')
    texm = Restaurant(
        type='Tex-Mex')
    midd = Restaurant(
        type='Middle Eastern')
    rama = Restaurant(
        type='Ramen')
    sush = Restaurant(
        type='Sushi')
    hala = Restaurant(
        type='Halal')
    brea = Restaurant(
        type='Breakfast')
    unsp = Restaurant(
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
def undo_restaurants():
    db.session.execute('TRUNCATE restaurants RESTART IDENTITY CASCADE;')
    db.session.commit()