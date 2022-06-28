from flask.cli import AppGroup
from .users import seed_users, undo_users
from .locations import seed_locations, undo_locations
from .cuisine_types import seed_cuisine_types, undo_cuisine_types

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_locations()
    seed_users()
    seed_cuisine_types()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_cuisine_types()
    undo_users()
    undo_locations()
    # Add other undo functions here
