INSERT INTO
rooms(user_id, latitude, longitude, title, description, room_size, start_date, end_date, price, is_pet_friendly, active, address, city_id)
VALUES
  (22, 43.762510, -79.366102, '1 Bedroom', 'Fully furnished bedroom in a 2000 sqft home. Comes with private bath and full access to household amenities(kitchen, living room, backyard).', 500, '2021-05-01', '2022-04-30', 500, true, true, '40 Davean Dr.', 1),
  (9, 43.762520, -79.365102, 'Full basement', 'Semi-furnished basement with full kitchen, bathroom and bedroom. Unit come with a separate entrance.', 450, '2021-07-01', '2022-06-30', 850, true, true, '40 Davean Dr.', 1),
  (23, 43.644053, -79.390124, 'Single Bedroom', 'Unfurnished room with full access to shared living space. Chicken Coop with fresh eggs every morning!', 400, '2021-06-01', '2022-05-31', 375, true, true, '569 allard', 1),
  (1, 43.664130, -79.324743, 'Single Private Bedroom', 'Furnished room with shared bathroom and kitchen.', 350, '2021-06-01', '2022-05-31', 200, true, true, '1363 Queen Street E', 1),
  (21, 43.666444, -79.416894, 'Shared Basement with Private Bedroom', 'Fully furnished basement with shared living and kitchen space with another tenent.', 150, '2021-06-15', '2022-07-31', 250, false, true, '763 Manning Ave', 1);
  
INSERT INTO 
rooms( user_id, title, description, latitude, longitude, room_size, start_date, end_date, price, is_pet_friendly, active, address, city_id )
VALUES
  (6, 'room for rent', 'cool room with 4 walls and a ceiling', 45.436824, -73.625063, 500, '2020-03-31', '2021-09-30', 450, false, true, '999 newman', 4),
  (8, 'pretty room in historic Montreal', 'comfy room with a view', 45.502972, -73.696210, 500, '2021-03-31', '2022-09-30', 400, false, true, '999 bertrand', 4),
  (17, 'large room ', 'very large and with another room available for manual work or office work', 51.0447, -114.0719, 400, '2021-04-30', '2022-09-30', 400, true, true, '1330 8 St SW', 3), 
  (20, 'large room ', 'very large and with another room available for manual work or office work', 49.260693, -123.099867, 400, '2021-05-30', '2024-09-30', 600, true, true, '315 10 Avenue', 2),
  (20, 'Low cost housing', 'Great location in the heart of Toronto, perfect for students', 43.663768, -79.404285, 150, '2021-08-30', '2024-09-30', 100, true, true, '206 Robert Street', 1);

