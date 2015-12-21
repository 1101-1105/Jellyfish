var express = require('express');
var contacts = require('./contacts');
var router = express.Router();

router.get('/', function(req, res, next) {
    var status = 200,
        response = {
            'err_code': 0,
            'err_msg': '',
            'data': null
        },
        options = {};

    if (response.err_code === 0) {
        response.data = contacts.get(options);
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
        var contact = {
            "nickname":"Blackend",
            "location":"Shanghai",
            "avatar":"15196757",
            "header":"B"
        };
        contacts.add(contact);
    }
    res.status(status)
        .json(response);
    return next();
});

module.exports = router;
