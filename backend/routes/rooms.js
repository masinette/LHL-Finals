const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  getRooms
} = require('../helpers/dbHelpers/rooms');

module.exports = ({
  getRooms,
  getRoom
}) => {
  router.get("/", (req, res) => {
    getRooms()
      .then(rooms => res.json(rooms))
      .catch(err => res.json({
        error: err
      }))
  })

  router.get("/:id", (req, res) => {
    console.log(req.params.id)
    getRoom(req.params.id)
      .then(rooms => res.json(rooms))
      .catch(err => res.json({
        error: err
      }))
  })

  return router
}
  