const express = require( 'express' );
const {sendEvent} = require('../controllers/eventController')

const router1 = express.Router();

router1.post('/', sendEvent);

module.exports = router1
