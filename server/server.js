const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// logging middle ware
app.use(morgan('dev'));

//to serve static file
app.use(express.static(path.join(__dirname, '..', '/public')));

app.use('/api', require('./routes/router'));

//will send those files to any route that lands on our page;
app.get('*', function (req, res, next) {
	res.sendFile(path.join(__dirname, '..', '/public'));
});

//redirect if route does not exist
app.use(function (req, res, next) {
	res.redirect('/');
});

app.listen(1338);
