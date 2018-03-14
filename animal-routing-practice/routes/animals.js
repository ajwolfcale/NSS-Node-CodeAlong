
const { Router } = require("express");
const  router = Router();
const path = require("path");

router.get('/monkey', (req, res) => {
    console.log("Fetchin some Monkeys");
    res.sendFile(path.join(__dirname, '../public', "monkey"))
});

module.exports = router;
