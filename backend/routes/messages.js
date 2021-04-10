const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getMessages, getMessageByUser, addMessage, getMessagePosts }) => {
  /* GET messages */
  router.get("/", (req, res) => {
    getMessages()
      .then((messages) => {
      // console.log("MESSAGES",messages)
      res.json(messages)
  })
      // .then(res.send("Messages"))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const [ sender, reciever, message, sentDate ] = req.body;

      getMessages()
      .then((messages) => {
        res.json(getMessageByUser);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
    // getMessagePosts()
    //   .then((messagesPosts) => {
    //     const formattedPosts = getPostsByUsers(messagesPosts);
    //     res.json(formattedPosts);
    //   })
    //   .catch((err) =>
    //     res.json({
    //       error: err.message,
    //     })
    //   );
  });


  return router;
};
