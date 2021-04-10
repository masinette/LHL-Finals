const express = require("express");
const router = express.Router();

module.exports = ({
  getInterests
}) => {
  router.get("/", (req, res) => {
    getInterests()
      .then(interests => res.json(interests))
      .catch(err => res.json({error: err}))
  })

  return router;
}