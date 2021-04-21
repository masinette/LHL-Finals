# LivTogether

LivTogether started as solution to the current housing crisis in Canada, but has grown into a community initiative. We match seniors looking for companionship and a little extra help, with youth looking to rent a safe space and foster new friendships. Our goal is to help senior citizens and young adults to bond and form lasting relationships in our community.

---
## Screenshot & Demo
![Homepage](https://github.com/andyku25/LHL-Finals/blob/presentation-cleanup/Docs/LivTogether_home.png?raw=true)

![Renter Search](https://github.com/andyku25/LHL-Finals/blob/presentation-cleanup/Docs/LivTogether_search_msg.gif?raw=true)

![Owner msg reply](https://github.com/andyku25/LHL-Finals/blob/presentation-cleanup/Docs/LivTogether_Owner_msg_roommate_search.gif?raw=true)

![Edit owner details](https://github.com/andyku25/LHL-Finals/blob/presentation-cleanup/Docs/LivTogether_profile_details.gif?raw=true)

![Create new listing](https://github.com/andyku25/LHL-Finals/blob/presentation-cleanup/Docs/LivTogether_new-listing.gif?raw=true)

## Getting Started
1. Prerequisite:
    * PostgreSQL - can be installed via [postgreSQL](https://www.postgresql.org/download/) documention link  
2. Clone this project locally
3. Install dependencies for both front and backend `npm install` or `npm i`
4. Create/rename `.env` files using the `.env.example` file for both front and backend. Using the environment variables that are available for your setup.
5. Create and seed the local DB using commands `npm run db:reset`
6. Start the backend server using `npm run dev` and start the frontend client using `npm start`. Doing so should open a browser to [http://localhost:3000](http://localhost:3000).

## Key Dependencies
* Backend:
  * Node 10.X or above
  * Express 4.X
* Frontend:
  * React 17.X
  * axios
  * @react-google-maps/api 2.1.X
  * cloudinary-react 1.7.0

## Contributors
* [masinette](https://github.com/masinette)
* [mclmnop](https://github.com/mclmnop)
* [andyku25](https://github.com/andyku25)