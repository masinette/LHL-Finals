module.exports = (db) => {
  const getUserInterests = (user_id) => {
    const queryString = `SELECT users_interests.*, interests.name 
      FROM users_interests 
      JOIN interests ON interests.id = interest_id
      WHERE user_id = $1;`;
    
    const query = {
      text: queryString,
      values: [user_id]
    }

    return db
      .query(query)
      .then(results => results.rows)
      .catch(err => err)
  }

  // Create the interests linked to user
  const addUserInterests = (user_id, interests) => {
    const queryString = `INSERT INTO users_interests (user_id, interest_id) VALUES ($1, $2);`;

    // Retrieve interest_id from interests table based on name? 
    // function test
    interest_id = getInterestId("knitting"); 
    console.log("interest ID:", interest_id);

    // change interest name to the interest_id
    interests.map(interest => {
      return getInterestId(interest);
    });
    console.log("interests after map:", interests);
    console.log("userID:", user_id)
    console.log("interest name:", interests)

    // create promises array of all insert query commands
    const promises = []

    interests.forEach(interest_id => {
      const queryParams = [user_id];
      queryParams.push(interest_id);
      promises.push(db.query(queryString, queryParams));
    });

    // run all inserts and return results
    return Promise.all(promises)
      .then(results => results.rows)
      .catch(err => console.error("query error: ", err))

  };

  // update user interests when user modifies profile
  const updateUserInterests = (user_id, interests) => {
    const queryString = `UPDATE users_interests
      SET interest_id = $1
      WHERE user_id = $2 RETURNING *;`;

    // Retrieve interest_id from interests table based on name? 
    // function test
    interest_id = getInterestId("knitting"); 
    console.log("interest ID:", interest_id);

    // change interest name to the interest_id
    interests.map(interest => {
      return getInterestId(interest);
    });
    console.log("interests after map:", interests);
      
    interests.forEach(interest_id => {
      const queryParams = [interest_id, user_id];
      db.query(queryString, queryParams)
    });
  }

  return {
    addUserInterests,
    getUserInterests
  }
}

const getInterestId = (name) => {
  const query = {
    text: `SELECT id FROM interests WHERE name = $1;`,
    values: [name]
  };
  return result = db.query(query)
    // .then(result => result.rows)
    // .catch(err => err);
};