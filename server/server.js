const express = require('express');
const app = express();
const engine = require('ejs-locals');

app.use('/html', express.static(process.cwd() + '/public/html'));
app.use('/js', express.static(process.cwd() + '/public/js'));
app.use('/css', express.static(process.cwd() + '/public/css'));
app.use('/img', express.static(process.cwd() + '/public/img'));

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
// set the view engine to ejs
app.set('view engine', 'ejs');

// set the port
app.set('port', (process.env.PORT || 8080));

// routes
const routes = require('./routes/routes.js');
routes(app);

// start the server
app.listen(app.get('port'), function() {
    console.log('Express server listening on port', app.get('port'));
});
