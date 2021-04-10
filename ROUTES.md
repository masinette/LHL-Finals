# Backend 
/api/listings - GET - List all rooms ?search parameters -- Mentor ?? or api/renters....
/api/listings/ - POST - new listing
/api/listings/:listing_id - GET - get listing item
/api/listings/:listing_id - PUT - update listing


/api/users - GET all users
/api/users/register - POST - new user
/api/users/login - POST - login
/api/users/logout - POST - logout
/api/users/authenticate - POST - cookie info
/api/users/:user_id - GET - get user id
/api/users/:user_id - PUT - update user

/cities/id - GET -coordinates for a city

/api/messages - GET all messages ?recipient_id=id&listing=listing_id
/api/messages/ - POST - new message

/api/interests - GET all interests names (for registration survey)

/api/renters/listings -  GET all rooms
/api/owners/listings - GET all renters

# Frontend routes (views)

- /
- /login
- /register
- /register/survey
- /messages
- /messages/thread
- /search
- /search/id
- /search/id/edit -----Edit listing
- /profile
- /profile/id/edit
- /listing/new