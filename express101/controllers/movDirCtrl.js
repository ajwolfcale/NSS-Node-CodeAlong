const { getSingles } = require('../models/MovDir');
const { getPair } = require('../models/MovDir');

module.exports.getSingles = (req, res, next) => {
    getSingles()
    .then( (movies) => {
        res.status(200).json(movies);
    })
    .catch( (err) => next(err));
};

module.exports.getMovieDirector = (req, res, next) => {
    let pairId = req.params.movieId;
    getPair(pairId)
    .then( (movies) => {
      res.status(200).json(movies);
    })
    .catch( (err) => {
      next(err);
    });
  };