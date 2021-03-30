var express = require('express');
const { bulkSmsService } = require('../controllers/bulk_sms_service');
var router = express.Router();

/* GET data from bulk sms. */
router.get('/bulk_sms_service', bulkSmsService);

module.exports = router;
