var express = require('express');
var answers = require('./answers');
var router = express.Router();

router.get('/', function(req, res, next) {
    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': '',
            'data': null
        };

    if (response.err_code === 0) {
        response.data = answers.get({
            
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
        var answer = 'Automated answer';
        answers.add(answer);
    }
    res.status(status)
        .json(response);
    return next();
});

module.exports = router;
