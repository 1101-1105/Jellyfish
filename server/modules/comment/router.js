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
            
        });
    }
    res.status(status)
        .json(response);
    return next();
});

router.post('/', function(req, res, next) {

    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': 'success'
        };

    if (response.err_code === 0) {
        var comment = {
            'id': '',
            'nickname':'Nicole Sobon',
            'avatar':'5',
            'text': text,
            'original_pic': pic,
            'created_at': String(Date.now()/1000)
        };
        commnet.add(comment);
    }
    res.status(status)
        .json(response);
    return next();
});

module.exports = router;
