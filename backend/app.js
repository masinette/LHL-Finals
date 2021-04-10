const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const dbMessageHelpers = require('./helpers/dbHelpers/messages')(db);
const dbCitiesHelpers = require('./helpers/dbHelpers/cities')(db);


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
const citiesRouter = require('./routes/cities');
const roomsRouter = require('./routes/rooms');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/rooms', roomsRouter(dbHelpers));

app.use('/api/messages', messagesRouter(dbMessageHelpers));
app.use('/api/cities', citiesRouter(dbCitiesHelpers));
app.use('/api/rooms', usersRouter(dbHelpers));

// app.use('/api/renters/listings', rentersRouter(dbMessageHelpers));
// app.use('/api/owners/listings', ownersRouter(dbMessageHelpers));




module.exports = app;
