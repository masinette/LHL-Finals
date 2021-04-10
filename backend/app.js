const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const dbMessageHelpers = require('./helpers/dbHelpers/messages')(db);
const dbCitiesHelpers = require('./helpers/dbHelpers/cities')(db);
const dbUsersHelpers = require('./helpers/dbHelpers/users')(db);
const dbRoomsHelpers = require('./helpers/dbHelpers/rooms')(db);
const dbInterestsHelpers = require('./helpers/dbHelpers/interests')(db);


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
const citiesRouter = require('./routes/cities');
const roomsRouter = require('./routes/rooms');
const interestsRouter = require('./routes/interests');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbUsersHelpers));
app.use('/api/rooms', roomsRouter(dbRoomsHelpers));
app.use('/api/messages', messagesRouter(dbMessageHelpers));
app.use('/api/cities', citiesRouter(dbCitiesHelpers));
app.use('/api/interests', interestsRouter(dbInterestsHelpers));

// app.use('/api/renters/listings', rentersRouter(dbMessageHelpers));
// app.use('/api/owners/listings', ownersRouter(dbMessageHelpers));




module.exports = app;
