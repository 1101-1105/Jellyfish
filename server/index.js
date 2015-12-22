var express = require('express');
var multiparty = require('multiparty');
var fs = require('fs');
var timelineRouter = require('./modules/timeline/router');
var commentRouter = require('./modules/comment/router');
var contactsRouter = require('./modules/contacts/router');
var answersRouter = require('./modules/answers/router');
var messageRouter = require('./modules/message/router');
var app = express();

// This allows cross origin XMLHttpRequest
app.use(function(req, res, next) {
    console.log(req.originalUrl);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});

app.use('/timeline', timelineRouter);
app.use('/comments', commentRouter);
app.use('/contacts', contactsRouter);
app.use('/answers', answersRouter);
app.use('/message', messageRouter);
app.use('/upload', express.static('upload'));

app.post('/upload', function(req, res, next) {
    var form = new multiparty.Form();
    form.on('error', function(err) {
        console.log(err);
        console.log(err.stack);
    });
    form.on('file', function(name,file){
        var fileName = file.path.substring(file.path.lastIndexOf('/') + 1);
        var tmp_path = file.path;
        var target_path = './upload/' + fileName;

        var status = 200;
        var response = {
            'err_code': 0,
            'err_msg': '',
            'data': ''
        };
        fs.renameSync(tmp_path, target_path, function(err) {
            console.log('callback');
            if(err) {
                console.log(err.stack);
                status = 500;
                response.err_code = 1;
                response.err_msg = err;
            } else {
                console.log('file uploaded to '+target_path);
            }
        });
        response.data = '/upload' + fileName;
        console.log(response);
        res.status(status).json(response);
    });
    form.parse(req);
});

var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Jellyfish server listening at http://%s:%s', host, port);
});
