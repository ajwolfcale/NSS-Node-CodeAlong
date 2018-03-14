
const express= require('express');
const app = express();

console.log("Hello from Express");


app.listen(8080, () => {
    console.log('listening on port 8080');
});
