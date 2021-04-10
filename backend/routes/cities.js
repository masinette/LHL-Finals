const express = require("express");
const dbHelpers = require("../helpers/dbMessageHelpers");
const router = express.Router();

module.exports = ({ getCities }) => {
  /* GET cities */
  router.get("/cities", (req, res) => {
    // res.json("city: Cities");
    res.json("city: Cities");

  });

  router.get("/cities/:id", (req, res) => {
    const id = req.params.id;
    // res.send(`Cities ${id}`);

    getCities()
      .then((cities) => res.json(cities))
      // .then(res.send("Cities"))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );

  });

  return router;
};















// app.get("/urls/:shortURL", (req, res) => {
//   const shortURL = req.params.shortURL;
//   const templateVars = { shortURL: shortURL, longURL: urlDatabase[shortURL].longURL, user: users[req.session["user_id"]] };
//   const id = req.session["user_id"];

//   //if current user_id is in database, render user specific urls_show page with their own urls list
//   if (id && (urlDatabase[shortURL].userID === id)) {
//     res.render("urls_show", templateVars);
//   } else {
//     //if user is not logged in, or not in database, send error message
//     res.send("Please register (or login) to see your list");
//   }
// });
