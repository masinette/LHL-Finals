const express = require('express');
const router = express.Router();

module.exports = ({
    getUsers,
    getUser,
    getUserByEmail,
    checkUserLogin,
    addUser,
    updateUserDetails
}) => {
    /* GET users listing with query params http://localhost:3001/api/users?city=Montreal&level=2 */
    router.get('/', (req, res) => {
        getUsers(req.query)
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });


    //creates user if email does not already exists
    router.post('/', (req, res) => {

       getUserByEmail(req.body.email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(req.body)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    //checks if email and password exists in the DB to validate login
    router.post('/login', (req, res) => {
        const {
            email,
            password
        } = req.body;
        checkUserLogin(email, password)
            .then(user => {
                if (user) {
                    res.json(user);
                } else {
                    res.json({
                        msg: 'Sorry, wrong password'
                    });
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));
    })

    //get the card for one user
    router.get('/:userid', (req, res) => {
        getUser(req.params.userid)
            .then((user) => res.json(user))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    //edit user
    router.post('/:userid', (req, res) => {
        const { params } = req.body;
        updateUserDetails(req.params.userid, req.body)
            .then(user => {
                console.log("INSIDE login",user)
                if (user) {
                    res.json(user);
                } else {
                    res.json({
                        msg: 'Sorry, something wrong'
                    });
                }

            })
            .catch(err => res.json({
                error: err.message
            }));
    })

    return router;
};