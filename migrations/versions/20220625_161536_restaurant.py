"""Restaurant

Revision ID: b5c9fef3dd70
Revises: 3e5a101f14e0
Create Date: 2022-06-25 16:15:36.845179

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b5c9fef3dd70'
down_revision = '3e5a101f14e0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('restaurants',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=70), nullable=False),
    sa.Column('url', sa.String(length=120), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Float(precision=2), nullable=True),
    sa.Column('capacity', sa.Integer(), nullable=True),
    sa.Column('address_line_1', sa.String(length=85), nullable=False),
    sa.Column('address_line_2', sa.String(length=85), nullable=True),
    sa.Column('zip_code', sa.Integer(), nullable=False),
    sa.Column('reservation_notes', sa.String(length=255), nullable=True),
    sa.Column('preview_image_url', sa.String(length=120), nullable=True),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.Column('cuisine_id', sa.Integer(), nullable=True),
    sa.Column('opening_time_id', sa.Integer(), nullable=False),
    sa.Column('closing_time_id', sa.Integer(), nullable=False),
    sa.Column('location_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['closing_time_id'], ['timeslots.id'], ),
    sa.ForeignKeyConstraint(['cuisine_id'], ['cuisine_types.id'], ),
    sa.ForeignKeyConstraint(['location_id'], ['locations.id'], ),
    sa.ForeignKeyConstraint(['opening_time_id'], ['timeslots.id'], ),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('url')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('restaurants')
    # ### end Alembic commands ###
