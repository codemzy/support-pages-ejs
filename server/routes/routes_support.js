'use strict';

const express = require('express');
const router = express.Router();

// ROUTES -----------------------------------------------------

// index page 
router.get('/', function(req, res) {
    res.render('pages/support/index');
});

// faq pages
router.get('/*', function(req, res) {
    var faq = { title: "This is the title", content: "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else." };
    res.render('pages/support/faq', {
        content: faq
    });
});

module.exports = router;