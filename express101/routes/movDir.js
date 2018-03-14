const { Router } = require('express');
const movDirRouter = Router();
const { getSingles } = require('../controllers/movDirCtrl')

movDirRouter.get("/movdir", getSingles);

module.exports = movDirRouter;

