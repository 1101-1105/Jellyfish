var express = require('express');
var message = require('./message');
var router = express.Router();

router.get('/', function(req, res, next) {
    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': '',
            'data': null
        };

    if (response.err_code === 0) {
        response.data = message.get({
            
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
        var message = {
            'date': '',
            'text': '',
            'from': 'sent|received'
        };
        commnet.add(comment);
    }
    res.status(status)
        .json(response);
    return next();
});

module.exports = router;
