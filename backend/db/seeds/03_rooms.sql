INSERT INTO
rooms(user_id, latitude, longitude, title, description, roomSize, startDate, endDate, price, petFriendly, active, address, city_id)
VALUES
  (1, 43.762510, -79.366102, '1 Bedroom', 'Fully furnished bedroom in a 2000 sqft home. Comes with private bath and full access to household amenities(kitchen, l iving room, backyard).', 100, '2021-05-01', '2022-04-30', 500, true, true, '40 Davean Dr.', 1),
  (9, 43.762510, -79.366102, 'Full basement', 'Semi-furnished basement with full kitchen, bathroom and bedroom. Unit come with a separate entrance.', 450, '2021-07-01', '2022-06-30', 850, true, false, '40 Davean Dr.', 1),
  (6, 45.445729, -73.573923, 'Single Bedroom', 'Unfurnished room with full access to shared living space. Chicken Coop with fresh eggs every morning!', 120, '2021-06-01', '2022-05-31', 375, true, true, '569 allard', 4),
  (11, 51.076200, -114.113379, 'Single Bedroom', 'Furnished room with shared bathroom and kitchen.', 80, '2021-06-01', '2022-05-31', 200, true, true, '26 Ave NW', 3);
  
INSERT INTO 
rooms( user_id, title, description, latitude, longitude, roomSize, startDate, endDate, price, petFriendly, active, address, city_id )
VALUES
  (7, 'room for rent', 'cool room with 4 walls and a ceiling', 45.436824, -73.625063, 400, '2020-03-31', '2021-09-30', 450, false, true, '999 newman', 4),
  (8, 'pretty room in historic Montreal', 'comfy room with a view', 45.502972, -73.696210, 400, '2021-03-31', '2022-09-30', 400, false, true, '999 bertrand', 4);
