\c travel_p3_dev;

CREATE TABLE IF NOT EXISTS landmarks (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255),
  name VARCHAR(255),
  formatted_address VARCHAR(255),
  description VARCHAR(16384)
);
