const express = require("express");
const router = express.Router();

module.exports = ({
  getUserInterests,
  addUserInterests
}) => {
  router.get("/:user_id", (req, res) => {
    console.log(req.params)
    getUserInterests(req.params.user_id)
      .then(results => res.json(results))
      .catch(err => res.json({error: err}))
  })

  router.post("/:user_id", (req, res) => {
    addUserInterests(req.params.user_id , req.body) // body tbd when registration form is submitted array of interests?
      .then(results => res.json(results))
      .catch(err => res.json({error: err}))
  })

  return router;
}