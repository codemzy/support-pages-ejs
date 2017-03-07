'use strict';

const express = require('express');
const router = express.Router();

// ROUTES -----------------------------------------------------

// index page 
router.get('/', function(req, res) {
    res.render('pages/support/index');
});

// about page 
router.get('/about', function(req, res) {
    res.render('pages/about');
});

module.exports = router;