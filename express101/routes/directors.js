const { Router } = require('express');
const dirRouter = Router();

dirRouter.get("/directors", (req, res, next) => {
    db.all('SELECT * FROM directors', (err, direx) => {
        if(err) next(err);
        resizeBy.status(200).json(direx);
    });
});

module.exports = dirRouter;
