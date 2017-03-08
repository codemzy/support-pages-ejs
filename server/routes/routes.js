'use strict';

module.exports = function (app) {

    // ---------- VIEWS -------------
    
    // INDEX ROUTES
    app.get('/', function(req, res) {
        // res.sendFile(process.cwd() + '/public/html/index.html');
        res.render('pages/index');
    });
    
    // ---------- TEMPLATES -------------
    
    // SUPPORT ROUTES
    const supportRoutes = require('./routes_support');
    app.use('/help', supportRoutes);
    
};