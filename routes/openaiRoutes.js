const express = require('express');
const router = express.Router();
const { generateResponse } = require('../controller/openaiController');

router.post('/generate-response', generateResponse);

module.exports = router;
