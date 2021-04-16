const express = require("express");
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getMessages, getMessagesByUser, addMessage, getMessageThread,  }) => {

//get all messages from the database
  router.get("/", (req, res) => {
     console.log("QUERYONE",req.query)
    getMessages()
      .then((messages) => res.json(messages))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  /*new message NEEDED body params: sender_id, receiver_id, message, room_id, applicant_id -- if I am owner and initiating the thread, room id null, applicant = me */
  router.post("/", (req, res) => {
    console.log("BODYYYYY", req.body)

    addMessage(req.body)
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) =>
      res.json({
        error: err.message,
      })
    );
  });

//get all messages in users INBOX possible sort function after gettMessages
 router.get("/:userid", (req, res) => {
   const userid = req.params.userid;
    getMessagesByUser(userid)
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


//get conversation interl_id === When first message is sent, the id of the user who receives it. Currently stored in applicant_id
//  router.get("/thread/:userid/:interl_id", (req, res) => {

  router.get(`/:userid/:searched_id`, (req, res) => {

   const userid = req.params.userid;
   const searched_id = req.params.searched_id;
   const is_owner = req.query.is_owner;
   //const is_owner = JSON.parse(req.params.is_owner);

   //console.log("QUERY thread",is_owner)

    getMessageThread(userid, searched_id, true)
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
  // router.post("/:id/new", (req, res) => {
  //   const { sender_id, receiver_id, message, sentDate } = req.body;
  //     addMessage(sender_id, receiver_id, message, sentDate)
  //     .then((messages) => {
  //       res.json(messages);
  //     })
  //     .catch((err) =>
  //       res.json({
  //         error: err.message,
  //       })
  //     );

  // });






  return router;
};
