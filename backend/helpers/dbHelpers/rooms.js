// const { use } = require("../../routes");

module.exports = (db) => {
  // Get all rooms
  const getRooms = () => {
    const query = {
      text: `SELECT * FROM rooms;`
    }
    return db
      .query(query)
      .then((result) => result.rows)
      .catch(err => console.error("error: ", err));
  }

  // Get specific room /api/rooms/:id
  const getRoom = (id) => {
    const query = {
      text: `SELECT * FROM rooms WHERE id = $1;`,
      values: [id]
    }
    return db
      .query(query)
      .then((result) => result.rows)
      .catch(err => console.error("error: ", err));
  }

  // Add new room
  const addRoom = (body) => {
    console.log(body)
    let queryString = `INSERT INTO rooms `;
    const queryParams = [];
    const keys =[];
    const values = [];

    for (let key of Object.keys(body)) {
      keys.push(key);
      queryParams.push(body[key])
      values.push(`$${queryParams.length}`)
    }

    console.log("keys: ", keys)
    console.log("values: ", values)
    console.log("queryParams: ", queryParams)

    queryString += `(${keys}) VALUES (${values}) RETURNING *;`

    console.log("query:", queryString)

    const query = {
      text: queryString,
      values: queryParams
    }

    return db
      .query(query)
      .then(result => {
        console.log(result)
        console.log(result.rows)
        return result.rows
      })
      .catch(err => console.error("error: ", err));
  }


  // update existing room
  const updateRoom = (body, room_id) => {
    console.log(body)
    
    const queryParams = [room_id];
    const keys = [];
    const values = [];
    let queryString = `UPDATE rooms SET `;

    for (let key of Object.keys(body)) {
      keys.push(key);
      queryParams.push(body[key])
      values.push(`$${queryParams.length}`)
    }

    queryString += `
    (${keys}) = (${values})
    WHERE id = $1 
    RETURNING *;`;

    // const { user_id, title, description, latitude, longitude, roomSize, startDate, endDate, price, petFriendly, active, address } = body;
    const query = {
      text: queryString,
      values: queryParams
    }

    return db
      .query(query)
      .then(result => {
        console.log(result)
        console.log(result.rows)  
        return result.rows
      })
      .catch(err => console.error("error: ", err));
  }

  // *TODO* - Get all rooms available for city. no city field in rooms table, should we link to cities table?
  const getRoomsAvailableInCity = (city) => {
    const query = {
      text: `SELECT * FROM rooms WHERE active=true AND city = $1;`
    }
    return db
      .query(query)
      .then((result) => result.rows)
      .catch(err => err);
  }

  // rooms by level & city_id

  return {
    getRooms,
    getRoom,
    addRoom,
    updateRoom
  }
}