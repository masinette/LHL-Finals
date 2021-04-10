// const { use } = require("../routes");

module.exports = (db) => {

  /* GET users listing with query params http://localhost:3001/api/users?city=Montreal&level=2 */
  const getUsers = (params) => {
    console.log("PAAARAMS", params.level)
    const queryParams = [params.city]
    let queryString = `
      SELECT * FROM users
      WHERE CITY= $1 
      AND `
    if (Array.isArray(params.level)){
      params.level.forEach((element, index) => {
        queryParams.push(element)
        queryString += `level = $${queryParams.length}`
        if (params.level[index + 1]) {
          queryString += " OR "
        }
      });
    } else {
      queryParams.push(params.level)
      queryString += `level = $${queryParams.length}`
    }

    const query = {
      text: queryString,
      values: queryParams
    };
    console.log("QUERY", query)

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //returns user with specified ID  
  const getUser = (id) => {
    const query = {
      text: `SELECT * FROM users WHERE id = $1`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //returns user with specified email  
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

  //creates new user
  const addUser = (body) => {
    const { firstName, lastName, is_owner, level, address, city, description, email, password } = body
    const query = {
      text: `
      INSERT INTO users (firstname, lastname, is_owner, level, address, city, description, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING *
      `,
      values: [firstName, lastName, is_owner, level, address, city, description, email, password],
    };
    console.log("QUERY", query)
    return db
      .query(query)
      .then((result) => {
        console.log("apres DB", result.rows[0])
        result.rows[0]})
      .catch((err) => err);
  };

  //edits user
  const updateUserDetails = (userID, params) => {
    let queryParams = [userID]
    let queryString = "UPDATE users SET "
    let keys = [];
    let values = [];
    for (let key in params) {
      if (params[key] !== '') {
        keys.push(key);
        queryParams.push(params[key]);
        values.push(`$${queryParams.length}`);
      }
    }
    queryString += `
      (${keys}) = (${values})
      WHERE id = $1
      RETURNING *
    `;
    const query = {
      text: queryString,
      values: queryParams
    };
    console.log("QUERY", query)

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //validates login credentials
  const checkUserLogin = (email, password) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => {
        if (result.rows[0].password === password) {
          return result.rows[0]
        } else {
          return false
        }
      })
      .catch((err) => err);
  };
  
  return {
    getUsers,
    getUser,
    getUserByEmail,
    addUser,
    updateUserDetails,
    checkUserLogin
  }
}