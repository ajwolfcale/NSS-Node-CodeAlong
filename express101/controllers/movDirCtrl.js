const { getSingles } = require('../models/MovDir');

module.exports.getSingles = (req, res, next) => {
    getSingles()
    .then( (movies) => {
        res.status(200).json(movies);
    })
    .catch( (err) => next(err));
};