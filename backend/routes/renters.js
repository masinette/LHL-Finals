const express = require("express");
const router = express.Router();
const client = require("../db/index")


module.exports = ({ getRooms }) => {

  /* GET all rooms */
  
  router.get("/renters/listings", (req, res) => {
    getRooms()
      .then((rooms) => res.json(rooms))
    // res.send("Renters");
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
