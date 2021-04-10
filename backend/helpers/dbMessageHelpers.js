module.exports = (db) => {
  const getMessages = () => {
    const query = {
      text: "SELECT * FROM messages",
    };

    return db
      .query(query)
      .then((result) => result.rows)
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

  const addMessage = (sender, reciever, message) => {
    const query = {
      text: `INSERT INTO messages (sender, reciever, message ) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [firstName, lastName, email, password],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

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
    getMessagePosts,
    getCities,
    getRooms,
    getRenters
  };
  

};
