'use strict';

module.exports = function (app) {

    // ---------- VIEWS -------------
    
    // INDEX ROUTES
    app.get('/', function(req, res) {
        res.sendFile(process.cwd() + '/public/html/index.html');
    });
    
    // ---------- TEMPLATES -------------
    
    // SUPPORT ROUTES
    const supportRoutes = require('./support_routes');
    app.use('/app', supportRoutes);
    
};