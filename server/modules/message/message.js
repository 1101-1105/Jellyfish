var jsonfile = require('jsonfile');
var path = require('path');
var file = path.join(__dirname, '../../data/message.json');

var message = {
    get: function(options) {
        var data = jsonfile.readFileSync(file);
        return data;
    },
    add: function(message) {

    }
};

module.exports = message;
