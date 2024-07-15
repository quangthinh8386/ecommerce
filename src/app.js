require('dotenv').config();
const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

console.log('Process:', process.env);
// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
require('./dbs/init.mongodb');
// const { checkOverLoad } = require('./helpers/check.connect');
// checkOverLoad();

// init routes
app.get('/', (req, res, next) => {
    // const strCompress = "Hello Thinh nha"
    return res.status(500).json({
        message: 'Hello World',
        // metadata: strCompress.repeat(1000000)
    });
});

// handling errors

module.exports = app;