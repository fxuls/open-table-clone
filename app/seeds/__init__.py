from flask.cli import AppGroup
from .users import seed_users, undo_users
from .locations import seed_locations, undo_locations
from .cuisine_types import seed_cuisine_types, undo_cuisine_types
from .timeslots import seed_timeslots, undo_timeslots
from .occasions import seed_occasions, undo_occasions
from .restaurants import seed_restaurants, undo_restaurants
from .images import seed_images, undo_images
from .reviews import seed_reviews, undo_reviews
from .reservations import seed_reservations, undo_reservations
from .review_links import seed_review_links, undo_review_links

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_locations()
    seed_users()
    seed_cuisine_types()
    seed_timeslots()
    seed_occasions()
    seed_restaurants()
    seed_images()
    seed_reviews()
    seed_reservations()
    seed_review_links()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_review_links()
    undo_reservations()
    undo_reviews
    undo_images()
    undo_restaurants()
    undo_occasions()
    undo_timeslots()
    undo_cuisine_types()
    undo_users()
    undo_locations()
    # Add other undo functions here
