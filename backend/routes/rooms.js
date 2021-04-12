const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  getRooms
} = require('../helpers/dbHelpers/rooms');

module.exports = ({
  getRooms,
  getRoom,
  addRoom,
  updateRoom
}) => {
  router.get("/", (req, res) => {
    getRooms(req.query)
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
  
  router.post("/", (req, res) => {
    addRoom(req.body)
    .then(room => res.send(room))
    .catch(err => console.error(err))
  })

  router.put("/:id", (req, res) => {
    console.log(req.params.id)
    updateRoom(req.body, req.params.id)
      .then(room => res.json(room))
      .catch(err => res.json({
        error: err
      }))
  })

  return router
}
  