-- psql -f db/migrations/migration.sql
-- psql -f db/seeds/seed.sql
\c travel_p3_dev;

INSERT INTO landmarks (city, name, formatted_address, description) VALUES
  ('New York City', 'Empire State Building', '350 5th Ave, New York, NY 10118, United States', 'This building is very tall, it is right in the center of New York.'),
  ('New York City', 'Top of The Rock', '30 Rockefeller Plaza, New York, NY 10020, United States', 'This is another building called Top of the Rock.'),
  ('New York City', 'Central Park', 'New York, NY, United States', 'I like this park it is huge and you can do a lot things here'),
  ('New York City', 'Flatiron Building', '175 5th Ave, New York, NY 10010, United States', 'I got to school here, I am working right now couple of blocks away.'),
  ('New York City', 'Chrysler Building', '405 Lexington Ave, New York, NY 10174, United States', 'Never been here, would want to experience going here for the first time.'),
  ('Washington DC', 'The White House', '1600 Pennsylvania Ave NW, Washington, DC 20500, United States', 'I hope I can stop by the White House one day, too bad it is so far away.')

