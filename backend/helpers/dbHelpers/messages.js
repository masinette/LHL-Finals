// const { use } = require("../../routes");
const isUserOwner  = require("./isUserOwner");

module.exports = (db) => {
  const getMessages = () => {
    const query = {
      text: "SELECT * FROM messages",
    };
  console.log("Mache ti???", isUserOwner(2))
  // console.log(query)
    return db
      .query(query)
      .then((result) => {
        return result.rows
      })
      .catch((err) => err);
  };

//get all messages SENT BY user
  const getMessagesByUser = (user, is_owner) => {
    const query = {
      text: `SELECT * FROM messages WHERE sender_id = $1 OR receiver_id = $1 order by applicant_id`,
      values: [user],
    };

    return db
      .query(query)
      .then((result) => result.rows)
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
//get all messages SENT TO user
  // const getMessagesForUser = (user) => {
  //   const query = {
  //     text: `SELECT * FROM messages WHERE receiver_id = $1`,
  //     values: [user],
  // };

  //   return db
  //     .query(query)
  //     .then((result) => result.rows[0])
  //     .catch((err) => err);
  // };


  // /:user_id/room or applicant id
  const getMessageThread = (userid, searched_id, is_owner) => {
    let queryString = `SELECT * FROM messages WHERE (sender_id = $1 or receiver_id = $1) and (room_id = $2);`
    if (is_owner) {
      queryString = `SELECT * FROM messages WHERE (sender_id = $1 or receiver_id = $1) and (applicant_id = $2);`
    } else {

    }
    const query = {
      // text: `SELECT * FROM messages WHERE sender_id = $1 or receiver_id = $1;`,
      text: `SELECT * FROM messages WHERE (sender_id = $1 or receiver_id = $1) and (room_id = $2);`,
      values: [userid, searched_id]
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
    //getMessagesForUser,
    addMessage,
    getMessageThread
  };
  

};



//select messages by room
// SELECT * FROM messages WHERE sender_id = 2 or receiver_id = 2;

// SELECT * FROM messages WHERE sender_id = 1 or receiver_id = 1 order BY room_id = 1;

// SELECT * FROM messages WHERE (sender_id = 2 or receiver_id = 2) and (room_id = 1);