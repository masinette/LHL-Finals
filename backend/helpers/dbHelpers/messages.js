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

  const getMessageByUser = (user) => {
    const query = {
      text: `SELECT * FROM messages WHERE user = $1`,
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

// WORK IN PROGRESS
  const getMessagePosts = () => {
    const query = {
      text: `SELECT messages.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
      FROM messages
      INNER JOIN posts
      ON messages.id = posts.user_id`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
// WORK IN PROGRESS

  return {
    getMessages,
    getMessageByUser,
    addMessage,
    getMessagePosts
  };
  

};
