module.exports = (db) => {
  const getMessages = () => {
    const query = {
      text: "SELECT * FROM messages",
    };
// console.log(query)
    return db
      .query(query)
      .then((result) => {
        // console.log("RESULT",result)
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

  const addMessage = (sender, receiver, message, sentDate ) => {
    const query = {
      text: `INSERT INTO messages (sender, receiver, message, sentDate ) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [sender, receiver, message, sentDate],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  
  const getCities = () => {
    const query = {
      text: "SELECT * FROM cities",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };


   const getRooms = () => {
    const query = {
      text: "SELECT * FROM rooms",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

   const getRenters = () => {
    const query = {
      text: "SELECT * FROM users WHERE owner = false",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };








  return {
    getMessages,
    getMessageByUser,
    addMessage,
    getCities,
    getRooms,
    getRenters
  };
  

};
