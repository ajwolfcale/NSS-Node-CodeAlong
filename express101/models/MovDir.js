
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports.getSingles = () => {
    return new Promise( (resolve, reject) => {
        db.all('SELECT movies.name, directors.name AS director FROM movies JOIN directors ON director_id = directors.dir_id', (err, movies) => {
            if(err) return reject(err);
            resolve(movies);
        });
    });
};

module.exports.getPair = (movie_id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT movies.name, directors.name AS director FROM movies JOIN directors ON director_id = directors.dir_id WHERE movie_id = ${movie_id}`,
            (err, movies) => {
                if (err) return reject(err);
                resolve(movies);
            });
    });
};

