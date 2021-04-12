const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getMessages, getMessagesByUser, getMessagesForUser, addMessage, getMessageThread }) => {

//get all messages from the database
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


// ************ ONLY SHOWING THE FIRST MESSAGES RECEIVED BY USER ****************
//get all messages in users INBOX
 router.get("/inbox/:userid", (req, res) => {
   const userid = req.params.userid;
    getMessagesForUser(userid)
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


//get conversation
 router.get("/thread/:userid", (req, res) => {
   const userid = req.params.userid;
    getMessageThread(userid)
      .then((messages) => {
      // console.log("MESSAGES",messages)
      res.json(messages)})

      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });



//add new messages to the database
  router.post("/:id/new", (req, res) => {
    const { sender_id, receiver_id, message, sentDate } = req.body;
      addMessage(sender_id, receiver_id, message, sentDate)
      .then((messages) => {
        res.json(messages);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );

  });






  return router;
};
