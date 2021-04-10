const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const dbMessageHelpers = require('./helpers/dbMessageHelpers')(db);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
const citiesRouter = require('./routes/cities');
const rentersRouter = require('./routes/renters');
const ownersRouter = require('./routes/owners');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));

app.use('/api/', messagesRouter(dbMessageHelpers));
app.use('/api/', citiesRouter(dbMessageHelpers));
app.use('/api/', rentersRouter(dbMessageHelpers));
app.use('/api/', ownersRouter(dbMessageHelpers));




module.exports = app;
