INSERT INTO 
  messages( sender_id, receiver_id, message, sentDate, room_id, applicant_id  )
  /* messages( sender_id, receiver_id, message, sentDate ) */

VALUES
(1, 2, 'Hi, I want to rent your place', '2021-04-11 17:12:17.488655', 1, 1 ),
(4, 2, 'Hi, I want to rent your place please', '2021-04-11 17:14:17.488655', 1, 4),
(2, 1, 'Awesome, I want you to rent my place', '2021-04-11 17:22:17.488655', 1, 1 ),
(2, 4, 'Oh sorry, I already found someone', '2021-04-11 17:42:17.488655', 1, 4 ),
(20, 18, 'Hello Kenneth, I would like discuss with you', '2021-04-15 17:12:17.488655', 8, 18 ),
(20, 15, 'Hello Allane, how are you today?', '2021-04-15 17:14:17.488655', 8, 15),
(15, 20, 'Good, yourself?', '2021-04-16 17:22:17.488655', 8, 15 ),
(20, 15, 'Amazing, I was wondering if you would be interested to rent my place', '2021-04-16 18:22:17.488655', 8, 15 ),
(15, 20, 'I am currently discussing with someone else but for sure we can talk. What kind of help you need?', '2021-04-16 19:22:17.488655', 8, 15 ),
(18, 20, 'Oh sorry, I already found a place', '2021-04-18 17:42:17.488655', 8, 18 );

  -- (1, 2, 'Hi, I want to rent your place', CURRENT_TIMESTAMP, 1),
  -- (2, 1, 'Awesome, I want you to rent my place', CURRENT_TIMESTAMP, 1),
  -- (1, 2, 'Is it still available?', CURRENT_TIMESTAMP, 1),
  -- (2, 1, 'Yes, it is when are you free to meet about it, and discuss arrangements?', CURRENT_TIMESTAMP, 1),
  -- (3, 5, 'Hello, I noticed we have a lot in common, and I would like to discuss moving in.', CURRENT_TIMESTAMP, 2),
  -- (5, 3, 'That is great! I see on your profile that you also play music! We should talk.', CURRENT_TIMESTAMP, 2),
  -- (3, 5, 'I play acoustic guitar. I can bring it with me when we meet to discuss arrangments', CURRENT_TIMESTAMP, 2),
  -- (7, 2, 'Hi, I am interested in coming to live with you', CURRENT_TIMESTAMP, 1),
  -- (7, 2, 'Can we chat sometime soon?', CURRENT_TIMESTAMP, 1),
  -- (7, 2, 'I am available tomorrow afternoon if you would like to meet.', CURRENT_TIMESTAMP, 1),
  -- (9, 2, 'Hi, are you still looking for a house companion?', CURRENT_TIMESTAMP, 1),
  -- (11, 8, 'Hi, I would like to rent your place', CURRENT_TIMESTAMP, 5),
  -- (1, 8, 'Hi, are you currently looking for a companion?', CURRENT_TIMESTAMP, 5);