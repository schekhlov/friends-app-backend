const express =  require('express');
const friends =  require('./friends');
const router = express.Router();

router.use('/friends', friends);

module.exports = router;
