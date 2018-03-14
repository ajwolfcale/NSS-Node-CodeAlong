
const { readFile } = require('fs');
const { createServer }  = require('http');

const server  = createServer();

server.on('request',(req, res) => {
    console.log('request method', req.method, 'request URL', req.url, 'request headers', req.headers, 'request query strings', req.query);
    // res.writeHead(200, {"useless-message": "Howdy, cohort 23"})
    // res.write("<h1>Hello, world!<h1>");
    // res.end();
    // readFile('./index.html', (err, file) => {
    //     if(err) { res.statusCode = 404; res.end() }
    //     res.end(file);
    // });

    let url = req.url;
    let resource = url.slice(-1) === '/' ? url.slice(1).concat('index.html') : `${url.slice(1)}.html`
    readFile(resource, (err, file) => {
        if(err){
            res.statusCode = 404;
            return res.end('<h1>Not found, doood!<h1>');
        }
        res.end(file);
    });
});


server.listen(8080, () => {
    console.log('listening on port 8080');
});


