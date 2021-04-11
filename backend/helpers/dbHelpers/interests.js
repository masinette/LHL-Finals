
module.exports = (db) => {
  // Get full list of interests
  const getInterests = () => {
    const query = {
      text: `SELECT * FROM interests;`
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  return {
    getInterests
  }
}