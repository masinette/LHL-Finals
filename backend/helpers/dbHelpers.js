module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
//new user form registering, still missing description, address etc
  const addUser = (firstName, lastName, is_owner, email, password) => {
    const query = {
      text: `INSERT INTO users (firstname, lastname, is_owner, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [firstName, lastName, is_owner, email, password],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("apres DB", result.rows[0])
        result.rows[0]})
      .catch((err) => err);
  };

  // const getUsersPosts = () => {
  //   const query = {
  //     text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
  //     FROM users
  //     INNER JOIN posts
  //     ON users.id = posts.user_id`,
  //   };

  //   return db
  //     .query(query)
  //     .then((result) => result.rows)
  //     .catch((err) => err);
  // };

  const getRooms = () => {
    const query = {
      text: `SELECT * FROM rooms;`
    }

    return db
      .query(query)
      .then((result) => result.rows)
      .catch(err => err);
  }

  return {
    getUsers,
    getUserByEmail,
    addUser,
    getRooms,
  };
};
