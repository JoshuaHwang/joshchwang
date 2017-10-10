var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('../template/jade/index.jade');
});

app.get('/about', function(req, res) {
  res.render('../template/jade/about.jade');
});

app.get('/photography-no-feels-009', function(req, res) {
  res.render('../template/jade/photography.jade');
});

app.get('/photography-nohran-the-yost', function(req, res) {
  res.render('../template/jade/photography2.jade');
})

var port = process.env.PORT || 1337;

app.listen(port);
console.log(port + ' is the magic port!');
