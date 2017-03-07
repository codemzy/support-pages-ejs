'use strict';

const express = require('express');
const router = express.Router();

// set the view engine to ejs
router.set('view engine', 'ejs');

// ROUTES -----------------------------------------------------

// index page 
router.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
router.get('/about', function(req, res) {
    res.render('pages/about');
});

module.exports = router;