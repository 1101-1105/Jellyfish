var jsonfile = require('jsonfile');
var path = require('path');
var file = path.join(__dirname, '../../data/comment.json');

var comment = {
    get: function(options) {
        var data = jsonfile.readFileSync(file);
        return data;
    },
    add: function(comment) {

    }
};

module.exports = comment;
