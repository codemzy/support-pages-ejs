'use strict';

const express = require('express');
const router = express.Router();

// ROUTES -----------------------------------------------------

// index page 
router.get('/', function(req, res) {
    res.render('pages/support');
});

// faq pages
router.get('/faqs', function(req, res) {
    res.render('pages/faqs');
});

module.exports = router;