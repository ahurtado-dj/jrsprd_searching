
var express = require('express');
var app = express();

// app.use('/jrsprd/search', express.static(__dirname + '/examples/reuters'));
app.use('/', express.static(__dirname ));

var server = app.listen(3002, function () {
  var host = server.address().address;
  var port = server.address().port;
  

  console.log('Example app listening at http://%s:%s', host, port);
});
