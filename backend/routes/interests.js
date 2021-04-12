const express = require("express");
const router = express.Router();

module.exports = ({
  //getInterests, 
  getInterestsbyUser
}) => {
  router.get("/", (req, res) => {
    getInterests()
      .then(interests => res.json(interests))
      .catch(err => res.json({error: err}))
  });

  router.get("/:user_id", (req, res) => {
    console.log('PARAMS', req.params)
    getInterestsbyUser()
      .then(interests => res.json(interests))
      .catch(err => res.json({error: err}))
  });

  return router;
}