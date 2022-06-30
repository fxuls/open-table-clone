from app.models import db, Image


# Adds 30 images as seeds to various restaurants
def seed_images():
    nyc = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656554980/Mare_Island_Brewing_Company_-_2021-09-16_-_Sarah_Stierch_07_dtgo7o.jpg", restaurant_id=1)
    la = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656555283/Desserts_and_Wine_c0ahpj.jpg", restaurant_id=2)
    chi = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656555153/Ricotta_Ravioli_served_with_cherry_tomato_sauce__an_Italian_dish_-_Gujarat_-_SHAILI_003_y29zpn.jpg", restaurant_id=2)
    hou = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656555281/Restaurant_in_Place_D_Youville__Quebec_City_yiwbgr.jpg", restaurant_id=5)
    phx = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656477456/Hamburger_20220502_002_xj1vfh.jpg", restaurant_id=1)
    san = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656554982/Bar_at_Grant_Grill_xj3c5e.jpg", restaurant_id=6)
    phl = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656555636/800px-La_Vaca_Loca_300_Bife_de_Chorizo_Sirloin_Steak_eeqdph.jpg", restaurant_id=3)
    sd = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656555679/397px-Steak_Dinner_1__Unsplash_ocozuc.jpg", restaurant_id=3)
    dal = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656477302/The_Greyhound__25863613813_pzuos0.jpg", restaurant_id=3)
    aus = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656476618/48519200_qt3day.jpg", restaurant_id=1)
    sja = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656476317/41843536_u9eshp.jpg", restaurant_id=1)
    fwt = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656383419/cld-sample-4.jpg", restaurant_id=1)
    jax = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656475699/23691513_rnfw8y.jpg", restaurant_id=4)
    clt = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656477302/The_Greyhound__25863613813_pzuos0.jpg", restaurant_id=4)
    col = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656476485/42911061_v1rvji.jpg", restaurant_id=4)
    ind = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556208/Tacos_veganos_surtidos_02_xjqs6x.jpg", restaurant_id=7)
    sf = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556205/800px-Grilled_chicken_tacos_qsji6d.jpg", restaurant_id=7)
    sea = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556194/Tacos_in_a_soft_tortilla_5_dkbaxw.jpg", restaurant_id=7)
    den = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556189/Shrimp_tacos_-_El_Dorado_Kitchen_-_Sarah_Stierch_e7vrr6.jpg", restaurant_id=7)
    was = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556109/450px-Yakitori1_biv9rs.jpg", restaurant_id=8)
    bos = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556107/800px-Suzume_Yakitori_1_mimkwk.jpg", restaurant_id=8)
    bal = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556107/Torisei_Yakitori_kgm4ik.jpg", restaurant_id=8)
    tuc = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556104/Yakitori_-_Massachusetts_pvxemx.jpg", restaurant_id=8)
    pit = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656383419/cld-sample-4.jpg", restaurant_id=9)
    cor = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656475699/23691513_rnfw8y.jpg", restaurant_id=10)
    ept = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656476485/42911061_v1rvji.jpg", restaurant_id=10)
    nas = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656554846/SimpleRestaurantMinsk_ncut7a.jpg", restaurant_id=11)
    okc = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656555285/Des_dolmas_arm%C3%A9niens_au_restaurant_Andr%C3%A9_Melkonyan__Lyon_ahqp8q.jpg", restaurant_id=21)
    lv = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656554852/Palm___Pine_Restaurant__New_Orleans__April_2022_rx71mb.jpg", restaurant_id=30)
    mia = Image(
        url="https://res.cloudinary.com/djsh50cka/image/upload/v1656556205/800px-Grilled_chicken_tacos_qsji6d.jpg", restaurant_id=30)

    db.session.add_all([nyc, la, chi, hou, phx, san, phl, sd, dal, okc])
    db.session.add_all([aus, sja, fwt, jax, clt, col, ind, sf, sea, lv])
    db.session.add_all([den, was, bos, bal, tuc, pit, cor, ept, nas, mia])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the images table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()