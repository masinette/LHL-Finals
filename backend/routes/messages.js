const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getMessages, getMessageByUser, addMessage, getMessagePosts }) => {
  /* GET messages */
  router.get("/messages", (req, res) => {
    getMessages()
      .then((messages) => res.json(messages))
      // .then(res.send("Messages"))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/posts", (req, res) => {
    getMessagePosts()
      .then((messagesPosts) => {
        const formattedPosts = getPostsByUsers(messagesPosts);
        res.json(formattedPosts);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });


  return router;
};
