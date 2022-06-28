from datetime import time
from app.models import db, Timeslot

# Adds all possible timeslots to database
def seed_timeslots():
    a = Timeslot(
        timeslot=time(hour=0, minute=0))
    b = Timeslot(
        timeslot=time(hour=0, minute=15))
    c = Timeslot(
        timeslot=time(hour=0, minute=30))
    d = Timeslot(
        timeslot=time(hour=0, minute=45))
    e = Timeslot(
        timeslot=time(hour=1, minute=0))
    f = Timeslot(
        timeslot=time(hour=1, minute=15))
    g = Timeslot(
        timeslot=time(hour=1, minute=30))
    h = Timeslot(
        timeslot=time(hour=1, minute=45))
    i = Timeslot(
        timeslot=time(hour=2, minute=0))
    j = Timeslot(
        timeslot=time(hour=2, minute=15))
    k = Timeslot(
        timeslot=time(hour=2, minute=30))
    l = Timeslot(
        timeslot=time(hour=2, minute=45))
    m = Timeslot(
        timeslot=time(hour=3, minute=0))
    n = Timeslot(
        timeslot=time(hour=3, minute=15))
    o = Timeslot(
        timeslot=time(hour=3, minute=30))
    p = Timeslot(
        timeslot=time(hour=3, minute=45))
    q = Timeslot(
        timeslot=time(hour=4, minute=0))
    r = Timeslot(
        timeslot=time(hour=4, minute=15))
    s = Timeslot(
        timeslot=time(hour=4, minute=30))
    t = Timeslot(
        timeslot=time(hour=4, minute=45))
    u = Timeslot(
        timeslot=time(hour=5, minute=0))
    v = Timeslot(
        timeslot=time(hour=5, minute=15))
    w = Timeslot(
        timeslot=time(hour=5, minute=30))
    x = Timeslot(
        timeslot=time(hour=5, minute=45))
    y = Timeslot(
        timeslot=time(hour=6, minute=0))
    z = Timeslot(
        timeslot=time(hour=6, minute=15))
    aa = Timeslot(
        timeslot=time(hour=6, minute=30))
    ab = Timeslot(
        timeslot=time(hour=6, minute=45))
    ac = Timeslot(
        timeslot=time(hour=7, minute=0))
    ad = Timeslot(
        timeslot=time(hour=7, minute=15))
    af = Timeslot(
        timeslot=time(hour=7, minute=30))
    ag = Timeslot(
        timeslot=time(hour=7, minute=45))
    ah = Timeslot(
        timeslot=time(hour=8, minute=0))
    ai = Timeslot(
        timeslot=time(hour=8, minute=15))
    aj = Timeslot(
        timeslot=time(hour=8, minute=30))
    ak = Timeslot(
        timeslot=time(hour=8, minute=45))
    al = Timeslot(
        timeslot=time(hour=9, minute=0))
    am = Timeslot(
        timeslot=time(hour=9, minute=15))
    an = Timeslot(
        timeslot=time(hour=9, minute=30))
    ao = Timeslot(
        timeslot=time(hour=9, minute=45))
    ap = Timeslot(
        timeslot=time(hour=10, minute=0))
    aq = Timeslot(
        timeslot=time(hour=10, minute=15))
    ar = Timeslot(
        timeslot=time(hour=10, minute=30))
    at = Timeslot(
        timeslot=time(hour=10, minute=45))
    au = Timeslot(
        timeslot=time(hour=11, minute=0))
    av = Timeslot(
        timeslot=time(hour=11, minute=15))
    aw = Timeslot(
        timeslot=time(hour=11, minute=30))
    ax = Timeslot(
        timeslot=time(hour=11, minute=45))
    ay = Timeslot(
        timeslot=time(hour=12, minute=0))
    az = Timeslot(
        timeslot=time(hour=12, minute=15))
    ba = Timeslot(
        timeslot=time(hour=12, minute=30))
    bc = Timeslot(
        timeslot=time(hour=12, minute=45))
    bd = Timeslot(
        timeslot=time(hour=13, minute=0))
    be = Timeslot(
        timeslot=time(hour=13, minute=15))
    bf = Timeslot(
        timeslot=time(hour=13, minute=30))
    bg = Timeslot(
        timeslot=time(hour=13, minute=45))
    bh = Timeslot(
        timeslot=time(hour=14, minute=0))
    bi = Timeslot(
        timeslot=time(hour=14, minute=15))
    bj = Timeslot(
        timeslot=time(hour=14, minute=30))
    bk = Timeslot(
        timeslot=time(hour=14, minute=45))
    bl = Timeslot(
        timeslot=time(hour=15, minute=0))
    bm = Timeslot(
        timeslot=time(hour=15, minute=15))
    bn = Timeslot(
        timeslot=time(hour=15, minute=30))
    bo = Timeslot(
        timeslot=time(hour=15, minute=45))
    bp = Timeslot(
        timeslot=time(hour=16, minute=0))
    bq = Timeslot(
        timeslot=time(hour=16, minute=15))
    br = Timeslot(
        timeslot=time(hour=16, minute=30))
    bs = Timeslot(
        timeslot=time(hour=16, minute=45))
    bt = Timeslot(
        timeslot=time(hour=17, minute=0))
    bu = Timeslot(
        timeslot=time(hour=17, minute=15))
    bv = Timeslot(
        timeslot=time(hour=17, minute=30))
    bw = Timeslot(
        timeslot=time(hour=17, minute=45))
    bx = Timeslot(
        timeslot=time(hour=18, minute=0))
    by = Timeslot(
        timeslot=time(hour=18, minute=15))
    bz = Timeslot(
        timeslot=time(hour=18, minute=30))
    ca = Timeslot(
        timeslot=time(hour=18, minute=45))
    cb = Timeslot(
        timeslot=time(hour=19, minute=0))
    cc = Timeslot(
        timeslot=time(hour=19, minute=15))
    cd = Timeslot(
        timeslot=time(hour=19, minute=30))
    ce = Timeslot(
        timeslot=time(hour=19, minute=45))
    cf = Timeslot(
        timeslot=time(hour=20, minute=0))
    cg = Timeslot(
        timeslot=time(hour=20, minute=15))
    ch = Timeslot(
        timeslot=time(hour=20, minute=30))
    ci = Timeslot(
        timeslot=time(hour=20, minute=45))
    cj = Timeslot(
        timeslot=time(hour=21, minute=0))
    ck = Timeslot(
        timeslot=time(hour=21, minute=15))
    cl = Timeslot(
        timeslot=time(hour=21, minute=30))
    cm = Timeslot(
        timeslot=time(hour=21, minute=45))
    cn = Timeslot(
        timeslot=time(hour=22, minute=0))
    co = Timeslot(
        timeslot=time(hour=22, minute=15))
    cp = Timeslot(
        timeslot=time(hour=22, minute=30))
    cq = Timeslot(
        timeslot=time(hour=22, minute=45))
    cr = Timeslot(
        timeslot=time(hour=23, minute=0))
    cs = Timeslot(
        timeslot=time(hour=23, minute=15))
    ct = Timeslot(
        timeslot=time(hour=23, minute=30))
    cu = Timeslot(
        timeslot=time(hour=23, minute=45))



    db.session.add_all([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t])
    db.session.add_all([u, v, w, x, y, z, aa, ab, ac, ad, af, ag, ah, ai, aj, ak])
    db.session.add_all([al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, ba])
    db.session.add_all([bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq])
    db.session.add_all([br, bs, bt, bu, bv, bw, bx, by, bz, ca, cb, cc, cd, ce, cf])
    db.session.add_all([cg, ch, ci, cj, ck, cl, cm, cn, co, cp, cq, cr, cs, ct, cu])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_timeslots():
    db.session.execute('TRUNCATE timeslots RESTART IDENTITY CASCADE;')
    db.session.commit()