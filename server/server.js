const express = require('express');
const app = express();

app.use('/html', express.static(process.cwd() + '/public/html'));
app.use('/js', express.static(process.cwd() + '/public/js'));
app.use('/css', express.static(process.cwd() + '/public/css'));
app.use('/img', express.static(process.cwd() + '/public/img'));

// set the port
app.set('port', (process.env.PORT || 8080));

// routes
const routes = require('./routes/routes.js');
routes(app);

// start the server
app.listen(app.get('port'), function() {
    console.log('Express server listening on port', app.get('port'));
});
