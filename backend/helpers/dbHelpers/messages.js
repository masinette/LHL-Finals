// const { use } = require("../../routes");

module.exports = (db) => {
  const getMessages = () => {
    const query = {
      text: "SELECT * FROM messages",
    };
  // console.log(query)
    return db
      .query(query)
      .then((result) => {
        return result.rows
      })
      .catch((err) => err);
  };

//get all messages SENT BY user
  const getMessagesByUser = (user) => {
    const query = {
      text: `SELECT * FROM messages WHERE sender_id = $1`,
      values: [user],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //still need to figure where we'take room/aplicant
  const addMessage = (body) => {
    let { sender_id, receiver_id, message, room_id, applicant_id } = body;
    if(!applicant_id){
      applicant_id = null
    }
    if(!room_id){
      room_id = null
    }
    const query = {
      text: `INSERT INTO messages (sender_id, receiver_id, message, room_id, applicant_id ) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [sender_id, receiver_id, message, room_id, applicant_id ],
//get all messages SENT TO user
  const getMessagesForUser = (user) => {
    const query = {
      text: `SELECT * FROM messages WHERE receiver_id = $1`,
      values: [user],
  };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

//add new message 
  const addMessage = (sender_id, receiver_id, message, sentDate ) => {
    const query = {
      text: `INSERT INTO messages (sender_id, receiver_id, message, sentDate ) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [sender_id, receiver_id, message, sentDate],
    };
    console.log(query)
    return db
      .query(query)
      .then((result) => {
      console.log("yo wtf", result) 
      result.rows[0]
      })
      .catch((err) => err);
  };


  const getMessageThread = (userid, roomid) => {
    const query = {
      // text: `SELECT * FROM messages WHERE sender_id = $1 or receiver_id = $1;`,
      text: `SELECT * FROM messages WHERE (sender_id = $1 or receiver_id = $1) and (room_id = $2);`,
      values: [userid, roomid]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      console.log("RESULT",result)
      .catch((err) => err);
  };



  return {
    getMessages,
    getMessagesByUser,
    getMessagesForUser,
    addMessage,
    getMessageThread
  };
  

};



//select messages by room
// SELECT * FROM messages WHERE sender_id = 2 or receiver_id = 2;

// SELECT * FROM messages WHERE sender_id = 1 or receiver_id = 1 order BY room_id = 1;

// SELECT * FROM messages WHERE (sender_id = 2 or receiver_id = 2) and (room_id = 1);