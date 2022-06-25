"""Reservations

Revision ID: 1540bfc4ce9a
Revises: 2499b537799e
Create Date: 2022-06-25 17:13:02.012302

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1540bfc4ce9a'
down_revision = '2499b537799e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('reservations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('party_size', sa.Integer(), nullable=False),
    sa.Column('day', sa.Date(), nullable=False),
    sa.Column('special_request', sa.String(length=600), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('restaurant_id', sa.Integer(), nullable=False),
    sa.Column('timeslot_id', sa.Integer(), nullable=False),
    sa.Column('occasion_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['occasion_id'], ['occasions.id'], ),
    sa.ForeignKeyConstraint(['restaurant_id'], ['restaurants.id'], ),
    sa.ForeignKeyConstraint(['timeslot_id'], ['timeslots.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reservations')
    # ### end Alembic commands ###