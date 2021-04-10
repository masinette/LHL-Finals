
module.exports = (db) => {
  const getInterests = () => {
    const query = {
      text: `SELECT * FROM interests;`
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  // const getInterests = () => {
  //   const query = {
  //     text: "SELECT * FROM interests;"
  //   };
  //   return db
  //     .query(query)
  //     .then(result => result.row)
  //     .catch(err => err);
  // };
  return {
    getInterests
  }
}