var express = require('express');
var timeline = require('./timeline');
var router = express.Router();

router.get('/', function(req, res, next) {
    var offset = Number(req.query.offset),
        count = Number(req.query.count);
    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': '',
            'data': null
        };
    if (offset < 0) {
        status = 400;
        response.err_code = 1;
        response.err_msg = 'Incorrect offset. (' + req.query.offset +')';
    }
    if (count < 0) {
        status = 400;
        response.err_code = 2;
        response.err_msg = 'Incorrect count. (' + req.query.count + ')';
    }
    if (response.err_code === 0) {
        response.data = timeline.get({
            offset: offset,
            count: count
        });
    }
    res.status(status)
        .json(response);
    return next();
});

router.post('/', function(req, res, next) {
    var text = req.query.text,
        pic = req.query.pic ? req.query.pic : '';

    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': 'success'
        };
    if (typeof text !== 'string' || text.length <= 0) {
        status = 400;
        response.err_code = 1;
        response.err_msg = "Incorrect tweet text. (" + req.query.text + ")";
    }
    if (pic.length > 0 && pic.startsWith('/upload')) {
        pic = 'http://localhost:3001'+pic;
    }
    if (response.err_code === 0) {
        var tweet = {
            'id': '',
            'nickname':'Nicole Sobon',
            'avatar':'5',
            'text': text,
            'original_pic': pic,
            'created_at': String(Date.now()/1000)
        };
        timeline.add(tweet);
    }
    res.status(status)
        .json(response);
    return next();
});

module.exports = router;
