
const { Router } = require('express');
const router = Router();

router.use(require('./movies'));
router.use(require('./directors'));
router.use(require('./movdir'));


module.exports = router;