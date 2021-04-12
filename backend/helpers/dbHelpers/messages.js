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

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };


  const getMessageThread = (user) => {
    const query = {
      text: `SELECT * FROM messages WHERE sender_id = $1 or receiver_id = $1;`,
      values: [user]
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
// SELECT * FROM messages WHERE sender_id = 1 or receiver_id = 1;

// SELECT * FROM messages WHERE sender_id = 1 or receiver_id = 1 order BY room_id = 1;