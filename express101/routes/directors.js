const { Router } = require('express');
const dirRouter = Router();
const { getDirectors, getOneDirector } = require('../controllers/directorCtrl')

dirRouter.get("/directors", getDirectors);
dirRouter.get('/directors/:dirId', getOneDirector);


module.exports = dirRouter;