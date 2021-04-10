INSERT INTO
rooms(user_id, latitude, longitude, title, description, roomSize, startDate, endDate, price, petFriendly, active, address)
VALUES
  (1, 43.762510, -79.366102, '1 Bedroom', 'Fully furnished bedroom in a 2000 sqft home. Comes with private bath and full access to household amenities(kitchen, living room, backyard).', 100, '2021-05-01', '2022-04-30', 500, true, false, '40 Davean Dr.'),
  (1, 43.762510, -79.366102, 'Full basement', 'Semi-furnished basement with full kitchen, bathroom and bedroom. Unit come with a separate entrance.', 450, '2021-07-01', '2022-06-30', 850, true, false, '40 Davean Dr.'),
  (6, 43.765670, -79.289580, 'Single Bedroom', 'unfurnished room with full access to shared living space. Chicken Coop with fresh eggs every morning!', 120, '2021-06-01', '2022-05-31', 375, true, false, '8 Sierra Dr.');
  
INSERT INTO 
rooms( user_id, title, description, latitude, longitude, roomSize, startDate, endDate, price, petFriendly, active, address )
VALUES
  (1, 'room for rent', 'cool room with 4 walls and a ceiling', 43.6532, 79.3932, 400, '2020-03-31', '2021-09-30', 450, false, true, '123 Nintendo Drive.'),
  (2, 'pretty room in historic Montreal', 'comfy room with a view', 45.5017, 73.5673, 400, '2021-03-31', '2022-09-30', 400, false, true, '97 Historic Drive.');
