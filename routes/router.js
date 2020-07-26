var router = require('express').Router();
const emailService = require('../utils/emailService');

// sendEmail
router.post('/', function(req, res, next) {
    emailService.sendEmail(req, res, next)
});

module.exports = router;