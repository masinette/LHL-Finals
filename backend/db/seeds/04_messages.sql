INSERT INTO 
  messages( sender_id, receiver_id, message, sentDate, room_id )

VALUES
  (1, 2, 'Hi, I want to rent your place', CURRENT_TIMESTAMP, 1),
  (2, 1, 'Awesome, I want you to rent my place', CURRENT_TIMESTAMP, 1),
  (1, 2, 'Is it still available?', CURRENT_TIMESTAMP, 1),
  (2, 1, 'Yes, it is when are you free to meet about it, and discuss arrangements?', CURRENT_TIMESTAMP, 1),
  (3, 5, 'Hello, I noticed we have a lot in common, and I would like to discuss moving in.', CURRENT_TIMESTAMP, 2),
  (5, 3, 'That is great! I see on your profile that you also play music! We should talk.', CURRENT_TIMESTAMP, 2),
  (3, 5, 'I play acoustic guitar. I can bring it with me when we meet to discuss arrangments', CURRENT_TIMESTAMP, 2),
  (7, 2, 'Hi, I am interested in coming to live with you', CURRENT_TIMESTAMP, 1),
  (7, 2, 'Can we chat sometime soon?', CURRENT_TIMESTAMP, 1),
  (7, 2, 'I am available tomorrow afternoon if you would like to meet.', CURRENT_TIMESTAMP, 1),
  (9, 2, 'Hi, are you still looking for a house companion?', CURRENT_TIMESTAMP, 1),
  (11, 8, 'Hi, I would like to rent your place', CURRENT_TIMESTAMP, 5),
  (1, 8, 'Hi, are you currently looking for a companion?', CURRENT_TIMESTAMP, 5);