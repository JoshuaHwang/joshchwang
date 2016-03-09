var express = require('express');
var app     = express();
var path    = require('path');

app.set('view engine', 'jade');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('../template/jade/index.jade');
});

var port = process.env.PORT || 1337;

app.listen(port);
console.log(port + ' is the magic port!');
