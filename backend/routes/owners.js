const express = require("express");
const router = express.Router();


module.exports = ({ getRenters }) => {
  

  /* GET all renters */
   router.get("/owners/listings", (req, res) => {
    getRenters()
      .then((owners) => res.json(owners))
    // res.send("Owners");
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });


  return router;
};
