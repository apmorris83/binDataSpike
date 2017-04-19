const express = require('express');
const router = express.Router();
const binModel = require('../models/bins');
// const mongoose = require('mongoose');

router.route('/').get(function (request, response) {
  response.status(200).send({ status: 'OK' });
});

router.route('/bins')
  .get(function (request, response) {
    binModel.find({}, function (error, bins) {
      if (error) {
        return response.status(500).send({ error: error });
      }
      console.log(typeof bins[0]._id);
      response.status(200).send({ bins: bins });
    });
  });

module.exports = router;