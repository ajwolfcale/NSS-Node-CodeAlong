const { getAll } = require('../models/Movie');
const { getOne } = require('../models/Movie');

module.exports.getAllMovies = (req, res, next) => {
  getAll()
  .then( (movies) => {
    res.status(200).json(movies);
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getOneMovie = (req, res, next) => {
  let movieId= req.params.movieId;
  getOne(movieId)
  .then( (movies) => {
    res.status(200).json(movies);
  })
  .catch( (err) => {
    next(err);
  });
};

