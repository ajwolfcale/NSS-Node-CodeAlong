
const express= require('express');
const app = express();

console.log("Hello from Express");


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
