const { Router } = require('express');
const movDirRouter = Router();
const { getSingles, getMovieDirector } = require('../controllers/movDirCtrl')

movDirRouter.get("/movdir", getSingles);
movDirRouter.get('/movdir/:movieId', getMovieDirector);


module.exports = movDirRouter;
