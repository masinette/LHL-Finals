// const { use } = require("../../routes");

module.exports = (db) => {
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
    getRooms
  }
}