var jsonfile = require('jsonfile');
var path = require('path');
var file = path.join(__dirname, '../../data/comment.json');

var comment = {
    get: function(options) {
        var data = jsonfile.readFileSync(file);
        data = data.filter(function(d) {
            return Number(d.tweet_id) === Number(options.id);
        });
        return data;
    },
    add: function(comment) {
        jsonfile.readFile(file, function(err, data) {
            if (err) {
                console.log(err);
                return;
            }
            data = [comment].concat(data);
            jsonfile.writeFile(file, data, function(err) {
                if (err) console.log(err);
            });
        });
    }
};

module.exports = comment;
