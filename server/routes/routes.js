'use strict';

module.exports = function (app) {

    // ---------- VIEWS -------------
    
    // INDEX ROUTES
    app.get('/', function(req, res) {
        // res.sendFile(process.cwd() + '/public/html/index.html');
        res.json({ hello: "world" });
    });
    
    // ---------- TEMPLATES -------------
    
    // SUPPORT ROUTES
    const supportRoutes = require('./routes_support');
    app.use('/help', supportRoutes);
    
};