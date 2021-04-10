module.exports = (db) => {

  const getCities = () => {
    const query = {
      text: "SELECT * FROM cities",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getCities
  };
  

};
