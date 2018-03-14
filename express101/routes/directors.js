const { Router } = require('express');
const dirRouter = Router();

const sqlite3 = require("sqlite3").verbose;
const db = new sqlite3.Database("./db/mediaStore.sqlite");

dirRouter.get("/directors", (req, res, next) => {
    db.all('SELECT * FROM directors', (err, direx) => {
        if(err) next(err);
        resizeBy.status(200).json(direx);
    });
});

module.exports = dirRouter;

