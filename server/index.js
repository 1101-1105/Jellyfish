var express = require('express');
var timelineRouter = require('./modules/timeline/router');
var app = express();

// This allows cross origin XMLHttpRequest
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});

app.use('/timeline', timelineRouter);

var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
