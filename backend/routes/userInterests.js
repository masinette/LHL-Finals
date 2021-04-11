const express = require("express");
const router = express.Router();

module.exports = ({
  addUserInterests
}) => {
  router.post("/:user_id", (req, res) => {
    addUserInterests(req.params.user_id , req.body) // body tbd when registration form is submitted array of interests?
      .then(results => res.json(results))
      .catch(err => res.json({error: err}))
  })

  return router;
}