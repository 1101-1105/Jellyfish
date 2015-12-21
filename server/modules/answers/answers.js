var jsonfile = require('jsonfile');
var path = require('path');
var file = path.join(__dirname, '../../data/answers.json');

var answers = {
    get: function(options) {
        var data = jsonfile.readFileSync(file);
        return data;
    },
    add: function(answer) {

    }
};

module.exports = answers;
