'use strict'

const express = require('express');
const characterController = require('../controllers/characterController');
const router = express.Router();


router.get('/test', characterController.test);

module.exports = router;
