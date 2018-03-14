'use strict';
const { getAll } = require('../models/Director');
const { getOne } = require('../models/Director');


module.exports.getDirectors = (req, res, next) => {
    getAll()
    .then( (direx) => {
        res.status(200).json(direx);
    })
    .catch( (err) => next(err));
};

module.exports.getOneDirector = (req, res, next) => {
    let dirId= req.params.dirId;
    getOne(dirId)
    .then( (direx) => {
      res.status(200).json(direx);
    })
    .catch( (err) => {
      next(err);
    });
  };