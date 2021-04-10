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
      .catch(err => err);
  }

  // Get specific room /api/rooms/:id or /api/rooms?id=id
  const getRoom = (id) => {
    const query = {
      text: `SELECT * FROM rooms WHERE id=$1;`,
      values: [id]
    }
    return db
      .query(query)
      .then((result) => result.rows)
      .catch(err => err);
  }

  // Get all rooms available for city
  const getRoomsAvailableInCity = (city) => {
    const query = {
      text: `SELECT * FROM rooms WHERE active=true;`
    }
    return db
      .query(query)
      .then((result) => result.rows)
      .catch(err => err);
  }

  return {
    getRooms,
    getRoom
  }
}