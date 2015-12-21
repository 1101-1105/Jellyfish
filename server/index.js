var express = require('express');
var timelineRouter = require('./modules/timeline/router');
var commentRouter = require('./modules/comment/router');
var contactsRouter = require('./modules/contacts/router');
var answersRouter = require('./modules/answers/router');
var messageRouter = require('./modules/message/router');
var app = express();

// This allows cross origin XMLHttpRequest
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});

app.use('/timeline', timelineRouter);
app.use('/comments', commentRouter);
app.use('/contacts', contactsRouter);
app.use('/answers', answersRouter);
app.use('/message', messageRouter);

var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Jellyfish server listening at http://%s:%s', host, port);
});
