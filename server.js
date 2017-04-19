// if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require ('express');
const app = express();
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');
var config = require('./config');
var db = 'mongodb://user:password@ds163940.mlab.com:63940/bins';
var PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;
console.log('********************************');
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
console.log('********************************');


mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
  if (!err) {
    console.log(`connected to the Database: ${db}`);
  } else {
    console.log(`error connecting to the Database ${err}`);
  }
});

app.use(function (request, response, next) {
    console.log('Received request!');
    next();
});

app.use('/api', apiRouter);

app.use('/*', function (request, response) {
    response.status(404).send({reason: '404 -ROUTE NOT FOUND'});
});

app.listen(PORT, function (error) {
    if (error) {
        return console.log(error);
    }
    console.log(`listening on port ${PORT}`);
});