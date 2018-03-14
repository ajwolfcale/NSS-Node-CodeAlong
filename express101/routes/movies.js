const { Router } = require('express');
const movieRouter = Router();
const { getAllMovies, getOneMovie } = require('../controllers/movieCtrl');


movieRouter.get("/movies", getAllMovies);
movieRouter.get('/movies/:movieId', getOneMovie);

module.exports = movieRouter;




