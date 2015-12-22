var express = require('express');
var comment = require('./comment');
var router = express.Router();

router.get('/', function(req, res, next) {
    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': '',
            'data': null
        };

    if (response.err_code === 0) {
        response.data = comment.get({
            id: req.query.id
        });
    }
    res.status(status)
        .json(response);
    return next();
});

router.post('/', function(req, res, next) {
    var tweetId = req.query.id,
        text = req.query.text;

    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': 'success'
        };
    
    if (typeof(text) !== 'string' || text.length <= 0) {
        status = 400;
        response.err_code = 1;
        response.err_msg = 'Incoreect text.(' + req.query.text + ')';
    }

    if (response.err_code === 0) {
        var newComment = {
            "tweet_id": tweetId,
            "avatar":"5567116",
            "name":"Xicky",
            "text": text,
            "time": String(Date.now()/1000)
        };
        comment.add(newComment);
    }
    res.status(status)
        .json(response);
    return next();
});

module.exports = router;
