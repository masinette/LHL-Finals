const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  getRooms
} = require('../helpers/dataHelpers');

module.exports = ({
  getRooms
}) => {
  router.get("/", (req, res) => {
    getRooms()
      .then(rooms => res.json(rooms))
      .catch(err => res.json({
        error: err
      }))
  })

  return router
}
  